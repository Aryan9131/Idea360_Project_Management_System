import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import {deleteTask} from '../redux/slices/taskSlice'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { deleteProject } from '../redux/slices/projectSlice';

export function ConfirmationDialog({currentTask, taskType }) {
  const [open, setOpen] = React.useState(false);
  const [token, setToken]=useState(localStorage.getItem('token'))
  const [deleteTaskUrl, setDeleteTaskUrl] = useState(`${import.meta.env.VITE_BACKEND_URL}/api/task/delete-task`)
  const [deleteProjectUrl, setDeleteProjectUrl] = useState(`${import.meta.env.VITE_BACKEND_URL}/api/task/delete-project`)

  const dispatch=useDispatch(); 
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleTaskDelete=async ()=>{
    try {
        const deletedTaskResponse=await fetch(`${taskType=='task' ? deleteTaskUrl : deleteProjectUrl}/${currentTask._id}`, {
            method: 'delete', // Method should be part of the options object
            headers: {
                'Content-Type': 'application/json', // Header keys should be quoted, not the object itself
                'Authorization': `Bearer ${token}`
            },
        });
        const deletedTaskData=await deletedTaskResponse.json();
        if(taskType=='task'){
          dispatch(deleteTask({task:currentTask}))
        }else{
          dispatch(deleteProject({project:currentTask}))
        }
        toast.success("Task Deleted !", {
          style: {
            backgroundColor: 'green', // Custom background color
            color: 'white',           // Custom text color
          }
        });
        handleClose()
    } catch (error) {
      toast.error("Error while deleting !", {
        style: {
          backgroundColor: 'red',   // Custom background color for error
          color: 'white',           // White text color
        }
      });
        console.log("Error while deleting task : "+error)
    }
  }
  return (
    <React.Fragment>
      <Typography onClick={handleClickOpen}>
          Delete
      </Typography>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {`Delete ${taskType}`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            DO YOU WANT TO DELETE ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleTaskDelete} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
