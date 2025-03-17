import { Close } from '@mui/icons-material';
import { Drawer, IconButton, Stack, Typography } from '@mui/material';

import { SIDEBAR_WIDTH } from '../../../config/sidebar-config';
import useMobileQuery from '../../../hooks/useMobileQuery';
import Navigation from './Navigation';

type SidebarProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar = ({ open, setOpen }: SidebarProps) => {
  const isMobile = useMobileQuery();

  return (
    <Drawer
      open={open || !isMobile}
      hideBackdrop={!isMobile}
      variant={isMobile ? 'temporary' : 'persistent'}
      PaperProps={{
        sx: { width: SIDEBAR_WIDTH },
        elevation: 0,
      }}
      onClose={() => setOpen(false)}
      aria-hidden={false}
    >
      <Stack
        alignItems="center"
        flexDirection="row"
        justifyContent="space-between"
        pl={2}
        height={64}
      >
        <Typography>LOGO</Typography>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, display: { md: 'none' } }}
          onClick={() => setOpen(false)}
        >
          <Close />
        </IconButton>
      </Stack>
      <Navigation />
    </Drawer>
  );
};

export default Sidebar;
