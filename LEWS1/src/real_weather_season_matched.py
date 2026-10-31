"""
real_weather_season_matched.py — Season-Matched Real Weather + Terrain Susceptibility Benchmark
==============================================================================================
Scientific Sanity Check:
Pairs each of the 40 real events with a background point sampled from:
1. Elevation-matched terrain outside 1,000 m buffer of any catalog event.
2. Season-matched date: drawn within +/- 15 days of the SAME day-of-year but in a DIFFERENT year
   (2007-2017), ensuring no reported event occurred within 1,000 m and +/- 3 days.
3. Month histograms match between events and background.
4. Evaluates 5-fold spatial CV on 15 km blocks for Terrain-Only vs Terrain + Real Weather.
5. Reports honestly without manual alteration.
"""

from __future__ import annotations

import json
import time
import urllib.error
import urllib.parse
import urllib.request
from datetime import datetime, timedelta
from pathlib import Path

import numpy as np
import pandas as pd
from pyproj import Transformer
from scipy.spatial import cKDTree
from sklearn.ensemble import RandomForestClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import (
    accuracy_score,
    confusion_matrix,
    f1_score,
    precision_score,
    recall_score,
    roc_auc_score,
)
from sklearn.model_selection import GroupKFold
from sklearn.preprocessing import StandardScaler

import sys
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
from src.config import PROCESSED_DIR, RAW_DATA_DIR
from src.geospatial_pipeline import extract_terrain

OUTPUT_DIR = PROCESSED_DIR / "real_weather"
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

CSV_OUTPUT_PATH = OUTPUT_DIR / "season_matched_events_weather_dataset.csv"
JSON_OUTPUT_PATH = OUTPUT_DIR / "season_matched_benchmark_results.json"


def fetch_open_meteo_daily(
    lat: float,
    lon: float,
    target_date: str,
    max_retries: int = 3,
    delay_sec: float = 0.15,
) -> dict | None:
    dt = datetime.strptime(target_date, "%Y-%m-%d")
    dt_start = (dt - timedelta(days=7)).strftime("%Y-%m-%d")
    dt_end = dt.strftime("%Y-%m-%d")

    params = {
        "latitude": f"{lat:.4f}",
        "longitude": f"{lon:.4f}",
        "start_date": dt_start,
        "end_date": dt_end,
        "daily": "precipitation_sum,soil_moisture_0_to_7cm_mean",
        "timezone": "auto",
    }
    url = f"https://archive-api.open-meteo.com/v1/archive?{urllib.parse.urlencode(params)}"

    for attempt in range(max_retries):
        try:
            req = urllib.request.Request(
                url,
                headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) LEWS-Research/1.0"},
            )
            with urllib.request.urlopen(req, timeout=25) as response:
                payload = json.loads(response.read().decode("utf-8"))
                daily = payload.get("daily", {})
                time.sleep(delay_sec)
                return daily
        except Exception as exc:
            if attempt < max_retries - 1:
                time.sleep(1.0 + attempt * 1.5)
            else:
                print(f"[open-meteo error] Failed ({lat:.4f}, {lon:.4f}) on {target_date}: {exc}")
                return None
    return None


def _bootstrap_auc_ci(y_true: np.ndarray, y_prob: np.ndarray, n_bootstraps: int = 1000, seed: int = 42) -> tuple[float, float]:
    rng = np.random.default_rng(seed)
    boot_aucs = []
    n = len(y_true)
    for _ in range(n_bootstraps):
        idx = rng.integers(0, n, n)
        if len(np.unique(y_true[idx])) < 2:
            continue
        boot_aucs.append(roc_auc_score(y_true[idx], y_prob[idx]))
    if not boot_aucs:
        return (0.0, 0.0)
    low, high = np.percentile(boot_aucs, [2.5, 97.5])
    return float(low), float(high)


