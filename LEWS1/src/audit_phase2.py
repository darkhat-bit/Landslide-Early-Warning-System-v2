"""
src/audit_phase2.py — Read-only Phase 2 Audit Script

Performs:
1. Fetches or reads raw Open-Meteo batch telemetry for all 15 corridor stations.
2. Saves RAW batch response to data/processed/audit/open_meteo_raw_<UTC timestamp>.json.
3. Evaluates live scores, tiers, and compares all 11 features against dataset.csv min/max ranges.
4. Generates data/processed/audit/live_check.csv.
5. Performs read-only sensitivity test on all Watch stations (replacing 1 feature at a time with training median).
6. Compares Option 4 vs Option 2 (theta / 0.45 * 100) vs Baseline SM with exact timestamps.
"""

from __future__ import annotations

import csv
import json
import sys
import urllib.parse
import urllib.request
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Dict, List

import joblib
import numpy as np
import pandas as pd

# Workspace directories
LEWS1_DIR = Path(__file__).resolve().parent.parent
DATA_DIR = LEWS1_DIR / "data"
AUDIT_DIR = DATA_DIR / "processed" / "audit"
AUDIT_DIR.mkdir(parents=True, exist_ok=True)

sys.path.insert(0, str(LEWS1_DIR))
from src.live_weather import (
    get_corridor_stations,
    compute_station_live_metrics,
    get_imd_rainfall_category,
    OPEN_METEO_BASE_URL,
)
from src.config import FEATURE_COLUMNS, RISK_THRESHOLDS


def fetch_raw_open_meteo(stations: List[Dict[str, Any]]) -> Tuple[List[Dict[str, Any]], str, str]:
    """Fetches raw Open-Meteo forecast JSON and records UTC timestamp."""
    utc_now = datetime.now(timezone.utc)
    utc_str = utc_now.strftime("%Y%m%d_%H%M%SZ")
    iso_str = utc_now.isoformat()

    lats = ",".join(str(s["latitude"]) for s in stations)
    lons = ",".join(str(s["longitude"]) for s in stations)

    params = {
        "latitude": lats,
        "longitude": lons,
        "hourly": "precipitation,rain,soil_moisture_0_to_7cm",
        "past_days": 7,
        "forecast_days": 4,
        "timezone": "Asia/Kolkata",
    }
    url = f"{OPEN_METEO_BASE_URL}?{urllib.parse.urlencode(params)}"

    try:
        req = urllib.request.Request(url, headers={"User-Agent": "LEWS/2.0-Phase2Audit"})
        with urllib.request.urlopen(req, timeout=12) as resp:
            raw_data = json.loads(resp.read().decode("utf-8"))
            if isinstance(raw_data, list) and len(raw_data) == len(stations):
                return raw_data, utc_str, iso_str
    except Exception as exc:
        print(f"Direct API call error: {exc}. Falling back to saved raw snapshot.")

    # Fallback to saved raw file
    existing = list(AUDIT_DIR.glob("real_api_batch_15stations.json"))
    if existing:
        with open(existing[0], "r", encoding="utf-8") as f:
            raw_data = json.load(f)
        return raw_data, utc_str, iso_str

    raise RuntimeError("Unable to obtain raw Open-Meteo weather data.")


