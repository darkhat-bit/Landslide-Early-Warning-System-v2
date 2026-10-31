"""
inference.py — Runtime Inference Engine for LEWS
================================================
Loads the serialized XGBoost model + StandardScaler and exposes:

    evaluate_risk(features_dict) -> dict
        {
            "failure_probability": 0.8213,
            "risk_tier": "RED",
            "action_protocol": "..."
        }

Run standalone test:
    python -m src.inference
"""

from __future__ import annotations

import json
import sys
from pathlib import Path
from typing import Any, Dict

import joblib
import numpy as np
import pandas as pd

# -- project imports ------------------------------------------------------
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
from src.config import FEATURE_COLUMNS, MODEL_PATH, RISK_THRESHOLDS, SCALER_PATH


# =========================================================================
# Action protocol text per tier
# =========================================================================

_PROTOCOLS: Dict[str, str] = {
    "GREEN": (
        "Normal operations. Continue routine monitoring. "
        "No immediate intervention required along NH-10 corridor."
    ),
    "YELLOW": (
        "ALERT — Enhanced monitoring activated. Deploy field sensors, "
        "notify SDRF/NDRF teams, restrict heavy vehicle movement on "
        "vulnerable NH-10 stretches, and prepare contingency diversions."
    ),
    "RED": (
        "CRITICAL — Immediate action required. Initiate evacuation of "
        "at-risk settlements, close affected NH-10 segments, activate "
        "emergency shelters, and deploy NDRF response units."
    ),
}


# =========================================================================
# Model loading (lazy singleton)
# =========================================================================

_model = None
_scaler = None


def _load_artifacts() -> None:
    """Load model and scaler from disk (once)."""
    global _model, _scaler

    if not MODEL_PATH.exists():
        raise FileNotFoundError(
            f"Model file not found at {MODEL_PATH}. "
            "Run  `python -m src.train`  first."
        )
    if not SCALER_PATH.exists():
        raise FileNotFoundError(
            f"Scaler file not found at {SCALER_PATH}. "
            "Run  `python -m src.train`  first."
        )

    _model  = joblib.load(MODEL_PATH)
    _scaler = joblib.load(SCALER_PATH)


def get_model_info() -> Dict[str, Any]:
    """Return metadata about the loaded model (for health-check endpoint)."""
    if _model is None:
        _load_artifacts()
    metadata_path = MODEL_PATH.with_suffix(".metadata.json")
    metadata = None
    if metadata_path.exists():
        try:
            metadata = json.loads(metadata_path.read_text(encoding="utf-8"))
        except (OSError, json.JSONDecodeError):
            metadata = None
    return {
        "model_type": type(_model).__name__,
        "features": FEATURE_COLUMNS,
        "n_features": len(FEATURE_COLUMNS),
        "model_path": str(MODEL_PATH),
        "scaler_path": str(SCALER_PATH),
        "metadata": metadata,
    }


# =========================================================================
# Core inference function
# =========================================================================

def evaluate_risk(features_dict: Dict[str, float]) -> Dict[str, Any]:
    """
    Predict landslide failure probability for a single point.

    Parameters
    ----------
    features_dict : dict
        Must contain keys matching FEATURE_COLUMNS:
        elevation_m, slope_deg, aspect_deg, dist_to_road_m,
        dist_to_river_m, rain_24h_mm, rain_3d_mm, soil_moisture_pct

    Returns
    -------
    dict with keys:
        failure_probability  – float rounded to 4 decimals
        risk_tier            – "GREEN" | "YELLOW" | "RED"
        action_protocol      – operational instruction string
    """
    if _model is None:
        _load_artifacts()

    # Build ordered feature vector as DataFrame (preserves feature names for sklearn)
    try:
        feature_vector = pd.DataFrame(
            [[features_dict[col] for col in FEATURE_COLUMNS]],
            columns=FEATURE_COLUMNS,
        )
    except KeyError as exc:
        raise ValueError(
            f"Missing feature key: {exc}. Required: {FEATURE_COLUMNS}"
        ) from exc

    # Scale and predict
    feature_scaled = _scaler.transform(feature_vector)
    probability: float = float(_model.predict_proba(feature_scaled)[0, 1])
    probability = round(probability, 4)

    # Classify risk tier
    green_upper  = RISK_THRESHOLDS["GREEN_UPPER"]
    yellow_upper = RISK_THRESHOLDS["YELLOW_UPPER"]

    if probability < green_upper:
        tier = "GREEN"
    elif probability < yellow_upper:
        tier = "YELLOW"
    else:
        tier = "RED"

    return {
        "failure_probability": probability,
        "risk_tier": tier,
        "action_protocol": _PROTOCOLS[tier],
    }


# -- CLI quick-test ------------------------------------------------------
if __name__ == "__main__":
    sample = {
        "elevation_m": 1800.0,
        "slope_deg": 35.0,
        "aspect_deg": 180.0,
        "curvature": -0.45,
        "dist_to_road_m": 150.0,
        "dist_to_river_m": 400.0,
        "rain_24h_mm": 95.0,
        "rain_3d_mm": 180.0,
        "rain_7d_mm": 240.0,
        "soil_moisture_pct": 72.0,
        "ndvi": 0.28,
    }
    result = evaluate_risk(sample)
    print(f"\nSample input : {sample}")
    print(f"Probability  : {result['failure_probability']}")
    print(f"Risk Tier    : {result['risk_tier']}")
    print(f"Protocol     : {result['action_protocol']}")

