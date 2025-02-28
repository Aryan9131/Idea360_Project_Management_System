import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SignUp = () => {
  const [name, setName]=useState("");
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("")
  const navigate=useNavigate();
  const handleCreateUser=async ()=>{
     const  userObj={
      name :name,
      email :email, 
      password :password
     }
     const createdUserResponse=await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/user/create-user`,{
       method:"POST",
       headers:{
          'content-type':'application/json'
       },
       body:JSON.stringify(userObj)
     })
    const createdUserData=await createdUserResponse.json();
    toast.success("Sign Up Successful !", {
      style: {
        backgroundColor: 'green', // Custom background color
        color: 'white',           // Custom text color
      }
    });
    navigate('/sign-in')
  }
  return (
    <Box sx={{width:'100vw', height:'100vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
          <ToastContainer />
         <Box sx={{
                 width:{xs:'100%', sm:'90%', md:'400px'}, 
                 height:{xs:'100vh', sm:'90vh', md:'450px'},
                 backgroundColor:'#c0c1c0', display:'flex',
                 flexDirection:'column', justifyContent:'center', alignItems:'center',
                 position:'relative'
                 }}>
                   <Typography variant="h4" sx={{position:'absolute', top:'10%'}}>Sign Up</Typography>
                  <TextField
                   variant='filled'
                   label="Name"
                   value={name}
                   onChange={(e)=>setName(e.target.value)}
                   sx={{width:'80%'}}
                  />
                  <TextField
                   variant='filled'
                   label="Email"
                   value={email}
                   onChange={(e)=>setEmail(e.target.value)}
                   sx={{width:'80%', margin:'20px 0px'}}
                  />
                  <TextField
                   variant='filled'
                   type='password'
                   label="Password"
                   value={password}
                   onChange={(e)=>setPassword(e.target.value)}
                   sx={{width:'80%'}}
                  />
                  <Box sx={{marginTop:'20px', width:'100%', display:'flex', justifyContent:'space-around'}}>
                      <Button variant='outlined' onClick={()=>navigate('/sign-in')}>SignIn</Button>
                      <Button  variant='outlined' onClick={handleCreateUser}>SignUp</Button>
                  </Box>
         </Box>
    </Box>
  )
}
