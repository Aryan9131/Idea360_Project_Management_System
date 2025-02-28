import React, { useEffect, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {MenuButtons} from './MenuButtons'
export const TaskDetail = () => {
  const { id } = useParams(); // Extract the `id` from the URL
  console.log('Task ID:', id);

  const { tasks } = useSelector((state) => state.tasks); // Get tasks from Redux state
  const [currentTask, setCurrentTask] = useState(null); // Initialize state to hold the current task

  useEffect(() => {
    const task = tasks.find((task) => task._id.toString() === id); // Find the task with matching id
    setCurrentTask(task || null); // Set the current task or null if not found
  }, [id, tasks]); // Re-run the effect when `id` or `tasks` changes

  // If no task is found, display an appropriate message
  if (!currentTask) {
    return (
      <Typography variant="h4" color="error">
        Task not found!
      </Typography>
    );
  }

  // Display the details of the current task
  return (
    <Box
      sx={{
        backgroundColor: 'purple',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'flex-start',
        justifyContent: 'center',
        width: { xs: '100vw', md: '80vw' },
        height: '100%',
        padding: '20px',
        color: 'black',
      }}
    >
      <Box sx={{paddingLeft:"20px",borderRadius:'15px', backgroundColor:'whitesmoke', width:{xs:'100%', md:'40%'},height:{xs:'100%', md:'70%'}}}>
         <Box sx={{borderBottom:'1px solid black', width:'80%', display:'flex',justifyContent:'space-between', marginBottom:'10px', alignItems:'center'}}>
             <Typography variant="h5">{currentTask.title}</Typography>
             <MenuButtons currentTask={currentTask} setCurrentTask={setCurrentTask}/>
         </Box>
        <Typography sx={{ minHeight: '100px', fontSize:'1rem' }}><span style={{ fontWeight: '600', color: 'black' }}>Description</span>: {currentTask.description}</Typography>
        <Typography sx={{fontSize:'1rem', fontWeight: '600'}}>Status: <span style={{color: 'grey' }}>{currentTask.status}</span> </Typography>
        <Typography sx={{fontSize:'1rem', fontWeight: '600'}}>Priority:<span style={{color: 'grey' }}>{currentTask.priority}</span> </Typography>
      </Box>
    </Box>
  );
};
