import React, { useState, createContext } from 'react';

import light from './light';
import dark from './dark';
import { themeModesConstants } from '../constants';
import { ThemeProvider } from '@material-ui/core';

const themeObj = typeof window !== 'undefined' 
                  && localStorage.getItem(themeModesConstants.storageKey) === themeModesConstants.dark 
                  ? dark : light;

export const ThemeUtilsContext = createContext();

export const ThemeUtilsWrapper = ({ children }) => {
  const [theme, setTheme] = useState(themeObj);

  const toggleThemeMode = () => {
    if (theme.palette.type === themeModesConstants.dark) {
      setTheme(light);
      localStorage.setItem(themeModesConstants.storageKey, themeModesConstants.light);
    } else {
      setTheme(dark);
      localStorage.setItem(themeModesConstants.storageKey, themeModesConstants.dark);
    }
  }

  return (
    <ThemeUtilsContext.Provider value={{ theme, toggleThemeMode }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeUtilsContext.Provider>
  );
}

export default themeObj;