import React from 'react';
import { Download } from 'lucide-react';
import { CorridorPointData, CalculatedRisk } from '../data/corridorData';

interface BottomDockProps {
  rainfallDelta: number;
  onChangeRainfallDelta: (delta: number) => void;
  mapStyle: 'map' | 'terrain' | 'satellite';
  onToggleMapStyle: (style: 'map' | 'terrain' | 'satellite') => void;
  points: CorridorPointData[];
  risksMap: Map<string, CalculatedRisk>;
}

export const BottomDock: React.FC<BottomDockProps> = ({
  rainfallDelta,
  onChangeRainfallDelta,
  mapStyle,
  onToggleMapStyle,
  points,
  risksMap
}) => {
  const PRESET_VALUES = [0, 50, 100, 200, 300];

  const handleExportReport = () => {
    const timestamp = new Date().toLocaleString();
    let highCount = 0;
    let watchCount = 0;
    let lowCount = 0;

    let pointsDetail = '';
    points.forEach((p, idx) => {
      const r = risksMap.get(p.id);
      if (!r) return;
      if (r.risk_tier === 'RED') highCount++;
      else if (r.risk_tier === 'YELLOW') watchCount++;
      else lowCount++;

      const tierLabel = r.risk_tier === 'RED' ? 'HIGH' : r.risk_tier === 'YELLOW' ? 'WATCH' : 'LOW';

      pointsDetail += `\n${idx + 1}. ${p.name} (${p.section})
   Risk Level : ${tierLabel} (Risk Score: ${r.failure_probability.toFixed(4)})
   Elevation  : ${p.elevation_m} m | Slope: ${p.slope_deg.toFixed(1)}°
   Simulated Rain: 24h: ${r.rain_24h_mm_adjusted} mm | 7-day: ${r.rain_7d_mm_adjusted ?? p.rain_7d_mm} mm
   Advice     : ${r.action_protocol}
--------------------------------------------------------------------------------`;
    });

    const reportContent = `================================================================================
LANDSLIDE EARLY WARNING SYSTEM - SCENARIO REPORT
NH-10 Highway Corridor (East Sikkim)
Generated: ${timestamp}
================================================================================

SCENARIO OVERVIEW:
- Extra simulated rain : +${rainfallDelta} mm
- Total places checked : ${points.length} places
- High danger places   : ${highCount}
- Places needing watch : ${watchCount}
- Low risk places      : ${lowCount}

NOTE: This is a scenario test with simulated rain, not a real-time weather forecast.

STATION-BY-STATION STATUS:
${pointsDetail}

================================================================================
END OF REPORT
================================================================================`;

    const blob = new Blob([reportContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `landslide_report_${rainfallDelta}mm.txt`;
    document.body.appendChild(link);
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full bg-white border-t border-gray-300 px-3 py-2 shadow-md shrink-0 z-20">
      <div className="flex items-center justify-between gap-2.5 overflow-x-auto min-w-0">
        {/* Left / Center: Rain Slider & Presets */}
        <div className="flex items-center gap-2 min-w-0 shrink-0">
          <div className="shrink-0 hidden md:block">
            <div className="font-bold text-gray-900 text-xs">Imagine extra rain</div>
            <div className="text-[10px] text-gray-500 leading-tight">What-if test</div>
          </div>

          <div className="flex flex-col justify-center shrink-0 w-28 sm:w-32">
            <input
              type="range"
              min="0"
              max="300"
              step="5"
              value={rainfallDelta}
              onChange={(e) => onChangeRainfallDelta(Number(e.target.value))}
              className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="w-full flex justify-between text-[9px] text-gray-400 font-medium leading-none px-0.5 mt-0.5">
              <span>0 mm</span>
              <span>300 mm</span>
            </div>
          </div>

          <div className="shrink-0 px-1">
            <span className="text-base font-black text-blue-700 font-mono">
              +{rainfallDelta} mm
            </span>
          </div>

          {/* Preset Buttons */}
          <div className="flex items-center gap-1 shrink-0">
            {PRESET_VALUES.map((val) => (
              <button
                key={val}
                onClick={() => onChangeRainfallDelta(val)}
                className={`px-1.5 py-0.5 rounded text-[11px] font-medium border transition-colors cursor-pointer ${
                  rainfallDelta === val
                    ? 'bg-blue-600 border-blue-600 text-white font-semibold'
                    : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-100'
                }`}
              >
                {val} mm
              </button>
            ))}
          </div>
        </div>

        {/* Right: Basemap Switcher & Download Report */}
        <div className="flex items-center gap-1.5 shrink-0 pl-1.5 border-l border-gray-200">
          <div className="flex items-center border border-gray-300 rounded-lg p-0.5 bg-gray-100 text-[11px]">
            {(['map', 'terrain', 'satellite'] as const).map((style) => (
              <button
                key={style}
                onClick={() => onToggleMapStyle(style)}
                className={`px-1.5 py-0.5 rounded capitalize font-medium cursor-pointer transition-colors ${
                  mapStyle === style
                    ? 'bg-white text-gray-900 font-semibold shadow-xs'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {style === 'map' ? 'Map' : style === 'terrain' ? 'Terrain' : 'Satellite'}
              </button>
            ))}
          </div>

          <button
            onClick={handleExportReport}
            className="px-2 py-1 rounded-lg border border-gray-300 bg-white hover:bg-gray-100 text-gray-700 font-medium text-xs flex items-center gap-1 cursor-pointer shadow-xs whitespace-nowrap"
            title="Download text report"
          >
            <Download className="w-3 h-3" />
            <span className="hidden lg:inline text-[11px]">Download report</span>
          </button>
        </div>
      </div>
    </div>
  );
};
