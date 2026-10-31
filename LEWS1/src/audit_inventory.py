"""
audit_inventory.py — Real Landslide Inventory & DEM Extent Auditor
===================================================================
Rigorous geospatial audit of the NASA Global Landslide Catalog:
  1. Counts real historical landslides within the study extent (27-28°N, 88-89°E).
  2. Analyzes location accuracy (filtering out 25km, 50km, 100km, unknown).
  3. Extracts genuine DEM features (elevation, slope, aspect, curvature) from N27E088.hgt.
  4. Does NOT fake any missing meteorology columns (leaves them out or NaN).
  5. Never mixes real catalog rows with synthetic samples.
  6. Leaves raw/ directory untouched.
"""

from __future__ import annotations

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
from src.config import DATA_DIR, PROCESSED_DIR, RAW_DATA_DIR


def audit_catalog(
    catalog_path: Path,
    dem_path: Path,
    output_dir: Path = PROCESSED_DIR,
) -> dict:
    if not catalog_path.exists():
        raise FileNotFoundError(f"Catalog not found at {catalog_path}")
    if not dem_path.exists():
        raise FileNotFoundError(f"DEM raster not found at {dem_path}")

    print("\n" + "=" * 70)
    print("  NASA GLOBAL LANDSLIDE CATALOG (GLC) & SRTM DEM AUDIT")
    print("=" * 70)

    df = pd.read_csv(catalog_path)
    total_global = len(df)
    india_count = int((df["country_name"] == "India").sum())

    # Study extent of N27E088 tile
    lat_min, lat_max = 27.0, 28.0
    lon_min, lon_max = 88.0, 89.0

    in_box = df[
        (df["latitude"] >= lat_min) & (df["latitude"] <= lat_max) &
        (df["longitude"] >= lon_min) & (df["longitude"] <= lon_max)
    ].copy()
    box_count = len(in_box)

    print(f"Total global catalog records  : {total_global:,}")
    print(f"Total records in India        : {india_count:,}")
    print(f"Records in DEM Tile [27-28°N, 88-89°E] : {box_count}")

    # Accuracy breakdown
    acc_breakdown = in_box["location_accuracy"].value_counts(dropna=False).to_dict()
    print("\n--- Location Accuracy Breakdown in DEM Tile ---")
    for acc, count in acc_breakdown.items():
        print(f"  Accuracy '{acc}': {count} events")

    # Flag / filter high uncertainty records
    imprecise_tags = {"25km", "50km", "100km", "unknown"}
    precise_mask = ~in_box["location_accuracy"].isin(imprecise_tags) & in_box["location_accuracy"].notna()
    precise_events = in_box[precise_mask].copy()

    strict_1km_mask = in_box["location_accuracy"].isin(["exact", "1km"])
    strict_5km_mask = in_box["location_accuracy"].isin(["exact", "1km", "5km"])

    print(f"\nFiltered subsets by spatial precision:")
    print(f"  • Imprecise (>10 km or unknown, FLAGGED/EXCLUDED) : {box_count - len(precise_events)} events")
    print(f"  • Moderately precise (<= 10 km)                   : {len(precise_events)} events")
    print(f"  • Good precision (<= 5 km)                        : {strict_5km_mask.sum()} events")
    print(f"  • High precision (<= 1 km or exact)               : {strict_1km_mask.sum()} events")

    print("\n" + "-" * 70)
    print("HONEST SCIENTIFIC ASSESSMENT:")
    print(f"The ground-truth catalog contains only {len(precise_events)} verified events (<=10km accuracy)")
    print(f"within this 100x100 km mountain tile ({strict_5km_mask.sum()} events <=5km).")
    print("This sample size is too sparse for deep learning or uncalibrated multi-parameter fitting.")
    print("A real-world model trained purely on these few points would have high variance.")
    print("-" * 70)

    # Extract DEM attributes for real events
    print(f"\nExtracting genuine terrain features from DEM ({dem_path.name}) ...")
    with rasterio.open(dem_path) as src:
        transform, width, height = calculate_default_transform(
            src.crs, "EPSG:32645", src.width, src.height, *src.bounds, resolution=30.0
        )
        elev = np.full((height, width), np.nan, dtype=np.float32)
        reproject(
            source=rasterio.band(src, 1),
            destination=elev,
            src_transform=src.transform,
            src_crs=src.crs,
            src_nodata=src.nodata,
            dst_transform=transform,
            dst_crs="EPSG:32645",
            dst_nodata=np.nan,
            resampling=Resampling.bilinear,
        )

    valid = np.isfinite(elev)
    valid_rows, valid_cols = np.where(valid)
    nodata_rows, nodata_cols = np.where(~valid)
    if len(nodata_rows):
        nearest = cKDTree(np.column_stack((valid_rows, valid_cols))).query(
            np.column_stack((nodata_rows, nodata_cols)), k=1
        )[1]
        elev[nodata_rows, nodata_cols] = elev[valid_rows[nearest], valid_cols[nearest]]

    pixel_x = float(transform.a)
    pixel_y = abs(float(transform.e))
    dz_dy, dz_dx = np.gradient(elev.astype(np.float64), pixel_y, pixel_x)
    slope = np.degrees(np.arctan(np.hypot(dz_dx, dz_dy))).astype(np.float32)
    aspect = (np.degrees(np.arctan2(-dz_dx, dz_dy)) + 360.0) % 360.0
    aspect[np.hypot(dz_dx, dz_dy) < 1e-8] = 0.0

    d2z_dy2 = np.gradient(dz_dy, pixel_y, axis=0)
    d2z_dx2 = np.gradient(dz_dx, pixel_x, axis=1)
    curvature = (-(d2z_dx2 + d2z_dy2) * 100.0).astype(np.float32)

    transformer = Transformer.from_crs("EPSG:4326", "EPSG:32645", always_xy=True)
    ev_x, ev_y = transformer.transform(precise_events["longitude"].to_numpy(), precise_events["latitude"].to_numpy())
    rows, cols = rasterio.transform.rowcol(transform, ev_x, ev_y)
    rows = np.asarray(rows)
    cols = np.asarray(cols)

    precise_events["dem_elevation_m"] = elev[rows, cols]
    precise_events["dem_slope_deg"] = slope[rows, cols]
    precise_events["dem_aspect_deg"] = aspect[rows, cols]
    precise_events["dem_curvature"] = curvature[rows, cols]

    # Save audited real inventory table cleanly without faking rainfall
    output_dir.mkdir(parents=True, exist_ok=True)
    out_table = output_dir / "real_inventory_events_audited.csv"
    save_cols = [
        "event_id", "event_date", "latitude", "longitude",
        "location_accuracy", "location_description", "landslide_category", "landslide_trigger",
        "dem_elevation_m", "dem_slope_deg", "dem_aspect_deg", "dem_curvature",
    ]
    precise_events[save_cols].to_csv(out_table, index=False)
    print(f"Saved verified real event catalog -> {out_table}")

    summary = {
        "total_global_records": total_global,
        "india_records": india_count,
        "records_in_dem_tile": box_count,
        "location_accuracy_breakdown": acc_breakdown,
        "precise_events_le_10km": int(len(precise_events)),
        "precise_events_le_5km": int(strict_5km_mask.sum()),
        "precise_events_le_1km": int(strict_1km_mask.sum()),
        "output_table": str(out_table),
        "note": "Dynamic rainfall/soil moisture columns are NOT faked for historical catalog events.",
    }
    out_json = output_dir / "inventory_audit_summary.json"
    out_json.write_text(json.dumps(summary, indent=2), encoding="utf-8")
    print(f"Saved audit summary metadata -> {out_json}")
    return summary


if __name__ == "__main__":
    cat_file = RAW_DATA_DIR / "landslide_inventory" / "Global_Landslide_Catalog_Export_rows.csv"
    dem_file = RAW_DATA_DIR / "dem" / "N27E088.hgt"
    audit_catalog(cat_file, dem_file)
