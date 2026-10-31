export type ThemeId = 'light' | 'dark' | 'grey' | 'solarized' | 'nord' | 'high-contrast';

export interface ThemeOption {
  id: ThemeId;
  name: string;
  category: 'Light' | 'Dark' | 'Other';
  previewBg: string;
  previewCard: string;
  previewAccent: string;
  previewText: string;
  description: string;
}

export const THEME_OPTIONS: ThemeOption[] = [
  {
    id: 'light',
    name: 'White (VS Code Light+)',
    category: 'Light',
    previewBg: '#f8fafc',
    previewCard: '#ffffff',
    previewAccent: '#2563eb',
    previewText: '#0f172a',
    description: 'Clean bright daylight theme with maximum clarity'
  },
  {
    id: 'dark',
    name: 'Dark (VS Code Dark+)',
    category: 'Dark',
    previewBg: '#181818',
    previewCard: '#252526',
    previewAccent: '#007acc',
    previewText: '#cccccc',
    description: 'Classic VS Code charcoal editor theme'
  },
  {
    id: 'grey',
    name: 'Grey (Monokai Slate)',
    category: 'Dark',
    previewBg: '#21252b',
    previewCard: '#282c34',
    previewAccent: '#61afef',
    previewText: '#abb2bf',
    description: 'Warm medium grey, gentle on the eyes'
  },
  {
    id: 'solarized',
    name: 'Solarized (Warm Paper)',
    category: 'Other',
    previewBg: '#eee8d5',
    previewCard: '#fdf6e3',
    previewAccent: '#268bd2',
    previewText: '#073642',
    description: 'Ethan Schoonover warm parchment palette'
  },
  {
    id: 'nord',
    name: 'Nord (Arctic Ice)',
    category: 'Other',
    previewBg: '#242933',
    previewCard: '#2e3440',
    previewAccent: '#88c0d0',
    previewText: '#eceff4',
    description: 'Cool bluish-grey Nordic design'
  },
  {
    id: 'high-contrast',
    name: 'High Contrast (Pure Black)',
    category: 'Other',
    previewBg: '#000000',
    previewCard: '#0a0a0a',
    previewAccent: '#00ffff',
    previewText: '#ffffff',
    description: 'Pure black background with vivid white borders'
  }
];

const THEME_STORAGE_KEY = 'lews_active_theme';

export function getInitialTheme(): ThemeId {
  if (typeof window === 'undefined') return 'light';
  const saved = localStorage.getItem(THEME_STORAGE_KEY) as ThemeId | null;
  if (saved && THEME_OPTIONS.some((t) => t.id === saved)) {
    return saved;
  }
  return 'light';
}

export function applyTheme(themeId: ThemeId): void {
  if (typeof document === 'undefined') return;
  document.documentElement.setAttribute('data-theme', themeId);
  try {
    localStorage.setItem(THEME_STORAGE_KEY, themeId);
  } catch (e) {
    // ignore storage errors
  }
}
