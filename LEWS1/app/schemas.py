"""

schemas.py — Pydantic Request / Response Models for LEWS API

============================================================

"""



from __future__ import annotations



from datetime import datetime, timezone

from typing import Any, Dict, List, Optional



from pydantic import BaseModel, Field





# =========================================================================

# REQUEST SCHEMAS

# =========================================================================



class PointRiskRequest(BaseModel):

    """Single-point landslide risk evaluation request with strict bounding validation."""



    latitude: float         = Field(..., ge=27.00, le=27.45,   description="Latitude (°N) [Monitored corridor: 27.00 - 27.45]")

    longitude: float        = Field(..., ge=88.40, le=88.65,   description="Longitude (°E) [Monitored corridor: 88.40 - 88.65]")

    elevation_m: float      = Field(..., ge=0, le=8000,        description="Elevation above MSL (m)")

    slope_deg: float        = Field(..., ge=0, le=90,          description="Terrain slope (degrees)")

    aspect_deg: float       = Field(0.0, ge=0, le=360,         description="Slope aspect (degrees)")

    curvature: float        = Field(0.0,                       description="Terrain surface curvature (100/m)")

    dist_to_road_m: float   = Field(..., ge=0,                 description="Distance to nearest road (m)")

    dist_to_river_m: float  = Field(500.0, ge=0,               description="Distance to nearest river (m)")

    rain_24h_mm: float      = Field(..., ge=0, le=600,         description="Cumulative rainfall — last 24 h (mm)")

    rain_3d_mm: float       = Field(..., ge=0, le=1000,        description="Cumulative rainfall — last 72 h (mm)")

    rain_7d_mm: float       = Field(..., ge=0, le=1500,        description="Cumulative antecedent rainfall — last 7 days r7 (mm)")

    soil_moisture_pct: float = Field(45.0, ge=0, le=100,       description="Volumetric soil moisture (%)")

    ndvi: float             = Field(0.50, ge=-1.0, le=1.0,      description="Normalized Difference Vegetation Index (NDVI)")





class CorridorPoint(BaseModel):

    """A single coordinate point within a corridor simulation."""



    point_id: str           = Field(..., min_length=1,         description="Stable client point identifier")

    latitude: float         = Field(..., ge=27.00, le=27.45,   description="Latitude (°N)")

    longitude: float        = Field(..., ge=88.40, le=88.65,   description="Longitude (°E)")

    elevation_m: float      = Field(..., ge=0, le=8000)

    slope_deg: float        = Field(..., ge=0, le=90)

    aspect_deg: float       = Field(0.0, ge=0, le=360)

    curvature: float        = Field(0.0)

    dist_to_road_m: float   = Field(..., ge=0)

    dist_to_river_m: float  = Field(500.0, ge=0)

    rain_24h_mm: float      = Field(..., ge=0, le=600)

    rain_3d_mm: float       = Field(..., ge=0, le=1000)

    rain_7d_mm: float       = Field(..., ge=0, le=1500)

    soil_moisture_pct: float = Field(45.0, ge=0, le=100)

    ndvi: float             = Field(0.50, ge=-1.0, le=1.0)





class CorridorSimulationRequest(BaseModel):

    """Batch storm-simulation request for a series of corridor points."""



    points: List[CorridorPoint] = Field(

        ..., min_length=1, description="Array of corridor coordinate points"

    )

    simulated_rainfall_increment_mm: float = Field(

        ..., ge=0, le=300, description="Extra rainfall (mm) to inject into each point's rainfall totals (scenario simulation, 0 - 300 mm)"

    )





# =========================================================================

# RESPONSE SCHEMAS

# =========================================================================



class HealthResponse(BaseModel):

    """Sanitized system health and readiness status."""



    status: str                 = Field(..., description="healthy | degraded | model_not_found")

    model_loaded: bool          = Field(..., description="Whether primary ML model is loaded in memory")

    scaler_loaded: bool         = Field(..., description="Whether feature scaler is loaded in memory")

    artifacts_exist: bool       = Field(..., description="Whether model files exist on disk")

    feature_count: int          = Field(..., description="Number of expected features")

    features: List[str]         = Field(..., description="List of feature column names")

    model_type: str             = Field(..., description="Loaded model architecture class name")

    risk_thresholds: Dict[str, float] = Field(..., description="Operational alert thresholds")

    timestamp: datetime         = Field(default_factory=lambda: datetime.now(timezone.utc))





