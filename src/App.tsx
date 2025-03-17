import { ThemeProvider } from '@mui/material';

import { theme } from './config/theme-config';
import Router from './router';

export default function App() {
  return (
    <ThemeProvider theme={theme} defaultMode="light">
      <Router />
    </ThemeProvider>
  );
}
