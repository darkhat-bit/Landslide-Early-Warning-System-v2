import React, { useState } from 'react';
import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
  MapPin,
  ShieldCheck,
  Info
} from 'lucide-react';

import { ThemeSelector } from './ThemeSelector';
import { ThemeId } from '../utils/theme';

interface LandingPageProps {
  onLaunchConsole: () => void;
  currentTheme?: ThemeId;
  onThemeChange?: (theme: ThemeId) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  onLaunchConsole,
  currentTheme = 'light',
  onThemeChange
}) => {
  const [showTechnicalDetails, setShowTechnicalDetails] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans theme-container">
      {/* ── Top Bar ───────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 px-4 sm:px-8 py-3.5 border-b theme-header">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white text-base">
              L
            </div>
            <div>
              <div className="font-semibold text-base">
                East Sikkim Landslide Warning
              </div>
              <div className="text-xs opacity-70">
                NH-10 Corridor • Prototype
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {onThemeChange && (
              <ThemeSelector
                currentTheme={currentTheme}
                onThemeChange={onThemeChange}
              />
            )}

            <button
              onClick={onLaunchConsole}
              className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm flex items-center gap-2 transition-colors shadow-sm cursor-pointer"
            >
              <span>Open the map</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* ── Main Overview Section ─────────────────────────────── */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-8 py-10 space-y-8">
        {/* Hero Card */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm space-y-6">
          <div className="space-y-3">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              East Sikkim NH-10 Landslide Risk Explorer
            </h1>

            <p className="text-slate-600 text-base leading-relaxed">
              This tool helps you explore how intense rainfall could affect landslide risk along 15 key points on the National Highway 10 corridor. Slide the rain control to see which sections of the highway stay safe and which ones reach high risk under heavy monsoon downpours.
            </p>
          </div>

          <div>
            <button
              onClick={onLaunchConsole}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base transition-colors shadow-sm"
            >
              <span>Open the map</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* 3-line "What is real and what is simulated" box */}
          <div className="rounded-lg bg-blue-50/60 border border-blue-100 p-4 space-y-2 text-sm text-slate-700">
            <div className="font-semibold text-blue-950 flex items-center gap-1.5 text-sm mb-1">
              <Info className="w-4 h-4 text-blue-600 shrink-0" />
              <span>What is real and what is simulated</span>
            </div>
            <div className="space-y-1.5 leading-relaxed text-slate-700">
              <p>
                <strong className="text-slate-900">• Real:</strong> Slopes, elevations, and terrain contours come from actual NASA SRTM 30-meter elevation measurements.
              </p>
              <p>
                <strong className="text-slate-900">• Approximate:</strong> Highway mile markers, distances to roads, and distances to the Teesta River are estimated corridor points.
              </p>
              <p>
                <strong className="text-slate-900">• Simulated:</strong> Rainfall amounts and soil moisture levels are what-if scenario tests, not live sensor readings.
              </p>
            </div>
          </div>
        </div>

        {/* ── Collapsible Technical Details ───────────────────── */}
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
          <button
            onClick={() => setShowTechnicalDetails(!showTechnicalDetails)}
            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
          >
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-900 text-base">Technical details & data sources</span>
              <span className="text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded">11 factors</span>
            </div>
            {showTechnicalDetails ? (
              <ChevronUp className="w-5 h-5 text-slate-500" />
            ) : (
              <ChevronDown className="w-5 h-5 text-slate-500" />
            )}
          </button>

          {showTechnicalDetails && (
            <div className="px-6 pb-6 pt-2 border-t border-slate-100 space-y-6 text-sm">
              {/* How Tiers Work */}
              <div className="space-y-2">
                <h2 className="font-semibold text-slate-900 text-sm">How risk tiers work</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3 rounded-lg border border-emerald-200 bg-emerald-50/50">
                    <div className="font-semibold text-emerald-800">● Low (Score &lt; 0.25)</div>
                    <div className="text-xs text-slate-600 mt-1">Normal conditions. Routine highway movement.</div>
                  </div>
                  <div className="p-3 rounded-lg border border-amber-200 bg-amber-50/50">
                    <div className="font-semibold text-amber-800">▲ Watch (0.25 to 0.70)</div>
                    <div className="text-xs text-slate-600 mt-1">Heightened awareness. Road crews on standby.</div>
                  </div>
                  <div className="p-3 rounded-lg border border-rose-200 bg-rose-50/50">
                    <div className="font-semibold text-rose-800">◆ High (Score ≥ 0.70)</div>
                    <div className="text-xs text-slate-600 mt-1">High risk of slope failure. Traffic may be paused.</div>
                  </div>
                </div>
              </div>

              {/* 11 Factors Table */}
              <div className="space-y-2">
                <h2 className="font-semibold text-slate-900 text-sm">11 terrain and weather factors</h2>
                <div className="border border-slate-200 rounded-lg overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-slate-50 text-slate-600 border-b border-slate-200">
                        <th className="py-2 px-3 font-semibold">Factor</th>
                        <th className="py-2 px-3 font-semibold">Unit</th>
                        <th className="py-2 px-3 font-semibold">Source</th>
                        <th className="py-2 px-3 font-semibold">Role</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      <tr>
                        <td className="py-2 px-3 font-medium text-slate-900">elevation_m</td>
                        <td className="py-2 px-3 text-slate-500">meters</td>
                        <td className="py-2 px-3"><span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-[11px] font-medium">From terrain data</span></td>
                        <td className="py-2 px-3">Height above sea level (affects rain intensity)</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-medium text-slate-900">slope_deg</td>
                        <td className="py-2 px-3 text-slate-500">degrees</td>
                        <td className="py-2 px-3"><span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-[11px] font-medium">From terrain data</span></td>
                        <td className="py-2 px-3">Steepness of the hillside</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-medium text-slate-900">aspect_deg</td>
                        <td className="py-2 px-3 text-slate-500">degrees</td>
                        <td className="py-2 px-3"><span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-[11px] font-medium">From terrain data</span></td>
                        <td className="py-2 px-3">Compass direction the slope faces</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-medium text-slate-900">curvature</td>
                        <td className="py-2 px-3 text-slate-500">curve rate</td>
                        <td className="py-2 px-3"><span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-[11px] font-medium">From terrain data</span></td>
                        <td className="py-2 px-3">Hollows collect rainwater; ridges shed it</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-medium text-slate-900">dist_to_road_m</td>
                        <td className="py-2 px-3 text-slate-500">meters</td>
                        <td className="py-2 px-3"><span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 text-[11px] font-medium">Approximate</span></td>
                        <td className="py-2 px-3">Distance to road cuts and construction edges</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-medium text-slate-900">dist_to_river_m</td>
                        <td className="py-2 px-3 text-slate-500">meters</td>
                        <td className="py-2 px-3"><span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 text-[11px] font-medium">Approximate</span></td>
                        <td className="py-2 px-3">Distance to riverbanks prone to water scouring</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-medium text-slate-900">rain_24h_mm</td>
                        <td className="py-2 px-3 text-slate-500">mm</td>
                        <td className="py-2 px-3"><span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[11px] font-medium">Simulated</span></td>
                        <td className="py-2 px-3">Rain in the last 24 hours</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-medium text-slate-900">rain_3d_mm</td>
                        <td className="py-2 px-3 text-slate-500">mm</td>
                        <td className="py-2 px-3"><span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[11px] font-medium">Simulated</span></td>
                        <td className="py-2 px-3">Cumulative rain over the last 3 days</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-medium text-slate-900">rain_7d_mm</td>
                        <td className="py-2 px-3 text-slate-500">mm</td>
                        <td className="py-2 px-3"><span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[11px] font-medium">Simulated</span></td>
                        <td className="py-2 px-3">Cumulative rain over the last 7 days</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-medium text-slate-900">soil_moisture_pct</td>
                        <td className="py-2 px-3 text-slate-500">%</td>
                        <td className="py-2 px-3"><span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[11px] font-medium">Simulated</span></td>
                        <td className="py-2 px-3">Estimated percentage of water saturating soil pores</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-medium text-slate-900">ndvi</td>
                        <td className="py-2 px-3 text-slate-500">0 to 1</td>
                        <td className="py-2 px-3"><span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[11px] font-medium">Simulated</span></td>
                        <td className="py-2 px-3">Vegetation greenness and root binding strength</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Model Note */}
              <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-600 space-y-1">
                <div className="font-semibold text-slate-800">About the machine learning model:</div>
                <p>
                  Trained on 1,000 geological data points with a Random Forest classifier (test ROC-AUC: 0.7642).
                  Risk scores represent the proportion of decision trees flagging a hazard, not a true calibrated probability.
                </p>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* ── Footer ────────────────────────────────────────────── */}
      <footer className="p-4 bg-white border-t border-slate-200 text-center text-slate-500 text-xs">
        Prototype. Rainfall is simulated. Not for real emergency use.
      </footer>
    </div>
  );
};
