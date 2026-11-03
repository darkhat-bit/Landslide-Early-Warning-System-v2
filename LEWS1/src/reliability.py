"""
Reliability, provenance, and training range verification module.
Checks inputs against empirical min/max bounds established by LEWS1/data/dataset.csv
and assigns provenance tags.
"""
from typing import Dict, Any, List, Optional

# Empirical feature ranges observed in LEWS1/data/dataset.csv (1,500 samples)
TRAINING_FEATURE_RANGES: Dict[str, Dict[str, float]] = {
    "elevation_m": {"min": 208.6, "max": 3657.4},
    "slope_deg": {"min": 1.49, "max": 74.91},
    "aspect_deg": {"min": 1.4, "max": 360.0},
    "curvature": {"min": -4.2052, "max": 2.8623},
    "dist_to_road_m": {"min": 0.0, "max": 4346.8},
    "dist_to_river_m": {"min": 2.6, "max": 6702.1},
    "rain_24h_mm": {"min": 0.3, "max": 209.2},
    "rain_3d_mm": {"min": 6.0, "max": 403.1},
    "rain_7d_mm": {"min": 34.6, "max": 562.3},
    "soil_moisture_pct": {"min": 5.0, "max": 90.1},
    "ndvi": {"min": 0.0618, "max": 0.8577},
}

FEATURE_PROVENANCE_TAGS: Dict[str, str] = {
    "elevation_m": "From terrain data (DEM)",
    "slope_deg": "From terrain data (DEM)",
    "aspect_deg": "From terrain data (DEM)",
    "curvature": "From terrain data (DEM)",
    "dist_to_road_m": "Approximate (hand-estimated)",
    "dist_to_river_m": "Approximate (hand-estimated)",
    "ndvi": "Default value",
    "rain_24h_mm": "Simulated scenario",
    "rain_3d_mm": "Simulated scenario",
    "rain_7d_mm": "Simulated scenario",
    "soil_moisture_pct": "Simulated scenario",
}

def is_borderline_score(score: float, delta: float = 0.03) -> bool:
    """
    Returns True if a risk score is within delta (default 0.03) of either tier threshold:
    Yellow threshold (0.25) or Red threshold (0.70).
    Accounts for floating point representation tolerance (1e-6).
    """
    tol = 1e-6
    return (abs(score - 0.25) <= delta + tol) or (abs(score - 0.70) <= delta + tol)


def check_feature_range(feature_name: str, value: float) -> Dict[str, Any]:
    """
    Validates if a single feature value is within the empirical training range.
    Returns status and warning tag if outside.
    """
    bounds = TRAINING_FEATURE_RANGES.get(feature_name)
    if bounds is None:
        return {"within_range": True, "warning": None}

    min_val = bounds["min"]
    max_val = bounds["max"]

    if value < min_val:
        return {
            "within_range": False,
            "warning": f"Outside training range, less reliable ({value} < min {min_val})",
            "min": min_val,
            "max": max_val,
        }
    if value > max_val:
        return {
            "within_range": False,
            "warning": f"Outside training range, less reliable ({value} > max {max_val})",
            "min": min_val,
            "max": max_val,
        }

    return {"within_range": True, "warning": None, "min": min_val, "max": max_val}

def evaluate_point_reliability(
    features: Dict[str, float],
    source_overrides: Optional[Dict[str, str]] = None
) -> Dict[str, Any]:
    """
    Evaluates reliability for a complete point across all features.
    """
    breakdown = {}
    out_of_range_features: List[str] = []
    
    for feat, val in features.items():
        if feat not in TRAINING_FEATURE_RANGES:
            continue
        
        prov_tag = FEATURE_PROVENANCE_TAGS.get(feat, "Default value")
        if source_overrides and feat in source_overrides:
            prov_tag = source_overrides[feat]

        range_info = check_feature_range(feat, val)
        if not range_info["within_range"]:
            out_of_range_features.append(feat)

        breakdown[feat] = {
            "value": val,
            "provenance": prov_tag,
            "within_training_range": range_info["within_range"],
            "warning": range_info["warning"],
            "training_min": range_info["min"],
            "training_max": range_info["max"],
        }

    is_reliable = len(out_of_range_features) == 0
    return {
        "is_within_training_range": is_reliable,
        "out_of_range_count": len(out_of_range_features),
        "out_of_range_features": out_of_range_features,
        "reliability_label": "Within training range" if is_reliable else "Outside training range, less reliable",
        "breakdown": breakdown,
    }

