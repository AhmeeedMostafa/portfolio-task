import React, { useContext } from 'react';

import { NoSsr, Switch, FormControlLabel } from '@material-ui/core';
import { themeModesConstants } from '../../utils/constants';
import { ThemeUtilsContext } from '../../utils/theme';

const ToggleThemeButton = () => {
  const { theme, toggleThemeMode } = useContext(ThemeUtilsContext);

  return (
    <NoSsr>
      <FormControlLabel
        control={
          <Switch
            checked={theme.palette.type === themeModesConstants.dark}
            onChange={toggleThemeMode}
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
        }
        label="Dark"
        style={{ paddingLeft: 17 }}
      />
      
    </NoSsr>
  );
}

export default ToggleThemeButton;