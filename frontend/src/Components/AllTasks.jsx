import { TaskCard } from "./TaskCard";
import { HomePageHeader } from "./PageHeader";
import { useSelector, useDispatch } from "react-redux";
import { Box } from "@mui/material";
import { setTasks } from "../redux/slices/taskSlice";
import { useState, useEffect } from "react";
import { setSearchQuery } from "../redux/slices/userSlice";
export function AllTasks({ project }) {
  const dispatch =useDispatch();
  const [token, setToken]=useState(localStorage.getItem('token'))
    const {searchQuery} = useSelector((state)=>state.user)
    const [filteredTasks, setFilteredTasks] = useState([]);
    const [priorityFilter, setPriorityFilter] = useState('ALL')
    const {tasks} = useSelector((state)=>state.tasks)
  useEffect(() => {
    try {
      const fetchTasks = async () => {
        const fetchedTaskResponse =  await fetch('http://localhost:8000/api/task/get-tasks', {
          method: "GET",
          headers: {
            'content-type': 'application/json',
             'Authorization': `Bearer ${token}`
          },
        })
        const fetchedTaskData = await fetchedTaskResponse.json();
        console.log('**** tasks ----> '+JSON.stringify(fetchedTaskData.tasks))
        if (fetchedTaskData.tasks) {
          dispatch(setTasks({ allTasks: fetchedTaskData.tasks }))
          setFilteredTasks(fetchedTaskData.tasks)
        }
      }
      fetchTasks();
      return(()=>{
         setSearchQuery("")
      })
    } catch (error) {
       console.log("Error while fetching user : "+error)
    }
  }, [token])
  
 const handleFilter = () => {
     let filtered = tasks;
     if (priorityFilter != 'ALL') {
       filtered = filtered.filter(task => task.priority === priorityFilter);
     } else if (priorityFilter == 'ALL') {
       filtered = tasks;
     }
     setFilteredTasks(filtered);
   };
   const SearchedTasks = filteredTasks.filter((task) =>
     task.title.toLowerCase().includes(searchQuery.toLowerCase())
   );
   useEffect(handleFilter, [priorityFilter, tasks]);
  return (
    <Box sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', border: '1px solid grey' }}>
      <HomePageHeader setPriorityFilter={setPriorityFilter} priority={priorityFilter}/>
      <Box  sx={{ display: 'flex', overflowY: 'auto', justifyContent: 'center', flexWrap: 'wrap' }}>
        {
          SearchedTasks.map((task) => {
            return <TaskCard key={task._id} data={task} />
          })
        }
      </Box>
    </Box>
  );
}
