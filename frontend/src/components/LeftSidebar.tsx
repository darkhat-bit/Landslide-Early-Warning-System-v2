import React, { useState } from 'react';
import {
  ArrowLeft,
  ChevronRight,
  HelpCircle,
  MapPin,
  Radio
} from 'lucide-react';
import { CorridorPointData, CalculatedRisk, LiveStationData, CorridorTimeline } from '../data/corridorData';
import { AlertItem } from '../types/alert';
import { AlertInbox } from './AlertInbox';
import { evaluateStationReliability, isBorderlineScore } from '../data/trainingRanges';

interface LeftSidebarProps {
  onBackToHome: () => void;
  selectedFilter: 'ALL' | 'RED' | 'YELLOW' | 'GREEN';
  onSelectFilter: (filter: 'ALL' | 'RED' | 'YELLOW' | 'GREEN') => void;
  points: CorridorPointData[];
  risksMap: Map<string, CalculatedRisk>;
  isBackendHealthy: boolean;
  riskStatus: 'loading' | 'backend' | 'fallback';
  selectedPointId: string | null;
  onSelectPoint: (point: CorridorPointData) => void;
  alerts: AlertItem[];
  onSelectAlertStation: (point: CorridorPointData) => void;
  onClearAlerts: () => void;
  onMarkAllRead: () => void;
  selectedAlert: AlertItem | null;
  onSelectAlert: (alert: AlertItem | null) => void;
  onOpenHelp: () => void;
  rainfallDelta?: number;
  operationMode?: 'SCENARIO' | 'LIVE';
  onModeChange?: (mode: 'SCENARIO' | 'LIVE') => void;
  liveWeatherStatus?: string;
  liveWeatherNotice?: string;
  corridorTimeline?: CorridorTimeline | null;
  liveStationDataMap?: Map<string, LiveStationData>;
}

