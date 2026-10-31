"""Prepare DEM-backed event and background features for LEWS training.

The event catalog must already contain temporally aligned non-DEM predictors:
distance to road/river, rainfall totals, and soil moisture. Background samples
are candidate non-event locations, not confirmed landslide-free observations.
"""

from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

import numpy as np
import pandas as pd
import rasterio
from pyproj import Transformer
from rasterio.enums import Resampling
from rasterio.warp import calculate_default_transform, reproject
from scipy.spatial import cKDTree

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
from src.config import FEATURE_COLUMNS, TARGET_COLUMN

TERRAIN_FEATURES = ("elevation_m", "slope_deg", "aspect_deg", "curvature")
AUXILIARY_FEATURES = tuple(name for name in FEATURE_COLUMNS if name not in TERRAIN_FEATURES)


def _terrain_grid(dem_path: Path, resolution_m: float = 30.0) -> tuple[np.ndarray, np.ndarray, np.ndarray, np.ndarray, rasterio.Affine, str]:
    """Warp an input DEM to UTM 45N and derive metric slope, aspect, and curvature grids."""
    with rasterio.open(dem_path) as source:
        if source.crs is None:
            raise ValueError("DEM must declare a CRS before terrain derivation")
        transform, width, height = calculate_default_transform(
            source.crs,
            "EPSG:32645",
            source.width,
            source.height,
            *source.bounds,
            resolution=resolution_m,
        )
        elevation = np.full((height, width), np.nan, dtype=np.float32)
        reproject(
            source=rasterio.band(source, 1),
            destination=elevation,
            src_transform=source.transform,
            src_crs=source.crs,
            src_nodata=source.nodata,
            dst_transform=transform,
            dst_crs="EPSG:32645",
            dst_nodata=np.nan,
            resampling=Resampling.bilinear,
        )

    valid = np.isfinite(elevation)
    if not valid.any():
        raise ValueError("DEM contains no valid elevation cells in the projected output")
    # Fill nodata only for gradient calculation, then restore nodata in products.
    valid_rows, valid_cols = np.where(valid)
    nodata_rows, nodata_cols = np.where(~valid)
    if len(nodata_rows):
        nearest = cKDTree(np.column_stack((valid_rows, valid_cols))).query(
            np.column_stack((nodata_rows, nodata_cols)), k=1
        )[1]
        elevation[nodata_rows, nodata_cols] = elevation[valid_rows[nearest], valid_cols[nearest]]
    filled = elevation
    if not np.isfinite(filled).all():
        raise ValueError("Unable to interpolate DEM nodata gaps for slope derivation")
    pixel_x = float(transform.a)
    pixel_y = abs(float(transform.e))
    dz_dy, dz_dx = np.gradient(filled.astype(np.float64), pixel_y, pixel_x)
    slope = np.degrees(np.arctan(np.hypot(dz_dx, dz_dy))).astype(np.float32)
    # Aspect is clockwise from north; flat cells are set to 0 degrees.
    aspect = (np.degrees(np.arctan2(-dz_dx, dz_dy)) + 360.0) % 360.0
    aspect[np.hypot(dz_dx, dz_dy) < 1e-8] = 0.0

    # Second spatial derivatives for profile/total curvature
    d2z_dy2 = np.gradient(dz_dy, pixel_y, axis=0)
    d2z_dx2 = np.gradient(dz_dx, pixel_x, axis=1)
    curvature = (-(d2z_dx2 + d2z_dy2) * 100.0).astype(np.float32)

    slope[~valid] = np.nan
    aspect = aspect.astype(np.float32)
    aspect[~valid] = np.nan
    curvature[~valid] = np.nan
    return elevation, slope, aspect, curvature, transform, "EPSG:32645"


def _sample_grid(values: np.ndarray, transform: rasterio.Affine, x: np.ndarray, y: np.ndarray) -> np.ndarray:
    rows, cols = rasterio.transform.rowcol(transform, x, y)
    rows = np.asarray(rows)
    cols = np.asarray(cols)
    inside = (rows >= 0) & (rows < values.shape[0]) & (cols >= 0) & (cols < values.shape[1])
    output = np.full(len(rows), np.nan, dtype=float)
    output[inside] = values[rows[inside], cols[inside]]
    return output


def extract_terrain(dem_path: Path, points: pd.DataFrame, resolution_m: float = 30.0) -> pd.DataFrame:
    """Sample DEM elevation, slope, aspect, and curvature at latitude/longitude points."""
    required = {"latitude", "longitude"}
    missing = required - set(points.columns)
    if missing:
        raise ValueError(f"Point table is missing coordinate columns: {sorted(missing)}")
    elevation, slope, aspect, curvature, transform, crs = _terrain_grid(dem_path, resolution_m)
    transformer = Transformer.from_crs("EPSG:4326", crs, always_xy=True)
    x, y = transformer.transform(points["longitude"].to_numpy(), points["latitude"].to_numpy())
    result = points.copy()
    for name, grid in (("elevation_m", elevation), ("slope_deg", slope), ("aspect_deg", aspect), ("curvature", curvature)):
        result[name] = _sample_grid(grid, transform, np.asarray(x), np.asarray(y))
    invalid = result[list(TERRAIN_FEATURES)].isna().any(axis=1)
    if invalid.any():
        bad = result.loc[invalid].index.tolist()[:10]
        raise ValueError(f"DEM coverage/nodata missing at {int(invalid.sum())} point(s); sample row indexes: {bad}")
    if not result["slope_deg"].between(0, 90).all() or not result["aspect_deg"].between(0, 360).all():
        raise ValueError("Derived terrain values fall outside valid slope/aspect ranges")
    return result


