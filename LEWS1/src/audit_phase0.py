"""
audit_phase0.py - Phase 0 Comprehensive Geotechnical & Storm Audit Script
========================================================================
Generates reproducible audit artifacts under data/processed/audit/:
1. station_terrain_before_after.csv (15 stations terrain changes)
2. martam_likhipir_mining_3x3.txt (detailed 3x3 DEM grids)
3. storm_after_scores.csv (live backend predictions across +0, +50, +100, +200, +300 mm)
"""

import csv
import json
import re
import subprocess
import sys
from pathlib import Path

import numpy as np
import rasterio
from pyproj import Transformer

# Paths
ROOT_DIR = Path(__file__).resolve().parent.parent
DEM_PATH = ROOT_DIR / "data" / "raw" / "dem" / "N27E088.hgt"
OUTPUT_DIR = ROOT_DIR / "data" / "processed" / "audit"
CORRIDOR_TS_PATH = ROOT_DIR.parent / "frontend" / "src" / "data" / "corridorData.ts"

OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

# Add ROOT_DIR to path for geospatial_pipeline and app
sys.path.insert(0, str(ROOT_DIR))
from src.geospatial_pipeline import _terrain_grid
from app.main import app
from fastapi.testclient import TestClient

client = TestClient(app)

def parse_stations_from_ts(content: str):
    pattern = re.compile(
        r'id:\s*["\']([^"\']+)["\'],\s*'
        r'name:\s*["\']([^"\']+)["\'].*?'
        r'latitude:\s*([-\d\.]+).*?'
        r'longitude:\s*([-\d\.]+).*?'
        r'elevation_m:\s*([-\d\.]+).*?'
        r'slope_deg:\s*([-\d\.]+).*?'
        r'aspect_deg:\s*([-\d\.]+).*?'
        r'curvature:\s*([-\d\.]+).*?'
        r'dist_to_road_m:\s*([-\d\.]+).*?'
        r'dist_to_river_m:\s*([-\d\.]+).*?'
        r'rain_24h_mm:\s*([-\d\.]+).*?'
        r'rain_3d_mm:\s*([-\d\.]+).*?'
        r'rain_7d_mm:\s*([-\d\.]+).*?'
        r'soil_moisture_pct:\s*([-\d\.]+).*?'
        r'ndvi:\s*([-\d\.]+)',
        re.DOTALL
    )
    matches = pattern.findall(content)
    stations = []
    for m in matches:
        stations.append({
            "point_id": m[0],
            "name": m[1],
            "latitude": float(m[2]),
            "longitude": float(m[3]),
            "elevation_m": float(m[4]),
            "slope_deg": float(m[5]),
            "aspect_deg": float(m[6]),
            "curvature": float(m[7]),
            "dist_to_road_m": float(m[8]),
            "dist_to_river_m": float(m[9]),
            "rain_24h_mm": float(m[10]),
            "rain_3d_mm": float(m[11]),
            "rain_7d_mm": float(m[12]),
            "soil_moisture_pct": float(m[13]),
            "ndvi": float(m[14]),
        })
    return stations

def generate_terrain_comparison_csv(stations_before, stations_after, out_path: Path):
    fieldnames = [
        "station_id", "station_name", "latitude", "longitude",
        "elevation_before_m", "elevation_after_m",
        "slope_before_deg", "slope_after_deg",
        "aspect_before_deg", "aspect_after_deg",
        "curvature_before", "curvature_after"
    ]
    with open(out_path, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        for b, a in zip(stations_before, stations_after):
            writer.writerow({
                "station_id": a["point_id"],
                "station_name": a["name"],
                "latitude": a["latitude"],
                "longitude": a["longitude"],
                "elevation_before_m": b["elevation_m"],
                "elevation_after_m": a["elevation_m"],
                "slope_before_deg": b["slope_deg"],
                "slope_after_deg": a["slope_deg"],
                "aspect_before_deg": b["aspect_deg"],
                "aspect_after_deg": a["aspect_deg"],
                "curvature_before": b["curvature"],
                "curvature_after": a["curvature"],
            })

def generate_3x3_grids_txt(out_path: Path):
    elevation, slope, aspect, curvature, transform, crs = _terrain_grid(DEM_PATH, resolution_m=30.0)
    transformer = Transformer.from_crs("EPSG:4326", crs, always_xy=True)

    targets = [
        ("pt-9", "Martam Ridge Cutting", 27.2685, 88.5412),
        ("pt-3", "Likhipir Hairpin Bend", 27.0894, 88.4528),
        ("pt-7", "Mining Ground Slip Sector", 27.2052, 88.5089),
    ]

    lines = []
    lines.append("=" * 80)
    lines.append("3x3 DEM NEIGHBORHOOD AUDIT (Martam Ridge, Likhipir, Mining Ground)")
    lines.append("Extracted using src.geospatial_pipeline._terrain_grid from N27E088.hgt")
    lines.append("=" * 80)
    lines.append("")

    for sid, name, lat, lon in targets:
        x, y = transformer.transform(lon, lat)
        row, col = rasterio.transform.rowcol(transform, x, y)
        
        elev_cell = float(elevation[row, col])
        slope_cell = float(slope[row, col])
        aspect_cell = float(aspect[row, col])
        curv_cell = float(curvature[row, col])

        elev_grid = np.round(elevation[row-1:row+2, col-1:col+2], 1)
        slope_grid = np.round(slope[row-1:row+2, col-1:col+2], 1)
        aspect_grid = np.round(aspect[row-1:row+2, col-1:col+2], 1)
        curv_grid = np.round(curvature[row-1:row+2, col-1:col+2], 4)

        lines.append(f"Station: {name} ({sid})")
        lines.append(f"GPS Coordinates: Latitude = {lat:.4f}°N, Longitude = {lon:.4f}°E")
        lines.append(f"Projected Coordinates (UTM 45N): X = {x:.2f} m, Y = {y:.2f} m")
        lines.append(f"DEM Grid Cell Index: row = {row}, col = {col}")
        lines.append(f"Center Cell Values: Elevation = {elev_cell:.1f} m, Slope = {slope_cell:.1f}°, Aspect = {aspect_cell:.1f}°, Curvature = {curv_cell:.4f} 100/m")
        lines.append("")
        lines.append("3x3 Elevation Grid (m):")
        lines.append(str(elev_grid))
        lines.append("")
        lines.append("3x3 Slope Grid (degrees):")
        lines.append(str(slope_grid))
        lines.append(f"3x3 Slope Summary: Min = {np.min(slope_grid):.1f}°, Max = {np.max(slope_grid):.1f}°, Mean = {np.mean(slope_grid):.1f}°")
        lines.append("")
        lines.append("3x3 Aspect Grid (degrees):")
        lines.append(str(aspect_grid))
        lines.append("")
        lines.append("3x3 Curvature Grid (100/m):")
        lines.append(str(curv_grid))
        lines.append(f"3x3 Curvature Summary: Min = {np.min(curv_grid):.4f}, Max = {np.max(curv_grid):.4f}, Mean = {np.mean(curv_grid):.4f}")
        lines.append("-" * 80)
        lines.append("")

    with open(out_path, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))

