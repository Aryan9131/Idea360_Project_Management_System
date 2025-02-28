import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import GridViewIcon from '@mui/icons-material/GridView';
import SettingsIcon from '@mui/icons-material/Settings';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export default function LeftSwipeableDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open);
  };

  const list = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
       <List >
          <ListItem sx={{fontSize:'13px',borderRadius:'12px', backgroundColor:'skyblue', color:'rgb(26, 95, 244)', fontWeight:'600'}}><GridViewIcon sx={{height:'16px'}}/> Project List</ListItem>
          <ListItem sx={{fontSize:'13px',borderRadius:'12px', color:'rgb(38, 38, 38)', fontWeight:'600'}}><PeopleAltIcon sx={{height:'16px'}}/> Teams</ListItem>
          <ListItem sx={{fontSize:'13px',borderRadius:'12px', color:'rgb(38, 38, 38)', fontWeight:'600'}}><TaskAltIcon sx={{height:'16px'}}/> Tasks</ListItem>
          <ListItem sx={{fontSize:'13px',borderRadius:'12px', color:'rgb(38, 38, 38)', fontWeight:'600'}}><SettingsIcon sx={{height:'16px'}}/> Setting</ListItem>
          <ListItem sx={{fontSize:'13px',borderRadius:'12px', color:'rgb(38, 38, 38)', fontWeight:'600'}}><TextSnippetIcon sx={{height:'16px'}}/> Report</ListItem>
       </List>
      <Divider />
      <List >
             <ListItem sx={{fontSize:'13px',borderRadius:'12px', color:'rgb(38, 38, 38)', fontWeight:'600'}}><FiberManualRecordIcon sx={{height:'16px', color:'blue'}}/> Marketing</ListItem>
             <ListItem sx={{fontSize:'13px',borderRadius:'12px', color:'rgb(38, 38, 38)', fontWeight:'600'}}><FiberManualRecordIcon sx={{height:'16px', color:'purple'}}/> Development</ListItem>
             <ListItem sx={{fontSize:'13px',borderRadius:'12px', color:'rgb(38, 38, 38)', fontWeight:'600'}}><FiberManualRecordIcon sx={{height:'16px',color:'orange'}}/> Design</ListItem>
           </List>
    </Box>
  );

  return (
    <div>
      <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2, display:{xs:'flex', md:'none'}}}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {list}
      </SwipeableDrawer>
    </div>
  );
}
