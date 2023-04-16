import { useEffect, useState } from 'react';
import { combineTheme, dark, light } from '../styles/themes';
import { DefaultTheme } from 'styled-components';

export interface ThemeHookReturnType {
  theme: DefaultTheme;
  toggleTheme: () => void;
}
export const useTheme = (): ThemeHookReturnType => {
  const [theme, setTheme] = useState<DefaultTheme>(combineTheme(light));
  const localStorageKey = 'boilerplateTheme';

  useEffect(() => {
    const themeRecovery = localStorage.getItem(localStorageKey);
    if (themeRecovery) {
      setTheme(
        themeRecovery === 'light' ? combineTheme(light) : combineTheme(dark)
      );
      return;
    }
  }, []);

  const toggleTheme = () => {
    setTheme(
      theme.title === 'light' ? combineTheme(dark) : combineTheme(light)
    );
    localStorage.setItem(
      localStorageKey,
      theme.title === 'light' ? 'dark' : 'light'
    );
  };

  return { theme, toggleTheme };
};