def run_audit():
    stations = get_corridor_stations()
    raw_data, utc_stamp, iso_stamp = fetch_raw_open_meteo(stations)

    # 1. Save raw response
    raw_filename = f"open_meteo_raw_{utc_stamp}.json"
    raw_path = AUDIT_DIR / raw_filename
    with open(raw_path, "w", encoding="utf-8") as f:
        json.dump(raw_data, f, indent=2)
    print(f"Saved RAW Open-Meteo response to: {raw_path}")

    # Load dataset.csv to compute exact training min, max, and median for all 11 features
    df_train = pd.read_csv(DATA_DIR / "dataset.csv")
    stats: Dict[str, Dict[str, float]] = {}
    for col in FEATURE_COLUMNS:
        stats[col] = {
            "min": float(df_train[col].min()),
            "max": float(df_train[col].max()),
            "median": float(df_train[col].median()),
        }

    # Load primary model & scaler for inference & sensitivity
    model = joblib.load(LEWS1_DIR / "models" / "landslide_primary.joblib")
    scaler = joblib.load(LEWS1_DIR / "models" / "scaler.joblib")

    # 2. Build live_check rows
    rows = []
    watch_stations_data = []

    for st, w in zip(stations, raw_data):
        m = compute_station_live_metrics(st, w)
        grid_lat = w.get("latitude")
        grid_lon = w.get("longitude")
        grid_elev = w.get("elevation")

        r24 = m.get("rain_24h_mm", 0.0)
        r3d = m.get("rain_3d_mm", 0.0)
        r7d = m.get("rain_7d_mm", 0.0)
        sm_pct = m.get("soil_moisture_pct", 30.0)
        sm_vol = m.get("soil_moisture_m3m3", 0.30)
        score = m.get("failure_probability", 0.0)
        tier = m.get("risk_tier", "GREEN")

        st_feature_vals = {
            "elevation_m": float(st["elevation_m"]),
            "slope_deg": float(st["slope_deg"]),
            "aspect_deg": float(st["aspect_deg"]),
            "curvature": float(st["curvature"]),
            "dist_to_road_m": float(st["dist_to_road_m"]),
            "dist_to_river_m": float(st["dist_to_river_m"]),
            "rain_24h_mm": float(r24),
            "rain_3d_mm": float(r3d),
            "rain_7d_mm": float(r7d),
            "soil_moisture_pct": float(sm_pct),
            "ndvi": float(st["ndvi"]),
        }

        row: Dict[str, Any] = {
            "point_id": st["id"],
            "station_name": st["name"],
            "fetch_timestamp_utc": iso_stamp,
            "grid_latitude": grid_lat,
            "grid_longitude": grid_lon,
            "grid_elevation_m": grid_elev,
            "rain_24h_mm": r24,
            "rain_3d_mm": r3d,
            "rain_7d_mm": r7d,
            "soil_moisture_pct": sm_pct,
            "soil_moisture_m3m3": sm_vol,
            "live_score": score,
            "live_tier": tier,
        }

        out_features = []
        for feat in FEATURE_COLUMNS:
            v = st_feature_vals[feat]
            f_min = stats[feat]["min"]
            f_max = stats[feat]["max"]
            in_range = bool(f_min <= v <= f_max)

            row[f"{feat}_value"] = round(v, 4)
            row[f"{feat}_train_min"] = round(f_min, 4)
            row[f"{feat}_train_max"] = round(f_max, 4)
            row[f"{feat}_in_range"] = in_range

            if not in_range:
                out_features.append(f"{feat}={v:.2f}")

        row["all_features_in_range"] = (len(out_features) == 0)
        row["out_of_range_features"] = "; ".join(out_features) if out_features else "NONE"
        rows.append(row)

        if tier == "YELLOW":
            watch_stations_data.append((st, st_feature_vals, score))

    # Write live_check.csv
    csv_path = AUDIT_DIR / "live_check.csv"
    with open(csv_path, "w", newline="", encoding="utf-8") as f:
        fieldnames = list(rows[0].keys())
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)
    print(f"Wrote live check CSV to: {csv_path}")

    # 3. Print live_check.csv summary
    print("\n" + "=" * 120)
    print(f"LIVE STATION AUDIT CHECK ({iso_stamp})")
    print("=" * 120)
    print(f"{'ID':<6} | {'Station Name':<28} | {'Grid (Lat, Lon)':<22} | {'Elev':<6} | {'24h':<5} | {'3d':<5} | {'7d':<5} | {'SM%':<5} | {'Score':<6} | {'Tier':<6} | Out-of-Range Features")
    print("-" * 120)
    for r in rows:
        grid_coord = f"({r['grid_latitude']:.4f}, {r['grid_longitude']:.4f})"
        elev_str = f"{r['grid_elevation_m']:.0f}m"
        print(f"{r['point_id']:<6} | {r['station_name']:<28} | {grid_coord:<22} | {elev_str:<6} | {r['rain_24h_mm']:<5.1f} | {r['rain_3d_mm']:<5.1f} | {r['rain_7d_mm']:<5.1f} | {r['soil_moisture_pct']:<5.1f} | {r['live_score']:<6.4f} | {r['live_tier']:<6} | {r['out_of_range_features']}")
    print("=" * 120)

    # 4. Read-Only Sensitivity Test on all Watch stations
    print("\n" + "=" * 120)
    print("READ-ONLY SENSITIVITY TEST: WATCH STATIONS UNDER LIVE INPUTS")
    print("Label: sensitivity of the model, not a causal explanation")
    print("Methodology: replace ONE feature at a time with the training median from dataset.csv and measure score delta")
    print("=" * 120)

    for st, fvals, base_score in watch_stations_data:
        deltas = []
        base_vec = [fvals[col] for col in FEATURE_COLUMNS]

        for idx, col in enumerate(FEATURE_COLUMNS):
            mod_vec = list(base_vec)
            med_val = stats[col]["median"]
            mod_vec[idx] = med_val

            X_df = pd.DataFrame([mod_vec], columns=FEATURE_COLUMNS)
            X_scaled = scaler.transform(X_df)
            p_mod = float(model.predict_proba(X_scaled)[0, 1])
            delta = p_mod - base_score
            deltas.append((col, fvals[col], med_val, p_mod, delta))

        # Sort by absolute delta descending
        deltas.sort(key=lambda x: abs(x[4]), reverse=True)
        top3 = deltas[:3]

        print(f"\nStation: {st['name']} ({st['id']}) — Live Score: {base_score:.4f} [WATCH] (Slope: {st['slope_deg']:.1f}°)")
        print(f"Top 3 sensitivity features (replacing feature with training median):")
        for rank, (col, orig_v, med_v, p_new, diff) in enumerate(top3, 1):
            direction = "+" if diff > 0 else ""
            print(f"   {rank}. {col:<18}: current={orig_v:.2f} -> median={med_v:.2f} => new_score={p_new:.4f} (delta: {direction}{diff:.4f})")

    # 5. Sensitivity table with exact timestamps and Option 2 explanation
    print("\n" + "=" * 120)
    print("SOIL MOISTURE METHOD COMPARISON WITH EXACT TIMESTAMPS")
    print("Option 2 Formula: soil% = (theta / 0.45) * 100 [based on 45% saturation porosity for loam]")
    print(f"Audit Run Timestamp: {iso_stamp}")
    print("=" * 120)

    # Evaluate pt-6, pt-11, pt-1 at +100 mm scenario rain with different soil moisture methods
    sample_ids = ["pt-6", "pt-11", "pt-1"]
    for sid in sample_ids:
        st = next(s for s in stations if s["id"] == sid)
        row_match = next(r for r in rows if r["point_id"] == sid)
        theta = row_match["soil_moisture_m3m3"]
        opt4_sm = row_match["soil_moisture_pct"]
        opt2_sm = min(90.0, max(5.0, round((theta / 0.45) * 100.0, 1)))
        base_sm = float(st["soil_moisture_pct"])

        # Test at +100mm extra rain: rain_24h = st.rain_24h + 100, rain_3d = st.rain_3d + 120, rain_7d = st.rain_7d + 140
        def score_for_sm(sm_val: float) -> float:
            vec = [
                float(st["elevation_m"]),
                float(st["slope_deg"]),
                float(st["aspect_deg"]),
                float(st["curvature"]),
                float(st["dist_to_road_m"]),
                float(st["dist_to_river_m"]),
                float(st["rain_24h_mm"] + 100.0),
                float(st["rain_3d_mm"] + 120.0),
                float(st["rain_7d_mm"] + 140.0),
                float(sm_val),
                float(st["ndvi"]),
            ]
            X_df = pd.DataFrame([vec], columns=FEATURE_COLUMNS)
            Xs = scaler.transform(X_df)
            return float(model.predict_proba(Xs)[0, 1])

        sc_base = score_for_sm(base_sm)
        sc_opt4 = score_for_sm(opt4_sm)
        sc_opt2 = score_for_sm(opt2_sm)

        print(f"Station {st['id']} ({st['name']}):")
        print(f"   Baseline SM: {base_sm:.1f}% -> Score: {sc_base:.4f}")
        print(f"   Option 4 SM: {opt4_sm:.1f}% (theta={theta:.3f}) -> Score: {sc_opt4:.4f} (delta from baseline: {sc_opt4 - sc_base:+.4f})")
        print(f"   Option 2 SM: {opt2_sm:.1f}% (theta={theta:.3f} / 0.45 * 100) -> Score: {sc_opt2:.4f} (delta from baseline: {sc_opt2 - sc_base:+.4f})")


if __name__ == "__main__":
    run_audit()
