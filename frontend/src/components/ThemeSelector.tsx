import React, { useState, useRef, useEffect } from 'react';
import { Palette, Check, ChevronDown } from 'lucide-react';
import { THEME_OPTIONS, ThemeId, ThemeOption } from '../utils/theme';

interface ThemeSelectorProps {
  currentTheme: ThemeId;
  onThemeChange: (theme: ThemeId) => void;
  compact?: boolean;
}

export const ThemeSelector: React.FC<ThemeSelectorProps> = ({
  currentTheme,
  onThemeChange,
  compact = false
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const activeOption = THEME_OPTIONS.find((t) => t.id === currentTheme) || THEME_OPTIONS[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (themeId: ThemeId) => {
    onThemeChange(themeId);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-medium cursor-pointer transition-colors shadow-sm theme-btn"
        title="Change Color Theme (VS Code style)"
        aria-label="Color Theme"
      >
        <Palette className="w-3.5 h-3.5 text-blue-500" />
        {!compact && (
          <span className="hidden sm:inline">Theme:</span>
        )}
        <span className="font-semibold">{activeOption.name.split(' (')[0]}</span>
        <ChevronDown className="w-3 h-3 opacity-60" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 sm:w-80 rounded-xl border shadow-xl z-50 p-2 theme-dropdown">
          <div className="px-3 py-2 border-b mb-1.5 theme-dropdown-header">
            <div className="font-semibold text-xs flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Palette className="w-3.5 h-3.5 text-blue-500" />
                Color Theme
              </span>
              <span className="text-[10px] opacity-60 font-mono">VS Code Styles</span>
            </div>
            <div className="text-[11px] opacity-70 mt-0.5">
              Select an editor theme palette
            </div>
          </div>

          <div className="max-h-80 overflow-y-auto space-y-1 py-1">
            {THEME_OPTIONS.map((theme: ThemeOption) => {
              const isSelected = theme.id === currentTheme;
              return (
                <button
                  key={theme.id}
                  onClick={() => handleSelect(theme.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs flex items-center justify-between transition-colors cursor-pointer theme-dropdown-item ${
                    isSelected ? 'theme-dropdown-item-active' : ''
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    {/* Visual Color Swatch */}
                    <div
                      className="w-5 h-5 rounded-md border flex overflow-hidden shrink-0 shadow-xs"
                      style={{ borderColor: 'rgba(128,128,128,0.3)' }}
                    >
                      <div className="w-1/2 h-full" style={{ backgroundColor: theme.previewBg }} />
                      <div className="w-1/4 h-full" style={{ backgroundColor: theme.previewCard }} />
                      <div className="w-1/4 h-full" style={{ backgroundColor: theme.previewAccent }} />
                    </div>

                    <div className="min-w-0">
                      <div className="font-medium truncate flex items-center gap-1.5">
                        <span>{theme.name}</span>
                        {theme.category === 'Light' && (
                          <span className="text-[9px] px-1 rounded bg-slate-200/50 text-slate-700 font-mono">Light</span>
                        )}
                        {theme.category === 'Dark' && (
                          <span className="text-[9px] px-1 rounded bg-slate-800 text-slate-200 font-mono">Dark</span>
                        )}
                        {theme.category === 'Other' && (
                          <span className="text-[9px] px-1 rounded bg-indigo-100 text-indigo-700 font-mono">Custom</span>
                        )}
                      </div>
                      <div className="text-[10px] opacity-65 truncate mt-0.5">
                        {theme.description}
                      </div>
                    </div>
                  </div>

                  {isSelected && (
                    <Check className="w-4 h-4 text-blue-500 shrink-0 ml-2" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
