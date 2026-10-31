import React, { useState } from 'react';
import {
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Copy,
  Download,
  ExternalLink,
  MapPin,
  Navigation,
  ShieldAlert,
  Trash2,
  X
} from 'lucide-react';
import { AlertItem } from '../types/alert';
import { CORRIDOR_POINTS, CorridorPointData, CalculatedRisk } from '../data/corridorData';
import {
  getStationFeatures,
  getTopFlaggedFeatures,
  buildDirectionsUrls
} from '../utils/corridorAnalysis';

interface AlertInboxProps {
  alerts: AlertItem[];
  onSelectAlertStation: (point: CorridorPointData) => void;
  onClearAlerts: () => void;
  onMarkAllRead: () => void;
  isBackendHealthy: boolean;
  selectedAlert: AlertItem | null;
  onSelectAlert: (alert: AlertItem | null) => void;
  risksMap: Map<string, CalculatedRisk>;
}

export const AlertInbox: React.FC<AlertInboxProps> = ({
  alerts,
  onSelectAlertStation,
  onClearAlerts,
  onMarkAllRead,
  isBackendHealthy,
  selectedAlert,
  onSelectAlert,
  risksMap
}) => {
  const [filterTier, setFilterTier] = useState<'ALL' | 'RED' | 'YELLOW' | 'GREEN'>('ALL');
  const [copiedCoords, setCopiedCoords] = useState(false);
  const [showTechnicalDetails, setShowTechnicalDetails] = useState(false);

  const unreadCount = alerts.filter((a) => !a.isRead).length;

  const handleCopyCoords = (lat: number, lon: number) => {
    navigator.clipboard.writeText(`${lat.toFixed(6)}, ${lon.toFixed(6)}`);
    setCopiedCoords(true);
    setTimeout(() => setCopiedCoords(false), 2000);
  };

  const handleExportCSV = () => {
    if (alerts.length === 0) return;
    const headers = [
      'alert_id',
      'timestamp',
      'station_id',
      'station_name',
      'section',
      'latitude',
      'longitude',
      'elevation_m',
      'previous_tier',
      'new_tier',
      'risk_score',
      'scenario',
      'advisory'
    ];

    const rows = alerts.map((a) => [
      `"${a.id}"`,
      `"${a.timestamp}"`,
      `"${a.pointId}"`,
      `"${a.stationName.replace(/"/g, '""')}"`,
      `"${a.section.replace(/"/g, '""')}"`,
      a.latitude,
      a.longitude,
      a.elevation_m,
      `"${a.previousTier === 'RED' ? 'High' : a.previousTier === 'YELLOW' ? 'Watch' : 'Low'}"`,
      `"${a.newTier === 'RED' ? 'High' : a.newTier === 'YELLOW' ? 'Watch' : 'Low'}"`,
      a.modelScore.toFixed(4),
      `"${a.scenario.replace(/"/g, '""')}"`,
      `"${a.advisoryText.replace(/"/g, '""')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const link = document.createElement('a');
    link.href = encodeURI(csvContent);
    link.download = `landslide_alerts_${Date.now()}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const tierToLabel = (t: string) => {
    if (t === 'RED') return 'High';
    if (t === 'YELLOW') return 'Watch';
    return 'Low';
  };

  // Sort: High first, then newest
  const sortedAlerts = [...alerts].sort((a, b) => {
    const priority = { RED: 3, YELLOW: 2, GREEN: 1 };
    const pDiff = (priority[b.newTier] || 0) - (priority[a.newTier] || 0);
    if (pDiff !== 0) return pDiff;
    return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
  });

  const filteredAlerts = sortedAlerts.filter((a) => {
    if (filterTier === 'ALL') return true;
    return a.newTier === filterTier;
  });

  const currentStation = selectedAlert ? CORRIDOR_POINTS.find((p) => p.id === selectedAlert.pointId) : null;
  const currentRisk = selectedAlert && currentStation ? risksMap.get(currentStation.id) : null;
  const currentFeatures = currentStation ? getStationFeatures(currentStation, currentRisk) : [];
  const topFlagged = currentStation ? getTopFlaggedFeatures(currentStation, currentRisk) : [];
  const directionsUrls = selectedAlert ? buildDirectionsUrls(selectedAlert.latitude, selectedAlert.longitude) : null;

  return (
    <div className="flex flex-col h-full bg-white text-gray-800 text-sm">
      {/* ── Top Header ────────────────────────────────────────── */}
      <div className="p-3.5 border-b border-gray-200 bg-gray-50/80 space-y-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="font-semibold text-gray-900 text-sm">Alert inbox (scenario simulation)</h2>
            {unreadCount > 0 && (
              <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 border border-amber-300">
                {unreadCount} new
              </span>
            )}
          </div>
          <div className="flex items-center gap-1.5">
            {unreadCount > 0 && (
              <button
                onClick={onMarkAllRead}
                className="px-2 py-1 rounded border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 text-xs font-medium cursor-pointer"
              >
                Mark read
              </button>
            )}
            {alerts.length > 0 && (
              <>
                <button
                  onClick={handleExportCSV}
                  className="px-2 py-1 rounded border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 text-xs font-medium cursor-pointer flex items-center gap-1"
                  title="Export alerts to CSV"
                >
                  <Download className="w-3 h-3" />
                  <span>CSV</span>
                </button>
                <button
                  onClick={onClearAlerts}
                  className="p-1 rounded border border-gray-300 bg-white text-gray-500 hover:text-red-600 hover:bg-gray-100 text-xs cursor-pointer"
                  title="Clear all alerts"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </>
            )}
          </div>
        </div>

        {/* Permanent Honesty Note */}
        <div className="p-2 rounded bg-blue-50/80 border border-blue-200 text-xs text-blue-900 leading-relaxed">
          Alerts come from simulated rain, not live sensors.
        </div>

        {/* Disconnection Banner */}
        {!isBackendHealthy && (
          <div className="p-2 rounded bg-amber-50 border border-amber-300 text-xs text-amber-900 flex items-center gap-1.5 font-medium">
            <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0" />
            <span>Alerts paused: model API not connected</span>
          </div>
        )}

        {/* Filters */}
        <div className="flex items-center gap-1 pt-0.5">
          {(['ALL', 'RED', 'YELLOW', 'GREEN'] as const).map((t) => {
            const count = t === 'ALL' ? alerts.length : alerts.filter((a) => a.newTier === t).length;
            const label = t === 'ALL' ? 'All' : t === 'RED' ? 'High' : t === 'YELLOW' ? 'Watch' : 'Low';
            const isSelected = filterTier === t;
            return (
              <button
                key={t}
                onClick={() => setFilterTier(t)}
                className={`flex-1 py-1 px-1.5 rounded border text-xs font-medium transition-colors cursor-pointer text-center ${
                  isSelected
                    ? 'bg-blue-600 border-blue-600 text-white font-semibold'
                    : 'bg-white border-gray-300 text-gray-600 hover:bg-gray-100'
                }`}
              >
                {label} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Main Content (List or Detail) ─────────────────────── */}
      <div className="flex-1 overflow-y-auto">
        {selectedAlert ? (
          /* ── DETAIL VIEW ── */
          <div className="p-4 space-y-3.5">
            <div className="flex items-start justify-between gap-2 border-b border-gray-200 pb-3">
              <div>
                <button
                  onClick={() => onSelectAlert(null)}
                  className="text-xs text-blue-600 hover:underline mb-1 cursor-pointer font-medium"
                >
                  ← Back to alerts list
                </button>
                <h3 className="font-bold text-gray-900 text-base">{selectedAlert.stationName}</h3>
                <div className="text-xs text-gray-500">{selectedAlert.section}</div>
              </div>
              <button
                onClick={() => onSelectAlert(null)}
                className="p-1 rounded text-gray-400 hover:text-gray-700 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Plain Alert Sentence */}
            <div
              className={`p-3 rounded-lg border leading-relaxed text-sm ${
                selectedAlert.newTier === 'RED'
                  ? 'bg-red-50 border-red-200 text-red-900'
                  : selectedAlert.newTier === 'YELLOW'
                  ? 'bg-amber-50 border-amber-200 text-amber-900'
                  : 'bg-green-50 border-green-200 text-green-900'
              }`}
            >
              <strong>{selectedAlert.stationName}</strong> moved from {tierToLabel(selectedAlert.previousTier)} to{' '}
              <strong>{tierToLabel(selectedAlert.newTier)}</strong> risk with {selectedAlert.scenario} extra rain.
            </div>

            {/* Risk score explanation */}
            <div className="p-3 rounded-lg bg-gray-50 border border-gray-200 space-y-1 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Calculated risk score:</span>
                <span className="font-semibold text-gray-900">{selectedAlert.modelScore.toFixed(4)}</span>
              </div>
              <div className="text-[11px] text-gray-500">
                Risk score (not a true probability). Ranges from 0 (lowest) to 1 (highest).
              </div>
            </div>

            {/* High Risk Safety Warning */}
            {selectedAlert.newTier === 'RED' && (
              <div className="p-3 rounded-lg bg-red-100 border border-red-300 text-xs text-red-950 font-medium space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-red-800">
                  <ShieldAlert className="w-4 h-4 shrink-0 text-red-700" />
                  <span>Important Safety Notice</span>
                </div>
                <div>Check official road status before travelling. High likelihood of road cuts and mud slips.</div>
              </div>
            )}

            {/* Why Flagged */}
            <div className="space-y-1.5">
              <h4 className="font-semibold text-gray-900 text-xs">
                Main reasons for risk (compared with other places on NH-10):
              </h4>
              <ul className="space-y-1.5 text-xs text-gray-700 list-disc list-inside bg-gray-50 p-3 rounded-lg border border-gray-200">
                {topFlagged.map((reason, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {reason}
                  </li>
                ))}
              </ul>
            </div>

            {/* Recommended Action */}
            <div className="p-3 rounded-lg bg-gray-50 border border-gray-200 space-y-1">
              <div className="text-xs font-semibold text-gray-800">
                Recommended action (example advice set by authorities):
              </div>
              <div className="text-xs text-gray-600 leading-relaxed">{selectedAlert.advisoryText}</div>
            </div>

            {/* Collapsible Technical Details */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setShowTechnicalDetails(!showTechnicalDetails)}
                className="w-full p-2.5 bg-gray-100 hover:bg-gray-200 text-left font-medium text-xs text-gray-800 flex items-center justify-between cursor-pointer"
              >
                <span>More details (11 terrain and weather factors)</span>
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
                      {currentFeatures.map((f) => (
                        <tr key={f.key}>
                          <td className="py-1.5 px-1 text-gray-700">
                            <div>{f.label}</div>
                            <div className="text-[10px] text-gray-400">{f.plainExplanation}</div>
                          </td>
                          <td className="py-1.5 px-1 font-semibold text-gray-900 whitespace-nowrap">{f.value}</td>
                          <td className="py-1.5 px-1 whitespace-nowrap">
                            <span
                              className={`px-1.5 py-0.5 rounded text-[10px] font-medium border ${
                                f.sourceTag === 'From terrain data'
                                  ? 'bg-blue-50 text-blue-700 border-blue-200'
                                  : f.sourceTag === 'Approximate'
                                  ? 'bg-amber-50 text-amber-700 border-amber-200'
                                  : 'bg-gray-100 text-gray-700 border-gray-200'
                              }`}
                            >
                              {f.sourceTag}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Coordinates & Caption */}
            <div className="p-2.5 rounded bg-gray-50 border border-gray-200 text-xs text-gray-600 space-y-1">
              <div className="flex items-center justify-between">
                <span>Location:</span>
                <div className="flex items-center gap-1.5">
                  <span className="font-mono text-xs text-gray-800">
                    {selectedAlert.latitude.toFixed(4)}°N, {selectedAlert.longitude.toFixed(4)}°E
                  </span>
                  <button
                    onClick={() => handleCopyCoords(selectedAlert.latitude, selectedAlert.longitude)}
                    className="px-1.5 py-0.5 rounded border border-gray-300 bg-white hover:bg-gray-100 text-[11px] text-gray-700 cursor-pointer"
                  >
                    {copiedCoords ? 'Copied' : 'Copy'}
                  </button>
                </div>
              </div>
              <div className="text-[11px] text-gray-400">
                Station coordinates are approximate; verify the location on the ground.
              </div>
            </div>

            {/* Direction Buttons */}
            <div className="pt-2 flex flex-col gap-2">
              <div className="flex gap-2">
                {currentStation && (
                  <button
                    onClick={() => onSelectAlertStation(currentStation)}
                    className="flex-1 py-2 px-3 rounded-lg border border-gray-300 bg-white hover:bg-gray-100 text-gray-800 font-medium text-xs flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    <MapPin className="w-3.5 h-3.5 text-gray-600" />
                    <span>Show on map</span>
                  </button>
                )}
                {directionsUrls && (
                  <a
                    href={directionsUrls.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Directions</span>
                  </a>
                )}
              </div>
              {directionsUrls && (
                <a
                  href={directionsUrls.osmUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center text-xs text-blue-600 hover:underline flex items-center justify-center gap-1"
                >
                  <ExternalLink className="w-3 h-3" />
                  <span>Open in OpenStreetMap</span>
                </a>
              )}
            </div>
          </div>
        ) : (
          /* ── ALERT LIST ── */
          <div className="divide-y divide-gray-100">
            {filteredAlerts.length === 0 ? (
              <div className="p-8 text-center text-gray-500 space-y-1">
                <div className="font-medium text-gray-700">No alerts in this list</div>
                <div className="text-xs">
                  Alerts will appear here when moving the rain slider increases a place's danger level.
                </div>
              </div>
            ) : (
              filteredAlerts.map((alert) => {
                const isRed = alert.newTier === 'RED';
                const isYellow = alert.newTier === 'YELLOW';

                return (
                  <div
                    key={alert.id}
                    onClick={() => onSelectAlert(alert)}
                    className={`p-3 transition-colors cursor-pointer hover:bg-gray-50 ${
                      !alert.isRead ? 'bg-blue-50/40 border-l-3 border-blue-600' : ''
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5">
                          <span
                            className={`px-1.5 py-0.5 rounded text-[11px] font-semibold border ${
                              isRed
                                ? 'bg-red-100 text-red-800 border-red-300'
                                : isYellow
                                ? 'bg-amber-100 text-amber-800 border-amber-300'
                                : 'bg-green-100 text-green-800 border-green-300'
                            }`}
                          >
                            {isRed ? '◆ High' : isYellow ? '▲ Watch' : '● Low'}
                          </span>
                          <span className="font-semibold text-gray-900 text-sm">{alert.stationName}</span>
                        </div>
                        {/* Plain sentence */}
                        <p className="text-xs text-gray-700 leading-snug">
                          Moved from {tierToLabel(alert.previousTier)} to{' '}
                          <strong className={isRed ? 'text-red-700' : isYellow ? 'text-amber-700' : 'text-green-700'}>
                            {tierToLabel(alert.newTier)}
                          </strong>{' '}
                          risk with {alert.scenario}.
                        </p>
                      </div>
                      <span className="text-[11px] text-gray-400 whitespace-nowrap">
                        {new Date(alert.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>

                    <div className="mt-2 flex items-center justify-between text-[11px] text-gray-500">
                      <span>
                        Risk score: <span className="font-semibold text-gray-700">{alert.modelScore.toFixed(4)}</span>{' '}
                        (not a true probability)
                      </span>
                      <span className="text-blue-600 hover:underline font-medium">Details →</span>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        )}
      </div>

      {/* ── Footer ────────────────────────────────────────────── */}
      <div className="p-2.5 border-t border-gray-200 bg-gray-50 text-[11px] text-gray-500 text-center">
        Prototype. Rainfall is simulated. Not for real emergency use.
      </div>
    </div>
  );
};
