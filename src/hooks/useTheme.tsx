import React, { useContext, createContext, useState } from 'react';

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

interface ProviderProps {
  children: React.ReactNode;
}

export const ThemeSwitchProvider = ({ children }: ProviderProps): JSX.Element => {
  const [activeTheme, setTheme] = useState<'dark' | 'light'>('light');

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

export const useTheme = (): Theme => {
  return useContext(ThemeContext);
};
