"""
dataset_generator.py — Synthetic Dataset Synthesizer for LEWS
=============================================================
Generates a physically-realistic CSV dataset (1 500 samples) for the
East Sikkim NH-10 corridor when real satellite/raster data is unavailable.

Physical correlations enforced:
  • High slope (>28°) + heavy rain (24h>70 mm, 3d>120 mm) + close to road
    -> landslide_occurred = 1  (positive label)
  • Gentle slope (<15°) on its own -> landslide_occurred = 0

Run:
    python -m src.dataset_generator
"""

from __future__ import annotations

import sys
import numpy as np
import pandas as pd
from pathlib import Path

# -- project imports ------------------------------------------------------
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
from src.config import (
    BBOX,
    DATASET_CSV,
    DATASET_NUM_SAMPLES,
    DATASET_POSITIVE_RATIO,
    DEM_PATH,
    FEATURE_COLUMNS,
    TARGET_COLUMN,
)
import warnings
from src.geospatial_pipeline import extract_terrain


def _generate_base_features(n: int, rng: np.random.Generator, dem_path: Path | None = None) -> pd.DataFrame:
    """Sample coordinates, extract genuine DEM terrain at coordinates, and sample auxiliary features."""
    lat_min, lat_max = BBOX["lat"]
    lon_min, lon_max = BBOX["lon"]

    if dem_path is None:
        dem_path = DEM_PATH

    coords_df = pd.DataFrame(
        {
            "latitude":  rng.uniform(lat_min, lat_max, n),
            "longitude": rng.uniform(lon_min, lon_max, n),
        }
    )

    if dem_path.exists():
        print(f"[dataset_generator] Extracting genuine terrain features from DEM ({dem_path.name}) ...")
        data = extract_terrain(dem_path, coords_df)
    else:
        warnings.warn(f"DEM raster not found at {dem_path}. Falling back to synthetic terrain.", UserWarning)
        data = coords_df.copy()
        data["elevation_m"] = rng.uniform(300, 3600, n)
        data["slope_deg"]   = np.clip(rng.gamma(4.0, 5.0, n), 0, 70)
        data["aspect_deg"]  = rng.uniform(0, 360, n)
        data["curvature"]   = np.clip(rng.normal(-0.05, 0.85, n), -3.5, 3.5)

    rain_24 = np.clip(rng.gamma(2.0, 20.0, n), 0, 350)
    rain_3d = np.maximum(np.clip(rng.gamma(3.0, 25.0, n), 0, 600), rain_24 * 1.15)
    rain_7d = np.maximum(np.clip(rng.gamma(4.0, 30.0, n), 0, 850), rain_3d * 1.22)
    ndvi = np.clip(rng.beta(4.0, 3.0, n) * 0.9, 0.05, 0.88)

    data["dist_to_road_m"]    = rng.exponential(500, n)
    data["dist_to_river_m"]   = rng.exponential(800, n)
    data["rain_24h_mm"]       = rain_24
    data["rain_3d_mm"]        = rain_3d
    data["rain_7d_mm"]        = rain_7d
    data["soil_moisture_pct"] = np.clip(rng.normal(45, 15, n), 5, 98)
    data["ndvi"]              = ndvi

    return data



