import { Menu } from '@mui/icons-material';
import { AppBar, Box, IconButton, Toolbar } from '@mui/material';

import { SIDEBAR_WIDTH } from '../../../config/sidebar-config';
import UserMenu from './UserMenu';

type NavbarProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = ({ setOpen }: NavbarProps) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        color="inherit"
        elevation={0}
        position="fixed"
        sx={{
          height: 64,
          width: { md: `calc(100% - ${SIDEBAR_WIDTH}px)` },
          justifyContent: 'center',
        }}
      >
        <Toolbar
          sx={{
            justifyContent: {
              xs: 'space-between',
              md: 'end',
            },
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { md: 'none' } }}
            onClick={() => setOpen(true)}
          >
            <Menu />
          </IconButton>
          <UserMenu />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
