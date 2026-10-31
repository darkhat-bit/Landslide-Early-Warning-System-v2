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
    """Single-point landslide risk evaluation request."""

    latitude: float         = Field(..., ge=-90, le=90,   description="Latitude (°N)")
    longitude: float        = Field(..., ge=-180, le=180, description="Longitude (°E)")
    elevation_m: float      = Field(..., ge=0,            description="Elevation above MSL (m)")
    slope_deg: float        = Field(..., ge=0, le=90,     description="Terrain slope (degrees)")
    aspect_deg: float       = Field(0.0, ge=0, le=360,    description="Slope aspect (degrees)")
    curvature: float        = Field(0.0,                  description="Terrain surface curvature (100/m)")
    dist_to_road_m: float   = Field(..., ge=0,            description="Distance to nearest road (m)")
    dist_to_river_m: float  = Field(500.0, ge=0,          description="Distance to nearest river (m)")
    rain_24h_mm: float      = Field(..., ge=0,            description="Cumulative rainfall — last 24 h (mm)")
    rain_3d_mm: float       = Field(..., ge=0,            description="Cumulative rainfall — last 72 h (mm)")
    rain_7d_mm: float       = Field(..., ge=0,            description="Cumulative antecedent rainfall — last 7 days r7 (mm)")
    soil_moisture_pct: float = Field(45.0, ge=0, le=100,  description="Volumetric soil moisture (%)")
    ndvi: float             = Field(0.50, ge=-1.0, le=1.0, description="Normalized Difference Vegetation Index (NDVI)")


class CorridorPoint(BaseModel):
    """A single coordinate point within a corridor simulation."""

    point_id: str           = Field(..., min_length=1, description="Stable client point identifier")
    latitude: float         = Field(..., ge=-90, le=90)
    longitude: float        = Field(..., ge=-180, le=180)
    elevation_m: float      = Field(..., ge=0)
    slope_deg: float        = Field(..., ge=0, le=90)
    aspect_deg: float       = Field(0.0, ge=0, le=360)
    curvature: float        = Field(0.0)
    dist_to_road_m: float   = Field(..., ge=0)
    dist_to_river_m: float  = Field(500.0, ge=0)
    rain_24h_mm: float      = Field(..., ge=0)
    rain_3d_mm: float       = Field(..., ge=0)
    rain_7d_mm: float       = Field(..., ge=0)
    soil_moisture_pct: float = Field(45.0, ge=0, le=100)
    ndvi: float             = Field(0.50, ge=-1.0, le=1.0)


class CorridorSimulationRequest(BaseModel):
    """Batch storm-simulation request for a series of corridor points."""

    points: List[CorridorPoint] = Field(
        ..., min_length=1, description="Array of corridor coordinate points"
    )
    simulated_rainfall_increment_mm: float = Field(
        ..., ge=0, description="Extra rainfall (mm) to inject into each point's rainfall totals (scenario simulation)"
    )


# =========================================================================
# RESPONSE SCHEMAS
# =========================================================================

class RiskResponse(BaseModel):
    """Risk evaluation result for a single point."""

    failure_probability: float  = Field(..., description="Model-predicted failure probability [0,1]")
    risk_tier: str              = Field(..., description="GREEN | YELLOW | RED")
    advisory_text: str          = Field(..., description="Operational action protocol")
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
