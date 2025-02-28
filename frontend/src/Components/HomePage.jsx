import { Box, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setSearchQuery, setUser } from '../redux/slices/userSlice';
import 'react-toastify/dist/ReactToastify.css';
import { HomePageHeader } from './PageHeader'
import ProjectCard from './ProjectCard'
import { setProjects } from '../redux/slices/projectSlice'

export const HomePage = () => {
  const dispatch =useDispatch();
  const {searchQuery} = useSelector((state)=>state.user)
  const [token, setToken]=useState(localStorage.getItem('token'))
  const {projects}=useSelector((state)=>state.projects)
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [priorityFilter, setPriorityFilter] = useState('ALL')
  useEffect(() => {
    try {
      const fetchProjects = async () => {
        const fetchedProjectResponse =  await fetch('http://localhost:8000/api/project/get-projects', {
          method: "GET",
          headers: {
            'content-type': 'application/json',
             'Authorization': `Bearer ${token}`
          },
        })
        const fetchedProjectData = await fetchedProjectResponse.json();
        if (fetchedProjectData.projects) {
          dispatch(setProjects({ allProjects: fetchedProjectData.projects }))
          setFilteredProjects(fetchedProjectData.projects)
        }
      }
      fetchProjects();
      return(()=>{
               setSearchQuery("")
            })
    } catch (error) {
       console.log("Error while fetching user : "+error)
    }
  }, [token])
  const handleFilter = () => {
    let filtered = projects;

    if (priorityFilter != 'ALL') {
      filtered = filtered.filter(project => project.priority === priorityFilter);
    } else if (priorityFilter == 'ALL') {
      filtered = projects;
    }

    setFilteredProjects(filtered);
  };
  const SearchedProjects = filteredProjects.filter((task) =>
    task.feature.toLowerCase().includes(searchQuery.toLowerCase())
  );
  useEffect(handleFilter, [priorityFilter, projects]);
  return (
    <Box sx={{ height:'100%', width:'100%', display:'flex',flexDirection:'column', border:'1px solid grey'}}> 
            <HomePageHeader setPriorityFilter={setPriorityFilter} priority={priorityFilter}/> 
            <Box sx={{display:'flex',overflowY:'auto', justifyContent:'center', flexWrap:'wrap'}}>
              {
                SearchedProjects.map((project)=>{
                  return <ProjectCard key={project._id} project={project} />
                })
              }
            </Box>
    </Box>
  )
}