export const LeftSidebar: React.FC<LeftSidebarProps> = ({
  onBackToHome,
  selectedFilter,
  onSelectFilter,
  points,
  risksMap,
  isBackendHealthy,
  riskStatus,
  selectedPointId,
  onSelectPoint,
  alerts,
  onSelectAlertStation,
  onClearAlerts,
  onMarkAllRead,
  selectedAlert,
  onSelectAlert,
  onOpenHelp,
  rainfallDelta = 0,
  operationMode = 'SCENARIO',
  onModeChange,
  liveWeatherStatus,
  liveWeatherNotice,
  corridorTimeline,
  liveStationDataMap
}) => {
  const [activeTab, setActiveTab] = useState<'STATIONS' | 'ALERTS'>('STATIONS');

  // Compute counts
  let highCount = 0;
  let watchCount = 0;
  let lowCount = 0;

  points.forEach((p) => {
    const r = risksMap.get(p.id);
    if (!r) return;
    if (r.risk_tier === 'RED') highCount++;
    else if (r.risk_tier === 'YELLOW') watchCount++;
    else lowCount++;
  });

  const unreadAlerts = alerts.filter((a) => !a.isRead).length;

  // Sort stations: High first, then Watch, then Low
  const sortedPoints = [...points].sort((a, b) => {
    const rA = risksMap.get(a.id);
    const rB = risksMap.get(b.id);
    const priority = { RED: 3, YELLOW: 2, GREEN: 1 };
    const pA = priority[rA?.risk_tier || 'GREEN'] || 1;
    const pB = priority[rB?.risk_tier || 'GREEN'] || 1;
    if (pB !== pA) return pB - pA;
    return (rB?.failure_probability || 0) - (rA?.failure_probability || 0);
  });

  const filteredPoints = sortedPoints.filter((p) => {
    if (selectedFilter === 'ALL') return true;
    const r = risksMap.get(p.id);
    return r?.risk_tier === selectedFilter;
  });

  return (
    <aside className="w-80 md:w-88 h-full flex flex-col bg-white border-r border-gray-200 text-sm shrink-0 z-10 shadow-sm">
      {/* ── Mode Switcher (Scenario vs Live Conditions) ───────── */}
      <div className="p-2 border-b border-gray-200 bg-gray-100 flex gap-1 shrink-0">
        <button
          onClick={() => onModeChange?.('SCENARIO')}
          className={`flex-1 py-1.5 px-2 rounded text-xs font-semibold transition-colors cursor-pointer text-center ${
            operationMode === 'SCENARIO'
              ? 'bg-white border border-gray-300 text-gray-900 shadow-xs'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          What-if rain test
        </button>
        <button
          onClick={() => onModeChange?.('LIVE')}
          className={`flex-1 py-1.5 px-2 rounded text-xs font-semibold transition-colors cursor-pointer text-center flex items-center justify-center gap-1.5 ${
            operationMode === 'LIVE'
              ? 'bg-blue-600 text-white shadow-xs'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>Live weather</span>
        </button>
      </div>

      {/* Offline cached notification banner (Item 6) */}
      {operationMode === 'LIVE' && liveWeatherNotice && liveWeatherNotice.includes('cached') && (
        <div className="p-2 bg-amber-50 border-b border-amber-300 text-xs text-amber-900 flex items-start gap-1.5 shrink-0">
          <div className="w-2 h-2 rounded-full bg-amber-500 mt-1 shrink-0" />
          <div className="text-[11px] leading-snug font-medium">
            {liveWeatherNotice}
          </div>
        </div>
      )}

      {/* Live mode corridor summary banner */}
      {operationMode === 'LIVE' && (
        <div className="p-2.5 bg-blue-50/80 border-b border-blue-200 text-xs text-blue-950 space-y-1 shrink-0">
          <div className="font-semibold text-blue-900 flex items-center justify-between">
            <span>72h Corridor Risk Outlook:</span>
            <span className="text-[10px] text-blue-700 font-normal">Open-Meteo (~10 km)</span>
          </div>
          <p className="text-[11px] leading-snug font-medium text-blue-900">
            {corridorTimeline?.corridor_summary_sentence || 'Evaluating forward corridor risk...'}
          </p>
          <div className="text-[10px] text-blue-800 leading-tight">
            In dry weather, steep stations can still show Watch because the model weights terrain heavily and the Watch threshold (0.25) was tuned for high recall. Watch here means keep monitoring, not that a landslide is expected.
          </div>
        </div>
      )}
      {/* ── Mode Switcher Tabs ────────────────────────────────── */}
      <div className="flex border-b border-gray-200 bg-gray-50/70">
        <button
          onClick={() => setActiveTab('STATIONS')}
          className={`flex-1 py-2.5 px-3 text-center border-b-2 font-medium cursor-pointer transition-colors ${
            activeTab === 'STATIONS'
              ? 'border-blue-600 text-blue-700 bg-white font-semibold'
              : 'border-transparent text-gray-600 hover:text-gray-900'
          }`}
        >
          Places ({points.length})
        </button>
        <button
          onClick={() => setActiveTab('ALERTS')}
          className={`flex-1 py-2.5 px-3 text-center border-b-2 font-medium cursor-pointer transition-colors flex items-center justify-center gap-1.5 ${
            activeTab === 'ALERTS'
              ? 'border-blue-600 text-blue-700 bg-white font-semibold'
              : 'border-transparent text-gray-600 hover:text-gray-900'
          }`}
        >
          <span>Alerts</span>
          {unreadAlerts > 0 ? (
            <span className="px-2 py-0.2 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 border border-amber-300">
              {unreadAlerts}
            </span>
          ) : (
            <span className="text-gray-400 text-xs font-mono">({alerts.length})</span>
          )}
        </button>
      </div>

      {/* ── Tab Content ───────────────────────────────────────── */}
      {activeTab === 'ALERTS' ? (
        <div className="flex-1 overflow-hidden">
          <AlertInbox
            alerts={alerts}
            onSelectAlertStation={(pt) => {
              onSelectAlertStation(pt);
              setActiveTab('STATIONS');
            }}
            onClearAlerts={onClearAlerts}
            onMarkAllRead={onMarkAllRead}
            isBackendHealthy={isBackendHealthy}
            selectedAlert={selectedAlert}
            onSelectAlert={onSelectAlert}
            risksMap={risksMap}
          />
        </div>
      ) : (
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Summary Box & Filter Chips */}
          <div className="p-3.5 border-b border-gray-200 bg-gray-50 space-y-2.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-gray-700">Danger level summary</span>
              <button
                onClick={onOpenHelp}
                className="text-blue-600 hover:underline flex items-center gap-1 font-medium cursor-pointer"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>How tiers work</span>
              </button>
            </div>

            {/* Quick Clickable Tier Counters */}
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <button
                onClick={() => onSelectFilter(selectedFilter === 'RED' ? 'ALL' : 'RED')}
                className={`p-2 rounded-lg border transition-all cursor-pointer ${
                  selectedFilter === 'RED'
                    ? 'bg-red-600 text-white border-red-700 shadow-sm'
                    : 'bg-white border-red-200 text-red-800 hover:bg-red-50'
                }`}
              >
                <div className="font-medium text-[11px]">◆ High</div>
                <div className="text-base font-bold">{highCount}</div>
              </button>

              <button
                onClick={() => onSelectFilter(selectedFilter === 'YELLOW' ? 'ALL' : 'YELLOW')}
                className={`p-2 rounded-lg border transition-all cursor-pointer ${
                  selectedFilter === 'YELLOW'
                    ? 'bg-amber-500 text-white border-amber-600 shadow-sm'
                    : 'bg-white border-amber-200 text-amber-800 hover:bg-amber-50'
                }`}
              >
                <div className="font-medium text-[11px]">▲ Watch</div>
                <div className="text-base font-bold">{watchCount}</div>
              </button>

              <button
                onClick={() => onSelectFilter(selectedFilter === 'GREEN' ? 'ALL' : 'GREEN')}
                className={`p-2 rounded-lg border transition-all cursor-pointer ${
                  selectedFilter === 'GREEN'
                    ? 'bg-green-600 text-white border-green-700 shadow-sm'
                    : 'bg-white border-green-200 text-green-800 hover:bg-green-50'
                }`}
              >
                <div className="font-medium text-[11px]">● Low</div>
                <div className="text-base font-bold">{lowCount}</div>
              </button>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1 pt-0.5">
              {(['ALL', 'RED', 'YELLOW', 'GREEN'] as const).map((f) => {
                const label = f === 'ALL' ? 'All' : f === 'RED' ? 'High only' : f === 'YELLOW' ? 'Watch only' : 'Low only';
                const isSelected = selectedFilter === f;
                return (
                  <button
                    key={f}
                    onClick={() => onSelectFilter(f)}
                    className={`flex-1 py-1 px-1 rounded border text-xs transition-colors cursor-pointer text-center font-medium ${
                      isSelected
                        ? 'bg-gray-800 border-gray-800 text-white font-semibold'
                        : 'bg-white border-gray-300 text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Station List */}
          <div className="flex-1 overflow-y-auto divide-y divide-gray-100">
            {filteredPoints.length === 0 ? (
              <div className="p-8 text-center text-gray-500">No places match this filter.</div>
            ) : (
              filteredPoints.map((point) => {
                const r = risksMap.get(point.id);
                const isSelected = selectedPointId === point.id;
                const isRed = r?.risk_tier === 'RED';
                const isYellow = r?.risk_tier === 'YELLOW';
                const tierLabel = isRed ? 'High' : isYellow ? 'Watch' : 'Low';
                const stationInputs = (operationMode === 'LIVE' && r)
                  ? {
                      ...point,
                      rain_24h_mm: r.rain_24h_mm_adjusted,
                      rain_3d_mm: r.rain_3d_mm_adjusted,
                      rain_7d_mm: r.rain_7d_mm_adjusted ?? point.rain_7d_mm,
                      soil_moisture_pct: r.soil_moisture_pct_adjusted ?? point.soil_moisture_pct,
                    }
                  : point;
                const rel = evaluateStationReliability(
                  stationInputs,
                  operationMode === 'LIVE' ? 0 : rainfallDelta,
                  operationMode === 'LIVE'
                );
                const isBorderline = r ? isBorderlineScore(r.failure_probability) : false;

                return (
                  <div
                    key={point.id}
                    onClick={() => onSelectPoint(point)}
                    className={`p-3 transition-colors cursor-pointer hover:bg-blue-50/60 flex items-center justify-between gap-2 ${
                      isSelected ? 'bg-blue-50 border-l-4 border-blue-600' : ''
                    }`}
                  >
                    <div className="space-y-0.5 min-w-0">
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-1.5 py-0.5 rounded text-xs font-semibold border ${
                            isRed
                              ? 'bg-red-100 text-red-800 border-red-300'
                              : isYellow
                              ? 'bg-amber-100 text-amber-800 border-amber-300'
                              : 'bg-green-100 text-green-800 border-green-300'
                          }`}
                        >
                          {isRed ? '◆ High' : isYellow ? '▲ Watch' : '● Low'}
                        </span>
                        <span className="font-semibold text-gray-900 truncate">{point.name}</span>
                        {isBorderline && (
                          <span
                            className="px-1.5 py-0.2 rounded text-[10px] font-semibold bg-purple-100 text-purple-800 border border-purple-300 shrink-0"
                            title="Score is close to a tier boundary, so the tier can change with small input changes."
                          >
                            Borderline
                          </span>
                        )}
                        {rel.isWithinTrainingRange ? (
                          <span
                            className="px-1.5 py-0.2 rounded text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0"
                            title="All inputs within empirical training dataset distribution"
                          >
                            In Range
                          </span>
                        ) : (
                          <span
                            className="px-1.5 py-0.2 rounded text-[10px] font-semibold bg-amber-50 text-amber-800 border border-amber-300 shrink-0"
                            title={`Outside training range: ${rel.outOfRangeFeatureLabels.join(', ')}`}
                          >
                            Outside Range ({rel.outOfRangeFeatures.length})
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-gray-500 truncate">{point.section}</div>
                      <div className="text-[11px] text-gray-400">
                        {point.elevation_m} m elevation • Slope {point.slope_deg.toFixed(1)}°
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <div className="text-xs text-gray-500 font-medium">Risk score</div>
                      <div className="font-bold text-gray-900 text-sm">
                        {r ? r.failure_probability.toFixed(2) : '—'}
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}

      {/* ── Footer ────────────────────────────────────────────── */}
      <div className="p-2.5 bg-gray-50 border-t border-gray-200 text-xs text-gray-500 text-center">
        15 monitored places along East Sikkim NH-10
      </div>
    </aside>
  );
};