class RiskResponse(BaseModel):

    """Risk evaluation result for a single point."""



    failure_probability: float  = Field(..., description="Model-predicted failure probability [0,1]")

    risk_tier: str              = Field(..., description="GREEN | YELLOW | RED")

    advisory_text: str          = Field(..., description="Operational action protocol")

    is_borderline: bool         = Field(False, description="Whether score is within 0.03 of a tier threshold (0.25 or 0.70)")

    reliability: Optional[Dict[str, Any]] = Field(None, description="Training range validation and feature provenance")

    timestamp: datetime         = Field(default_factory=lambda: datetime.now(timezone.utc))





class GeoJSONFeature(BaseModel):

    """GeoJSON Feature with risk properties."""



    type: str = "Feature"

    geometry: Dict[str, Any]

    properties: Dict[str, Any]





class StormSimulationResponse(BaseModel):

    """Batch response wrapping GeoJSON FeatureCollection."""



    type: str = "FeatureCollection"

    metadata: Dict[str, Any]

    features: List[GeoJSONFeature]



# =========================================================================
# LIVE WEATHER & TIMELINE SCHEMAS
# =========================================================================

class LiveStationWeather(BaseModel):
    point_id: str
    station_name: str
    latitude: float
    longitude: float
    grid_latitude: Optional[float] = None
    grid_longitude: Optional[float] = None
    grid_elevation: Optional[float] = None
    shared_grid_with: List[str] = Field(default_factory=list)
    rain_24h_mm: float
    rain_3d_mm: float
    rain_7d_mm: float
    soil_moisture_pct: float
    soil_moisture_m3m3: float
    imd_category_24h: str
    failure_probability: float
    risk_tier: str
    is_borderline: bool
    action_protocol: str
    reliability: Optional[Dict[str, Any]] = None


class LiveWeatherResponse(BaseModel):
    is_connected: bool
    status_message: str
    source_notice: str
    timestamp: str
    stations: List[LiveStationWeather]


class TimelineStripEntry(BaseModel):
    horizon_hours: int
    timestamp: str
    rain_24h_mm: float
    failure_probability: float
    risk_tier: str
    is_borderline: bool


class StationTimelineStrip(BaseModel):
    point_id: str
    station_name: str
    strip: List[TimelineStripEntry]


class CorridorTimelineResponse(BaseModel):
    corridor_summary_sentence: str
    highest_tier: str
    is_connected: bool
    source_notice: str
    horizons: Dict[str, Any]
    station_strips: List[StationTimelineStrip]


# =========================================================================
# Phase 3: Route Hazard Assessment Schemas
# =========================================================================

class RouteGeocodeResult(BaseModel):
    name: str
    latitude: float
    longitude: float
    description: Optional[str] = None


class RoutePlanRequest(BaseModel):
    start_lat: float = Field(..., ge=-90.0, le=90.0, description="Start latitude")
    start_lon: float = Field(..., ge=-180.0, le=180.0, description="Start longitude")
    end_lat: float = Field(..., ge=-90.0, le=90.0, description="Destination latitude")
    end_lon: float = Field(..., ge=-180.0, le=180.0, description="Destination longitude")
    operation_mode: Optional[str] = Field("SCENARIO", description="SCENARIO or LIVE")
    rainfall_delta: Optional[float] = Field(0.0, ge=0.0, le=300.0, description="What-if rainfall increment")


class RouteSegment(BaseModel):
    start_km: float
    end_km: float
    tier: str
    color: str
    coordinates: List[List[float]]
    sample_points_count: int
    avg_score: float


class RouteSummary(BaseModel):
    total_distance_km: float
    estimated_duration_min: float
    sample_points_count: int
    summary_sentence: str
    plain_segments_list: List[str]


class RouteAnalysisResponse(BaseModel):
    status: str
    route_summary: RouteSummary
    segments: List[RouteSegment]
    sample_points: List[Dict[str, Any]]
    raw_geojson: Dict[str, Any]
