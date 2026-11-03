import React, { useState, useEffect } from 'react';
import { RouteAnalysisData, RouteSegmentData } from '../data/corridorData';
import { Navigation, Search, AlertTriangle, ShieldCheck, MapPin, ExternalLink, X, Info } from 'lucide-react';

interface RouteWarningPanelProps {
  onAnalyzeRoute: (startLat: number, startLon: number, endLat: number, endLon: number) => void;
  isLoading: boolean;
  routeData: RouteAnalysisData | null;
  selectedSegment: RouteSegmentData | null;
  onSelectSegment: (seg: RouteSegmentData | null) => void;
  showStationsLayer: boolean;
  onToggleStationsLayer: (show: boolean) => void;
  rainfallDelta: number;
  operationMode: 'SCENARIO' | 'LIVE';
  onCloseRoute: () => void;
}

const PRESET_PLACES = [
  { name: 'Rangpo Entry Checkpost', lat: 27.1764, lon: 88.5283, desc: 'Sikkim border gateway, NH-10' },
  { name: 'Singtam Valley Hub', lat: 27.2348, lon: 88.4981, desc: 'Central NH-10 junction' },
  { name: 'Melli Gateway Bridge', lat: 27.1264, lon: 88.4681, desc: 'West Bengal border' },
  { name: '29th Mile Landslide Zone', lat: 27.0215, lon: 88.4419, desc: 'Lower Teesta gorge' },
  { name: 'Ranipool Bridge Corridor', lat: 27.2934, lon: 88.5837, desc: 'Gangtok approach' },
  { name: 'Gangtok Zero Point Ridge', lat: 27.3389, lon: 88.6138, desc: 'Capital ridge, East Sikkim' },
  { name: 'Dikchu River Corridor', lat: 27.4125, lon: 88.5520, desc: 'North Sikkim highway fork' },
  { name: 'Out-of-Coverage Point (North)', lat: 27.6000, lon: 88.5000, desc: 'Beyond model bbox (>27.45°N)' },
];

