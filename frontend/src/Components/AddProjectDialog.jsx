import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Box, TextField } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/slices/taskSlice';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { addProject } from '../redux/slices/projectSlice';

export function AddProjectDialog() {
    const dispatch =useDispatch();
    const [token, setToken]=useState(localStorage.getItem('token'))
    const [projectTitle, setProjectTitle] = React.useState("");
    const [projectFeature, setProjectFeature] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [deadline, setDeadline] = React.useState("");
    const [priority, setPriority]= React.useState("low")
    const [status, setStatus] = React.useState("progress");
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const handleCreateTask=async ()=>{
        const obj={
            title:projectTitle,
            feature:projectFeature,
            description:description,
            deadline:deadline,
            status:status,
            priority:priority,
        }
        const createdProjectResponse = await fetch('http://localhost:8000/api/project/create-project', {
            method: 'POST', // Method should be part of the options object
            headers: {
                'Content-Type': 'application/json', // Header keys should be quoted, not the object itself
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(obj), // The body should be part of the options object
        });
        const createdProjectData=await createdProjectResponse.json();
        dispatch(addProject({project:createdProjectData.newProject}))
        toast.success("Task Created !", {
            style: {
              backgroundColor: 'green', // Custom background color
              color: 'white',           // Custom text color
            }
          });
          setProjectTitle("");
          setProjectFeature("");
          setDescription("");
        handleClose();
    }
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button
                variant="outlined"
                size='small'
                sx={{ marginLeft: '18px', color:'#4b0183', borderColor:'#4b0183', fontSize:'12px' }}
                onClick={handleClickOpen}
            >
                Add Project
            </Button>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
                sx={{
                    '& .MuiDialog-paper': {
                        width: fullScreen ? '90%' : '30%', // Adjust width
                        height: '70vh', // Adjust height
                        maxWidth: '400px', // Set maximum width
                    },
                }}
            >
                <DialogTitle id="responsive-dialog-title">{"Add Project"}</DialogTitle>
                <DialogContent
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px', // Add spacing between fields
                    }}
                >
                    <TextField
                        variant="filled"
                        placeholder="Project Title"
                        value={projectTitle}
                        onChange={(e) => setProjectTitle(e.target.value)}
                        sx={{ width: '90%' }} // Make field take 90% of dialog width
                    />
                    <TextField
                        variant="filled"
                        placeholder="Project Feature"
                        value={projectFeature}
                        onChange={(e) => setProjectFeature(e.target.value)}
                        sx={{ width: '90%' }} // Make field take 90% of dialog width
                    />
                    <TextField
                        id="filled-multiline-flexible"
                        label="Description"
                        multiline
                        maxRows={4}
                        variant="filled"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        sx={{ width: '90%' }} // Make field take 90% of dialog width
                    />
                    <TextField
                        variant="filled"
                        label="Deadline"
                        type="date"
                        value={deadline}
                        onChange={(e) => setDeadline(e.target.value)}
                        sx={{ width: '90%' }}
                        InputLabelProps={{
                            shrink: true, // Ensures the label stays above the input
                        }}
                    />
                    <Box sx={{ marginTop:'20px',width: '100%', display: 'flex', justifyContent: 'space-evenly' }}>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={status}
                            label="status"
                            onChange={(e)=>setStatus(e.target.value)}
                            sx={{fontWeight:'600', color:status=="progress"?'orange':'green'}}
                        >
                            <MenuItem value="progress" sx={{color:'orange'}}> progress</MenuItem>
                            <MenuItem value="done" sx={{color:'green'}}>done</MenuItem>
                        </Select>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={priority}
                            label="priority"
                            onChange={(e)=>setPriority(e.target.value)}
                            sx={{fontWeight:'600', color:priority=="high"?'red':priority=='moderate'?"orange":'yellow'}}
                        >
                            <MenuItem value="high" sx={{color:'red'}}> high</MenuItem>
                            <MenuItem value="moderate" sx={{color:'orange'}}>moderate</MenuItem>
                            <MenuItem value="low" sx={{color:'yellow'}}>low</MenuItem>
                        </Select>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Close
                    </Button>
                    <Button onClick={handleCreateTask} autoFocus>
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
