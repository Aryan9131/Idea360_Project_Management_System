import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SignIn = ({setToken}) => {
   
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSignIn = async () => {
    try {
      const sgnInObj = {
        email: email,
        password: password
      }
      const signInUserResponse = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/user/create-session`, {
        method: "POST",
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(sgnInObj)
      })
      const signInUserData = await signInUserResponse.json();
      localStorage.setItem('token', signInUserData.data.token);
      setToken(signInUserData.data.token); // Update React state

      toast.success("Sign In Successful !", {
        style: {
          backgroundColor: 'green', // Custom background color
          color: 'white',           // Custom text color
        }
      });
      navigate('/')
    } catch (error) {
        console.log("Error while signing-In user "+error);
        toast.error("Sign In Failed !", {
          style: {
            backgroundColor: 'red',   // Custom background color for error
            color: 'white',           // White text color
          }
        });
        navigate('/sign-in')
    }
  }
  return (
    <Box sx={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <ToastContainer />
      <Box sx={{
        width: { xs: '100%', sm: '90%', md: '350px' },
        height: { xs: '100vh', sm: '90vh', md: '400px' },
        backgroundColor: '#c0c1c0', display: 'flex',
        flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
        position: 'relative'
      }}>
        <Typography variant="h4" sx={{ position: 'absolute', top: '10%' }}>Sign In</Typography>
        <TextField
          variant='filled'
          label="Email"
           value={email}
          onChange={(e)=>setEmail(e.target.value)}
          sx={{ width: '80%', margin: '20px 0px' }}
        />
        <TextField
          variant='filled'
          type='password'
          label="Password"
           value={password}
          onChange={(e)=>setPassword(e.target.value)}
          sx={{ width: '80%' }}
        />
        <Box sx={{ marginTop: '20px', width: '100%', display: 'flex', justifyContent: 'space-around' }}>
          <Button variant='outlined' onClick={handleSignIn}>SignIn</Button>
          <Button variant='outlined' onClick={() => navigate('/sign-up')}>SignUp</Button>
        </Box>
      </Box>
    </Box>
  )
}