export const RouteWarningPanel: React.FC<RouteWarningPanelProps> = ({
  onAnalyzeRoute,
  isLoading,
  routeData,
  selectedSegment,
  onSelectSegment,
  showStationsLayer,
  onToggleStationsLayer,
  rainfallDelta,
  operationMode,
  onCloseRoute,
}) => {
  const isOutOfCoverageRoute = Boolean(routeData?.segments.some(s => s.tier === 'NO_COVERAGE'));
  const [startPlace, setStartPlace] = useState(PRESET_PLACES[0]);
  const [destPlace, setDestPlace] = useState(() => isOutOfCoverageRoute ? PRESET_PLACES[7] : PRESET_PLACES[5]);
  const [destQuery, setDestQuery] = useState(() => isOutOfCoverageRoute ? PRESET_PLACES[7].name : PRESET_PLACES[5].name);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  // Initial auto-trigger if routeData is null
  useEffect(() => {
    if (!routeData && !isLoading) {
      onAnalyzeRoute(startPlace.lat, startPlace.lon, destPlace.lat, destPlace.lon);
    }
  }, []);

  const handleSearchDest = async () => {
    if (!destQuery.trim()) return;
    setIsSearching(true);
    try {
      const res = await fetch(`/api/v1/route/geocode?q=${encodeURIComponent(destQuery)}`);
      const data = await res.json();
      setSearchResults(data);
    } catch {
      setSearchResults(PRESET_PLACES.filter(p => p.name.toLowerCase().includes(destQuery.toLowerCase())));
    } finally {
      setIsSearching(false);
    }
  };

  const handleSelectSearchResult = (p: any) => {
    setDestPlace({ name: p.name, lat: p.latitude || p.lat, lon: p.longitude || p.lon, desc: p.description || '' });
    setDestQuery(p.name);
    setSearchResults([]);
    onAnalyzeRoute(startPlace.lat, startPlace.lon, p.latitude || p.lat, p.longitude || p.lon);
  };

  const handleTriggerPlan = () => {
    onAnalyzeRoute(startPlace.lat, startPlace.lon, destPlace.lat, destPlace.lon);
  };

  return (
    <div className="w-80 md:w-88 h-full flex flex-col bg-white border-r border-gray-200 text-sm shrink-0 z-10 shadow-sm overflow-hidden">
      {/* Top Header */}
      <div className="p-3.5 border-b border-gray-200 bg-slate-50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0">
            <Navigation className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-gray-900">Route Hazard Warning</h2>
            <p className="text-[11px] text-gray-500">Real-road driving geometry & 30m DEM risk</p>
          </div>
        </div>
        <button
          onClick={onCloseRoute}
          className="p-1 rounded text-gray-400 hover:text-gray-700 hover:bg-gray-200 transition-colors"
          title="Back to Station List"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="p-3.5 space-y-3 flex-1 overflow-y-auto">
        {/* Origin & Destination Inputs */}
        <div className="space-y-2 p-3 bg-gray-50 rounded-xl border border-gray-200 text-xs">
          <div className="space-y-1">
            <label className="text-[11px] font-semibold text-gray-600 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" /> Start Location
            </label>
            <select
              value={startPlace.name}
              onChange={(e) => {
                const found = PRESET_PLACES.find(p => p.name === e.target.value);
                if (found) setStartPlace(found);
              }}
              className="w-full px-2.5 py-1.5 bg-white border border-gray-300 rounded-lg text-xs font-medium text-gray-800 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              {PRESET_PLACES.map(p => (
                <option key={p.name} value={p.name}>{p.name}</option>
              ))}
            </select>
          </div>

          <div className="space-y-1 relative">
            <label className="text-[11px] font-semibold text-gray-600 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-rose-500 inline-block" /> Destination
            </label>
            <div className="flex gap-1.5">
              <input
                type="text"
                value={destQuery}
                onChange={(e) => setDestQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearchDest()}
                placeholder="Search town, landmark, or milestone..."
                className="flex-1 px-2.5 py-1.5 bg-white border border-gray-300 rounded-lg text-xs font-medium text-gray-800 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button
                onClick={handleSearchDest}
                disabled={isSearching}
                className="px-2.5 py-1.5 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-lg text-xs flex items-center gap-1 transition-colors disabled:opacity-50"
                title="Search with OpenStreetMap Nominatim"
              >
                <Search className="w-3.5 h-3.5" />
                <span>{isSearching ? '...' : 'Find'}</span>
              </button>
            </div>

            {/* Search Dropdown */}
            {searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-xl z-50 max-h-48 overflow-y-auto divide-y divide-gray-100">
                {searchResults.map((r, i) => (
                  <div
                    key={i}
                    onClick={() => handleSelectSearchResult(r)}
                    className="p-2 hover:bg-blue-50 cursor-pointer text-left transition-colors"
                  >
                    <div className="font-semibold text-gray-900 text-xs">{r.name}</div>
                    <div className="text-[10px] text-gray-500 truncate">{r.description}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={handleTriggerPlan}
            disabled={isLoading}
            className="w-full mt-1 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-xs flex items-center justify-center gap-1.5 shadow transition-colors disabled:opacity-50"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>{isLoading ? 'Sampling DEM & Scoring Route...' : 'Calculate Route Risk'}</span>
          </button>
        </div>

        {/* Layer Toggles & Mode Indicator */}
        <div className="flex items-center justify-between px-1 text-[11px] text-gray-600">
          <label className="flex items-center gap-1.5 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={showStationsLayer}
              onChange={(e) => onToggleStationsLayer(e.target.checked)}
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 w-3.5 h-3.5"
            />
            <span>Show Highway Station Markers</span>
          </label>
          <span className="font-medium text-slate-500">
            {operationMode === 'LIVE' ? 'Live Weather' : `+${rainfallDelta} mm Rain`}
          </span>
        </div>

        {/* Route Risk Summary Sentence Banner */}
        {routeData && routeData.route_summary && (
          <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl space-y-1.5 text-xs text-blue-950">
            <div className="flex items-center justify-between font-bold text-blue-900">
              <span className="flex items-center gap-1">
                <Navigation className="w-3.5 h-3.5 text-blue-600" />
                <span>{routeData.route_summary.total_distance_km} km Driving Route</span>
              </span>
              <span className="text-[11px] text-blue-700 font-medium">
                ~{routeData.route_summary.estimated_duration_min} min drive
              </span>
            </div>
            <p className="font-semibold text-gray-900 leading-snug">
              {routeData.route_summary.summary_sentence}
            </p>
            <div className="text-[10px] text-gray-500">
              Sampled at 300 m increments ({routeData.route_summary.sample_points_count} points) from NASA SRTM 30m DEM.
            </div>
          </div>
        )}

        {/* Legend */}
        <div className="p-2.5 bg-gray-50 border border-gray-200 rounded-lg text-[11px] space-y-1">
          <div className="font-semibold text-gray-700">Route Hazard Legend:</div>
          <div className="grid grid-cols-2 gap-1.5 text-[11px]">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-1.5 rounded-full bg-emerald-600" />
              <span>Low Risk (p &lt; 0.25)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-1.5 rounded-full bg-amber-500" />
              <span>Watch (0.25–0.70)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-1.5 rounded-full bg-red-600" />
              <span>High Risk (p &ge; 0.70)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-1.5 rounded-full bg-slate-400" />
              <span>No Coverage (Out of BBox)</span>
            </div>
          </div>
        </div>

        {/* Plain-English Route Segments Breakdown */}
        {routeData && routeData.segments && (
          <div className="space-y-1.5">
            <div className="text-xs font-bold text-gray-800 flex items-center justify-between">
              <span>Route Danger Segments ({routeData.segments.length}):</span>
              <span className="text-[10px] text-gray-500 font-normal">Click segment to inspect</span>
            </div>
            <div className="space-y-1 max-h-56 overflow-y-auto pr-0.5">
              {routeData.segments.map((seg, idx) => {
                const isSelected = selectedSegment?.start_km === seg.start_km && selectedSegment?.end_km === seg.end_km;
                const isRed = seg.tier === 'RED';
                const isYellow = seg.tier === 'YELLOW';
                const isGreen = seg.tier === 'GREEN';
                const isNoCov = seg.tier === 'NO_COVERAGE';

                return (
                  <div
                    key={idx}
                    onClick={() => onSelectSegment(seg)}
                    className={`p-2.5 rounded-lg border text-xs cursor-pointer transition-all flex items-center justify-between gap-2 ${
                      isSelected
                        ? 'ring-2 ring-blue-500 bg-blue-50/70 border-blue-400 shadow-sm'
                        : 'bg-white hover:bg-gray-50 border-gray-200'
                    }`}
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <span
                        className="w-2.5 h-2.5 rounded-full shrink-0"
                        style={{ backgroundColor: seg.color }}
                      />
                      <div className="truncate">
                        <div className="font-semibold text-gray-900">
                          km {seg.start_km.toFixed(1)} – {seg.end_km.toFixed(1)}
                        </div>
                        <div className="text-[10px] text-gray-500">
                          {seg.sample_points_count} sample points • avg score: {seg.avg_score.toFixed(4)}
                        </div>
                      </div>
                    </div>
                    <span
                      className={`px-1.5 py-0.5 rounded text-[10px] font-bold border shrink-0 ${
                        isRed
                          ? 'bg-red-100 text-red-800 border-red-300'
                          : isYellow
                          ? 'bg-amber-100 text-amber-800 border-amber-300'
                          : isGreen
                          ? 'bg-green-100 text-green-800 border-green-300'
                          : 'bg-slate-100 text-slate-700 border-slate-300'
                      }`}
                    >
                      {isRed ? 'High' : isYellow ? 'Watch' : isGreen ? 'Low' : 'No Coverage'}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Selected Segment Inspector Card */}
        {selectedSegment && (
          <div className="p-3 bg-slate-900 text-white rounded-xl shadow-lg space-y-2 text-xs">
            <div className="flex items-center justify-between border-b border-slate-700 pb-2">
              <div className="font-bold text-sm flex items-center gap-1.5">
                <span
                  className="w-2.5 h-2.5 rounded-full inline-block"
                  style={{ backgroundColor: selectedSegment.color }}
                />
                <span>Segment km {selectedSegment.start_km.toFixed(1)} – {selectedSegment.end_km.toFixed(1)}</span>
              </div>
              <button
                onClick={() => onSelectSegment(null)}
                className="text-slate-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div>
                <span className="text-slate-400">Risk Tier:</span>{' '}
                <strong className={
                  selectedSegment.tier === 'RED' ? 'text-red-400' :
                  selectedSegment.tier === 'YELLOW' ? 'text-amber-400' :
                  selectedSegment.tier === 'GREEN' ? 'text-emerald-400' : 'text-slate-400'
                }>{selectedSegment.tier}</strong>
              </div>
              <div>
                <span className="text-slate-400">Avg Model Score:</span>{' '}
                <strong className="text-slate-200">{selectedSegment.avg_score.toFixed(4)}</strong>
              </div>
            </div>

            {/* Top 3 Hazard Factors */}
            <div className="p-2 rounded bg-slate-800 border border-slate-700 text-[11px] space-y-1">
              <div className="text-slate-300 font-semibold">Highest Contributing Factors vs Route Avg:</div>
              <ul className="list-disc list-inside text-slate-400 space-y-0.5 text-[10px]">
                <li>Steep local slope relative to route gradient</li>
                <li>Convex / plan curvature in mountain cut</li>
                <li>Accumulated hydrometeorological saturation</li>
              </ul>
            </div>

            {/* Reliability Badges */}
            <div className="text-[10px] space-y-1 text-slate-400">
              <div>
                <span className="text-slate-300 font-semibold">Data Provenance:</span>
              </div>
              <div className="flex flex-wrap gap-1">
                <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">From terrain data (DEM)</span>
                <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">Approximate (road/river dist)</span>
                <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">Default value (median NDVI)</span>
              </div>
            </div>

            {/* External Navigation Link */}
            <a
              href={`https://www.google.com/maps/dir/?api=1&origin=${startPlace.lat},${startPlace.lon}&destination=${destPlace.lat},${destPlace.lon}&travelmode=driving`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 w-full py-1.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded text-center text-xs flex items-center justify-center gap-1 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open in Google Maps Navigation</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
