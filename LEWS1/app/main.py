"""

main.py — FastAPI Application for LEWS

=======================================

Endpoints:

    GET  /health                     → model status & loaded features

    POST /api/v1/predict/point       → single-point risk evaluation

    POST /api/v1/simulate/storm      → corridor batch prediction with injected rainfall



Launch:

    uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload

"""



from __future__ import annotations



import sys

from datetime import datetime, timezone

from pathlib import Path

from typing import Any, Dict



from fastapi import FastAPI, HTTPException

from fastapi.middleware.cors import CORSMiddleware



# ── project imports ──────────────────────────────────────────────────────

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

from src.config import FEATURE_COLUMNS, RISK_THRESHOLDS

from src.inference import evaluate_risk, get_model_info

from src.reliability import evaluate_point_reliability, is_borderline_score



from src.routing import search_locations, analyze_route_hazards
from src.live_weather import (
    fetch_open_meteo_forecast,
    compute_station_live_metrics,
    compute_corridor_timeline,
    get_corridor_stations,
)

from app.schemas import (
    LiveWeatherResponse,
    LiveStationWeather,
    CorridorTimelineResponse,
    RouteGeocodeResult,
    RoutePlanRequest,
    RouteAnalysisResponse,
    CorridorSimulationRequest,

    GeoJSONFeature,

    HealthResponse,

    PointRiskRequest,

    RiskResponse,

    StormSimulationResponse,

)





# =========================================================================

# Application factory

# =========================================================================



app = FastAPI(

    title="LEWS — Landslide Early Warning System",

    description=(

        "AI-powered landslide risk prediction for the East Sikkim "

        "NH-10 highway corridor. Provides real-time point risk evaluation "

        "and corridor-wide storm simulation."

    ),

    version="1.0.0",

)



# ── CORS ────────────────────────────────────────────────────────────────

app.add_middleware(

    CORSMiddleware,

    allow_origins=[

        "http://localhost:5173",

        "http://127.0.0.1:5173",

    ],

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"],

)





# =========================================================================

# Helpers

# =========================================================================



def _build_features_dict(req: PointRiskRequest | Any) -> Dict[str, float]:

    """Map a request object to the feature dict expected by inference."""

    return {

        "elevation_m":       req.elevation_m,

        "slope_deg":         req.slope_deg,

        "aspect_deg":        req.aspect_deg,

        "curvature":         getattr(req, "curvature", 0.0),

        "dist_to_road_m":    req.dist_to_road_m,

        "dist_to_river_m":   req.dist_to_river_m,

        "rain_24h_mm":       req.rain_24h_mm,

        "rain_3d_mm":        req.rain_3d_mm,

        "rain_7d_mm":        getattr(req, "rain_7d_mm", req.rain_3d_mm * 1.25),

        "soil_moisture_pct": req.soil_moisture_pct,

        "ndvi":              getattr(req, "ndvi", 0.50),

    }





_TIER_COLORS = {"GREEN": "#22c55e", "YELLOW": "#eab308", "RED": "#ef4444"}





# =========================================================================

# Endpoints

# =========================================================================



@app.get("/health", response_model=HealthResponse, tags=["System"])

def health_check() -> HealthResponse:

    """Return model readiness status, feature list, and risk thresholds without leaking absolute filesystem paths."""

    try:

        info = get_model_info()

        is_healthy = bool(info.get("model_loaded") and info.get("scaler_loaded"))

        return HealthResponse(

            status="healthy" if is_healthy else "degraded",

            model_loaded=bool(info.get("model_loaded")),

            scaler_loaded=bool(info.get("scaler_loaded")),

            artifacts_exist=bool(info.get("artifacts_exist")),

            feature_count=int(info.get("n_features", len(FEATURE_COLUMNS))),

            features=info.get("features", FEATURE_COLUMNS),

            model_type=str(info.get("model_type", "Unknown")),

            risk_thresholds=RISK_THRESHOLDS,

        )

    except Exception:

        return HealthResponse(

            status="model_not_found",

            model_loaded=False,

            scaler_loaded=False,

            artifacts_exist=False,

            feature_count=len(FEATURE_COLUMNS),

            features=FEATURE_COLUMNS,

            model_type="None",

            risk_thresholds=RISK_THRESHOLDS,

        )





@app.post("/api/v1/predict/point", response_model=RiskResponse, tags=["Prediction"])

