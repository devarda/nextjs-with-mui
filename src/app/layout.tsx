import React, { ChangeEvent, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { darkTheme, lightTheme } from './theme';
import { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: 'Root Layout',
  description: 'Root layout for the application',
};

export const viewport: Viewport = {
  themeColor: 'black',
  viewportFit: 'cover',
  initialScale: 1,
  width: 'device-width',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  const [theme, setTheme] = useState(useDarkTheme ? darkTheme : lightTheme);

  const changeThemeHandler = (target: ChangeEvent, currentValue: boolean) => {
    setUseDarkTheme(currentValue);
    setTheme(currentValue ? darkTheme : lightTheme);
  };

  return (
    <html lang='en'>
      <ThemeProvider theme={theme}>
        <body>
          <CssBaseline />
          <FormControlLabel
            control={
              <Switch
                checked={useDarkTheme}
                inputProps={{ 'aria-label': 'Dark Mode' }}
                onChange={(target, value) => changeThemeHandler(target, value)}
              ></Switch>
            }
            label='Dark Mode'
            labelPlacement='start'
          />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
