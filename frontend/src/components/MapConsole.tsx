import React, { useEffect, useRef, useState, useMemo } from 'react';
import L from 'leaflet';
import {
  CORRIDOR_POINTS,
  CorridorPointData,
  calculateLocalRisk,
  CalculatedRisk,
  LiveStationData,
  CorridorTimeline,
  RouteAnalysisData,
  RouteSegmentData
} from '../data/corridorData';
import { AlertItem } from '../types/alert';
import { LeftSidebar } from './LeftSidebar';
import { LocationInspector } from './LocationInspector';
import { RouteWarningPanel } from './RouteWarningPanel';
import { DEFAULT_ROUTE_IN_COVERAGE, DEFAULT_ROUTE_OUT_OF_COVERAGE } from '../data/defaultRoutes';
import { Navigation } from 'lucide-react';
import { BottomDock } from './BottomDock';
import {
  AlertTriangle,
  ArrowLeft,
  HelpCircle,
  Info,
  Menu,
  MessageSquare,
  ShieldAlert,
  X
} from 'lucide-react';
import { ThemeSelector } from './ThemeSelector';
import { ThemeId } from '../utils/theme';
import { AboutLimitationsModal } from './AboutLimitationsModal';
import { FeedbackAlertsModal } from './FeedbackAlertsModal';

interface MapConsoleProps {
  onBackToHome: () => void;
  currentTheme?: ThemeId;
  onThemeChange?: (theme: ThemeId) => void;
}

interface StormFeature {
  geometry: {
    type: string;
    coordinates: [number, number];
  };
  properties: {
    point_id: string;
    latitude: number;
    longitude: number;
    elevation_m: number;
    slope_deg: number;
    curvature: number;
    ndvi: number;
    failure_probability: number;
    risk_tier: 'GREEN' | 'YELLOW' | 'RED';
    color: string;
    action_protocol: string;
    rain_24h_mm_adjusted: number;
    rain_3d_mm_adjusted: number;
    rain_7d_mm_adjusted: number;
  };
}

interface StormResponse {
  features: StormFeature[];
}