def predict_point(req: PointRiskRequest) -> RiskResponse:

    """

    Evaluate landslide risk for a **single geographic point**.



    Returns failure probability, risk tier, and an advisory protocol.

    """

    try:

        features = _build_features_dict(req)

        result = evaluate_risk(features)

        reliability = evaluate_point_reliability(features)
        is_borderline = is_borderline_score(result["failure_probability"])

        return RiskResponse(

            failure_probability=result["failure_probability"],

            risk_tier=result["risk_tier"],

            advisory_text=result["action_protocol"],

            is_borderline=is_borderline,

            reliability=reliability,
        )

    except FileNotFoundError as exc:

        raise HTTPException(status_code=503, detail=str(exc))

    except ValueError as exc:

        raise HTTPException(status_code=422, detail=str(exc))

    except Exception as exc:

        raise HTTPException(status_code=500, detail=f"Inference error: {exc}")





@app.post(

    "/api/v1/simulate/storm",

    response_model=StormSimulationResponse,

    tags=["Simulation"],

)

def simulate_storm(req: CorridorSimulationRequest) -> StormSimulationResponse:

    """

    **Corridor Storm Simulation**



    Takes an array of corridor points, injects additional scenario rainfall (`simulated_rainfall_increment_mm`)

    into each point's 24h, 3d, and 7d totals, runs batch prediction, and returns

    a GeoJSON FeatureCollection with risk colours for map rendering.

    """

    delta = req.simulated_rainfall_increment_mm

    features_list: list[GeoJSONFeature] = []

    tier_counts = {"GREEN": 0, "YELLOW": 0, "RED": 0}



    if len({point.point_id for point in req.points}) != len(req.points):

        raise HTTPException(status_code=422, detail="point_id values must be unique within a simulation")



    try:

        for idx, pt in enumerate(req.points):

            features = _build_features_dict(pt)



            # Inject simulated scenario rainfall increment

            features["rain_24h_mm"] += delta

            features["rain_3d_mm"]  += delta * 1.2

            features["rain_7d_mm"]  += delta * 1.4

            features["soil_moisture_pct"] = min(98.0, features["soil_moisture_pct"] + delta * 0.10)



            result = evaluate_risk(features)

            tier = result["risk_tier"]

            tier_counts[tier] += 1



            geo_feature = GeoJSONFeature(

                geometry={

                    "type": "Point",

                    "coordinates": [pt.longitude, pt.latitude],

                },

                properties={

                    "index": idx,

                    "point_id": pt.point_id,

                    "latitude": pt.latitude,

                    "longitude": pt.longitude,

                    "elevation_m": pt.elevation_m,

                    "slope_deg": pt.slope_deg,

                    "curvature": features["curvature"],

                    "ndvi": features["ndvi"],

                    "rain_24h_mm_adjusted": round(features["rain_24h_mm"], 1),

                    "rain_3d_mm_adjusted": round(features["rain_3d_mm"], 1),

                    "rain_7d_mm_adjusted": round(features["rain_7d_mm"], 1),

                    "soil_moisture_pct_adjusted": round(features["soil_moisture_pct"], 1),

                    "failure_probability": result["failure_probability"],

                    "risk_tier": tier,

                    "is_borderline": is_borderline_score(result["failure_probability"]),

                    "color": _TIER_COLORS.get(tier, "#9ca3af"),

                    "action_protocol": result["action_protocol"],

                },

            )

            features_list.append(geo_feature)



    except FileNotFoundError as exc:

        raise HTTPException(status_code=503, detail=str(exc))

    except Exception as exc:

        raise HTTPException(status_code=500, detail=f"Simulation error: {exc}")



    return StormSimulationResponse(

        metadata={

            "corridor": "East Sikkim NH-10",

            "simulated_rainfall_increment_mm": delta,

            "total_points": len(req.points),

            "tier_summary": tier_counts,

            "timestamp": datetime.now(timezone.utc).isoformat(),

        },

        features=features_list,

    )



# =========================================================================
# LIVE WEATHER & FORECAST TIMELINE ENDPOINTS
# =========================================================================