def build_season_matched_dataset(seed: int = 42) -> pd.DataFrame:
    dem_path = RAW_DATA_DIR / "dem" / "N27E088.hgt"
    catalog_path = RAW_DATA_DIR / "landslide_inventory" / "Global_Landslide_Catalog_Export_rows.csv"

    print("\n" + "=" * 75)
    print("  STEP 1: LOAD 40 VERIFIED NASA GLC EVENTS (Accuracy <= 5 km)")
    print("=" * 75)

    df_cat = pd.read_csv(catalog_path)
    in_tile = df_cat[
        (df_cat["latitude"] >= 27.0)
        & (df_cat["latitude"] <= 28.0)
        & (df_cat["longitude"] >= 88.0)
        & (df_cat["longitude"] <= 89.0)
    ].copy()

    acc_filter = in_tile["location_accuracy"].isin(["exact", "1km", "5km"])
    pos = in_tile[acc_filter].copy().reset_index(drop=True)
    pos["parsed_date"] = pd.to_datetime(pos["event_date"], errors="coerce")
    pos = pos[pos["parsed_date"].notna()].copy().reset_index(drop=True)
    pos["date_str"] = pos["parsed_date"].dt.strftime("%Y-%m-%d")
    pos["year"] = pos["parsed_date"].dt.year
    pos["day_of_year"] = pos["parsed_date"].dt.dayofyear
    pos["month"] = pos["parsed_date"].dt.month

    n_events = len(pos)
    print(f"[data] Found {n_events} valid real events.")

    # Terrain for events
    pos_terrain = extract_terrain(dem_path, pos[["latitude", "longitude"]].copy())
    for col in ["elevation_m", "slope_deg", "aspect_deg", "curvature"]:
        pos[col] = pos_terrain[col]

    pos["landslide"] = 1
    pos["sample_type"] = "nasa_glc_event_le_5km"
    pos["source"] = "NASA Global Landslide Catalog (GLC)"

    e_min_pos = float(pos["elevation_m"].min())
    e_max_pos = float(pos["elevation_m"].max())

    # STEP 2: BUILD CANDIDATE BACKGROUND POINTS
    print("\n" + "=" * 75)
    print("  STEP 2: SAMPLE ELEVATION-MATCHED CANDIDATE LOCATIONS (Buffer >= 1,000m)")
    print("=" * 75)

    rng = np.random.default_rng(seed)
    n_candidates = 4000
    bg_lat = rng.uniform(27.02, 27.98, n_candidates)
    bg_lon = rng.uniform(88.02, 88.98, n_candidates)
    bg_df = pd.DataFrame({"latitude": bg_lat, "longitude": bg_lon})

    trans = Transformer.from_crs("EPSG:4326", "EPSG:32645", always_xy=True)
    pos_x, pos_y = trans.transform(pos["longitude"].to_numpy(), pos["latitude"].to_numpy())
    bg_x, bg_y = trans.transform(bg_df["longitude"].to_numpy(), bg_df["latitude"].to_numpy())

    tree = cKDTree(np.column_stack((pos_x, pos_y)))
    dist_to_event, nearest_event_idx = tree.query(np.column_stack((bg_x, bg_y)), k=1)

    # Filter >= 1,000 m buffer
    buffer_m = 1000.0
    bg_outside = bg_df[dist_to_event >= buffer_m].copy().reset_index(drop=True)
    bg_dist_outside = dist_to_event[dist_to_event >= buffer_m]

    # Extract terrain
    bg_outside_terrain = extract_terrain(dem_path, bg_outside)
    for col in ["elevation_m", "slope_deg", "aspect_deg", "curvature"]:
        bg_outside[col] = bg_outside_terrain[col]

    # Elevation-matched filtering
    bg_elev_matched = bg_outside[
        (bg_outside["elevation_m"] >= e_min_pos) & (bg_outside["elevation_m"] <= e_max_pos)
    ].copy().reset_index(drop=True)

    print(f"[data] Pool of elevation-matched candidate locations: {len(bg_elev_matched)}")

    # STEP 3: PAIR EACH EVENT WITH A SEASON-MATCHED DATE & CANDIDATE LOCATION
    print("\n" + "=" * 75)
    print("  STEP 3: GENERATE SEASON-MATCHED DATES (+/- 15 days, different year)")
    print("=" * 75)

    # Catalog event coordinates and dates for spatio-temporal buffer check
    # Check: no reported event within 1,000 m buffer AND +/- 3 days
    event_records = []
    for idx, row in pos.iterrows():
        event_records.append({
            "x": pos_x[idx],
            "y": pos_y[idx],
            "dt": row["parsed_date"],
        })

    bg_rows = []
    available_years = list(range(2007, 2018))

    # Permute candidate locations
    cand_indices = rng.permutation(len(bg_elev_matched))
    cand_pointer = 0

    for i, ev_row in pos.iterrows():
        ev_dt = ev_row["parsed_date"]
        ev_year = ev_row["year"]
        ev_doy = ev_row["day_of_year"]

        other_years = [y for y in available_years if y != ev_year]

        # Find a valid candidate location and season-matched date
        matched = False
        attempts = 0
        while not matched and attempts < 200:
            attempts += 1
            cand_idx = cand_indices[cand_pointer % len(cand_indices)]
            cand_pointer += 1
            cand_loc = bg_elev_matched.iloc[cand_idx]

            # Pick a different year and offset in [-15, +15] days
            chosen_year = rng.choice(other_years)
            doy_offset = int(rng.integers(-15, 16))

            # Base date in chosen year
            try:
                base_dt = datetime(chosen_year, 1, 1) + timedelta(days=ev_doy - 1 + doy_offset)
            except Exception:
                continue

            if not (datetime(2007, 1, 1) <= base_dt <= datetime(2017, 12, 31)):
                continue

            # Spatio-temporal check: no event within 1,000m AND +/- 3 days
            c_x, c_y = trans.transform(cand_loc["longitude"], cand_loc["latitude"])
            dists, idxs = tree.query(np.array([[c_x, c_y]]), k=min(5, len(pos)))
            conflict = False
            for d, ev_i in zip(dists[0], idxs[0]):
                if d <= 1000.0:
                    ev_date_check = pos.iloc[ev_i]["parsed_date"]
                    if abs((base_dt - ev_date_check).days) <= 3:
                        conflict = True
                        break
            if conflict:
                continue

            matched = True
            bg_rows.append({
                "event_id": f"BG_SM_{i+1:03d}",
                "date_str": base_dt.strftime("%Y-%m-%d"),
                "parsed_date": base_dt,
                "month": base_dt.month,
                "source": "Season-Matched Elevation Background",
                "sample_type": "season_matched_background",
                "landslide": 0,
                "latitude": cand_loc["latitude"],
                "longitude": cand_loc["longitude"],
                "elevation_m": cand_loc["elevation_m"],
                "slope_deg": cand_loc["slope_deg"],
                "aspect_deg": cand_loc["aspect_deg"],
                "curvature": cand_loc["curvature"],
            })

    bg_selected = pd.DataFrame(bg_rows)
    print(f"[data] Successfully created {len(bg_selected)} season-matched background points.")

    # PRINT MONTH HISTOGRAM COMPARISON
    print("\n" + "=" * 75)
    print("  STEP 4: MONTH HISTOGRAM COMPARISON (Events vs. Background)")
    print("=" * 75)
    month_names = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    ev_m_counts = pos["month"].value_counts().to_dict()
    bg_m_counts = bg_selected["month"].value_counts().to_dict()

    print(f"{'Month':<6} | {'Events Count':<14} | {'Background Count':<16}")
    print("-" * 42)
    for m in range(1, 13):
        e_c = ev_m_counts.get(m, 0)
        b_c = bg_m_counts.get(m, 0)
        print(f"{month_names[m-1]:<6} | {e_c:<14} | {b_c:<16}")

    # STEP 5: FETCH REAL WEATHER FOR BOTH (40 Events + 40 Season-Matched Background)
    # Check if previously fetched events can be reused or refetched
    print("\n" + "=" * 75)
    print("  STEP 5: FETCHING OPEN-METEO WEATHER FOR 40 EVENTS & 40 BACKGROUND POINTS")
    print("=" * 75)

    def fetch_weather_for_subset(df_subset: pd.DataFrame, label: str) -> list[dict]:
        records = []
        for idx, row in df_subset.iterrows():
            lat = float(row["latitude"])
            lon = float(row["longitude"])
            d_str = str(row["date_str"])
            print(f"  Fetching [{label} {idx+1}/{len(df_subset)}] ({lat:.3f}, {lon:.3f}) on {d_str}...", end="", flush=True)

            daily = fetch_open_meteo_daily(lat, lon, d_str)
            if daily is None:
                print(" FAILED!")
                records.append({
                    "rain_24h_mm": np.nan,
                    "rain_3d_mm": np.nan,
                    "rain_7d_mm": np.nan,
                    "soil_moisture_pct": np.nan,
                    "weather_fetch_status": "failed",
                })
                continue

            precip = daily.get("precipitation_sum", [])
            sm = daily.get("soil_moisture_0_to_7cm_mean", [])

            if len(precip) >= 8:
                r24 = float(precip[-1]) if precip[-1] is not None else 0.0
                r3 = float(sum(p for p in precip[-3:] if p is not None))
                r7 = float(sum(p for p in precip[-7:] if p is not None))
            elif len(precip) > 0:
                r24 = float(precip[-1]) if precip[-1] is not None else 0.0
                r3 = float(sum(p for p in precip if p is not None))
                r7 = r3
            else:
                r24, r3, r7 = np.nan, np.nan, np.nan

            if len(sm) > 0 and sm[-1] is not None:
                sm_pct = float(sm[-1]) * 100.0
            else:
                sm_pct = np.nan

            print(f" OK -> R24={r24:.1f}mm, R3={r3:.1f}mm, R7={r7:.1f}mm, SM={sm_pct:.1f}%")
            records.append({
                "rain_24h_mm": r24,
                "rain_3d_mm": r3,
                "rain_7d_mm": r7,
                "soil_moisture_pct": sm_pct,
                "weather_fetch_status": "success",
            })
        return records

    pos_w = fetch_weather_for_subset(pos, "Event")
    bg_w = fetch_weather_for_subset(bg_selected, "Season-Matched BG")

    for col in ["rain_24h_mm", "rain_3d_mm", "rain_7d_mm", "soil_moisture_pct", "weather_fetch_status"]:
        pos[col] = pd.DataFrame(pos_w)[col]
        bg_selected[col] = pd.DataFrame(bg_w)[col]

    keep_cols = [
        "event_id", "date_str", "source", "sample_type", "landslide",
        "latitude", "longitude", "elevation_m", "slope_deg", "aspect_deg", "curvature",
        "rain_24h_mm", "rain_3d_mm", "rain_7d_mm", "soil_moisture_pct", "weather_fetch_status"
    ]
    combined = pd.concat([pos[keep_cols], bg_selected[keep_cols]], ignore_index=True)
    combined["ndvi"] = "not available"

    c_x, c_y = trans.transform(combined["longitude"].to_numpy(), combined["latitude"].to_numpy())
    combined["spatial_group"] = [f"g_{int(x//15000)}_{int(y//15000)}" for x, y in zip(c_x, c_y)]

    combined.to_csv(CSV_OUTPUT_PATH, index=False)
    print(f"\n[data] Saved season-matched dataset to: {CSV_OUTPUT_PATH}")

    return combined


