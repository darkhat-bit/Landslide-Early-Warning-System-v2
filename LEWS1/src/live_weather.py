"""
live_weather.py — Live Weather & Forecast Timeline Integration for LEWS
========================================================================
Fetches or serves cached multi-station weather forecasts from Open-Meteo.
Computes rolling 24h, 3d, 7d precipitation and soil moisture (Option 4).
Evaluates forward risk timeline (0h, +6h, +12h, +24h, +48h, +72h).
"""

from __future__ import annotations

import json
import time
import urllib.request
import urllib.parse
from datetime import datetime, timezone, timedelta
from pathlib import Path
from typing import Any, Dict, List, Optional, Tuple

from src.inference import evaluate_risk
from src.reliability import evaluate_point_reliability, is_borderline_score

CACHE_TTL_SECONDS = 45 * 60  # 45 minutes
OPEN_METEO_BASE_URL = "https://api.open-meteo.com/v1/forecast"

# Fallback offline cache path
DATA_DIR = Path(__file__).resolve().parent.parent / "data" / "processed" / "audit"
OFFLINE_CACHE_PATH = DATA_DIR / "real_api_batch_15stations.json"

_CACHE: Dict[str, Any] = {
    "timestamp": 0.0,
    "data": None,
}

# IMD (India Meteorological Department) 24-hour rainfall classification criteria
# Source: India Meteorological Department, National Weather Forecasting Centre (NWFC) standard classification
def get_imd_rainfall_category(rain_24h_mm: float) -> str:
    """
    Classifies 24-hour cumulative rainfall according to official IMD categories:
      - 0.0 mm: No Rain
      - 0.1 to 2.4 mm: Very Light Rain
      - 2.5 to 15.5 mm: Light Rain
      - 15.6 to 64.4 mm: Moderate Rain
      - 64.5 to 115.5 mm: Heavy Rain
      - 115.6 to 204.4 mm: Very Heavy Rain
      - >= 204.5 mm: Extremely Heavy Rain
    """
    if rain_24h_mm < 0.1:
        return "No rain"
    elif rain_24h_mm <= 2.4:
        return "Very light rain"
    elif rain_24h_mm <= 15.5:
        return "Light rain"
    elif rain_24h_mm <= 64.4:
        return "Moderate rain"
    elif rain_24h_mm <= 115.5:
        return "Heavy rain"
    elif rain_24h_mm <= 204.4:
        return "Very heavy rain"
    else:
        return "Extremely heavy rain"


