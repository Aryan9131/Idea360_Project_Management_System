import React, { useEffect, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {MenuButtons} from './MenuButtons'
import GroupAvatars from './AvatarGroups';
export const TaskDetail = () => {
  const { id } = useParams(); // Extract the `id` from the URL
  console.log('Task ID:', id);
  const [currentTask, setCurrentTask] = useState(null); // Initialize state to hold the current task
  const [token, setToken]=useState(localStorage.getItem('token'))
  const navigate = useNavigate()
  useEffect(() => {
    const fetchTask = async ()=>{
        const fetchedTaskResponse = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/task/get-task/${id}`,{
          method:'GET',
          headers: {
            'content-type': 'application/json',
             'Authorization': `Bearer ${token}`
          },
        })
        const fetchedTaskData = await fetchedTaskResponse.json();
        console.log('task get ---> '+JSON.stringify(fetchedTaskData));
        setCurrentTask(fetchedTaskData.task);
    }
    fetchTask();
  }, [id, token]); // Re-run the effect when `id` or `tasks` changes

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
            alignItems: 'center',
            justifyContent: 'center',
            width: {xs:'100%', md:"50%"},
            height: {xs:'auto', md:'100%'},
            color: 'black',
          }}
        >
          <Box sx={{padding:"20px", margin:'10px 0px',borderRadius:'15px', backgroundColor:'whitesmoke', width:{xs:'50%', md:'80%'},height:{xs:'auto', md:'50%'}}}>
             <Box sx={{borderBottom:'1px solid black', width:'80%', display:'flex',justifyContent:'space-between', marginBottom:'10px', alignItems:'center'}}>
                 <Typography variant="h5">{currentTask?.title}</Typography>
                 <MenuButtons currentTask={currentTask} taskType="task"/>
             </Box>
            <Typography sx={{ fontSize:'1rem' }}><span style={{ fontWeight: '600', color: 'black' }}>Description</span>: {currentTask?.description}</Typography>
            <Typography sx={{fontSize:'1rem', fontWeight: '600'}}>Status: <span style={{color: 'grey' }}>{currentTask?.status}</span> </Typography>
            <Typography sx={{fontSize:'1rem', fontWeight: '600'}}>Priority:<span style={{color: 'grey' }}>{currentTask?.priority}</span> </Typography>
            <Box sx={{width:'100%',marginTop:'8px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
              <Button variant='outlined' size="small" onClick={()=>{navigate('/')}}>Back</Button>
              <GroupAvatars/>
            </Box>
          </Box>
        </Box>
  );
};
