import { Paper, useTheme } from '@mui/material';
import React from 'react';

import useMobileQuery from '../../../hooks/useMobileQuery';

type ContentProps = {
  children: React.ReactNode;
};

const Content = ({ children }: ContentProps) => {
  const theme = useTheme();
  const isMobile = useMobileQuery();
  return (
    <Paper
      component="main"
      elevation={0}
      sx={{
        ml: isMobile ? 1 : 39,
        mr: isMobile ? 1 : 2,
        p: 2,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        borderRadius: 1,
      }}
    >
      {children}
    </Paper>
  );
};

export default Content;