def run_season_matched_benchmark(df: pd.DataFrame) -> dict:
    print("\n" + "=" * 75)
    print("  STEP 6: SPATIAL CROSS-VALIDATION (Season-Matched Benchmark)")
    print("=" * 75)

    valid_df = df[df["weather_fetch_status"] == "success"].copy().reset_index(drop=True)
    n_total = len(valid_df)
    n_events = int((valid_df["landslide"] == 1).sum())
    n_bg = int((valid_df["landslide"] == 0).sum())

    terrain_cols = ["elevation_m", "slope_deg", "aspect_deg", "curvature"]
    weather_cols = ["rain_24h_mm", "rain_3d_mm", "rain_7d_mm", "soil_moisture_pct"]
    combined_cols = terrain_cols + weather_cols

    y = valid_df["landslide"].to_numpy()
    groups = valid_df["spatial_group"].to_numpy()

    gkf = GroupKFold(n_splits=5)

    results = {
        "metadata": {
            "title": "Season-Matched Real Weather (Reanalysis) + SRTM DEM Benchmark",
            "note": "Season-matched real weather (reanalysis), small sample, exploratory.",
            "weather_source": "Open-Meteo Historical Archive API (ERA5-Land reanalysis, ~9-11 km grid)",
            "inventory_source": "NASA Global Landslide Catalog (GLC) events with location accuracy <= 5 km",
            "terrain_source": "NASA SRTM 30m DEM (N27E088.hgt)",
            "n_events_used": n_events,
            "n_background_used": n_bg,
            "n_total_samples": n_total,
            "spatial_cv_folds": 5,
            "spatial_block_size_km": 15,
            "season_matching_criteria": "+/- 15 days of day-of-year in different years (2007-2017), buffer >= 1,000m and +/- 3 days",
            "ndvi_status": "not available (skipped)",
        },
        "weather_statistics": {
            "events": {
                "rain_24h_mm": {
                    "mean": float(valid_df[valid_df["landslide"]==1]["rain_24h_mm"].mean()),
                    "median": float(valid_df[valid_df["landslide"]==1]["rain_24h_mm"].median()),
                    "max": float(valid_df[valid_df["landslide"]==1]["rain_24h_mm"].max()),
                },
                "rain_7d_mm": {
                    "mean": float(valid_df[valid_df["landslide"]==1]["rain_7d_mm"].mean()),
                    "median": float(valid_df[valid_df["landslide"]==1]["rain_7d_mm"].median()),
                    "max": float(valid_df[valid_df["landslide"]==1]["rain_7d_mm"].max()),
                },
                "soil_moisture_pct": {
                    "mean": float(valid_df[valid_df["landslide"]==1]["soil_moisture_pct"].mean()),
                    "median": float(valid_df[valid_df["landslide"]==1]["soil_moisture_pct"].median()),
                }
            },
            "season_matched_background": {
                "rain_24h_mm": {
                    "mean": float(valid_df[valid_df["landslide"]==0]["rain_24h_mm"].mean()),
                    "median": float(valid_df[valid_df["landslide"]==0]["rain_24h_mm"].median()),
                    "max": float(valid_df[valid_df["landslide"]==0]["rain_24h_mm"].max()),
                },
                "rain_7d_mm": {
                    "mean": float(valid_df[valid_df["landslide"]==0]["rain_7d_mm"].mean()),
                    "median": float(valid_df[valid_df["landslide"]==0]["rain_7d_mm"].median()),
                    "max": float(valid_df[valid_df["landslide"]==0]["rain_7d_mm"].max()),
                },
                "soil_moisture_pct": {
                    "mean": float(valid_df[valid_df["landslide"]==0]["soil_moisture_pct"].mean()),
                    "median": float(valid_df[valid_df["landslide"]==0]["soil_moisture_pct"].median()),
                }
            }
        },
        "models": {}
    }

    configurations = [
        ("Terrain_Only", terrain_cols),
        ("Terrain_Plus_Real_Weather", combined_cols),
    ]

    for config_name, feature_list in configurations:
        print(f"\n--- EVALUATING CONFIGURATION: {config_name} ({len(feature_list)} features) ---")
        X = valid_df[feature_list].to_numpy()

        # 1. Random Forest
        rf_oof_probs = np.zeros(len(valid_df))
        rf_fold_aucs = []

        for fold, (train_idx, val_idx) in enumerate(gkf.split(X, y, groups=groups)):
            X_tr, y_tr = X[train_idx], y[train_idx]
            X_val, y_val = X[val_idx], y[val_idx]

            clf = RandomForestClassifier(n_estimators=100, random_state=42 + fold, class_weight="balanced")
            clf.fit(X_tr, y_tr)
            probs = clf.predict_proba(X_val)[:, 1]
            rf_oof_probs[val_idx] = probs

            if len(np.unique(y_val)) > 1:
                rf_fold_aucs.append(roc_auc_score(y_val, probs))

        rf_auc = float(roc_auc_score(y, rf_oof_probs))
        rf_ci_low, rf_ci_high = _bootstrap_auc_ci(y, rf_oof_probs)
        rf_mean_fold_auc = float(np.mean(rf_fold_aucs)) if rf_fold_aucs else rf_auc

        rf_pred_50 = (rf_oof_probs >= 0.50).astype(int)
        rf_rec_50 = float(recall_score(y, rf_pred_50, zero_division=0))
        rf_prec_50 = float(precision_score(y, rf_pred_50, zero_division=0))

        thresholds = np.linspace(0.01, 0.99, 200)
        best_th = 0.50
        for th in thresholds:
            p_bin = (rf_oof_probs >= th).astype(int)
            r = recall_score(y, p_bin, zero_division=0)
            if r >= 0.85:
                best_th = float(th)

        rf_pred_tuned = (rf_oof_probs >= best_th).astype(int)
        rf_rec_tuned = float(recall_score(y, rf_pred_tuned, zero_division=0))
        rf_prec_tuned = float(precision_score(y, rf_pred_tuned, zero_division=0))

        # 2. Logistic Regression
        lr_oof_probs = np.zeros(len(valid_df))
        lr_fold_aucs = []

        for fold, (train_idx, val_idx) in enumerate(gkf.split(X, y, groups=groups)):
            X_tr, y_tr = X[train_idx], y[train_idx]
            X_val, y_val = X[val_idx], y[val_idx]

            scaler = StandardScaler()
            X_tr_s = scaler.fit_transform(X_tr)
            X_val_s = scaler.transform(X_val)

            lr = LogisticRegression(class_weight="balanced", max_iter=1000, random_state=42 + fold)
            lr.fit(X_tr_s, y_tr)
            probs = lr.predict_proba(X_val_s)[:, 1]
            lr_oof_probs[val_idx] = probs

            if len(np.unique(y_val)) > 1:
                lr_fold_aucs.append(roc_auc_score(y_val, probs))

        lr_auc = float(roc_auc_score(y, lr_oof_probs))
        lr_ci_low, lr_ci_high = _bootstrap_auc_ci(y, lr_oof_probs)
        lr_mean_fold_auc = float(np.mean(lr_fold_aucs)) if lr_fold_aucs else lr_auc

        lr_pred_50 = (lr_oof_probs >= 0.50).astype(int)
        lr_rec_50 = float(recall_score(y, lr_pred_50, zero_division=0))
        lr_prec_50 = float(precision_score(y, lr_pred_50, zero_division=0))

        best_lr_th = 0.50
        for th in thresholds:
            p_bin = (lr_oof_probs >= th).astype(int)
            r = recall_score(y, p_bin, zero_division=0)
            if r >= 0.85:
                best_lr_th = float(th)

        lr_pred_tuned = (lr_oof_probs >= best_lr_th).astype(int)
        lr_rec_tuned = float(recall_score(y, lr_pred_tuned, zero_division=0))
        lr_prec_tuned = float(precision_score(y, lr_pred_tuned, zero_division=0))

        results["models"][config_name] = {
            "random_forest": {
                "overall_spatial_auc": rf_auc,
                "bootstrap_95_ci": [rf_ci_low, rf_ci_high],
                "mean_fold_auc": rf_mean_fold_auc,
                "recall_50": rf_rec_50,
                "precision_50": rf_prec_50,
                "tuned_threshold_rec85": best_th,
                "recall_at_tuned": rf_rec_tuned,
                "precision_at_tuned": rf_prec_tuned,
                "confusion_matrix_50": confusion_matrix(y, rf_pred_50).tolist(),
            },
            "logistic_regression": {
                "overall_spatial_auc": lr_auc,
                "bootstrap_95_ci": [lr_ci_low, lr_ci_high],
                "mean_fold_auc": lr_mean_fold_auc,
                "recall_50": lr_rec_50,
                "precision_50": lr_prec_50,
                "tuned_threshold_rec85": best_lr_th,
                "recall_at_tuned": lr_rec_tuned,
                "precision_at_tuned": lr_prec_tuned,
                "confusion_matrix_50": confusion_matrix(y, lr_pred_50).tolist(),
            }
        }

        print(f"  Random Forest : Spatial AUC = {rf_auc:.4f} (95% CI [{rf_ci_low:.4f}, {rf_ci_high:.4f}]), Rec(0.50)={rf_rec_50*100:.1f}%, Prec(0.50)={rf_prec_50*100:.1f}%, Tuned Th={best_th:.3f} -> Rec={rf_rec_tuned*100:.1f}%, Prec={rf_prec_tuned*100:.1f}%")
        print(f"  Logistic Reg  : Spatial AUC = {lr_auc:.4f} (95% CI [{lr_ci_low:.4f}, {lr_ci_high:.4f}]), Rec(0.50)={lr_rec_50*100:.1f}%, Prec(0.50)={lr_prec_50*100:.1f}%, Tuned Th={best_lr_th:.3f} -> Rec={lr_rec_tuned*100:.1f}%, Prec={lr_prec_tuned*100:.1f}%")

    rf_terrain_auc = results["models"]["Terrain_Only"]["random_forest"]["overall_spatial_auc"]
    rf_weather_auc = results["models"]["Terrain_Plus_Real_Weather"]["random_forest"]["overall_spatial_auc"]
    lr_terrain_auc = results["models"]["Terrain_Only"]["logistic_regression"]["overall_spatial_auc"]
    lr_weather_auc = results["models"]["Terrain_Plus_Real_Weather"]["logistic_regression"]["overall_spatial_auc"]

    results["comparison_summary"] = {
        "random_forest_auc_change": {
            "terrain_only": rf_terrain_auc,
            "terrain_plus_real_weather": rf_weather_auc,
            "delta": rf_weather_auc - rf_terrain_auc,
        },
        "logistic_regression_auc_change": {
            "terrain_only": lr_terrain_auc,
            "terrain_plus_real_weather": lr_weather_auc,
            "delta": lr_weather_auc - lr_terrain_auc,
        }
    }

    with open(JSON_OUTPUT_PATH, "w", encoding="utf-8") as f:
        json.dump(results, f, indent=2)

    print(f"\n[benchmark] Saved season-matched results JSON to: {JSON_OUTPUT_PATH}")
    return results


def main():
    print("=" * 75)
    print("  RUNNING SEASON-MATCHED REAL-WEATHER BENCHMARK")
    print("=" * 75)
    df = build_season_matched_dataset(seed=42)
    results = run_season_matched_benchmark(df)
    print("\n" + "=" * 75)
    print("  SEASON-MATCHED BENCHMARK FINISHED")
    print("=" * 75)


if __name__ == "__main__":
    main()
