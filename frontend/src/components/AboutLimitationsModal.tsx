import React from 'react';
import { X, AlertTriangle, ShieldAlert, Database, Info, Layers, Compass } from 'lucide-react';

interface AboutLimitationsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutLimitationsModal: React.FC<AboutLimitationsModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-xl shadow-2xl text-slate-100 max-h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white tracking-wide">About & System Limitations</h2>
              <p className="text-xs text-slate-400">Academic Prototype Technical Audit & Verification Disclosures</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            title="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-300">
          {/* Official Authority Disclaimer */}
          <div className="p-4 rounded-lg bg-red-950/40 border border-red-500/40 text-red-200 space-y-2">
            <div className="flex items-center gap-2 font-semibold text-red-300 text-sm">
              <AlertTriangle className="w-5 h-5 flex-shrink-0 text-red-400" />
              <span>Official Warning Authority Notice</span>
            </div>
            <p className="text-xs leading-relaxed text-red-200/90">
              Official landslide early warnings, hazard bulletins, and road advisories are issued exclusively by official authorities: the <strong>Geological Survey of India (GSI)</strong>, the <strong>India Meteorological Department (IMD)</strong>, and <strong>State Disaster Management Authorities (SSDMA / DDMAs)</strong>.
            </p>
            <p className="text-xs text-red-300/80 font-mono">
              PROTOTYPE NOTICE: This software is an educational engineering research tool. It must never be used for life-critical evacuation or emergency dispatch.
            </p>
          </div>

          {/* Model Non-Monotonicity Note */}
          <div className="p-3.5 rounded-lg bg-amber-950/30 border border-amber-500/30 text-amber-200 text-xs leading-relaxed space-y-1.5">
            <div>
              <strong>Model Behavior Note on Rainfall Monotonicity & Tier Sensitivity:</strong> The Random Forest is not monotonic in rainfall. In the current station set the number of High stations is 7 at +50 mm and 6 at +100 mm. Stations whose score is close to a tier threshold can change tier with small input changes.
            </div>
            <div>
              In sensitivity tests, replacing a near-zero live 24-hour rainfall with the training median slightly LOWERS the score at several stations, i.e. the model gives dry weather a slightly higher score than moderate rain at those stations. This is a quirk of the synthetic-label model near the edge of the training range. The cause was not verified. Because of this, Watch in dry weather must not be read as 'terrain only' or as a rainfall effect.
            </div>
          </div>

          {/* Live Weather & Soil Moisture Caveat */}
          <div className="p-3.5 rounded-lg bg-blue-950/30 border border-blue-500/30 text-blue-200 text-xs leading-relaxed space-y-1">
            <div className="font-semibold text-blue-300">Live Weather & Soil Moisture Calibration Caveat:</div>
            <p>
              The model was trained on a synthetic soil-moisture scale (5 to 90%). Live soil moisture is Open-Meteo volumetric water content (0-7 cm), so live scores are experimental and may be lower than scenario scores.
            </p>
            <p className="text-[11px] text-slate-300">
              Weather telemetry is mapped from the nearest atmospheric model grid cell (~10 km resolution), not an in-situ rain gauge at the highway milestone. Stations sharing a grid cell receive identical forecast precipitation.
            </p>
          </div>

          {/* Borderline Indicator Explanation */}
          <div className="p-3.5 rounded-lg bg-purple-950/40 border border-purple-500/40 text-purple-200 text-xs space-y-1.5">
            <div className="flex items-center gap-2 font-semibold text-purple-300">
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-900 border border-purple-400 text-purple-200 uppercase tracking-wide">
                Borderline
              </span>
              <span>Borderline Score Indicator Explanation</span>
            </div>
            <p className="leading-relaxed text-purple-200/90">
              Score is close to a tier boundary, so the tier can change with small input changes.
            </p>
            <p className="leading-relaxed text-slate-300 text-[11px]">
              A station receives the &quot;Borderline&quot; badge whenever its calculated risk score is within 0.03 of a tier threshold (either near the 0.25 Yellow boundary in [0.22, 0.28] or near the 0.70 Red boundary in [0.67, 0.73]). In the baseline corridor data, this dynamically tags Deorali (0.2544), Ranipool (0.2587), Gangtok Zero Point (0.2650), and Penlong La (0.2453), as well as storm scenarios like 29th Mile at +100 mm (0.7181), Tadong at +50 mm (0.7159), and 29th Mile at +200 mm and +300 mm (0.7089).
            </p>
          </div>

          {/* Data Provenance: Real vs Simulated */}
          <div>
            <div className="flex items-center gap-2 mb-3 text-slate-200 font-semibold text-base">
              <Database className="w-4 h-4 text-emerald-400" />
              <span>Data Provenance: What is Real vs What is Simulated</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700">
                <div className="flex items-center gap-1.5 text-emerald-400 font-semibold mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                  Real Geospatial Data
                </div>
                <p className="text-slate-300 leading-relaxed">
                  <strong>NASA SRTM 30m DEM (HGT tile N27E088):</strong> Elevation (m), slope (°), aspect (°), and surface curvature (100/m) are computed using exact numerical gradients from satellite radar elevation.
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700">
                <div className="flex items-center gap-1.5 text-blue-400 font-semibold mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-400 inline-block" />
                  Approximate Infrastructure
                </div>
                <p className="text-slate-300 leading-relaxed">
                  <strong>15 Monitored Stations:</strong> GPS coordinates mark critical chronic failure milestones along NH-10. Distance to road and distance to Teesta River are approximate geospatial estimates.
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700">
                <div className="flex items-center gap-1.5 text-purple-400 font-semibold mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-purple-400 inline-block" />
                  Scenario Weather Inputs
                </div>
                <p className="text-slate-300 leading-relaxed">
                  <strong>Precipitation & Soil Moisture:</strong> 24h, 3d, 7d rainfall and soil moisture percentages represent synthetic simulation scenarios for stress-testing, not real-time telemetry from rain gauges.
                </p>
              </div>
            </div>
          </div>

          {/* Seven Key Engineering Limitations */}
          <div>
            <div className="flex items-center gap-2 mb-3 text-slate-200 font-semibold text-base">
              <Layers className="w-4 h-4 text-amber-400" />
              <span>Seven Key Engineering Limitations (PROJECT_REPORT.md)</span>
            </div>
            <ol className="space-y-2.5 text-xs text-slate-300 list-decimal list-inside pl-1">
              <li className="leading-relaxed">
                <strong>Simulated Weather:</strong> Dynamic precipitation (24h, 3d, 7d) and soil moisture in scenario mode are test values, not live automated weather station (AWS) or Doppler radar nowcasts.
              </li>
              <li className="leading-relaxed">
                <strong>Approximate Geometry:</strong> The 15 highway stations represent approximate milestone coordinates; the road polyline is a piecewise approximation; river distances are estimated without fine-scale vector GIS shapefiles.
              </li>
              <li className="leading-relaxed">
                <strong>Historical Ground Truth Noise (40 Events with up to 5 km Error):</strong> The historical GLC inventory contains only 40 verified events in the Sikkim tile, with spatial location uncertainties up to 5 km relative to 30 m DEM cells.
              </li>
              <li className="leading-relaxed">
                <strong>Synthetic Benchmark Training Labels:</strong> The 1,500-sample training dataset assigns ground-truth failure labels using synthetic heuristic criteria rather than verified subsurface inclinometer or piezometer sensors.
              </li>
              <li className="leading-relaxed">
                <strong>Uncalibrated Decision Scores:</strong> Decision scores produced by Random Forest represent raw tree vote fractions rather than formally calibrated posterior probabilities; thresholds (0.25 Yellow, 0.70 Red) are research prototypes.
              </li>
              <li className="leading-relaxed">
                <strong>Year 2000 Baseline DEM:</strong> SRTM 30m topographic data reflects ground elevation from February 2000; it does not capture post-2000 highway widening, slope benching, or gabion retaining walls.
              </li>
              <li className="leading-relaxed">
                <strong>No Multi-Season Rain Gauge Calibration:</strong> Dynamic rainfall trigger thresholds have not been calibrated or validated across multi-season telemetry from automated ground rain-gauge networks.
              </li>
            </ol>
          </div>

          {/* Training Range Validation */}
          <div className="p-4 rounded-lg bg-slate-800/60 border border-slate-700 text-xs space-y-2">
            <div className="flex items-center gap-2 font-semibold text-slate-200">
              <Compass className="w-4 h-4 text-indigo-400" />
              <span>Training Distribution Bounds</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Every station input is dynamically cross-checked against the empirical bounding box of the training dataset (<code>data/dataset.csv</code>). When an input value falls outside the dataset min/max (such as cumulative 24h rainfall exceeding 209.2 mm at storm increments &ge; 200 mm where station 24h rainfall reaches 228.0 to 252.0 mm), it is explicitly flagged as <em>"Outside training range, less reliable"</em>.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 border-t border-slate-800 bg-slate-950 flex items-center justify-between text-xs text-slate-400">
          <span>Prototype System · Valid corridor: Lat 27.00°–27.45°, Lon 88.40°–88.65°</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

