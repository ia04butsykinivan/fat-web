import { Drawer } from '@mui/material';

import { NavigationTabs } from '../NavigationTabs';

function Navigation() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 120,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 120,
          boxSizing: 'border-box',
        },
      }}
    >
      <NavigationTabs />
    </Drawer>
  );
}

export default Navigation;
