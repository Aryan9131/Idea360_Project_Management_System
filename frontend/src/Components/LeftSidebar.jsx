import { List, ListItem, Typography, Box } from '@mui/material'
import React from 'react'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import GridViewIcon from '@mui/icons-material/GridView';
import SettingsIcon from '@mui/icons-material/Settings';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Navigate, useNavigate } from 'react-router-dom';

export const LeftSidebarList = () => {
    const navigate = useNavigate();
    return (
       <List sx={{width:'90%', marginTop:'10px'}} >
          <ListItem sx={{fontSize:'13px',mb:.5,borderRadius:'12px', backgroundColor:'skyblue', color:'rgb(26, 95, 244)', fontWeight:'600', cursor:'pointer'}} onClick={()=>navigate('/')}><GridViewIcon sx={{height:'16px'}}/> Project List</ListItem>
          <ListItem sx={{fontSize:'13px',mb:.5,borderRadius:'12px', color:'rgb(38, 38, 38)', fontWeight:'600', cursor:'pointer'}} onClick={()=>navigate('/all-tasks')}><TaskAltIcon sx={{height:'16px'}} /> Tasks</ListItem>
          <ListItem sx={{fontSize:'13px',mb:.5,borderRadius:'12px', color:'rgb(38, 38, 38)', fontWeight:'600', cursor:'pointer'}}><PeopleAltIcon sx={{height:'16px'}}/> Teams</ListItem>
          <ListItem sx={{fontSize:'13px',mb:.5,borderRadius:'12px', color:'rgb(38, 38, 38)', fontWeight:'600', cursor:'pointer'}}><SettingsIcon sx={{height:'16px'}}/> Setting</ListItem>
          <ListItem sx={{fontSize:'13px',mb:.5,borderRadius:'12px', color:'rgb(38, 38, 38)', fontWeight:'600', cursor:'pointer'}}><TextSnippetIcon sx={{height:'16px'}}/> Report</ListItem>
       </List>
    )
  }
  export const LeftSidebarTeams = () => {
    return (
       <Box sx={{width:'90%', marginTop:'10px'}}>
           <Typography sx={{fontWeight:'600',fontSize:'14px', color:'rgb(38, 38, 38)'}}>Teams :</Typography>
           <List sx={{width:'90%'}} >
             <ListItem sx={{fontSize:'13px',borderRadius:'12px', color:'rgb(38, 38, 38)', fontWeight:'600'}}><FiberManualRecordIcon sx={{height:'16px', color:'blue'}}/> Marketing</ListItem>
             <ListItem sx={{fontSize:'13px',borderRadius:'12px', color:'rgb(38, 38, 38)', fontWeight:'600'}}><FiberManualRecordIcon sx={{height:'16px', color:'purple'}}/> Development</ListItem>
             <ListItem sx={{fontSize:'13px',borderRadius:'12px', color:'rgb(38, 38, 38)', fontWeight:'600'}}><FiberManualRecordIcon sx={{height:'16px',color:'yellow'}}/> Design</ListItem>
           </List>
       </Box>
    )
  }
  export const LeftSidebarProjectStatus = () => {
    return (
       <Box sx={{width:'90%', marginTop:'10px'}}>
           <Typography sx={{fontWeight:'600',fontSize:'14px', color:'rgb(38, 38, 38)'}}>Project Status :</Typography>
           <List sx={{width:'90%'}} >
             <ListItem sx={{fontSize:'13px',borderRadius:'12px', color:'rgb(38, 38, 38)', fontWeight:'600'}}><FiberManualRecordIcon sx={{height:'16px', color:'orange'}}/> Active</ListItem>
             <ListItem sx={{fontSize:'13px',borderRadius:'12px', color:'rgb(38, 38, 38)', fontWeight:'600'}}><FiberManualRecordIcon sx={{height:'16px', color:'green'}}/> Completed</ListItem>
             <ListItem sx={{fontSize:'13px',borderRadius:'12px', color:'rgb(38, 38, 38)', fontWeight:'600'}}><FiberManualRecordIcon sx={{height:'16px',color:'red'}}/> Expired</ListItem>
           </List>
       </Box>
    )
  }
export const LeftSidebar = () => {
  return (
     <>
       <LeftSidebarList/>
       <LeftSidebarTeams/>
       <LeftSidebarProjectStatus/>
     </>
  )
}