@app.get("/api/v1/weather/live", response_model=LiveWeatherResponse, tags=["Live Weather"])
def get_live_weather() -> LiveWeatherResponse:
    """
    Live Weather & Risk Evaluation (Experimental)
    Returns real-time numerical weather model telemetry from Open-Meteo,
    rolling 24h/3d/7d rainfall sums, Option 4 volumetric soil moisture,
    and model risk evaluations for all 15 corridor stations.
    """
    stations = get_corridor_stations()
    weather_data, is_connected, status_msg = fetch_open_meteo_forecast(stations)

    if not weather_data or len(weather_data) != len(stations):
        raise HTTPException(status_code=503, detail="Live weather service temporarily unavailable and no cached telemetry exists.")

    # Determine grid cell sharing across stations
    grid_groups: Dict[tuple, list] = {}
    for st, w in zip(stations, weather_data):
        key = (w.get("latitude"), w.get("longitude"))
        grid_groups.setdefault(key, []).append(st["name"])

    station_metrics = []
    latest_timestep = "N/A"

    for st, w in zip(stations, weather_data):
        m = compute_station_live_metrics(st, w)
        latest_timestep = m.get("timestep", latest_timestep)
        key = (w.get("latitude"), w.get("longitude"))
        shared_with = [name for name in grid_groups.get(key, []) if name != st["name"]]

        station_metrics.append(
            LiveStationWeather(
                point_id=st["id"],
                station_name=st["name"],
                latitude=st["latitude"],
                longitude=st["longitude"],
                grid_latitude=m.get("grid_latitude"),
                grid_longitude=m.get("grid_longitude"),
                grid_elevation=m.get("grid_elevation"),
                shared_grid_with=shared_with,
                rain_24h_mm=m.get("rain_24h_mm", 0.0),
                rain_3d_mm=m.get("rain_3d_mm", 0.0),
                rain_7d_mm=m.get("rain_7d_mm", 0.0),
                soil_moisture_pct=m.get("soil_moisture_pct", 30.0),
                soil_moisture_m3m3=m.get("soil_moisture_m3m3", 0.30),
                imd_category_24h=m.get("imd_category_24h", "No rain"),
                failure_probability=m.get("failure_probability", 0.1),
                risk_tier=m.get("risk_tier", "GREEN"),
                is_borderline=m.get("is_borderline", False),
                action_protocol=m.get("action_protocol", ""),
                reliability=m.get("reliability"),
            )
        )

    if is_connected:
        notice = f"Weather as of {latest_timestep}. Source: Open-Meteo model data (~10 km grid), not a rain gauge."
    else:
        notice = status_msg

    return LiveWeatherResponse(
        is_connected=is_connected,
        status_message=status_msg,
        source_notice=notice,
        timestamp=datetime.now(timezone.utc).isoformat(),
        stations=station_metrics,
    )


@app.get("/api/v1/weather/timeline", response_model=CorridorTimelineResponse, tags=["Live Weather"])
def get_weather_timeline() -> CorridorTimelineResponse:
    """
    Forward 72-Hour Risk Timeline (Experimental)
    Evaluates risk at +0h (now), +6h, +12h, +24h, +48h, and +72h based on
    forecast atmospheric precipitation.
    """
    stations = get_corridor_stations()
    weather_data, is_connected, _ = fetch_open_meteo_forecast(stations)

    if not weather_data or len(weather_data) != len(stations):
        raise HTTPException(status_code=503, detail="Timeline forecast unavailable.")

    timeline_data = compute_corridor_timeline(stations, weather_data)

    return CorridorTimelineResponse(
        corridor_summary_sentence=timeline_data["corridor_summary_sentence"],
        highest_tier=timeline_data["highest_tier"],
        is_connected=is_connected,
        source_notice="Forecast-based, model trained on synthetic labels.",
        horizons=timeline_data["horizons"],
        station_strips=timeline_data["station_strips"],
    )


@app.get("/api/v1/route/geocode", response_model=list[RouteGeocodeResult], tags=["Route Hazard"])
def geocode_route_location(q: str = "") -> list[RouteGeocodeResult]:
    """Search locations for route planning with Nominatim (rate-limited) & corridor presets."""
    results = search_locations(q)
    return [
        RouteGeocodeResult(
            name=r["name"],
            latitude=r["latitude"],
            longitude=r["longitude"],
            description=r.get("description"),
        )
        for r in results
    ]


@app.post("/api/v1/route/analyze", response_model=RouteAnalysisResponse, tags=["Route Hazard"])
def analyze_route(req: RoutePlanRequest) -> RouteAnalysisResponse:
    """
    Phase 3: Route-Based Hazard Warning
    Fetches real driving geometry, samples every 250-500m in UTM 45N,
    extracts runtime DEM terrain products, scores risk with the primary model,
    and aggregates into plain-English danger intervals.
    """
    try:
        data = analyze_route_hazards(
            start_lat=req.start_lat,
            start_lon=req.start_lon,
            end_lat=req.end_lat,
            end_lon=req.end_lon,
            operation_mode=req.operation_mode or "SCENARIO",
            rainfall_delta=req.rainfall_delta or 0.0,
        )
        return RouteAnalysisResponse(**data)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Route analysis error: {str(e)}")

# ── Phase 5: Modular Field Feedback & Emergency Email Alerts ─────────────
from app.feedback_router import router as feedback_router
app.include_router(feedback_router)

