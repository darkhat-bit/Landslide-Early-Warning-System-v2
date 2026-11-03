export interface CorridorPointData {
  id: string;
  name: string;
  section: string;
  latitude: number;
  longitude: number;
  elevation_m: number;
  slope_deg: number;
  aspect_deg: number;
  curvature: number;
  dist_to_road_m: number;
  dist_to_river_m: number;
  rain_24h_mm: number;
  rain_3d_mm: number;
  rain_7d_mm: number;
  soil_moisture_pct: number;
  ndvi: number;
  historicalNote: string;
}

export interface CalculatedRisk {
  failure_probability: number;
  risk_tier: 'GREEN' | 'YELLOW' | 'RED';
  color: string;
  action_protocol: string;
  rain_24h_mm_adjusted: number;
  rain_3d_mm_adjusted: number;
  rain_7d_mm_adjusted?: number;
  soil_moisture_pct_adjusted?: number;
  curvature?: number;
  ndvi?: number;
  risk_source: 'backend_model' | 'local_heuristic_fallback';
}

/**
 * 15 Monitored Corridor Stations along East Sikkim NH-10 Highway Corridor (Approximate Milestones).
 * Latitude and Longitude coordinates are approximate milestone locations hand-selected along
 * the NH-10 corridor strictly within genuine DEM bounds [27.02°N to 27.42°N, 88.40°E to 88.65°E].
 * The road line on the map is an approximate piecewise polyline connecting these 15 stations sequentially.
 * River geometry is approximate (no vector GIS polyline loaded; dist_to_river_m and dist_to_road_m are approximate estimates).
 * Elevation, Slope, Aspect, and Curvature are extracted directly from SRTM 30m DEM (N27E088.hgt).
 */
