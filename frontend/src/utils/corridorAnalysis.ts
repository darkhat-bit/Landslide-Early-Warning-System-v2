import { CORRIDOR_POINTS, CorridorPointData, CalculatedRisk } from '../data/corridorData';
import { TRAINING_FEATURE_RANGES, FeatureRange } from '../data/trainingRanges';

export type ProvenanceTag =
  | 'From terrain data (DEM)'
  | 'Approximate (hand-estimated)'
  | 'Default value'
  | 'Simulated scenario'
  | 'Live weather model';

export interface FeatureDetail {
  key: string;
  label: string;
  value: string;
  numericValue: number;
  unit: string;
  sourceTag: ProvenanceTag;
  isWithinRange: boolean;
  trainingMin: number;
  trainingMax: number;
  reliabilityWarning?: string;
  median: number;
  plainExplanation: string;
}

function getMedian(values: number[]): number {
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

export const CORRIDOR_MEDIANS = {
  elevation_m: getMedian(CORRIDOR_POINTS.map((p) => p.elevation_m)),
  slope_deg: getMedian(CORRIDOR_POINTS.map((p) => p.slope_deg)),
  aspect_deg: getMedian(CORRIDOR_POINTS.map((p) => p.aspect_deg)),
  curvature: getMedian(CORRIDOR_POINTS.map((p) => p.curvature)),
  dist_to_road_m: getMedian(CORRIDOR_POINTS.map((p) => p.dist_to_road_m)),
  dist_to_river_m: getMedian(CORRIDOR_POINTS.map((p) => p.dist_to_river_m)),
  rain_24h_mm: getMedian(CORRIDOR_POINTS.map((p) => p.rain_24h_mm)),
  rain_3d_mm: getMedian(CORRIDOR_POINTS.map((p) => p.rain_3d_mm)),
  rain_7d_mm: getMedian(CORRIDOR_POINTS.map((p) => p.rain_7d_mm)),
  soil_moisture_pct: getMedian(CORRIDOR_POINTS.map((p) => p.soil_moisture_pct)),
  ndvi: getMedian(CORRIDOR_POINTS.map((p) => p.ndvi)),
};

/**
 * Returns the 11 physical factors in plain, clear language.
 */
export function getStationFeatures(
  point: CorridorPointData,
  risk?: CalculatedRisk | null,
  isLiveWeather: boolean = false
): FeatureDetail[] {
  const rain24 = risk?.rain_24h_mm_adjusted ?? point.rain_24h_mm;
  const rain3d = risk?.rain_3d_mm_adjusted ?? point.rain_3d_mm;
  const rain7d = risk?.rain_7d_mm_adjusted ?? point.rain_7d_mm;
  const soilMoisture = risk?.soil_moisture_pct_adjusted ?? point.soil_moisture_pct;

  const rawFeatures: Array<{
    key: string;
    label: string;
    value: string;
    numericValue: number;
    unit: string;
    sourceTag: ProvenanceTag;
    median: number;
    plainExplanation: string;
  }> = [
    {
      key: 'slope_deg',
      label: 'Hillside slope',
      value: `${point.slope_deg.toFixed(1)}°`,
      numericValue: point.slope_deg,
      unit: 'degrees',
      sourceTag: 'From terrain data (DEM)',
      median: CORRIDOR_MEDIANS.slope_deg,
      plainExplanation: 'Steeper ground slides more easily under gravity',
    },
    {
      key: 'rain_24h_mm',
      label: 'Rain in last 24 hours',
      value: `${rain24.toFixed(0)} mm`,
      numericValue: rain24,
      unit: 'mm',
      sourceTag: isLiveWeather ? 'Live weather model' : 'Simulated scenario',
      median: CORRIDOR_MEDIANS.rain_24h_mm,
      plainExplanation: 'Heavy quick rain triggers sudden shallow mud and rock slides',
    },
    {
      key: 'rain_3d_mm',
      label: 'Rain over 3 days',
      value: `${rain3d.toFixed(0)} mm`,
      numericValue: rain3d,
      unit: 'mm',
      sourceTag: isLiveWeather ? 'Live weather model' : 'Simulated scenario',
      median: CORRIDOR_MEDIANS.rain_3d_mm,
      plainExplanation: 'Several days of rain soak through topsoil',
    },
    {
      key: 'rain_7d_mm',
      label: 'Rain over 7 days',
      value: `${rain7d.toFixed(0)} mm`,
      numericValue: rain7d,
      unit: 'mm',
      sourceTag: isLiveWeather ? 'Live weather model' : 'Simulated scenario',
      median: CORRIDOR_MEDIANS.rain_7d_mm,
      plainExplanation: 'A full week of rain raises groundwater and loosens deep earth',
    },
    {
      key: 'soil_moisture_pct',
      label: 'Soil moisture',
      value: `${soilMoisture.toFixed(0)}%`,
      numericValue: soilMoisture,
      unit: '%',
      sourceTag: isLiveWeather ? 'Live weather model' : 'Simulated scenario',
      median: CORRIDOR_MEDIANS.soil_moisture_pct,
      plainExplanation: 'How waterlogged the hillside already is',
    },
    {
      key: 'dist_to_road_m',
      label: 'Distance to NH-10 road',
      value: `${point.dist_to_road_m} m`,
      numericValue: point.dist_to_road_m,
      unit: 'm',
      sourceTag: 'Approximate (hand-estimated)',
      median: CORRIDOR_MEDIANS.dist_to_road_m,
      plainExplanation: 'Road cuts weaken the base of mountain slopes',
    },
    {
      key: 'dist_to_river_m',
      label: 'Distance to river',
      value: `${point.dist_to_river_m} m`,
      numericValue: point.dist_to_river_m,
      unit: 'm',
      sourceTag: 'Approximate (hand-estimated)',
      median: CORRIDOR_MEDIANS.dist_to_river_m,
      plainExplanation: 'Fast river water can erode and wash away slope toes',
    },
    {
      key: 'elevation_m',
      label: 'Elevation above sea level',
      value: `${point.elevation_m} m`,
      numericValue: point.elevation_m,
      unit: 'm',
      sourceTag: 'From terrain data (DEM)',
      median: CORRIDOR_MEDIANS.elevation_m,
      plainExplanation: 'Higher altitudes catch more cloudburst clouds',
    },
    {
      key: 'curvature',
      label: 'Ground shape (curvature)',
      value: point.curvature < 0 ? 'Bowl / hollow (water gathers)' : 'Ridge (water runs off)',
      numericValue: point.curvature,
      unit: '100/m',
      sourceTag: 'From terrain data (DEM)',
      median: CORRIDOR_MEDIANS.curvature,
      plainExplanation: 'Bowl-shaped hollows trap rainwater and trigger slides faster',
    },
    {
      key: 'aspect_deg',
      label: 'Slope facing direction',
      value: `${point.aspect_deg.toFixed(0)}°`,
      numericValue: point.aspect_deg,
      unit: 'degrees',
      sourceTag: 'From terrain data (DEM)',
      median: CORRIDOR_MEDIANS.aspect_deg,
      plainExplanation: 'Slopes facing south take the brunt of incoming monsoon winds',
    },
    {
      key: 'ndvi',
      label: 'Tree and plant cover',
      value: `${(point.ndvi * 100).toFixed(0)}%`,
      numericValue: point.ndvi,
      unit: 'index',
      sourceTag: 'Default value',
      median: CORRIDOR_MEDIANS.ndvi,
      plainExplanation: 'Tree roots hold soil together; bare ground slides more',
    },
  ];

  return rawFeatures.map((f) => {
    const range: FeatureRange | undefined = TRAINING_FEATURE_RANGES[f.key];
    const minVal = range ? range.min : -Infinity;
    const maxVal = range ? range.max : Infinity;
    const within = f.numericValue >= minVal && f.numericValue <= maxVal;

    return {
      ...f,
      isWithinRange: within,
      trainingMin: minVal,
      trainingMax: maxVal,
      reliabilityWarning: within
        ? undefined
        : `Outside training range (${minVal.toFixed(1)}–${maxVal.toFixed(1)} ${f.unit}), less reliable`,
    };
  });
}

export function getTopFlaggedFeatures(point: CorridorPointData, risk?: CalculatedRisk | null): string[] {
  const rain24 = risk?.rain_24h_mm_adjusted ?? point.rain_24h_mm;
  const rain7d = risk?.rain_7d_mm_adjusted ?? point.rain_7d_mm;

  const candidates: { diffZ: number; description: string }[] = [];

  // Slope
  const slopeDiff = (point.slope_deg - CORRIDOR_MEDIANS.slope_deg) / 10;
  candidates.push({
    diffZ: slopeDiff,
    description: `Very steep slope (${point.slope_deg.toFixed(1)}°, steeper than the corridor average of ${CORRIDOR_MEDIANS.slope_deg.toFixed(1)}°)`,
  });

  // 24h Rain
  const rain24Diff = (rain24 - CORRIDOR_MEDIANS.rain_24h_mm) / 30;
  candidates.push({
    diffZ: rain24Diff,
    description: `High 24-hour rain (${rain24.toFixed(0)} mm compared to baseline average of ${CORRIDOR_MEDIANS.rain_24h_mm.toFixed(0)} mm)`,
  });

  // 7d Rain
  const rain7dDiff = (rain7d - CORRIDOR_MEDIANS.rain_7d_mm) / 50;
  candidates.push({
    diffZ: rain7dDiff,
    description: `Heavy accumulated rain over the past week (${rain7d.toFixed(0)} mm)`,
  });

  // Road distance
  const roadDiff = (CORRIDOR_MEDIANS.dist_to_road_m - point.dist_to_road_m) / 15;
  candidates.push({
    diffZ: roadDiff,
    description: `Directly on the highway cut slope (${point.dist_to_road_m} m away)`,
  });

  // Curvature
  const curvDiff = (CORRIDOR_MEDIANS.curvature - point.curvature) / 0.15;
  candidates.push({
    diffZ: curvDiff,
    description: `Hollow ground shape that funnels and traps drainage water`,
  });

  // NDVI
  const ndviDiff = (CORRIDOR_MEDIANS.ndvi - point.ndvi) / 0.15;
  candidates.push({
    diffZ: ndviDiff,
    description: `Sparse tree and plant cover holding the hillside together`,
  });

  candidates.sort((a, b) => b.diffZ - a.diffZ);
  return candidates.slice(0, 3).map((c) => c.description);
}

export function buildDirectionsUrls(latitude: number, longitude: number): { googleMapsUrl: string; osmUrl: string } {
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${latitude.toFixed(6)},${longitude.toFixed(6)}&travelmode=driving`;
  const osmUrl = `https://www.openstreetmap.org/?mlat=${latitude.toFixed(6)}&mlon=${longitude.toFixed(6)}#map=15/${latitude.toFixed(6)}/${longitude.toFixed(6)}`;
  return { googleMapsUrl, osmUrl };
}
