import React, { createContext, useContext, useState, useEffect } from 'react';

type ThemeType = 'default' | 'inverted';

interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>('default');

  const toggleTheme = () => {
    setTheme(prev => prev === 'default' ? 'inverted' : 'default');
  };

  useEffect(() => {
    // Apply theme to document
    if (theme === 'inverted') {
      document.documentElement.classList.add('theme-inverted');
    } else {
      document.documentElement.classList.remove('theme-inverted');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

