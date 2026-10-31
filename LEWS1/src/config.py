"""
config.py — Central Configuration for the Landslide Early Warning System (LEWS)
================================================================================
Defines:
  • Regional bounding box for East Sikkim / NH-10 corridor
  • Risk-tier thresholds (GREEN / YELLOW / RED)
  • Feature column schema used across training & inference
  • Filesystem paths for models, raw data, and outputs
"""

from pathlib import Path
from typing import Dict, List, Tuple

# ---------------------------------------------------------------------------
# 1. PROJECT ROOT (two levels up from this file -> LEWS1/)
# ---------------------------------------------------------------------------
PROJECT_ROOT: Path = Path(__file__).resolve().parent.parent

# ---------------------------------------------------------------------------
# 2. REGIONAL BOUNDING BOX — Monitored East Sikkim NH-10 corridor
#    Strictly within SRTM DEM tile N27E088 bounds [27.00°N - 28.00°N, 88.00°E - 89.00°E]
# ---------------------------------------------------------------------------
BBOX: Dict[str, Tuple[float, float]] = {
    "lat": (27.00, 27.45),
    "lon": (88.40, 88.65),
}


# ---------------------------------------------------------------------------
# ---------------------------------------------------------------------------
# 3. RISK-TIER THRESHOLDS
#    Failure probability (P) mapped to operational tiers:
#      GREEN  : P < 0.25    -> Normal operations
#      YELLOW : 0.25 ≤ P < 0.70  -> Enhanced monitoring (starts at tuned alert threshold)
#      RED    : P ≥ 0.70    -> Evacuate / close corridor
# ---------------------------------------------------------------------------
RISK_THRESHOLDS: Dict[str, float] = {
    "GREEN_UPPER":  0.25,   # P < 0.25 (tuned alert threshold for disaster recall >= 85%)
    "YELLOW_UPPER": 0.70,   # 0.25 ≤ P < 0.70
    # RED is implicit: P ≥ 0.70
}


# ---------------------------------------------------------------------------
# 4. FEATURE SCHEMA — ordered list of model input columns (11 features)
# ---------------------------------------------------------------------------
FEATURE_COLUMNS: List[str] = [
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

TARGET_COLUMN: str = "landslide_occurred"

# ---------------------------------------------------------------------------
# 5. DATASET GENERATION SETTINGS
# ---------------------------------------------------------------------------
DATASET_NUM_SAMPLES: int = 1500
DATASET_POSITIVE_RATIO: float = 0.20   # realistic 1:4 positive-to-negative

# ---------------------------------------------------------------------------
# 6. FILESYSTEM PATHS
# ---------------------------------------------------------------------------
DATA_DIR: Path       = PROJECT_ROOT / "data"
RAW_DATA_DIR: Path   = DATA_DIR / "raw"
PROCESSED_DIR: Path  = DATA_DIR / "processed"
MODELS_DIR: Path     = PROJECT_ROOT / "models"

DATASET_CSV: Path    = DATA_DIR / "dataset.csv"
MODEL_PATH: Path     = MODELS_DIR / "landslide_primary.joblib"
SCALER_PATH: Path    = MODELS_DIR / "scaler.joblib"
DEM_PATH: Path       = RAW_DATA_DIR / "dem" / "N27E088.hgt"

# Ensure directories exist at import time
for _dir in (DATA_DIR, RAW_DATA_DIR, PROCESSED_DIR, MODELS_DIR):
    _dir.mkdir(parents=True, exist_ok=True)
