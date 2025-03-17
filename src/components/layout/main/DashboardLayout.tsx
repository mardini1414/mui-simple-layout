import { Box, colors } from '@mui/material';
import { useState } from 'react';
import { Outlet } from 'react-router';

import Content from './Content';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export const DashboardLayout = () => {
  const [open, setOpen] = useState(true);
  return (
    <Box bgcolor={colors.grey[100]} minHeight="100vh" pt={10}>
      <Navbar setOpen={setOpen} />
      <Sidebar open={open} setOpen={setOpen} />
      <Content>
        <Outlet />
      </Content>
    </Box>
  );
};
