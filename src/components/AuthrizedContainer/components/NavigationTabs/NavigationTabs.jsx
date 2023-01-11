import { ListAlt as ListAltIcon, Create as CreateIcon } from '@mui/icons-material';
import { List, ListItem, ListItemButton, ListItemIcon } from '@mui/material';
import { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../../constants/routes';

function NavigationTabs() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const tabs = useMemo(
    () => [
      {
        id: 'home',
        path: ROUTES.MY_AUTOMATIONS,
        icon: <ListAltIcon />,
      },
      {
        id: 'polls',
        label: 'Polls',
        path: ROUTES.CREATE_AUTOMATION,
        icon: <CreateIcon />,
      },
    ],
    []
  );

  const selectedTabId = useMemo(() => {
    const selectedTab = tabs.find((tab) => tab.path === pathname);

    return selectedTab?.id;
  });

  return (
    <List>
      {tabs.map((tab) => (
        <ListItem key={tab.id}>
          <ListItemButton
            selected={tab.id === selectedTabId}
            onClick={tab.onClick || handleTabChange(tab.path)}
          >
            <ListItemIcon sx={{ justifyContent: 'center' }}>{tab.icon}</ListItemIcon>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );

  function handleTabChange(newValue) {
    return () => {
      navigate(newValue);
    };
  }
}

export default NavigationTabs;
