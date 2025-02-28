import React, { useEffect, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {MenuButtons} from './MenuButtons'
import GroupAvatars from './AvatarGroups';
export const ProjectDetail = () => {
  const navigate = useNavigate()
  const { id } = useParams(); // Extract the `id` from the URL
  console.log('Project ID:', id);
  const [currentProject, setCurrentProject] = useState(null); // Initialize state to hold the current Project
  const [token, setToken]=useState(localStorage.getItem('token'))
  useEffect(()=>{
    console.log("currentProject  "+currentProject?.title)
 },[currentProject])
  useEffect(() => {
    const fetchProject = async ()=>{
        const fetchedProjectResponse = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/project/get-project/${id}`,{
          method:'GET',
          headers: {
            'content-type': 'application/json',
             'Authorization': `Bearer ${token}`
          },
        })
        const fetchedProjectData = await fetchedProjectResponse.json();
        console.log('Project get ---> '+JSON.stringify(fetchedProjectData));
        setCurrentProject(fetchedProjectData.project);
    }
    fetchProject();
  }, [id, token]); // Re-run the effect when `id` or `Projects` changes
 
  // If no Project is found, display an appropriate message
  if (!currentProject) {
    return (
      <Typography variant="h4" color="error">
        Project not found!
      </Typography>
    );
  }
 
  // Display the details of the current Project
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
      <Box sx={{padding:"20px",margin:'10px 0px',borderRadius:'15px', backgroundColor:'whitesmoke', width:{xs:'50%', md:'80%'},height:{xs:'auto', md:'50%'}}}>
         <Box sx={{borderBottom:'1px solid black', width:'80%', display:'flex',justifyContent:'space-between', marginBottom:'10px', alignItems:'center'}}>
             <Typography variant="h5">{currentProject?.title}</Typography>
             <MenuButtons currentTask={currentProject} taskType="project"/>
         </Box>
         <Typography variant="h5">{currentProject?.feature}</Typography>
        <Typography sx={{ fontSize:'1rem' }}><span style={{ fontWeight: '600', color: 'black' }}>Description</span>: {currentProject?.description}</Typography>
        <Typography sx={{fontSize:'1rem', fontWeight: '600'}}>Status: <span style={{color: 'grey' }}>{currentProject?.status}</span> </Typography>
        <Typography sx={{fontSize:'1rem', fontWeight: '600'}}>Priority:<span style={{color: 'grey' }}>{currentProject?.priority}</span> </Typography>
        <Box sx={{width:'100%',marginTop:'8px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <Button variant='outlined' size="small" onClick={()=>{navigate('/')}}>Back</Button>
          <GroupAvatars/>
        </Box>
      </Box>
    </Box>
  );
};