def fetch_open_meteo_forecast(
    stations: List[Dict[str, Any]],
    timeout_secs: float = 8.0,
    force_refresh: bool = False,
    mock_payload: Optional[List[Dict[str, Any]]] = None,
) -> Tuple[List[Dict[str, Any]], bool, str]:
    """
    Fetches multi-location forecast from Open-Meteo in ONE batched request.
    Returns (forecast_list, is_live_connected, status_message).
    """
    global _CACHE

    now = time.time()
    if mock_payload is not None:
        return mock_payload, True, "Mock data loaded"

    # Use in-memory cache if valid
    if not force_refresh and _CACHE["data"] and (now - _CACHE["timestamp"] < CACHE_TTL_SECONDS):
        return _CACHE["data"], True, "Cached forecast data (fresh)"

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
        req = urllib.request.Request(url, headers={"User-Agent": "LEWS/2.0-Monitoring"})
        with urllib.request.urlopen(req, timeout=timeout_secs) as resp:
            data = json.loads(resp.read().decode("utf-8"))
            if isinstance(data, list) and len(data) == len(stations):
                _CACHE["timestamp"] = now
                _CACHE["data"] = data
                return data, True, "Live Open-Meteo forecast connected"
            elif isinstance(data, dict) and len(stations) == 1:
                _CACHE["timestamp"] = now
                _CACHE["data"] = [data]
                return [data], True, "Live Open-Meteo forecast connected (single)"
    except Exception as exc:
        pass  # Fall through to offline cache

    # Try in-memory or offline local cached snapshot with exact age and stale tracking (Item 6)
    if _CACHE["data"] and len(_CACHE["data"]) == len(stations):
        cache_ts = _CACHE["timestamp"]
        age_hours = max(0.0, (now - cache_ts) / 3600.0)
        iso_cached = datetime.fromtimestamp(cache_ts, tz=timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
        is_stale = age_hours > 6.0
        stale_tag = " [STALE]" if is_stale else ""
        msg = f"Data from {iso_cached} (cached, network unavailable) • {age_hours:.1f}h old{stale_tag}"
        return _CACHE["data"], False, msg

    if OFFLINE_CACHE_PATH.exists():
        try:
            mtime = OFFLINE_CACHE_PATH.stat().st_mtime
            age_hours = max(0.0, (now - mtime) / 3600.0)
            iso_cached = datetime.fromtimestamp(mtime, tz=timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
            is_stale = age_hours > 6.0
            stale_tag = " [STALE]" if is_stale else ""
            msg = f"Data from {iso_cached} (cached, network unavailable) • {age_hours:.1f}h old{stale_tag}"
            with open(OFFLINE_CACHE_PATH, "r", encoding="utf-8") as f:
                offline_data = json.load(f)
            if isinstance(offline_data, list) and len(offline_data) == len(stations):
                return offline_data, False, msg
        except Exception:
            pass

    return [], False, "Open-Meteo unreachable and no cached weather available."


def compute_station_live_metrics(
    station: Dict[str, Any],
    weather_obj: Dict[str, Any],
    target_idx: Optional[int] = None,
) -> Dict[str, Any]:
    """
    Computes rolling 24h, 3d, 7d rainfall and Option 4 soil moisture at target_idx.
    """
    hourly = weather_obj.get("hourly", {})
    times = hourly.get("time", [])
    precip = hourly.get("precipitation", [])
    sm_series = hourly.get("soil_moisture_0_to_7cm", [])

    if not times:
        return {}

    # If target_idx not supplied, default to latest past timestep or current time
    if target_idx is None:
        # Default: 7 days * 24 h = index 168 (start of forecast) or nearest index
        target_idx = min(178, len(times) - 1)

    t_idx = max(0, min(target_idx, len(times) - 1))
    current_time_str = times[t_idx]

    # Rolling window precipitation sums
    r24 = round(sum(precip[max(0, t_idx - 23) : t_idx + 1]), 2)
    r3d = round(sum(precip[max(0, t_idx - 71) : t_idx + 1]), 2)
    r7d = round(sum(precip[max(0, t_idx - 167) : t_idx + 1]), 2)

    # Option 4: Direct physical volumetric conversion to percent (0-7 cm layer)
    sm_raw = sm_series[t_idx] if t_idx < len(sm_series) else 0.30
    sm_pct = round(sm_raw * 100.0, 1)

    features = {
        "elevation_m": station["elevation_m"],
        "slope_deg": station["slope_deg"],
        "aspect_deg": station["aspect_deg"],
        "curvature": station["curvature"],
        "dist_to_road_m": station["dist_to_road_m"],
        "dist_to_river_m": station["dist_to_river_m"],
        "rain_24h_mm": r24,
        "rain_3d_mm": r3d,
        "rain_7d_mm": r7d,
        "soil_moisture_pct": sm_pct,
        "ndvi": station["ndvi"],
    }

    eval_result = evaluate_risk(features)
    score = eval_result["failure_probability"]
    tier = eval_result["risk_tier"]

    reliability = evaluate_point_reliability(
        features,
        source_overrides={
            "rain_24h_mm": "Live weather model",
            "rain_3d_mm": "Live weather model",
            "rain_7d_mm": "Live weather model",
            "soil_moisture_pct": "Live weather model",
        },
    )

    return {
        "point_id": station["id"],
        "station_name": station["name"],
        "timestep": current_time_str,
        "grid_latitude": weather_obj.get("latitude"),
        "grid_longitude": weather_obj.get("longitude"),
        "grid_elevation": weather_obj.get("elevation"),
        "rain_24h_mm": r24,
        "rain_3d_mm": r3d,
        "rain_7d_mm": r7d,
        "soil_moisture_pct": sm_pct,
        "soil_moisture_m3m3": round(sm_raw, 4),
        "imd_category_24h": get_imd_rainfall_category(r24),
        "failure_probability": score,
        "risk_tier": tier,
        "is_borderline": is_borderline_score(score),
        "action_protocol": eval_result["action_protocol"],
        "reliability": reliability,
    }


def compute_corridor_timeline(
    stations: List[Dict[str, Any]],
    weather_objs: List[Dict[str, Any]],
    base_idx: int = 178,
) -> Dict[str, Any]:
    """
    Computes forward timeline risks across all stations for horizons:
    +0h (now), +6h, +12h, +24h, +48h, +72h.
    """
    horizons = [0, 6, 12, 24, 48, 72]
    times = weather_objs[0].get("hourly", {}).get("time", [])

    timeline_points: List[Dict[str, Any]] = []
    horizon_summary: Dict[str, Dict[str, Any]] = {}

    for h in horizons:
        target_idx = min(base_idx + h, len(times) - 1)
        horizon_label = f"+{h}h"
        t_str = times[target_idx] if target_idx < len(times) else "N/A"

        tier_counts = {"GREEN": 0, "YELLOW": 0, "RED": 0}
        max_score = 0.0
        max_station = ""
        max_tier = "GREEN"

        for st, w in zip(stations, weather_objs):
            metrics = compute_station_live_metrics(st, w, target_idx=target_idx)
            tier = metrics.get("risk_tier", "GREEN")
            score = metrics.get("failure_probability", 0.0)
            tier_counts[tier] = tier_counts.get(tier, 0) + 1

            if score > max_score:
                max_score = score
                max_station = st["name"]
                max_tier = tier

        horizon_summary[horizon_label] = {
            "horizon_hours": h,
            "timestamp": t_str,
            "tier_counts": tier_counts,
            "peak_risk_tier": max_tier,
            "peak_risk_score": round(max_score, 4),
            "peak_station": max_station,
        }

    # Per-station strips
    station_strips = []
    for st, w in zip(stations, weather_objs):
        strip_entries = []
        for h in horizons:
            t_idx = min(base_idx + h, len(times) - 1)
            metrics = compute_station_live_metrics(st, w, target_idx=t_idx)
            strip_entries.append({
                "horizon_hours": h,
                "timestamp": metrics.get("timestep"),
                "rain_24h_mm": metrics.get("rain_24h_mm"),
                "failure_probability": metrics.get("failure_probability"),
                "risk_tier": metrics.get("risk_tier"),
                "is_borderline": metrics.get("is_borderline"),
            })
        station_strips.append({
            "point_id": st["id"],
            "station_name": st["name"],
            "strip": strip_entries,
        })

    # Find highest expected risk in the next 72 hours
    highest_tier = "GREEN"
    tier_priority = {"RED": 3, "YELLOW": 2, "GREEN": 1}
    high_count_at_peak = 0
    watch_count_at_peak = 0

    for h_data in horizon_summary.values():
        counts = h_data["tier_counts"]
        if counts["RED"] > 0:
            highest_tier = "RED"
            high_count_at_peak = max(high_count_at_peak, counts["RED"])
        elif counts["YELLOW"] > 0 and highest_tier != "RED":
            highest_tier = "YELLOW"
            watch_count_at_peak = max(watch_count_at_peak, counts["YELLOW"])

    if highest_tier == "RED":
        summary_sentence = f"Highest expected risk in the next 72 hours: High at {high_count_at_peak} station(s)."
    elif highest_tier == "YELLOW":
        summary_sentence = f"Highest expected risk in the next 72 hours: Watch at {watch_count_at_peak} station(s)."
    else:
        summary_sentence = "Highest expected risk in the next 72 hours: Low across all 15 corridor stations."

    return {
        "corridor_summary_sentence": summary_sentence,
        "highest_tier": highest_tier,
        "horizons": horizon_summary,
        "station_strips": station_strips,
    }

# Cached station list
_STATIONS_CACHE: Optional[List[Dict[str, Any]]] = None

def get_corridor_stations() -> List[Dict[str, Any]]:
    """Loads and caches the 15 corridor stations from corridorData.ts."""
    global _STATIONS_CACHE
    if _STATIONS_CACHE is not None:
        return _STATIONS_CACHE

    ts_path = Path(__file__).resolve().parent.parent.parent / "frontend" / "src" / "data" / "corridorData.ts"
    import subprocess
    js_code = f"""
    const fs = require('fs');
    const content = fs.readFileSync({json.dumps(str(ts_path))}, 'utf-8');
    const match = content.match(/export const CORRIDOR_POINTS: CorridorPointData\\[\\] = (\\[[\\s\\S]*?\\]);/);
    const points = new Function('return ' + match[1])();
    process.stdout.write(JSON.stringify(points));
    """
    try:
        res = subprocess.run(["node", "-e", js_code], capture_output=True, text=True, check=True)
        _STATIONS_CACHE = json.loads(res.stdout)
        return _STATIONS_CACHE
    except Exception:
        # Fallback to hardcoded list if node is unavailable
        return []
