import { isBorderlineScore } from '../data/trainingRanges';
import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  Copy,
  ExternalLink,
  MapPin,
  MessageSquare,
  Navigation,
  ShieldAlert,
  X
} from 'lucide-react';
import { CorridorPointData, CalculatedRisk, LiveStationData, StationTimeline } from '../data/corridorData';
import {
  getStationFeatures,
  getTopFlaggedFeatures,
  buildDirectionsUrls
} from '../utils/corridorAnalysis';

interface LocationInspectorProps {
  point: CorridorPointData | null;
  risk: CalculatedRisk | null;
  onClose: () => void;
  onPanToStation?: (point: CorridorPointData) => void;
  rainfallDelta: number;
  operationMode?: 'SCENARIO' | 'LIVE';
  liveStationData?: LiveStationData | null;
  stationTimeline?: StationTimeline | null;
  onOpenFeedback?: (point: CorridorPointData) => void;
}

export const LocationInspector: React.FC<LocationInspectorProps> = ({
  point,
  risk,
  onClose,
  onPanToStation,
  rainfallDelta,
  operationMode = 'SCENARIO',
  liveStationData,
  stationTimeline,
  onOpenFeedback,
}) => {
  const [copiedCoords, setCopiedCoords] = useState(false);
  const [showTechnicalDetails, setShowTechnicalDetails] = useState(() => window.location.hash.includes('details=1') || window.location.search.includes('details=1'));

  if (!point || !risk) return null;

  const isRed = risk.risk_tier === 'RED';
  const isYellow = risk.risk_tier === 'YELLOW';
  const tierName = isRed ? 'High' : isYellow ? 'Watch' : 'Low';
  const features = getStationFeatures(point, risk, operationMode === 'LIVE');
  const topFlagged = getTopFlaggedFeatures(point, risk);
  const { googleMapsUrl, osmUrl } = buildDirectionsUrls(point.latitude, point.longitude);

  const handleCopyCoords = () => {
    navigator.clipboard.writeText(`${point.latitude.toFixed(6)}, ${point.longitude.toFixed(6)}`);
    setCopiedCoords(true);
    setTimeout(() => setCopiedCoords(false), 2000);
  };

  return (
    <div className="absolute top-3 right-3 z-[1010] w-[95%] sm:w-96 max-h-[calc(100vh-7.5rem)] flex flex-col bg-white border border-gray-300 rounded-xl shadow-xl text-sm overflow-hidden animate-in fade-in duration-150">
      {/* ── Header ────────────────────────────────────────────── */}
      <div className="p-3.5 bg-gray-50 border-b border-gray-200 flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span
              className={`px-2 py-0.5 rounded text-xs font-semibold border ${
                isRed
                  ? 'bg-red-100 text-red-800 border-red-300'
                  : isYellow
                  ? 'bg-amber-100 text-amber-800 border-amber-300'
                  : 'bg-green-100 text-green-800 border-green-300'
              }`}
            >
              {isRed ? '◆ High' : isYellow ? '▲ Watch' : '● Low'}
            </span>
            {isBorderlineScore(risk.failure_probability) && (
              <span
                className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-purple-100 text-purple-800 border border-purple-300 shrink-0"
                title="Score is close to a tier boundary, so the tier can change with small input changes."
              >
                Borderline
              </span>
            )}
            <h3 className="font-bold text-gray-900 text-base">{point.name}</h3>
          </div>
          <div className="text-xs text-gray-500 mt-0.5 flex items-center gap-2">
            <span>{point.section}</span>
            {features.some((f) => !f.isWithinRange) ? (
              <span
                className="px-1.5 py-0.2 rounded text-[10px] font-medium bg-amber-50 text-amber-800 border border-amber-300"
                title={`Outside training range: ${features.filter((f) => !f.isWithinRange).map((f) => `${f.label} (${f.value})`).join(', ')}`}
              >
                Outside training range: {features.filter((f) => !f.isWithinRange).map((f) => f.label).join(', ')}
              </span>
            ) : (
              <span className="px-1.5 py-0.2 rounded text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                Within training range
              </span>
            )}
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-1.5 rounded text-gray-400 hover:text-gray-700 hover:bg-gray-200 cursor-pointer"
          title="Close"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* ── Scrollable Body ───────────────────────────────────── */}
      <div className="p-4 space-y-3.5 overflow-y-auto">
        {/* Simple sentence summary of risk */}
        <div
          className={`p-3 rounded-lg border leading-relaxed text-sm ${
            isRed
              ? 'bg-red-50 border-red-200 text-red-900'
              : isYellow
              ? 'bg-amber-50 border-amber-200 text-amber-900'
              : 'bg-green-50 border-green-200 text-green-900'
          }`}
        >
          {operationMode === 'LIVE' ? (
            <span>
              <strong>{point.name}</strong> is at <strong>{tierName} risk</strong> under current live weather model telemetry.
            </span>
          ) : (
            <span>
              <strong>{point.name}</strong> is at <strong>{tierName} risk</strong> with +{rainfallDelta} mm extra rain.
            </span>
          )}
        </div>

        {/* Live Weather & Option 4 Soil Moisture Breakdown (Live Mode) */}
        {operationMode === 'LIVE' && liveStationData && (
          <div className="space-y-2">
            {/* IMD 24h Rainfall */}
            <div className="p-2.5 rounded-lg bg-blue-50 border border-blue-200 text-xs text-blue-900 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-blue-800">24h Rain (IMD Standard):</span>
                <span className="font-bold text-blue-950">{liveStationData.rain_24h_mm} mm ({liveStationData.imd_category_24h})</span>
              </div>
              <div className="text-[11px] text-blue-700 flex justify-between">
                <span>3-day: {liveStationData.rain_3d_mm} mm</span>
                <span>7-day: {liveStationData.rain_7d_mm} mm</span>
              </div>
            </div>

            {/* Option 4 Soil Moisture Disclosure */}
            <div className="p-2.5 rounded-lg bg-purple-50 border border-purple-200 text-xs text-purple-900 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-purple-800">Live Soil Moisture (Option 4):</span>
                <span className="font-bold text-purple-950">{liveStationData.soil_moisture_pct}% vol</span>
              </div>
              <div className="text-[11px] text-purple-700 leading-snug">
                Open-Meteo 0–7 cm volumetric ({liveStationData.soil_moisture_m3m3} m³/m³). Note: physical saturation porosity for loam is ~45%, distinct from training heuristic percentages.
              </div>
            </div>

            {/* Grid Cell Info & Spatial Sharing */}
            <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-200 text-[11px] text-gray-700 space-y-1">
              <div>
                <strong>Model grid cell selected by Open-Meteo:</strong> {liveStationData.grid_latitude?.toFixed(4)}°N, {liveStationData.grid_longitude?.toFixed(4)}°E
              </div>
              <div>
                <strong>Open-Meteo elevation at station point:</strong> {liveStationData.grid_elevation} m
              </div>
              {liveStationData.shared_grid_with && liveStationData.shared_grid_with.length > 0 ? (
                <div className="text-amber-800 bg-amber-50/70 p-1 rounded border border-amber-200/60 leading-snug">
                  <strong>Shared Grid Cell:</strong> Identical model weather to {liveStationData.shared_grid_with.join(', ')} (~10 km resolution).
                </div>
              ) : (
                <div className="text-gray-500">Unique model grid cell along corridor.</div>
              )}
            </div>

            {/* 72h Forward Risk Timeline */}
            {stationTimeline && stationTimeline.strip && (
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-800">
                  <span>Forward Risk Timeline (72h):</span>
                  <span className="text-[10px] text-slate-500 font-normal">Forecast-based</span>
                </div>
                <div className="grid grid-cols-6 gap-1 text-center">
                  {stationTimeline.strip.map((step) => {
                    const stepRed = step.risk_tier === 'RED';
                    const stepYellow = step.risk_tier === 'YELLOW';
                    return (
                      <div
                        key={step.horizon_hours}
                        className={`p-1 rounded border text-[10px] flex flex-col items-center ${
                          stepRed
                            ? 'bg-red-100 border-red-300 text-red-900 font-bold'
                            : stepYellow
                            ? 'bg-amber-100 border-amber-300 text-amber-900 font-semibold'
                            : 'bg-green-100 border-green-300 text-green-900'
                        }`}
                      >
                        <span className="text-[10px] font-bold">+{step.horizon_hours}h</span>
                        <span className="font-mono text-[9px]">{step.failure_probability.toFixed(2)}</span>
                        <span className="text-[8px] uppercase">{stepRed ? 'High' : stepYellow ? 'Watch' : 'Low'}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Risk Score */}
        <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5">
            <span className="text-gray-600">Calculated risk score:</span>
            {isBorderlineScore(risk.failure_probability) && (
              <span
                className="px-1.5 py-0.2 rounded text-[10px] font-semibold bg-purple-100 text-purple-800 border border-purple-300"
                title="Score is close to a tier boundary, so the tier can change with small input changes."
              >
                Borderline
              </span>
            )}
          </div>
          <div className="text-right">
            <span className="font-semibold text-gray-900 text-sm">{risk.failure_probability.toFixed(4)}</span>
            <span className="text-[11px] text-gray-500 block">(not a true probability)</span>
          </div>
        </div>

        {/* Safety Warning on High Risk */}
        {isRed && (
          <div className="p-3 rounded-lg bg-red-100 border border-red-300 text-xs text-red-950 font-medium space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-red-800">
              <ShieldAlert className="w-4 h-4 text-red-700 shrink-0" />
              <span>Safety Advice</span>
            </div>
            <div>Check official road status before travelling. Heavy rockfall or mud slips likely.</div>
          </div>
        )}

        {/* Why Flagged (Top 3 factors vs median) */}
        <div className="space-y-1.5">
          <h4 className="font-semibold text-gray-900 text-xs">
            Why this place is vulnerable (compared with corridor average):
          </h4>
          <ul className="space-y-1.5 text-xs text-gray-700 list-disc list-inside bg-gray-50 p-3 rounded-lg border border-gray-200">
            {topFlagged.map((reason, idx) => (
              <li key={idx} className="leading-relaxed">
                {reason}
              </li>
            ))}
          </ul>
        </div>

        {/* Action Protocol */}
        <div className="p-3 rounded-lg bg-gray-50 border border-gray-200 space-y-1 text-xs">
          <div className="font-semibold text-gray-800">Recommended action:</div>
          <div className="text-gray-600 leading-relaxed">{risk.action_protocol}</div>
        </div>

        {/* Collapsible 11 Factors Table */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            onClick={() => setShowTechnicalDetails(!showTechnicalDetails)}
            className="w-full p-2.5 bg-gray-100 hover:bg-gray-200 text-left font-medium text-xs text-gray-800 flex items-center justify-between cursor-pointer"
          >
            <span>View 11 terrain and weather factors</span>
            {showTechnicalDetails ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          {showTechnicalDetails && (
            <div className="p-3 bg-white space-y-2 border-t border-gray-200">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-gray-200 text-gray-500 font-medium">
                    <th className="py-1 px-1">Factor</th>
                    <th className="py-1 px-1">Value</th>
                    <th className="py-1 px-1">Source</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {features.map((f) => (
                    <tr key={f.key}>
                      <td className="py-1.5 px-1 text-gray-700">
                        <div>{f.label}</div>
                        <div className="text-[10px] text-gray-400">{f.plainExplanation}</div>
                      </td>
                      <td className="py-1.5 px-1 font-semibold text-gray-900 whitespace-nowrap">{f.value}</td>
                      <td className="py-1.5 px-1 whitespace-nowrap">
                        <div className="space-y-1">
                          <span
                            className={`px-1.5 py-0.5 rounded text-[10px] font-medium border inline-block ${
                              f.sourceTag === 'From terrain data (DEM)'
                                ? 'bg-blue-50 text-blue-700 border-blue-200'
                                : f.sourceTag === 'Approximate (hand-estimated)'
                                ? 'bg-purple-50 text-purple-700 border-purple-200'
                                : f.sourceTag === 'Live weather model'
                                ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                                : f.sourceTag === 'Simulated scenario'
                                ? 'bg-sky-50 text-sky-700 border-sky-200'
                                : 'bg-gray-100 text-gray-700 border-gray-200'
                            }`}
                          >
                            {f.sourceTag}
                          </span>
                          {!f.isWithinRange && (
                            <div className="text-[10px] text-amber-700 font-medium">
                              Outside training range, less reliable
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="text-[11px] text-gray-400 pt-1 border-t border-gray-100">
                Model calculation source: {risk.risk_source === 'backend_model' ? 'Backend Model (11 physical features)' : 'Local Heuristic Fallback'}.
              </div>
            </div>
          )}
        </div>

        {/* Location & Coordinates */}
        <div className="p-2.5 rounded bg-gray-50 border border-gray-200 text-xs text-gray-600 space-y-1">
          <div className="flex items-center justify-between">
            <span>Coordinates:</span>
            <div className="flex items-center gap-1.5">
              <span className="font-mono text-xs text-gray-800">
                {point.latitude.toFixed(4)}°N, {point.longitude.toFixed(4)}°E
              </span>
              <button
                onClick={handleCopyCoords}
                className="px-2 py-0.5 rounded border border-gray-300 bg-white hover:bg-gray-100 text-[11px] text-gray-700 cursor-pointer"
              >
                {copiedCoords ? 'Copied' : 'Copy'}
              </button>
            </div>
          </div>
          <div className="text-[11px] text-gray-400">
            Station coordinates are approximate; verify the location on the ground.
          </div>
        </div>
      </div>

      {/* ── Footer Action Buttons ─────────────────────────────── */}
      <div className="p-3 bg-gray-50 border-t border-gray-200 flex flex-col gap-2">
        {onOpenFeedback && (
          <button
            onClick={() => onOpenFeedback(point)}
            className="w-full py-1.5 px-3 rounded-lg border border-emerald-300 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-semibold text-xs flex items-center justify-center gap-1.5 cursor-pointer shadow-sm transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
            <span>Report Hazard / Emergency Alert</span>
          </button>
        )}
        <div className="flex gap-2">
          {onPanToStation && (
            <button
              onClick={() => onPanToStation(point)}
              className="flex-1 py-2 px-3 rounded-lg border border-gray-300 bg-white hover:bg-gray-100 text-gray-800 font-medium text-xs flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
            >
              <MapPin className="w-3.5 h-3.5 text-gray-600" />
              <span>Center on map</span>
            </button>
          )}
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2 px-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>Directions</span>
          </a>
        </div>
        <a
          href={osmUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-center text-xs text-blue-600 hover:underline flex items-center justify-center gap-1"
        >
          <ExternalLink className="w-3 h-3" />
          <span>Open in OpenStreetMap</span>
        </a>
      </div>
    </div>
  );
};
