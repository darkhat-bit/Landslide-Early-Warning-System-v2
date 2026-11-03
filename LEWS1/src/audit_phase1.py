"""
audit_phase1.py — Phase 1 Read-Only Audit and Range Check Script
================================================================
Reads:
  - frontend/src/data/corridorData.ts
  - data/dataset.csv
  - Live backend at http://127.0.0.1:8000/api/v1/simulate/storm

Writes:
  - data/processed/audit/range_check.csv
  - data/processed/audit/borderline_stations.csv
"""

import os
import sys
import json
import subprocess
import urllib.request
import pandas as pd
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent
CORRIDOR_DATA_PATH = BASE_DIR.parent / "frontend" / "src" / "data" / "corridorData.ts"
DATASET_PATH = BASE_DIR / "data" / "dataset.csv"
AUDIT_DIR = BASE_DIR / "data" / "processed" / "audit"
RANGE_CHECK_CSV = AUDIT_DIR / "range_check.csv"
BORDERLINE_CSV = AUDIT_DIR / "borderline_stations.csv"

AUDIT_DIR.mkdir(parents=True, exist_ok=True)

FEATURE_COLS = [
    "elevation_m",
    "slope_deg",
    "aspect_deg",
    "curvature",
    "dist_to_road_m",
    "dist_to_river_m",
    "rain_24h_mm",
    "rain_3d_mm",
    "rain_7d_mm",
    "soil_moisture_pct",
    "ndvi",
]

def load_corridor_stations():
    """Extract station objects from corridorData.ts using Node.js for exact TypeScript parsing."""
    js_code = f"""
    const fs = require('fs');
    const content = fs.readFileSync({json.dumps(str(CORRIDOR_DATA_PATH))}, 'utf-8');
    const match = content.match(/export const CORRIDOR_POINTS: CorridorPointData\\[\\] = (\\[[\\s\\S]*?\\]);/);
    if (!match) process.exit(1);
    const points = new Function('return ' + match[1])();
    process.stdout.write(JSON.stringify(points));
    """
    res = subprocess.run(["node", "-e", js_code], capture_output=True, text=True, check=True)
    return json.loads(res.stdout)

def get_training_ranges():
    """Extract exact min and max from dataset.csv for all 11 features."""
    df = pd.read_csv(DATASET_PATH)
    ranges = {}
    for feat in FEATURE_COLS:
        ranges[feat] = {
            "min": float(df[feat].min()),
            "max": float(df[feat].max()),
        }
    return ranges

def query_live_storm(points, delta_mm):
    """Call live backend /api/v1/simulate/storm for a rainfall delta."""
    payload = {
        "simulated_rainfall_increment_mm": delta_mm,
        "points": [
            {
                "point_id": p["id"],
                "latitude": p["latitude"],
                "longitude": p["longitude"],
                "elevation_m": p["elevation_m"],
                "slope_deg": p["slope_deg"],
                "aspect_deg": p["aspect_deg"],
                "curvature": p["curvature"],
                "dist_to_road_m": p["dist_to_road_m"],
                "dist_to_river_m": p["dist_to_river_m"],
                "rain_24h_mm": p["rain_24h_mm"],
                "rain_3d_mm": p["rain_3d_mm"],
                "rain_7d_mm": p["rain_7d_mm"],
                "soil_moisture_pct": p["soil_moisture_pct"],
                "ndvi": p["ndvi"],
            }
            for p in points
        ],
    }
    req = urllib.request.Request(
        "http://127.0.0.1:8000/api/v1/simulate/storm",
        data=json.dumps(payload).encode("utf-8"),
        headers={"Content-Type": "application/json"},
    )
    with urllib.request.urlopen(req) as resp:
        return json.loads(resp.read().decode("utf-8"))

def run_audit():
    stations = load_corridor_stations()
    station_names = {s["id"]: s["name"] for s in stations}
    training_ranges = get_training_ranges()

    deltas = [0, 50, 100, 200, 300]
    live_sim_results = {}
    for d in deltas:
        live_sim_results[d] = query_live_storm(stations, d)

    # 1. Build range_check records
    records = []
    for feat in FEATURE_COLS:
        t_min = training_ranges[feat]["min"]
        t_max = training_ranges[feat]["max"]

        row = {
            "feature": feat,
            "training_min": round(t_min, 4),
            "training_max": round(t_max, 4),
        }

        for d in deltas:
            features_data = live_sim_results[d]["features"]
            # Map feature name to adjusted property in response or original station prop
            vals = []
            outside_st = []

            for f in features_data:
                props = f["properties"]
                pid = props["point_id"]
                s_name = station_names[pid]

                if feat == "rain_24h_mm":
                    val = props["rain_24h_mm_adjusted"]
                elif feat == "rain_3d_mm":
                    val = props["rain_3d_mm_adjusted"]
                elif feat == "rain_7d_mm":
                    val = props["rain_7d_mm_adjusted"]
                elif feat == "soil_moisture_pct":
                    val = props["soil_moisture_pct_adjusted"]
                elif feat in props:
                    val = props[feat]
                else:
                    # Constant station feature
                    st_match = next(s for s in stations if s["id"] == pid)
                    val = st_match[feat]

                vals.append(val)
                if val < t_min or val > t_max:
                    outside_st.append(s_name)

            s_min = min(vals)
            s_max = max(vals)
            row[f"station_min_{d}mm"] = round(s_min, 4)
            row[f"station_max_{d}mm"] = round(s_max, 4)
            row[f"outside_{d}mm_count"] = len(outside_st)
            row[f"outside_{d}mm_stations"] = "; ".join(outside_st) if outside_st else "None"

        records.append(row)

    df_out = pd.DataFrame(records)
    df_out.to_csv(RANGE_CHECK_CSV, index=False)
    print(f"Written: {RANGE_CHECK_CSV}")

    # 2. Borderline stations from live backend
    borderline_rows = []
    print("\n================ LIVE BORDERLINE STATIONS AUDIT ================")
    for d in deltas:
        features_data = live_sim_results[d]["features"]
        b_count = 0
        print(f"\n--- Storm Increment +{d} mm ---")
        for f in features_data:
            props = f["properties"]
            pid = props["point_id"]
            name = station_names[pid]
            score = props["failure_probability"]
            tier = props["risk_tier"]
            is_b = props.get("is_borderline", False)
            
            # Distance to nearest tier threshold
            d_yellow = abs(score - 0.25)
            d_red = abs(score - 0.70)
            min_dist = min(d_yellow, d_red)

            if is_b or min_dist <= 0.03 + 1e-6:
                b_count += 1
                near_thresh = "0.25 (Yellow)" if d_yellow <= d_red else "0.70 (Red)"
                print(f"  * {name:30s} | Score: {score:.4f} | Tier: {tier:6s} | Near: {near_thresh} (diff {min_dist:+.4f}) | is_borderline: {is_b}")
                borderline_rows.append({
                    "increment_mm": d,
                    "station_id": pid,
                    "station_name": name,
                    "failure_probability": round(score, 4),
                    "risk_tier": tier,
                    "nearest_threshold": near_thresh,
                    "threshold_diff": round(min_dist, 4),
                    "is_borderline": is_b,
                })
        if b_count == 0:
            print("  (No stations within ±0.03 of tier boundaries)")

    df_b = pd.DataFrame(borderline_rows)
    df_b.to_csv(BORDERLINE_CSV, index=False)
    print(f"\nWritten: {BORDERLINE_CSV}")

    return df_out, df_b

if __name__ == "__main__":
    df_ranges, df_borderline = run_audit()

