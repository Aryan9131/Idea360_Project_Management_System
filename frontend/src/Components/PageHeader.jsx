import { Box, Button, Typography, MenuItem, TextField } from '@mui/material'
import React from 'react'
import { AddProjectDialog } from './AddProjectDialog'
import { useLocation } from 'react-router-dom'
import { AddTaskDialog } from './AddTaskDialog'

export const HomePageHeader = ({priority, setPriorityFilter}) => {
    const location = useLocation();
    const fullPath = location.pathname;
    const lastSegment = fullPath.split('/').pop();
    const isLightMode=true
    return (
        <Box sx={{ height: '40px', backgroundColor: 'whitesmoke', width: '100%', padding: '10px 0px', display: 'flex', alignItems: 'center' }}>
            <Typography sx={{ fontWeight: '600', fontSize: '17px' , marginLeft:'10px'}} >Project List : </Typography>
            <Box sx={{ flexGrow: 1 }}>

            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', width: '50%' }}>
                {
                    lastSegment=='all-tasks'
                    ?
                    <AddTaskDialog/>
                    :
                    <AddProjectDialog />
                }
                <TextField
                    select
                    label="priority"
                    value={priority}
                    onChange={(e) => setPriorityFilter(e.target.value)}
                    InputLabelProps={{
                        shrink: true,
                        style: {
                            color: isLightMode ? 'black' : 'white', // Label color
                            fontSize: '14px' // Decrease label font size
                        },
                    }}
                    InputProps={{
                        style: {
                            color: isLightMode ? 'black' : 'white', // Input text color
                            fontSize: '14px', // Decrease input text font size
                        },
                    }}
                    style={{ marginRight: '16px', color: isLightMode ? 'black' : 'white' }}
                    size='small'
                >
                    <MenuItem value="ALL">All</MenuItem>
                    <MenuItem value="high">High</MenuItem>
                    <MenuItem value="moderate">Moderate</MenuItem>
                    <MenuItem value="low">Low</MenuItem>
                </TextField>
                <Button variant="outlined" size='small' sx={{fontSize:'12px', color: '#4b0183', borderColor: '#4b0183' }}>Ai Project</Button>
            </Box>
        </Box>
    )
}
