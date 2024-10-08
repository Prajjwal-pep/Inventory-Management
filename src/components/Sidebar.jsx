import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Divider } from '@mui/material';
import { Inventory2, AddBox } from '@mui/icons-material';

const drawerWidth = 240;

function Sidebar({ setView }) {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <Divider />
      <List>
        <ListItem button onClick={() => setView('list')}>
          <ListItemIcon>
            <Inventory2 />
          </ListItemIcon>
          <ListItemText primary="Inventory List" />
        </ListItem>
        <ListItem button onClick={() => setView('form')}>
          <ListItemIcon>
            <AddBox />
          </ListItemIcon>
          <ListItemText primary="Add New Item" />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default Sidebar;