def generate_storm_scores_csv(stations_after, out_path: Path):
    deltas = [0, 50, 100, 200, 300]
    points_payload = [{k: v for k, v in s.items() if k not in ("name",)} for s in stations_after]
    
    rows = []
    for d in deltas:
        payload = {
            "simulated_rainfall_increment_mm": float(d),
            "points": points_payload
        }
        resp = client.post("/api/v1/simulate/storm", json=payload)
        assert resp.status_code == 200, resp.text
        data = resp.json()
        for feat in data["features"]:
            props = feat["properties"]
            pid = props["point_id"]
            name = next(s["name"] for s in stations_after if s["point_id"] == pid)
            rows.append({
                "station_id": pid,
                "station_name": name,
                "rain_delta_mm": d,
                "failure_probability": props["failure_probability"],
                "risk_tier": props["risk_tier"],
                "rain_24h_adjusted_mm": props.get("rain_24h_mm_adjusted"),
                "rain_3d_adjusted_mm": props.get("rain_3d_mm_adjusted"),
                "rain_7d_adjusted_mm": props.get("rain_7d_mm_adjusted"),
                "soil_moisture_adjusted_pct": props.get("soil_moisture_pct_adjusted")
            })

    fieldnames = [
        "station_id", "station_name", "rain_delta_mm",
        "failure_probability", "risk_tier",
        "rain_24h_adjusted_mm", "rain_3d_adjusted_mm", "rain_7d_adjusted_mm", "soil_moisture_adjusted_pct"
    ]
    with open(out_path, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)

def main():
    print("Running audit_phase0.py...")
    # 1. Parse current (AFTER) stations
    current_ts = CORRIDOR_TS_PATH.read_text(encoding="utf-8")
    stations_after = parse_stations_from_ts(current_ts)
    assert len(stations_after) == 15, f"Expected 15 stations, got {len(stations_after)}"

    # 2. Parse BEFORE stations from git HEAD
    git_cmd = ["git", "show", "HEAD:frontend/src/data/corridorData.ts"]
    before_ts = subprocess.check_output(git_cmd, text=True, cwd=str(ROOT_DIR.parent))
    stations_before = parse_stations_from_ts(before_ts)
    assert len(stations_before) == 15, f"Expected 15 stations from git, got {len(stations_before)}"

    # 3. Generate station_terrain_before_after.csv
    terrain_csv_path = OUTPUT_DIR / "station_terrain_before_after.csv"
    generate_terrain_comparison_csv(stations_before, stations_after, terrain_csv_path)
    print(f"Generated: {terrain_csv_path}")

    # 4. Generate martam_likhipir_mining_3x3.txt
    grids_txt_path = OUTPUT_DIR / "martam_likhipir_mining_3x3.txt"
    generate_3x3_grids_txt(grids_txt_path)
    print(f"Generated: {grids_txt_path}")

    # 5. Generate storm_after_scores.csv from live backend
    storm_csv_path = OUTPUT_DIR / "storm_after_scores.csv"
    generate_storm_scores_csv(stations_after, storm_csv_path)
    print(f"Generated: {storm_csv_path}")

    print("\nAll 3 audit files generated successfully.")

if __name__ == "__main__":
    main()