def _project_points(points: pd.DataFrame) -> np.ndarray:
    transformer = Transformer.from_crs("EPSG:4326", "EPSG:32645", always_xy=True)
    x, y = transformer.transform(points["longitude"].to_numpy(), points["latitude"].to_numpy())
    return np.column_stack((x, y))


def prepare_training_table(
    dem_path: Path,
    events_path: Path,
    candidates_path: Path,
    output_path: Path,
    negative_buffer_m: float = 500.0,
    seed: int = 42,
    negative_ratio: float = 1.0,
    resolution_m: float = 30.0,
) -> pd.DataFrame:
    """Extract positive and buffered-background features and write a CSV.

    Both input tables must supply coordinates and every non-DEM feature. Event
    rows must include event_id; background rows are candidates and receive
    label 0 only after the requested spatial exclusion is applied.
    """
    if negative_buffer_m < 0 or negative_ratio <= 0:
        raise ValueError("negative_buffer_m must be non-negative and negative_ratio must be positive")
    events = pd.read_csv(events_path)
    candidates = pd.read_csv(candidates_path)
    if "event_id" not in events:
        raise ValueError("Event catalog must include event_id for provenance")
    for label, frame in (("events", events), ("background candidates", candidates)):
        required = {"latitude", "longitude", *AUXILIARY_FEATURES}
        missing = required - set(frame.columns)
        if missing:
            raise ValueError(f"{label} missing required columns: {sorted(missing)}")
        if frame[list(AUXILIARY_FEATURES)].isna().any().any():
            raise ValueError(f"{label} contains missing auxiliary features; temporal/source gaps must be resolved first")

    events = extract_terrain(dem_path, events, resolution_m)
    candidates = extract_terrain(dem_path, candidates, resolution_m)
    positive_xy = _project_points(events)
    candidate_xy = _project_points(candidates)
    # A 2 km UTM grid group enables spatially separated holdout evaluation.
    events["spatial_group"] = [f"{int(x // 2000)}_{int(y // 2000)}" for x, y in positive_xy]
    candidates["spatial_group"] = [f"{int(x // 2000)}_{int(y // 2000)}" for x, y in candidate_xy]
    nearest_event_distance, _ = cKDTree(positive_xy).query(candidate_xy, k=1)
    candidates = candidates.loc[nearest_event_distance >= negative_buffer_m].copy()
    requested_negatives = max(1, int(np.ceil(len(events) * negative_ratio)))
    if len(candidates) < requested_negatives:
        raise ValueError(
            f"Only {len(candidates)} background candidates remain outside the {negative_buffer_m:g} m event buffer; "
            f"need {requested_negatives}. Provide more candidates or review the sampling design."
        )
    negatives = candidates.sample(n=requested_negatives, random_state=seed).copy()
    events[TARGET_COLUMN] = 1
    events["sample_type"] = "historical_event"
    negatives[TARGET_COLUMN] = 0
    negatives["sample_type"] = "background_candidate_not_confirmed_stable"
    negatives["event_id"] = ""
    result = pd.concat([events, negatives], ignore_index=True)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    result.to_csv(output_path, index=False)
    metadata = {
        "dem_path": str(dem_path),
        "events_path": str(events_path),
        "background_candidates_path": str(candidates_path),
        "output_path": str(output_path),
        "terrain_crs": "EPSG:32645",
        "terrain_resolution_m": resolution_m,
        "negative_buffer_m": negative_buffer_m,
        "seed": seed,
        "positive_count": int(len(events)),
        "sampled_background_count": int(len(negatives)),
        "background_label_caveat": "Candidate non-event samples; not confirmed landslide-free observations.",
        "feature_columns": list(FEATURE_COLUMNS),
    }
    output_path.with_suffix(".metadata.json").write_text(json.dumps(metadata, indent=2), encoding="utf-8")
    return result


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--dem", type=Path, required=True)
    parser.add_argument("--events", type=Path, required=True, help="CSV with event_id, coordinates and time-aligned non-DEM features")
    parser.add_argument("--candidates", type=Path, required=True, help="Candidate background CSV with coordinates and all non-DEM features")
    parser.add_argument("--output", type=Path, required=True)
    parser.add_argument("--negative-buffer-m", type=float, default=500.0)
    parser.add_argument("--negative-ratio", type=float, default=1.0)
    parser.add_argument("--seed", type=int, default=42)
    parser.add_argument("--resolution-m", type=float, default=30.0)
    args = parser.parse_args()
    prepared = prepare_training_table(
        args.dem, args.events, args.candidates, args.output,
        args.negative_buffer_m, args.seed, args.negative_ratio, args.resolution_m,
    )
    print(f"Prepared {len(prepared)} rows at {args.output}; inspect metadata and labels before training.")


if __name__ == "__main__":
    main()