export const CORRIDOR_POINTS: CorridorPointData[] = [
  {
    id: 'pt-1',
    name: '29th Mile Landslide Zone',
    section: 'Lower Teesta Gorge, NH-10',
    latitude: 27.0215,
    longitude: 88.4419,
    elevation_m: 326.9,
    slope_deg: 33.8,
    aspect_deg: 197.6,
    curvature: 0.0076,
    dist_to_road_m: 15,
    dist_to_river_m: 60,
    rain_24h_mm: 45,
    rain_3d_mm: 95,
    rain_7d_mm: 145,
    soil_moisture_pct: 70,
    ndvi: 0.28,
    historicalNote: 'Chronic debris flow channel; saturated colluvium slides into Teesta bed.'
  },
  {
    id: 'pt-2',
    name: 'Teesta Bazaar Crossing',
    section: 'NH-10 & Darjeeling Link Junction',
    latitude: 27.0583,
    longitude: 88.4317,
    elevation_m: 431.3,
    slope_deg: 13.5,
    aspect_deg: 282.7,
    curvature: 0.0878,
    dist_to_road_m: 35,
    dist_to_river_m: 30,
    rain_24h_mm: 35,
    rain_3d_mm: 75,
    rain_7d_mm: 115,
    soil_moisture_pct: 58,
    ndvi: 0.42,
    historicalNote: 'River swell combined with toe erosion triggers embankment slips and submergence.'
  },
  {
    id: 'pt-3',
    name: 'Likhipir Hairpin Bend',
    section: 'Melli Approach, NH-10',
    latitude: 27.0894,
    longitude: 88.4528,
    elevation_m: 354.6,
    slope_deg: 34.3,
    aspect_deg: 162.9,
    curvature: 0.6774,
    dist_to_road_m: 22,
    dist_to_river_m: 120,
    rain_24h_mm: 48,
    rain_3d_mm: 102,
    rain_7d_mm: 155,
    soil_moisture_pct: 66,
    ndvi: 0.32,
    historicalNote: 'Severe road subsidence from subsurface drainage saturation along outer hairpin curve.'
  },
  {
    id: 'pt-4',
    name: 'Tarkhola Vulnerable Sector',
    section: 'Teesta Valley Corridor, NH-10',
    latitude: 27.1120,
    longitude: 88.4610,
    elevation_m: 409.6,
    slope_deg: 24.6,
    aspect_deg: 58.3,
    curvature: 0.0522,
    dist_to_road_m: 20,
    dist_to_river_m: 85,
    rain_24h_mm: 42,
    rain_3d_mm: 90,
    rain_7d_mm: 138,
    soil_moisture_pct: 64,
    ndvi: 0.35,
    historicalNote: 'Repeated translational soil slips along fractured phyllite rockface.'
  },
  {
    id: 'pt-5',
    name: 'Melli Gateway Bridge',
    section: 'Sikkim-West Bengal Border',
    latitude: 27.1264,
    longitude: 88.4681,
    elevation_m: 675.5,
    slope_deg: 29.9,
    aspect_deg: 265.4,
    curvature: -0.0393,
    dist_to_road_m: 50,
    dist_to_river_m: 40,
    rain_24h_mm: 32,
    rain_3d_mm: 68,
    rain_7d_mm: 105,
    soil_moisture_pct: 50,
    ndvi: 0.48,
    historicalNote: 'Border gateway crossing with engineered retaining gabions and river monitoring.'
  },
  {
    id: 'pt-6',
    name: 'Rangpo Entry Checkpost',
    section: 'East Sikkim Border Gateway',
    latitude: 27.1764,
    longitude: 88.5283,
    elevation_m: 300.7,
    slope_deg: 10.6,
    aspect_deg: 207.2,
    curvature: -0.4156,
    dist_to_road_m: 40,
    dist_to_river_m: 95,
    rain_24h_mm: 36,
    rain_3d_mm: 78,
    rain_7d_mm: 120,
    soil_moisture_pct: 56,
    ndvi: 0.40,
    historicalNote: 'Urbanized slope cutting with mixed masonry retaining walls along Teesta bank.'
  },
  {
    id: 'pt-7',
    name: 'Mining Ground Slip Sector',
    section: 'Rangpo-Singtam Stretch, NH-10',
    latitude: 27.2052,
    longitude: 88.5089,
    elevation_m: 749.0,
    slope_deg: 33.2,
    aspect_deg: 296.0,
    curvature: -1.3266,
    dist_to_road_m: 28,
    dist_to_river_m: 110,
    rain_24h_mm: 50,
    rain_3d_mm: 108,
    rain_7d_mm: 165,
    soil_moisture_pct: 68,
    ndvi: 0.26,
    historicalNote: 'Active creeping shear plane above highway following continuous rainfall; highly concave hollow.'
  },
  {
    id: 'pt-8',
    name: 'Singtam Valley Hub',
    section: 'Central NH-10 & NH-510 Confluence',
    latitude: 27.2348,
    longitude: 88.4981,
    elevation_m: 490.1,
    slope_deg: 33.4,
    aspect_deg: 169.6,
    curvature: 0.1204,
    dist_to_road_m: 60,
    dist_to_river_m: 140,
    rain_24h_mm: 28,
    rain_3d_mm: 60,
    rain_7d_mm: 95,
    soil_moisture_pct: 46,
    ndvi: 0.45,
    historicalNote: 'Broad river terrace zone; low natural slope risk, prone to river surge overflow.'
  },
  {
    id: 'pt-9',
    name: 'Martam Ridge Cutting',
    section: 'Singtam-Ranipool Mountain Sector',
    latitude: 27.2685,
    longitude: 88.5412,
    elevation_m: 1397.1,
    slope_deg: 39.9,
    aspect_deg: 119.1,
    curvature: 1.3673,
    dist_to_road_m: 16,
    dist_to_river_m: 280,
    rain_24h_mm: 52,
    rain_3d_mm: 115,
    rain_7d_mm: 175,
    soil_moisture_pct: 72,
    ndvi: 0.30,
    historicalNote: 'High cut slope behind road; overburden material susceptible to saturated liquefaction.'
  },
  {
    id: 'pt-10',
    name: 'Ranipool Bridge Corridor',
    section: 'Sub-Gangtok Highway Sector',
    latitude: 27.2934,
    longitude: 88.5837,
    elevation_m: 955.8,
    slope_deg: 16.8,
    aspect_deg: 38.8,
    curvature: 0.2112,
    dist_to_road_m: 30,
    dist_to_river_m: 55,
    rain_24h_mm: 38,
    rain_3d_mm: 82,
    rain_7d_mm: 125,
    soil_moisture_pct: 58,
    ndvi: 0.44,
    historicalNote: 'Dense settlement along Rani Khola stream; flash flood and bank scouring hazards.'
  },
  {
    id: 'pt-11',
    name: 'Tadong Mile 6 Escarpment',
    section: 'Gangtok Approach, NH-10',
    latitude: 27.3142,
    longitude: 88.5992,
    elevation_m: 1274.6,
    slope_deg: 26.4,
    aspect_deg: 282.2,
    curvature: -0.1527,
    dist_to_road_m: 20,
    dist_to_river_m: 350,
    rain_24h_mm: 46,
    rain_3d_mm: 98,
    rain_7d_mm: 150,
    soil_moisture_pct: 65,
    ndvi: 0.33,
    historicalNote: 'Urban slope instability with heavy structural surcharge and storm drainage runoff.'
  },
  {
    id: 'pt-12',
    name: 'Deorali Ridge Slide Zone',
    section: 'Gangtok South Ridge',
    latitude: 27.3235,
    longitude: 88.6085,
    elevation_m: 1460.3,
    slope_deg: 20.3,
    aspect_deg: 283.7,
    curvature: -0.9152,
    dist_to_road_m: 25,
    dist_to_river_m: 420,
    rain_24h_mm: 44,
    rain_3d_mm: 94,
    rain_7d_mm: 142,
    soil_moisture_pct: 62,
    ndvi: 0.36,
    historicalNote: 'Deep weathering profile in Gneiss bedrock; historical translational slips in concave draw.'
  },
  {
    id: 'pt-13',
    name: 'Gangtok Zero Point Ridge',
    section: 'East Sikkim Capital Terminus',
    latitude: 27.3389,
    longitude: 88.6138,
    elevation_m: 1707.9,
    slope_deg: 25.4,
    aspect_deg: 200.2,
    curvature: 0.0017,
    dist_to_road_m: 45,
    dist_to_river_m: 600,
    rain_24h_mm: 30,
    rain_3d_mm: 66,
    rain_7d_mm: 100,
    soil_moisture_pct: 48,
    ndvi: 0.52,
    historicalNote: 'Top ridge crest. Safe from major mountain debris flows; localized drain choke risks.'
  },
  {
    id: 'pt-14',
    name: 'Penlong La Escarpment',
    section: 'North Gangtok Bypass Alignment',
    latitude: 27.3712,
    longitude: 88.6210,
    elevation_m: 1987.5,
    slope_deg: 19.0,
    aspect_deg: 359.5,
    curvature: 0.1494,
    dist_to_road_m: 30,
    dist_to_river_m: 220,
    rain_24h_mm: 40,
    rain_3d_mm: 86,
    rain_7d_mm: 130,
    soil_moisture_pct: 58,
    ndvi: 0.38,
    historicalNote: 'Steep escarpment with exposed bedrock and scree slopes above northern transit road.'
  },
  {
    id: 'pt-15',
    name: 'Dikchu River Corridor',
    section: 'East-North Sikkim Highway Link',
    latitude: 27.4125,
    longitude: 88.5520,
    elevation_m: 1859.6,
    slope_deg: 22.6,
    aspect_deg: 166.3,
    curvature: 0.0923,
    dist_to_road_m: 35,
    dist_to_river_m: 70,
    rain_24h_mm: 48,
    rain_3d_mm: 105,
    rain_7d_mm: 160,
    soil_moisture_pct: 66,
    ndvi: 0.34,
    historicalNote: 'Steep gorge flank vulnerable to monsoon toe undercutting by Dikchu Chu stream.'
  }
];

