import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GroupAvatars from './AvatarGroups';
import { MenuButtons } from './MenuButtons';
import { useNavigate } from 'react-router-dom';

export const TaskCard = ({ data }) => {
  const navigate = useNavigate();
  const handleNavigate = (dataId) => {
    navigate(`/task-detail/${dataId}`)
  }
  const formatDeadline = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString('en-GB'); // 'en-GB' formats it as dd/mm/yyyy
  };
  return (
    <Card sx={{ width: 300, margin:'5px' }}>
    <CardContent>
      <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
         <Typography sx={{fontWeight:'600', fontSize:"16px"}}>{data?.title}</Typography>
         <MenuButtons currentTask={data} taskType="task" />
      </Box>
      <Box sx={{ display:'flex',justifyContent:'space-between', alignItems:'center'}}>
         <Typography sx={{display:'flex', alignItems:'center', fontSize:'14px'}}><CalendarMonthIcon sx={{height:'15px', color:'blue'}}/>Deadline - 02/03/25</Typography>
         <Button size="small" variant='outlined' sx={{color:'purple', borderColor:'purple', fontSize:'12px', textTransform:'capitalize'}} >open</Button>
      </Box>
      <Box sx={{ mt: 1.3  ,display:'flex', alignItems:'center', justifyContent:'flex-start'}}>
         <GroupAvatars/>
      </Box>
    </CardContent>
    <CardActions sx={{display:'flex', justifyContent:'space-between'}}>
      {
          data?.status=='done'
          ?
          <Button size="small" aria-readonly  sx={{display:'flex', alignItems:'center', color:'green'}}><TaskAltIcon sx={{height:'13px'}}/>done</Button>
          :
          data?.status=='progress'
           ?
           <Button size="small" aria-readonly  sx={{display:'flex', alignItems:'center', color:'orange'}}><TaskAltIcon sx={{height:'13px'}}/>active</Button>
          :
          <Button size="small" aria-readonly  sx={{display:'flex', alignItems:'center', color:'red'}}><TaskAltIcon sx={{height:'13px'}}/>expired</Button>

      }
      <Button size="small" sx={{color:'purple', borderColor:'purple', fontSize:'12px', textTransform:'capitalize'}} >AI insights</Button>
    </CardActions>
  </Card>
  )
}
