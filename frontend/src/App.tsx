import React, { useState, useEffect } from 'react';
import { LandingPage } from './components/LandingPage';
import { MapConsole } from './components/MapConsole';
import { getInitialTheme, applyTheme, ThemeId } from './utils/theme';

export const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'LANDING' | 'CONSOLE'>(() => (typeof window !== 'undefined' && window.location.hash.startsWith('#console')) ? 'CONSOLE' : 'LANDING');
  const [currentTheme, setCurrentTheme] = useState<ThemeId>(getInitialTheme);

  // Initialize and apply theme on mount
  useEffect(() => {
    applyTheme(currentTheme);
  }, [currentTheme]);

  // Handle URL hash changes (#console vs #home)
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash.startsWith('#console')) {
        setCurrentView('CONSOLE');
      } else {
        setCurrentView('LANDING');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleLaunchConsole = () => {
    window.location.hash = '#console';
    setCurrentView('CONSOLE');
  };

  const handleBackToHome = () => {
    window.location.hash = '#';
    setCurrentView('LANDING');
  };

  const handleThemeChange = (newTheme: ThemeId) => {
    setCurrentTheme(newTheme);
    applyTheme(newTheme);
  };

  return (
    <div
      className="w-full min-h-screen font-sans antialiased theme-container"
      style={{ backgroundColor: 'var(--theme-bg)', color: 'var(--theme-text)' }}
    >
      {currentView === 'LANDING' ? (
        <LandingPage
          onLaunchConsole={handleLaunchConsole}
          currentTheme={currentTheme}
          onThemeChange={handleThemeChange}
        />
      ) : (
        <MapConsole
          onBackToHome={handleBackToHome}
          currentTheme={currentTheme}
          onThemeChange={handleThemeChange}
        />
      )}
    </div>
  );
};

export default App;
