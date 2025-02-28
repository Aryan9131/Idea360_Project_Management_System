import { List, ListItem, Typography, Box } from '@mui/material'
import React from 'react'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import GridViewIcon from '@mui/icons-material/GridView';
import SettingsIcon from '@mui/icons-material/Settings';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

export const AssistenceList = () => {
    return (
        <Box sx={{ width: '100%', margin: '10px 0px', padding: '0px 10px' }}>
            <Typography sx={{marginBottom:'5px', fontWeight: '600', fontSize: '14px', color: 'rgb(38, 38, 38)' }}>
                AI Assistant :
            </Typography>
            <List sx={{ width: '90%', display: 'flex', flexDirection: 'column' }}>
                <ListItem sx={{ width: 'fit-content', color:'rgba(57, 56, 56, 0.966)', fontSize: '12px', borderRadius: '7px', border: '1px solid grey', fontWeight: '600', padding: '7px' }}>
                   Generate Progress Report
                </ListItem>
                <ListItem sx={{width: 'fit-content',margin:'10px 0px', color:'rgba(57, 56, 56, 0.966)', fontSize: '12px', borderRadius: '7px', border: '1px solid grey', fontWeight: '600', padding: '7px', display: 'inline-block' }}>
                    Analyze Risks
                </ListItem>
                <ListItem sx={{ width: 'fit-content', color:'rgba(57, 56, 56, 0.966)', fontSize: '12px', borderRadius: '7px', border: '1px solid grey', fontWeight: '600', padding: '7px', display: 'inline-block' }}>
                    Schedule Assistant
                </ListItem>
            </List>
        </Box>


    )
}
export const InsightList = () => {
    return (
        <Box sx={{ width: '100%', margin: '10px 0px', padding: '0px 10px' }}>
            <Typography sx={{marginBottom:'5px', fontWeight: '600', fontSize: '14px', color: 'rgb(38, 38, 38)' }}>
                Recent AI Insights :
            </Typography>
            <List sx={{ width: '90%', display: 'flex', flexDirection: 'column' }}>
                <ListItem sx={{color:'rgba(57, 56, 56, 0.966)', fontSize: '12px', borderRadius: '7px', fontWeight: '600', padding: '6px' ,backgroundColor:'rgba(225, 225, 225, 0.76)', display:'flex', alignItems:'flex-start' }}>
                   <WarningAmberIcon sx={{height:'13px', color:'rgb(224, 183, 0)'}}/> Potential delay detected in UI developement
                </ListItem>
                <ListItem sx={{color:'rgba(57, 56, 56, 0.966)', fontSize: '12px',margin:'10px 0px', borderRadius: '7px', fontWeight: '600', padding: '6px' ,backgroundColor:'rgba(225, 225, 225, 0.76)', display:'flex', alignItems:'flex-start' }}>
                    <TaskAltIcon sx={{height:'13px', color:'green'}}/> Backend Integration completed ahead of schedule
                </ListItem>
                <ListItem sx={{color:'rgba(57, 56, 56, 0.966)', fontSize: '12px', borderRadius: '7px', fontWeight: '600', padding: '6px' ,backgroundColor:'rgba(225, 225, 225, 0.76)', display:'flex', alignItems:'flex-start' }}>
                   <ChatBubbleOutlineIcon sx={{height:'13px', color:'blue'}}/> New team velocity metrics available
                </ListItem>
            </List>
        </Box>


    )
}
export const TeamsAvailabilityList = () => {
    return (
        <Box sx={{ width: '100%' , margin: '10px 0px', padding: '0px 10px' }}>
            <Typography sx={{ fontWeight: '600', fontSize: '14px', color: 'rgb(38, 38, 38)' }}>Teams Availability :</Typography>
            <List sx={{ width: '90%' }} >
                <ListItem sx={{ color:'rgba(57, 56, 56, 0.966)', fontSize: '12px', borderRadius: '12px', color: 'rgb(38, 38, 38)', fontWeight: '600', display:'flex', justifyContent:'space-between' }}><span>Development Team</span> <span>3/4 available</span></ListItem>
                <ListItem sx={{ color:'rgba(57, 56, 56, 0.966)', fontSize: '12px', borderRadius: '12px', color: 'rgb(38, 38, 38)', fontWeight: '600', display:'flex', justifyContent:'space-between' }}><span>Development Team</span> <span>3/4 available</span></ListItem>
                <ListItem sx={{ color:'rgba(57, 56, 56, 0.966)', fontSize: '12px', borderRadius: '12px', color: 'rgb(38, 38, 38)', fontWeight: '600', display:'flex', justifyContent:'space-between' }}><span>Development Team</span> <span>3/4 available</span></ListItem>
            </List>
        </Box>
    )
}
export const RightSidebar = () => {
    return (
        <>
            <AssistenceList />
            <InsightList/>
            <TeamsAvailabilityList />
        </>
    )
}
