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

from app.schemas import (
    CorridorSimulationRequest,
    GeoJSONFeature,
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
    allow_origins=["*"],
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

@app.get("/health", tags=["System"])
def health_check() -> Dict[str, Any]:
    """Return model readiness status, feature list, and risk thresholds."""
    try:
        info = get_model_info()
        return {
            "status": "healthy",
            "model_loaded": True,
            "model_info": info,
            "risk_thresholds": RISK_THRESHOLDS,
            "timestamp": datetime.now(timezone.utc).isoformat(),
        }
    except FileNotFoundError as exc:
        return {
            "status": "model_not_found",
            "model_loaded": False,
            "detail": str(exc),
            "timestamp": datetime.now(timezone.utc).isoformat(),
        }


@app.post("/api/v1/predict/point", response_model=RiskResponse, tags=["Prediction"])
def predict_point(req: PointRiskRequest) -> RiskResponse:
    """
    Evaluate landslide risk for a **single geographic point**.

    Returns failure probability, risk tier, and an advisory protocol.
    """
    try:
        features = _build_features_dict(req)
        result = evaluate_risk(features)

        return RiskResponse(
            failure_probability=result["failure_probability"],
            risk_tier=result["risk_tier"],
            advisory_text=result["action_protocol"],
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
