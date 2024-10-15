import React, { useContext, createContext, useState, useEffect } from 'react';
import { type ProviderProps } from '../types/Provider.props';

interface Theme {
  activeTheme: 'dark' | 'light';
  setTheme: (theme: 'dark' | 'light') => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<Theme>({
  activeTheme: 'dark',
  setTheme: () => {},
  toggleTheme: () => {},
});

export const ThemeSwitcherProvider = ({ children }: ProviderProps): JSX.Element => {
  const [activeTheme, setTheme] = useState<'dark' | 'light'>('light');

  useEffect(() => {
    let mode = localStorage.getItem('mode');
    if (mode === null) {
      localStorage.setItem('mode', activeTheme);
      mode = activeTheme;
    }
    if (mode !== activeTheme) {
      setTheme(mode as 'dark' | 'light');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('mode', activeTheme);
  }, [activeTheme]);

  const toggleTheme = (): void => {
    setTheme((prev) => {
      if (prev === 'dark') {
        return 'light';
      } else {
        return 'dark';
      }
    });
  };

  return (
    <ThemeContext.Provider
      value={{
        activeTheme,
        setTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeSwitcher = (): Theme => {
  return useContext(ThemeContext);
};
