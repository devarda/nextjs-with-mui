'use client';
import React, { ChangeEvent, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { darkTheme, lightTheme } from '../app/theme';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  const [theme, setTheme] = useState(useDarkTheme ? darkTheme : lightTheme);

  const changeThemeHandler = (_target: ChangeEvent, currentValue: boolean) => {
    setUseDarkTheme(currentValue);
    setTheme(currentValue ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <body>
        <CssBaseline />
        <FormControlLabel
          control={
            <Switch
              checked={useDarkTheme}
              inputProps={{ 'aria-label': 'controlled' }}
              onChange={(target, value) => changeThemeHandler(target, value)}
            ></Switch>
          }
          label={useDarkTheme ? <LightModeIcon /> : <DarkModeIcon />}
          labelPlacement='start'
        />
        {children}
      </body>
    </ThemeProvider>
  );
}