def _assign_labels(
    df: pd.DataFrame,
    positive_ratio: float,
    rng: np.random.Generator,
) -> pd.DataFrame:
    """
    Deterministic-first labelling based on geophysical heuristics including
    curvature (concave water-gathering zones), NDVI (sparse vegetation / root loss),
    and 7-day cumulative saturation (r7), then stochastic adjustment to reach the desired positive ratio.
    """
    n = len(df)
    labels = np.zeros(n, dtype=int)

    # -- Rule 1: high-risk geotechnical combination -> label 1 ------------------------
    # Steep slope + heavy precipitation (24h/3d/7d) + close to road cutting or concave hollow
    high_risk_mask = (
        (df["slope_deg"] > 27)
        & (
            (df["rain_24h_mm"] > 65)
            | ((df["rain_3d_mm"] > 115) & (df["rain_7d_mm"] > 175))
        )
        & (
            (df["dist_to_road_m"] < 500)
            | (df["curvature"] < -0.3)  # convergent hollows gather water
            | (df["ndvi"] < 0.32)       # deforested or active slip face
        )
    )
    labels[high_risk_mask] = 1

    # -- Rule 2: moderate-risk zone (probabilistic) ----------------------
    moderate_mask = (
        (df["slope_deg"] > 22)
        & (df["rain_24h_mm"] > 45)
        & (df["rain_7d_mm"] > 120)
        & (df["soil_moisture_pct"] > 52)
        & (~high_risk_mask)
    )
    flip = rng.random(n) < 0.58
    labels[moderate_mask & flip] = 1

    # -- Rule 3: gentle slope or heavy lush vegetation on planar slope -> force 0 ---
    safe_mask = (df["slope_deg"] < 15) | ((df["slope_deg"] < 20) & (df["ndvi"] > 0.65) & (df["curvature"] >= 0))
    labels[safe_mask] = 0

    # -- Balance adjustment to match target positive ratio ---------------
    current_pos = labels.sum()
    target_pos = int(n * positive_ratio)

    if current_pos < target_pos:
        neg_idx = np.where((labels == 0) & ~safe_mask)[0]
        rng.shuffle(neg_idx)
        promote = min(target_pos - current_pos, len(neg_idx))
        labels[neg_idx[:promote]] = 1
    elif current_pos > target_pos:
        pos_idx = np.where((labels == 1) & ~high_risk_mask)[0]
        rng.shuffle(pos_idx)
        demote = min(current_pos - target_pos, len(pos_idx))
        labels[pos_idx[:demote]] = 0

    df[TARGET_COLUMN] = labels
    df["sample_type"] = "synthetic_simulation"
    # 5 km geographic grid block for spatial-holdout splitting
    df["spatial_group"] = [f"block_{int(lat * 20)}_{int(lon * 20)}" for lat, lon in zip(df["latitude"], df["longitude"])]
    return df


def generate_dataset(
    n_samples: int = DATASET_NUM_SAMPLES,
    positive_ratio: float = DATASET_POSITIVE_RATIO,
    seed: int = 42,
    output_path: Path = DATASET_CSV,
) -> pd.DataFrame:
    """
    End-to-end pipeline: generate features -> assign labels -> save CSV.

    Returns
    -------
    pd.DataFrame  with columns = [lat, lon, *FEATURE_COLUMNS, TARGET_COLUMN, spatial_group]
    """
    rng = np.random.default_rng(seed)

    print(f"[dataset_generator] Generating {n_samples} samples (seed={seed}) ...")
    df = _generate_base_features(n_samples, rng)
    df = _assign_labels(df, positive_ratio, rng)

    # Round for readability
    df = df.round(
        {
            "latitude": 6,
            "longitude": 6,
            "elevation_m": 1,
            "slope_deg": 2,
            "aspect_deg": 1,
            "curvature": 4,
            "dist_to_road_m": 1,
            "dist_to_river_m": 1,
            "rain_24h_mm": 1,
            "rain_3d_mm": 1,
            "rain_7d_mm": 1,
            "soil_moisture_pct": 1,
            "ndvi": 4,
        }
    )

    output_path.parent.mkdir(parents=True, exist_ok=True)
    df.to_csv(output_path, index=False)

    pos = df[TARGET_COLUMN].sum()
    neg = len(df) - pos
    print(f"[dataset_generator] Saved -> {output_path}")
    print(f"[dataset_generator] Positives: {pos}  |  Negatives: {neg}  |  Ratio: {pos/len(df):.2%}")
    print(f"[dataset_generator] Unique spatial groups: {df['spatial_group'].nunique()}")
    return df


# -- CLI entry point -----------------------------------------------------
if __name__ == "__main__":
    generate_dataset()


