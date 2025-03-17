import { Box, List } from '@mui/material';

import { sidebarMenu } from '../../../config/sidebar-config';
import NavigationItem from './NavigationItem';

const Navigation = () => {
  return (
    <Box sx={{ minHeight: 352, minWidth: 250, px: 1 }}>
      <List sx={{ width: '100%', bgcolor: 'background.paper' }} component="nav">
        {sidebarMenu.map((nav, i) => (
          <NavigationItem
            key={i}
            label={nav.label}
            icon={nav.icon}
            path={nav.path}
            children={nav.children}
          />
        ))}
      </List>
    </Box>
  );
};

export default Navigation;