/**
 * Local heuristic fallback rule (used only if backend API is offline).
 * Explicitly marked as a fallback approximation.
 */
export function calculateLocalRisk(point: CorridorPointData, rainDelta: number): CalculatedRisk {
  const rain24 = point.rain_24h_mm + rainDelta;
  const rain3d = Math.max(point.rain_3d_mm + rainDelta * 1.2, rain24 * 1.15);
  const rain7d = Math.max(point.rain_7d_mm + rainDelta * 1.4, rain3d * 1.25);

  let p = 0.06;

  // Slope factor
  if (point.slope_deg >= 33) p += 0.35;
  else if (point.slope_deg >= 25) p += 0.22;
  else if (point.slope_deg < 15) p -= 0.04;

  // Rainfall trigger factor
  if (rain24 >= 120 || rain7d >= 260) p += 0.44;
  else if (rain24 >= 80 || rain7d >= 180) p += 0.28;
  else if (rain24 >= 50 || rain7d >= 130) p += 0.15;

  // Curvature factor (concave water collection vs convex ridge)
  if (point.curvature < -0.3) p += 0.12;
  else if (point.curvature > 0.5) p -= 0.06;

  // Vegetation root cohesion factor (NDVI)
  if (point.ndvi < 0.30) p += 0.14;
  else if (point.ndvi > 0.50) p -= 0.08;

  // Distance to road factor
  if (point.dist_to_road_m < 25) p += 0.10;

  p = Math.min(0.99, Math.max(0.01, p));
  p = Math.round(p * 10000) / 10000;

  let risk_tier: 'GREEN' | 'YELLOW' | 'RED' = 'GREEN';
  let color = '#22c55e';
  let action_protocol = 'Normal monitoring. Continue routine geotechnical observation along corridor. [Example action protocol (illustrative, to be set by local authorities)]';

  if (p >= 0.70) {
    risk_tier = 'RED';
    color = '#ef4444';
    action_protocol = 'CRITICAL ALERT — High probability of slope failure. Restrict traffic and evacuate vulnerable sectors. [Example action protocol (illustrative, to be set by local authorities)]';
  } else if (p >= 0.25) {
    risk_tier = 'YELLOW';
    color = '#eab308';
    action_protocol = 'WATCH ADVISORY — Enhanced monitoring active. Alert road maintenance squads and mobilize field sensors. [Example action protocol (illustrative, to be set by local authorities)]';
  }

  return {
    failure_probability: p,
    risk_tier,
    color,
    action_protocol,
    rain_24h_mm_adjusted: Math.round(rain24),
    rain_3d_mm_adjusted: Math.round(rain3d),
    rain_7d_mm_adjusted: Math.round(rain7d),
    curvature: point.curvature,
    ndvi: point.ndvi,
    risk_source: 'local_heuristic_fallback'
  };
}


