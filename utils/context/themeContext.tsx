import * as React from 'react';
import 'twin.macro';

const getInitialTheme = (): string => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('color-theme');
    if (typeof storedPrefs === 'string') {
      return storedPrefs;
    }

    const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
    if (userMedia.matches) {
      return 'dark';
    }
  }

  return 'dark';
};

type ThemeContextState = {
  theme: string;
  setTheme: (theme) => {};
};

const ThemeContext = React.createContext<ThemeContextState | null>(null);

const ThemeProvider = ({
  initialTheme,
  children,
}: IProviderProps): JSX.Element => {
  const [theme, setTheme] = React.useState(getInitialTheme);
  const [value, setValue] = React.useState({ theme, setTheme });

  const rawSetTheme = (theme: string) => {
    const root = window.document.documentElement;
    const isDark = theme === 'dark';

    root.classList.remove(isDark ? 'light' : 'dark');
    root.classList.add(theme);

    localStorage.setItem('color-theme', theme);
  };

  if (initialTheme) {
    rawSetTheme(initialTheme);
  }

  React.useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };

export interface IProviderProps {
  initialTheme: () => string;
  children?: any;
}