export const MapConsole: React.FC<MapConsoleProps> = ({
  onBackToHome,
  currentTheme = 'light',
  onThemeChange
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const tileLayerRef = useRef<L.TileLayer | null>(null);
  const routeLayerRef = useRef<L.Polyline | null>(null);
  const markersGroupRef = useRef<L.LayerGroup | null>(null);
  const routeSegmentsGroupRef = useRef<L.LayerGroup | null>(null);

  const requestIdRef = useRef(0);
  const previousTiersRef = useRef<Map<string, 'GREEN' | 'YELLOW' | 'RED'>>(new Map());

  // Helper to parse query parameters from URL or hash
  const getInitialParam = (key: string): string | null => {
    if (typeof window === 'undefined') return null;
    const hash = window.location.hash;
    const queryString = window.location.search || (hash.includes('?') ? hash.substring(hash.indexOf('?')) : '');
    return new URLSearchParams(queryString).get(key);
  };

  // States with synchronous initializers for immediate snapshot consistency
  const [rainfallDelta, setRainfallDelta] = useState<number>(() => {
    const val = getInitialParam('delta');
    return val && !isNaN(Number(val)) ? Number(val) : 0;
  });
  const [selectedPoint, setSelectedPoint] = useState<CorridorPointData | null>(() => {
    const stId = getInitialParam('station');
    return stId ? CORRIDOR_POINTS.find((p) => p.id === stId) || null : null;
  });
  const [selectedFilter, setSelectedFilter] = useState<'ALL' | 'RED' | 'YELLOW' | 'GREEN'>('ALL');
  const [mapStyle, setMapStyle] = useState<'map' | 'terrain' | 'satellite'>('map');
  const [isBackendHealthy, setIsBackendHealthy] = useState<boolean>(false);
  const [riskStatus, setRiskStatus] = useState<'loading' | 'backend' | 'fallback'>('loading');
  const [backendRisks, setBackendRisks] = useState<Map<string, CalculatedRisk> | null>(null);
  const [apiErrorMessage, setApiErrorMessage] = useState<string | null>(null);

  // Live Weather & Timeline states
  const [operationMode, setOperationMode] = useState<'SCENARIO' | 'LIVE'>(() => {
    return getInitialParam('mode') === 'live' ? 'LIVE' : 'SCENARIO';
  });
  const [liveWeatherStations, setLiveWeatherStations] = useState<LiveStationData[]>([]);
  const [liveWeatherStatus, setLiveWeatherStatus] = useState<string>('Connecting to weather model...');
  const [liveWeatherNotice, setLiveWeatherNotice] = useState<string>('');
  const [corridorTimeline, setCorridorTimeline] = useState<CorridorTimeline | null>(null);
  const [isLiveConnected, setIsLiveConnected] = useState<boolean>(true);
  const [liveRisksMap, setLiveRisksMap] = useState<Map<string, CalculatedRisk>>(new Map());

  // Phase 3: Route Hazard States
  const [activeConsoleTab, setActiveConsoleTab] = useState<'STATIONS' | 'ROUTE'>(() => {
    return getInitialParam('route') === '1' ? 'ROUTE' : 'STATIONS';
  });
  const [routeData, setRouteData] = useState<RouteAnalysisData | null>(() => {
    if (getInitialParam('route') === '1') {
      return getInitialParam('dest') === 'out' ? DEFAULT_ROUTE_OUT_OF_COVERAGE : DEFAULT_ROUTE_IN_COVERAGE;
    }
    return null;
  });
  const [selectedSegment, setSelectedSegment] = useState<RouteSegmentData | null>(() => {
    if (getInitialParam('route') === '1' && getInitialParam('dest') === 'out') {
      return DEFAULT_ROUTE_OUT_OF_COVERAGE.segments.find(s => s.tier === 'NO_COVERAGE') || null;
    }
    return null;
  });
  const [isRouteLoading, setIsRouteLoading] = useState<boolean>(false);
  const [showStationsLayer, setShowStationsLayer] = useState<boolean>(true);

  // Alert Inbox states
  const [alerts, setAlerts] = useState<AlertItem[]>([]);
  const [selectedAlert, setSelectedAlert] = useState<AlertItem | null>(null);
  const [toastAlert, setToastAlert] = useState<AlertItem | null>(null);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState<boolean>(false);
  const [showHelpModal, setShowHelpModal] = useState<boolean>(false);
  const [showAboutModal, setShowAboutModal] = useState<boolean>(false);
  const [showFeedbackModal, setShowFeedbackModal] = useState<boolean>(() => typeof window !== 'undefined' && (window.location.hash.includes('feedback=1') || window.location.search.includes('feedback=1')));
  const [feedbackStation, setFeedbackStation] = useState<CorridorPointData | null>(null);

  // Read initial query / hash parameters (e.g. #console?station=pt-9&delta=100)
  useEffect(() => {
    const hash = window.location.hash;
    const queryString = window.location.search || (hash.includes('?') ? hash.substring(hash.indexOf('?')) : '');
    const params = new URLSearchParams(queryString);
    const stId = params.get('station');
    if (stId) {
      const found = CORRIDOR_POINTS.find((p) => p.id === stId);
      if (found) setSelectedPoint(found);
    }
    const deltaStr = params.get('delta');
    if (deltaStr && !isNaN(Number(deltaStr))) {
      setRainfallDelta(Number(deltaStr));
    }
    if (params.get('about') === '1') {
      setShowAboutModal(true);
    }
    if (params.get('feedback') === '1') {
      setShowFeedbackModal(true);
    }
    if (params.get('mode') === 'live') {
      setOperationMode('LIVE');
    }
  }, []);

  // Initial health check
  useEffect(() => {
    fetch('/health')
      .then((res) => res.json())
      .then((data) => {
        setIsBackendHealthy(data.status === 'healthy' && data.model_loaded === true);
      })
      .catch(() => setIsBackendHealthy(false));
  }, []);

  // Local fallback
  const localRisksMap = useMemo(() => {
    const map = new Map<string, CalculatedRisk>();
    CORRIDOR_POINTS.forEach((pt) => map.set(pt.id, calculateLocalRisk(pt, rainfallDelta)));
    return map;
  }, [rainfallDelta]);

  // Debounced API storm simulation (400ms)
  useEffect(() => {
    let active = true;
    const currentReq = ++requestIdRef.current;

    setRiskStatus('loading');

    const timer = window.setTimeout(async () => {
      const payload = {
        simulated_rainfall_increment_mm: rainfallDelta,
        points: CORRIDOR_POINTS.map((point) => ({
          point_id: point.id,
          latitude: point.latitude,
          longitude: point.longitude,
          elevation_m: point.elevation_m,
          slope_deg: point.slope_deg,
          aspect_deg: point.aspect_deg,
          curvature: point.curvature,
          dist_to_road_m: point.dist_to_road_m,
          dist_to_river_m: point.dist_to_river_m,
          rain_24h_mm: point.rain_24h_mm,
          rain_3d_mm: point.rain_3d_mm,
          rain_7d_mm: point.rain_7d_mm,
          soil_moisture_pct: point.soil_moisture_pct,
          ndvi: point.ndvi
        }))
      };

      try {
        const response = await fetch('/api/v1/simulate/storm', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (!response.ok) {
          throw new Error(`Simulation failed (${response.status})`);
        }

        const data = (await response.json()) as StormResponse;
        const mapped = new Map<string, CalculatedRisk>();
        const newAlertItems: AlertItem[] = [];

        data.features.forEach(({ properties }) => {
          if (!properties.point_id) return;

          mapped.set(properties.point_id, {
            failure_probability: properties.failure_probability,
            risk_tier: properties.risk_tier,
            color: properties.color,
            action_protocol: properties.action_protocol,
            rain_24h_mm_adjusted: properties.rain_24h_mm_adjusted,
            rain_3d_mm_adjusted: properties.rain_3d_mm_adjusted,
            rain_7d_mm_adjusted: properties.rain_7d_mm_adjusted,
            curvature: properties.curvature,
            ndvi: properties.ndvi,
            risk_source: 'backend_model'
          });

          // Check for tier change
          const station = CORRIDOR_POINTS.find((p) => p.id === properties.point_id);
          const prevTier = previousTiersRef.current.get(properties.point_id);
          const newTier = properties.risk_tier;

          if (prevTier && station) {
            const isEscalation =
              (prevTier === 'GREEN' && (newTier === 'YELLOW' || newTier === 'RED')) ||
              (prevTier === 'YELLOW' && newTier === 'RED') ||
              (newTier === 'RED' && prevTier !== 'RED');

            if (isEscalation) {
              const alert: AlertItem = {
                id: `${properties.point_id}-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
                pointId: properties.point_id,
                stationName: station.name,
                section: station.section,
                previousTier: prevTier,
                newTier: newTier,
                modelScore: properties.failure_probability,
                scenario: `+${rainfallDelta} mm`,
                timestamp: new Date().toISOString(),
                isRead: false,
                latitude: properties.latitude,
                longitude: properties.longitude,
                elevation_m: properties.elevation_m,
                advisoryText: properties.action_protocol
              };
              newAlertItems.push(alert);

              if (newTier === 'RED') {
                setToastAlert(alert);
              }
            }
          }

          previousTiersRef.current.set(properties.point_id, properties.risk_tier);
        });

        if (!active || currentReq !== requestIdRef.current) return;

        setBackendRisks(mapped);
        setRiskStatus('backend');
        setIsBackendHealthy(true);
        setApiErrorMessage(null);

        if (newAlertItems.length > 0) {
          setAlerts((prev) => [...newAlertItems, ...prev].slice(0, 50));
        }
      } catch (err) {
        if (!active || currentReq !== requestIdRef.current) return;
        const msg = err instanceof Error ? err.message : 'Model API unavailable, showing local fallback estimate';
        setApiErrorMessage(msg);
        setBackendRisks(null);
        setRiskStatus('fallback');
        setIsBackendHealthy(false);
      }
    }, 400);

    return () => {
      active = false;
      window.clearTimeout(timer);
    };
  }, [rainfallDelta]);
  // Fetch Live Weather & Forward Timeline
  useEffect(() => {
    let active = true;
    const fetchLive = async () => {
      try {
        const [wRes, tRes] = await Promise.all([
          fetch('/api/v1/weather/live'),
          fetch('/api/v1/weather/timeline')
        ]);
        if (!active) return;
        if (wRes.ok) {
          const wData = await wRes.json();
          setLiveWeatherStations(wData.stations || []);
          setLiveWeatherStatus(wData.status_message || 'Connected');
          setLiveWeatherNotice(wData.source_notice || '');
          setIsLiveConnected(wData.is_connected ?? true);

          const mappedLive = new Map<string, CalculatedRisk>();
          (wData.stations || []).forEach((st: LiveStationData) => {
            mappedLive.set(st.point_id, {
              failure_probability: st.failure_probability,
              risk_tier: st.risk_tier,
              color: st.risk_tier === 'RED' ? '#ef4444' : st.risk_tier === 'YELLOW' ? '#eab308' : '#22c55e',
              action_protocol: st.action_protocol,
              rain_24h_mm_adjusted: st.rain_24h_mm,
              rain_3d_mm_adjusted: st.rain_3d_mm,
              rain_7d_mm_adjusted: st.rain_7d_mm,
              soil_moisture_pct_adjusted: st.soil_moisture_pct,
              risk_source: 'backend_model',
            });
          });
          setLiveRisksMap(mappedLive);
        } else {
          setLiveWeatherStatus('Live weather model unavailable, using cached telemetry');
        }

        if (tRes.ok && active) {
          const tData = await tRes.json();
          setCorridorTimeline(tData);
        }
      } catch (err) {
        if (!active) return;
        setLiveWeatherStatus('Weather server unreachable. Scenario mode remains fully active.');
        setIsLiveConnected(false);
      }
    };

    fetchLive();
    return () => { active = false; };
  }, [operationMode]);


  const risksMap = operationMode === 'LIVE' && liveRisksMap.size > 0 ? liveRisksMap : (riskStatus === 'backend' && backendRisks ? backendRisks : localRisksMap);
  const selectedPointRisk = selectedPoint ? risksMap.get(selectedPoint.id) || null : null;

  // Compute tier counts for summary banner
  let highCount = 0;
  let watchCount = 0;
  let lowCount = 0;

  CORRIDOR_POINTS.forEach((pt) => {
    const r = risksMap.get(pt.id);
    if (!r) return;
    if (r.risk_tier === 'RED') highCount++;
    else if (r.risk_tier === 'YELLOW') watchCount++;
    else lowCount++;
  });

  // Summary message
  const summaryMessage =
    operationMode === 'LIVE'
      ? (highCount > 0
          ? `Live Weather Alert: ${highCount} place${highCount > 1 ? 's are' : ' is'} High risk, ${watchCount} need watching, ${lowCount} are low.`
          : (watchCount > 0
              ? `Live Weather: 0 places are High risk, ${watchCount} need watching, ${lowCount} are low.`
              : `Live Weather: All 15 places are low risk today (post-monsoon dry season).`))
      : (rainfallDelta === 0
          ? `Normal baseline: ${highCount} places are High risk, ${watchCount} need watching, ${lowCount} are low.`
          : `With +${rainfallDelta} mm extra rain: ${highCount} places are High risk, ${watchCount} need watching, ${lowCount} are low.`);

  // Initialize Map with OpenStreetMap Standard (NO CARTO)
  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    const map = L.map(mapContainerRef.current, {
      center: [27.22, 88.51],
      zoom: 11,
      zoomControl: false,
      attributionControl: true
    });

    L.control.zoom({ position: 'topright' }).addTo(map);

    // OpenStreetMap Standard Tiles (No API key needed)
    const osmLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Phase 3: Removed static polyline between stations; route geometry is dynamic
    const markersGroup = L.layerGroup().addTo(map);
    const routeSegmentsGroup = L.layerGroup().addTo(map);

    mapInstanceRef.current = map;
    tileLayerRef.current = osmLayer;
    markersGroupRef.current = markersGroup;
    routeSegmentsGroupRef.current = routeSegmentsGroup;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  // Basemap switcher: Map (OSM), Terrain (OpenTopoMap), Satellite (Esri)
  useEffect(() => {
    if (!tileLayerRef.current || !mapInstanceRef.current) return;
    mapInstanceRef.current.removeLayer(tileLayerRef.current);

    let newLayer: L.TileLayer;

    if (mapStyle === 'terrain') {
      newLayer = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        maxZoom: 17,
        subdomains: ['a', 'b', 'c'],
        attribution:
          'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, SRTM | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a>'
      });
    } else if (mapStyle === 'satellite') {
      newLayer = L.tileLayer(
        'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        {
          maxZoom: 19,
          attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
        }
      );
    } else {
      // Default OpenStreetMap
      newLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      });
    }

    newLayer.addTo(mapInstanceRef.current);
    tileLayerRef.current = newLayer;
  }, [mapStyle]);

  // Leaflet markers (no slope numbers, clean geometric shapes)
  useEffect(() => {
    if (!markersGroupRef.current || !mapInstanceRef.current) return;
    markersGroupRef.current.clearLayers();

    CORRIDOR_POINTS.forEach((pt) => {
      const risk = risksMap.get(pt.id);
      if (!risk || (selectedFilter !== 'ALL' && risk.risk_tier !== selectedFilter)) return;

      const isSelected = selectedPoint?.id === pt.id;
      const isRed = risk.risk_tier === 'RED';
      const isYellow = risk.risk_tier === 'YELLOW';
      const tierLabel = isRed ? 'High' : isYellow ? 'Watch' : 'Low';

      // Shape definitions:
      // High: Red diamond
      // Watch: Amber triangle
      // Low: Green circle
      const markerHtml = `
        <div class="relative flex items-center justify-center cursor-pointer select-none">
          <div class="w-6 h-6 flex items-center justify-center font-bold text-xs shadow-md transition-transform ${
            isSelected ? 'scale-130 ring-2 ring-gray-900' : 'hover:scale-115'
          }" style="${
            isRed
              ? 'background-color: #dc2626; color: #ffffff; clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);'
              : isYellow
              ? 'background-color: #d97706; color: #ffffff; clip-path: polygon(50% 0%, 0% 100%, 100% 100%);'
              : 'background-color: #16a34a; color: #ffffff; border-radius: 9999px;'
          }">
            <span style="${isYellow ? 'margin-top: 4px;' : ''}">${isRed ? 'H' : isYellow ? 'W' : 'L'}</span>
          </div>
        </div>`;

      const icon = L.divIcon({
        html: markerHtml,
        className: 'custom-station-pin',
        iconSize: [24, 24],
        iconAnchor: [12, 12]
      });

      const marker = L.marker([pt.latitude, pt.longitude], { icon });

      marker.on('click', () => {
        setSelectedPoint(pt);
        mapInstanceRef.current?.panTo([pt.latitude, pt.longitude], { animate: true });
      });

      marker.bindTooltip(
        `<div style="font-family: inherit; font-size: 13px;">
          <strong>${pt.name}</strong><br/>
          <span>${tierLabel} risk (Score: ${risk.failure_probability.toFixed(2)})</span>
        </div>`,
        { direction: 'top', offset: [0, -12] }
      );

      markersGroupRef.current?.addLayer(marker);
    });
  }, [risksMap, selectedFilter, selectedPoint]);

  // Phase 3: Route Hazard Assessment Execution
  const handleAnalyzeRoute = async (startLat: number, startLon: number, endLat: number, endLon: number) => {
    setIsRouteLoading(true);
    try {
      const res = await fetch('/api/v1/route/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          start_lat: startLat,
          start_lon: startLon,
          end_lat: endLat,
          end_lon: endLon,
          operation_mode: operationMode,
          rainfall_delta: rainfallDelta,
        }),
      });
      const data = await res.json();
      if (data.status === 'success') {
        setRouteData(data);
      }
    } catch (err) {
      console.error('Failed to analyze route hazard:', err);
    } finally {
      setIsRouteLoading(false);
    }
  };

  // Draw dynamic colored route segments on Leaflet canvas
  useEffect(() => {
    if (!mapInstanceRef.current || !routeSegmentsGroupRef.current) return;
    routeSegmentsGroupRef.current.clearLayers();

    if (!routeData || !routeData.segments) return;

    const latLngsForAll: L.LatLngTuple[] = [];

    routeData.segments.forEach((seg) => {
      // seg.coordinates: [lon, lat] -> Leaflet requires [lat, lon]
      const latLngs = seg.coordinates.map((c) => [c[1], c[0]] as L.LatLngTuple);
      latLngsForAll.push(...latLngs);

      const poly = L.polyline(latLngs, {
        color: seg.color,
        weight: 6,
        opacity: 0.88,
        lineCap: 'round',
        lineJoin: 'round',
      });

      const tierLabel = seg.tier === 'RED' ? 'High Risk' : (seg.tier === 'YELLOW' ? 'Watch' : (seg.tier === 'GREEN' ? 'Low Risk' : 'No Model Coverage'));
      poly.bindTooltip(
        `<div style="font-family: inherit; font-size: 12px; font-weight: 600;">
          <strong>km ${seg.start_km.toFixed(1)} – ${seg.end_km.toFixed(1)}</strong><br/>
          <span style="color: ${seg.color}">${tierLabel}</span> (Avg Score: ${seg.avg_score.toFixed(4)})
        </div>`,
        { sticky: true }
      );

      poly.on('click', () => {
        setSelectedSegment(seg);
      });

      routeSegmentsGroupRef.current?.addLayer(poly);
    });

    if (latLngsForAll.length > 0) {
      const bounds = L.latLngBounds(latLngsForAll);
      mapInstanceRef.current.fitBounds(bounds, { padding: [50, 50], maxZoom: 13 });
    }
  }, [routeData]);

  // Toggle highway station markers layer visibility
  useEffect(() => {
    if (!markersGroupRef.current || !mapInstanceRef.current) return;
    if (showStationsLayer) {
      if (!mapInstanceRef.current.hasLayer(markersGroupRef.current)) {
        mapInstanceRef.current.addLayer(markersGroupRef.current);
      }
    } else {
      if (mapInstanceRef.current.hasLayer(markersGroupRef.current)) {
        mapInstanceRef.current.removeLayer(markersGroupRef.current);
      }
    }
  }, [showStationsLayer]);

  // Auto-trigger route if URL has route=1
  useEffect(() => {
    const routeParam = getInitialParam('route');
    if (routeParam === '1') {
      const destParam = getInitialParam('dest');
      if (destParam === 'out') {
        // Out of coverage route test: Rangpo to North Sikkim (27.60°N, 88.50°E)
        handleAnalyzeRoute(27.1764, 88.5283, 27.6000, 88.5000);
      } else {
        // In-coverage route test: Rangpo to Gangtok
        handleAnalyzeRoute(27.1764, 88.5283, 27.3389, 88.6138);
      }
    }
  }, []);

  const handleSelectStation = (point: CorridorPointData) => {
    setSelectedPoint(point);
    mapInstanceRef.current?.panTo([point.latitude, point.longitude], { animate: true });
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-gray-50 flex flex-col font-sans select-none text-gray-900">
      {/* ── Top Bar (One Line) ─────────────────────────────────── */}
      <header className="h-12 bg-white border-b border-gray-200 px-4 flex items-center justify-between shrink-0 z-20 shadow-xs">
        <div className="flex items-center gap-3">
          <button
            onClick={onBackToHome}
            className="px-2.5 py-1 rounded-md border border-gray-300 bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium text-xs flex items-center gap-1.5 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Overview</span>
          </button>

          <div className="flex items-center gap-2">
            <h1 className="font-bold text-gray-900 text-sm sm:text-base tracking-tight">
              Landslide Warning System: East Sikkim NH-10
            </h1>
          </div>
        </div>

        {/* View Switcher: Stations vs Route Warning */}
        <div className="flex items-center bg-gray-100 p-0.5 rounded-lg border border-gray-200 text-xs font-semibold">
          <button
            onClick={() => setActiveConsoleTab('STATIONS')}
            className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
              activeConsoleTab === 'STATIONS'
                ? 'bg-white text-blue-700 shadow-xs'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Corridor Places (15)
          </button>
          <button
            onClick={() => setActiveConsoleTab('ROUTE')}
            className={`px-3 py-1 rounded-md flex items-center gap-1.5 transition-all cursor-pointer ${
              activeConsoleTab === 'ROUTE'
                ? 'bg-white text-blue-700 shadow-xs'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Navigation className="w-3.5 h-3.5 text-blue-600" />
            <span>Route Warning</span>
          </button>
        </div>

        {/* Short Prototype Honesty Tag */}
        <div className="hidden lg:flex items-center gap-2 text-xs text-gray-500">
          <span
            className="px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 font-medium cursor-help"
            title="Prototype. The model was trained on synthetic labels. Not an official warning. Check IMD, GSI, district authorities and local road status."
          >
            Prototype: Synthetic model • Check IMD / GSI for official warnings
          </span>
        </div>

        {/* Status & Help */}
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-gray-200 bg-gray-50 text-xs font-medium">
            <span
              className={`w-2 h-2 rounded-full ${
                riskStatus === 'backend' && isBackendHealthy ? 'bg-green-500' : 'bg-amber-500'
              }`}
            ></span>
            <span className="text-gray-700">
              {riskStatus === 'backend' && isBackendHealthy ? 'Model connected' : 'Fallback mode'}
            </span>
          </div>

          {/* Theme Selector (VS Code Style) */}
          {onThemeChange && (
            <ThemeSelector
              currentTheme={currentTheme}
              onThemeChange={onThemeChange}
            />
          )}

          <button
            onClick={() => { setFeedbackStation(selectedPoint); setShowFeedbackModal(true); }}
            className="p-1.5 px-2 rounded-md border border-gray-300 bg-white hover:bg-gray-100 text-gray-700 text-xs font-medium cursor-pointer flex items-center gap-1.5"
            title="Report field hazard observation or dispatch emergency alert"
          >
            <MessageSquare className="w-4 h-4 text-emerald-600" />
            <span className="hidden sm:inline">Feedback & Alerts</span>
          </button>
          <button
            onClick={() => setShowAboutModal(true)}
            className="p-1.5 px-2 rounded-md border border-gray-300 bg-white hover:bg-gray-100 text-gray-700 text-xs font-medium cursor-pointer flex items-center gap-1.5"
            title="About and technical limitations"
          >
            <Info className="w-4 h-4 text-amber-600" />
            <span className="hidden sm:inline">About & Limitations</span>
          </button>

          <button
            onClick={() => setShowHelpModal(true)}
            className="p-1.5 rounded-md border border-gray-300 bg-white hover:bg-gray-100 text-gray-700 text-xs font-medium cursor-pointer flex items-center gap-1"
            title="How danger levels work"
          >
            <HelpCircle className="w-4 h-4 text-blue-600" />
            <span className="hidden sm:inline">Help</span>
          </button>

          <button
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
            className="md:hidden p-1.5 rounded border border-gray-300 bg-white text-gray-700 cursor-pointer"
          >
            <Menu className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Fallback Warning Banner if API fails */}
      {riskStatus === 'fallback' && (
        <div className="bg-amber-100 border-b border-amber-300 px-4 py-2 text-xs text-amber-900 flex items-center justify-between shrink-0 z-10">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              <strong>Model API unavailable:</strong> Showing local heuristic fallback estimate{apiErrorMessage ? ` (${apiErrorMessage})` : ''}. Early warning alerts are paused in fallback mode.
            </span>
          </div>
        </div>
      )}

      {/* ── Summary Sentence Under Top Bar (Main Message of Page) ─ */}
      <div className="bg-blue-50/80 border-b border-blue-200 px-4 py-2 shrink-0 z-10 flex items-center justify-between">
        <p className="text-sm sm:text-base font-semibold text-blue-950 flex items-center gap-2">
          <span>{activeConsoleTab === 'ROUTE' && routeData?.route_summary ? routeData.route_summary.summary_sentence : summaryMessage}</span>
        </p>
        {operationMode === 'LIVE' ? (
          <span className="text-xs text-blue-800 font-medium hidden sm:inline">
            Weather is the nearest model grid cell, not a measurement at the station (early November dry season)
          </span>
        ) : (
          <span className="text-xs text-blue-800 font-medium hidden sm:inline">
            Move the slider below to test other rain levels
          </span>
        )}
      </div>

      {/* ── Main Area ─────────────────────────────────────────── */}
      <div className="flex-1 flex relative overflow-hidden">
        {/* Left Narrow Panel (Stations list & Alert inbox) */}
        <div
          className={`${
            mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0 transition-transform duration-200 absolute md:relative z-20 h-full`}
        >
          {activeConsoleTab === 'ROUTE' ? (
            <RouteWarningPanel
              onAnalyzeRoute={handleAnalyzeRoute}
              isLoading={isRouteLoading}
              routeData={routeData}
              selectedSegment={selectedSegment}
              onSelectSegment={setSelectedSegment}
              showStationsLayer={showStationsLayer}
              onToggleStationsLayer={setShowStationsLayer}
              rainfallDelta={rainfallDelta}
              operationMode={operationMode}
              onCloseRoute={() => setActiveConsoleTab('STATIONS')}
            />
          ) : (
            <LeftSidebar
              onBackToHome={onBackToHome}
              selectedFilter={selectedFilter}
              onSelectFilter={setSelectedFilter}
              points={CORRIDOR_POINTS}
              risksMap={risksMap}
              isBackendHealthy={isBackendHealthy}
              riskStatus={riskStatus}
              selectedPointId={selectedPoint?.id || null}
              onSelectPoint={handleSelectStation}
              alerts={alerts}
              onSelectAlertStation={handleSelectStation}
              onClearAlerts={() => {
                setAlerts([]);
                setSelectedAlert(null);
              }}
              onMarkAllRead={() => setAlerts((prev) => prev.map((a) => ({ ...a, isRead: true })))}
              selectedAlert={selectedAlert}
              onSelectAlert={setSelectedAlert}
              onOpenHelp={() => setShowHelpModal(true)}
              rainfallDelta={rainfallDelta}
              operationMode={operationMode}
              onModeChange={setOperationMode}
              liveWeatherStatus={liveWeatherStatus}
              liveWeatherNotice={liveWeatherNotice}
              corridorTimeline={corridorTimeline}
            />
          )}
        </div>

        {/* Map Area */}
        <div className="flex-1 flex flex-col relative h-full">
          {/* Map canvas */}
          <div className="flex-1 relative w-full h-full">
            <div ref={mapContainerRef} className="w-full h-full z-0" />

            {/* Station Inspector Drawer */}
            <LocationInspector
              point={selectedPoint}
              risk={selectedPointRisk}
              onClose={() => setSelectedPoint(null)}
              onPanToStation={handleSelectStation}
              rainfallDelta={rainfallDelta}
              operationMode={operationMode}
              liveStationData={selectedPoint ? liveWeatherStations.find(s => s.point_id === selectedPoint.id) || null : null}
              stationTimeline={selectedPoint && corridorTimeline ? corridorTimeline.station_strips.find(s => s.point_id === selectedPoint.id) || null : null}
            />

            {/* Unobtrusive Toast for High Risk Alerts */}
            {toastAlert && (
              <div className="absolute top-4 right-4 z-[1020] max-w-sm p-3.5 bg-white border-l-4 border-red-600 border border-gray-200 rounded-lg shadow-lg text-sm space-y-1">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-1.5 font-bold text-red-700">
                    <ShieldAlert className="w-4 h-4 shrink-0" />
                    <span>High Risk Alert</span>
                  </div>
                  <button
                    onClick={() => setToastAlert(null)}
                    className="p-1 text-gray-400 hover:text-gray-700 cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="text-gray-900 font-semibold">{toastAlert.stationName}</div>
                <div className="text-xs text-gray-600">
                  Moved to High risk with {toastAlert.scenario} extra rain.
                </div>
                <div className="pt-1 flex items-center justify-between text-xs">
                  <button
                    onClick={() => {
                      const st = CORRIDOR_POINTS.find((p) => p.id === toastAlert.pointId);
                      if (st) handleSelectStation(st);
                      setSelectedAlert(toastAlert);
                      setToastAlert(null);
                    }}
                    className="text-blue-600 hover:underline font-medium cursor-pointer"
                  >
                    Inspect details →
                  </button>
                  <span className="text-[11px] text-gray-400">Simulated scenario</span>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Dock: Live Timeline Dock in Live Mode, Rain Slider Dock in Scenario Mode */}
          {operationMode === 'LIVE' ? (
            <div className="bg-white/95 backdrop-blur-md border-t border-gray-300 px-4 py-2 shadow-lg flex items-center justify-between gap-2.5 z-10 shrink-0 min-w-0">
              <div className="flex items-center gap-2 shrink-0">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-bold text-xs text-gray-900 uppercase tracking-wide">Live Atmospheric Model Mode</span>
                <span className="text-[11px] text-gray-500 hidden md:inline">
                  (Source: Open-Meteo ~10 km grid)
                </span>
              </div>

              {corridorTimeline && (
                <div className="flex items-center gap-1.5 text-xs shrink-0">
                  <span className="text-gray-500 font-medium hidden sm:inline">72h Forward Strip:</span>
                  <div className="flex gap-1">
                    {Object.entries(corridorTimeline.horizons).map(([hKey, hData]: [string, any]) => {
                      const peakTier = hData.peak_risk_tier;
                      return (
                        <div
                          key={hKey}
                          className={`px-1.5 py-0.5 rounded text-[11px] font-semibold border ${
                            peakTier === 'RED'
                              ? 'bg-red-100 text-red-800 border-red-300'
                              : peakTier === 'YELLOW'
                              ? 'bg-amber-100 text-amber-800 border-amber-300'
                              : 'bg-green-100 text-green-800 border-green-300'
                          }`}
                          title={`Horizon ${hKey}: ${hData.tier_counts.RED} High, ${hData.tier_counts.YELLOW} Watch, ${hData.tier_counts.GREEN} Low`}
                        >
                          {hKey}: {peakTier === 'RED' ? 'High' : peakTier === 'YELLOW' ? 'Watch' : 'Low'}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => setOperationMode('SCENARIO')}
                  className="px-2.5 py-1 rounded-lg border border-blue-600 bg-blue-50 text-blue-700 hover:bg-blue-100 font-semibold text-xs cursor-pointer shadow-xs transition-colors whitespace-nowrap"
                >
                  Switch to What-if Slider →
                </button>
              </div>
            </div>
          ) : (
            <BottomDock
              rainfallDelta={rainfallDelta}
              onChangeRainfallDelta={setRainfallDelta}
              mapStyle={mapStyle}
              onToggleMapStyle={setMapStyle}
              points={CORRIDOR_POINTS}
              risksMap={risksMap}
            />
          )}
        </div>
      </div>

      {/* ── How Tiers Work Help Modal ──────────────────────────── */}
      <AboutLimitationsModal isOpen={showAboutModal} onClose={() => setShowAboutModal(false)} />
      <FeedbackAlertsModal
        isOpen={showFeedbackModal}
        onClose={() => setShowFeedbackModal(false)}
        selectedStationName={feedbackStation?.name || selectedPoint?.name}
        selectedStationId={feedbackStation?.id || selectedPoint?.id}
      />

      {showHelpModal && (
        <div className="fixed inset-0 z-[1050] bg-black/40 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl border border-gray-300 max-w-md w-full p-5 space-y-4 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-bold text-gray-900 text-base">How Danger Levels Work</h3>
                <p className="text-xs text-gray-500">Based on terrain steepness and simulated rain</p>
              </div>
              <button
                onClick={() => setShowHelpModal(false)}
                className="p-1 rounded text-gray-400 hover:text-gray-700 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs leading-relaxed">
              <div className="p-3 rounded-lg bg-red-50 border border-red-200 space-y-1">
                <div className="font-bold text-red-800 text-sm flex items-center gap-1.5">
                  <span>◆ High Risk</span>
                  <span className="font-normal text-xs text-red-700">(Risk score 0.70 and above)</span>
                </div>
                <p className="text-red-950">
                  Critical danger of mud slips and road blockages. Civil defense teams advised to halt travel on vulnerable stretches and prepare shelters.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 space-y-1">
                <div className="font-bold text-amber-800 text-sm flex items-center gap-1.5">
                  <span>▲ Watch</span>
                  <span className="font-normal text-xs text-amber-700">(Risk score 0.25 to 0.70)</span>
                </div>
                <p className="text-amber-950">
                  Ground is soaking and vulnerable. Road maintenance crews notified, heavy vehicles restricted on steep stretches, and slope sensors checked.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-green-50 border border-green-200 space-y-1">
                <div className="font-bold text-green-800 text-sm flex items-center gap-1.5">
                  <span>● Low Risk</span>
                  <span className="font-normal text-xs text-green-700">(Risk score under 0.25)</span>
                </div>
                <p className="text-green-950">
                  Normal conditions. Slopes are stable under this amount of rain. Routine road monitoring continues.
                </p>
              </div>
            </div>

            <div className="text-[11px] text-gray-500 bg-gray-50 p-2.5 rounded-lg border border-gray-200">
              <strong>Note on numbers:</strong> The risk score is an AI estimate from 0 to 1, not a verified probability. The 0.25 alert boundary was tuned so the system catches at least 85% of potential disaster events.
            </div>

            <button
              onClick={() => setShowHelpModal(false)}
              className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-xs cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