export interface LiveStationData {
  point_id: string;
  station_name: string;
  latitude: number;
  longitude: number;
  grid_latitude?: number;
  grid_longitude?: number;
  grid_elevation?: number;
  shared_grid_with: string[];
  rain_24h_mm: number;
  rain_3d_mm: number;
  rain_7d_mm: number;
  soil_moisture_pct: number;
  soil_moisture_m3m3: number;
  imd_category_24h: string;
  failure_probability: number;
  risk_tier: 'GREEN' | 'YELLOW' | 'RED';
  is_borderline: boolean;
  action_protocol: string;
  reliability?: any;
}

export interface TimelineEntry {
  horizon_hours: number;
  timestamp: string;
  rain_24h_mm: number;
  failure_probability: number;
  risk_tier: 'GREEN' | 'YELLOW' | 'RED';
  is_borderline: boolean;
}

export interface StationTimeline {
  point_id: string;
  station_name: string;
  strip: TimelineEntry[];
}

export interface CorridorTimeline {
  corridor_summary_sentence: string;
  highest_tier: string;
  is_connected: boolean;
  source_notice: string;
  horizons: Record<string, any>;
  station_strips: StationTimeline[];
}


export interface RouteSegmentData {
  start_km: number;
  end_km: number;
  tier: 'GREEN' | 'YELLOW' | 'RED' | 'NO_COVERAGE';
  color: string;
  coordinates: [number, number][];
  sample_points_count: number;
  avg_score: number;
}

export interface RouteSummaryData {
  total_distance_km: number;
  estimated_duration_min: number;
  sample_points_count: number;
  summary_sentence: string;
  plain_segments_list: string[];
}

export interface RouteAnalysisData {
  status: string;
  route_summary: RouteSummaryData;
  segments: RouteSegmentData[];
  sample_points: any[];
  raw_geojson: any;
}
