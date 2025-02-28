import { useState } from 'react'

import './Layout.css'
import { Box, Typography, Button } from '@mui/material'
import { Navbar } from './Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LeftSwipeableDrawer from './Drawer'
import { LeftSidebar } from './LeftSidebar'
import { RightSidebar } from './RightSidebar'

function Layout() {
    return (
        <Box sx={{ height: '100vh',overflowY:{xs:'auto', md:'hidden'}, width: '100vw', backgroundColor: 'white', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Navbar />
            <ToastContainer />
            <Box sx={{ height: '100%', width: '100vw', display: {xs:'none', md:'flex'} }}>
                <Box id='leftSidebar' sx={{ height: '100%', width: '12%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <LeftSidebar />
                </Box>
                <Box id='mainContent' sx={{ height: '100%', width: '70%', backgroundColor: 'purple' }}>
                    <Outlet />
                </Box>
                <Box id='rightSidebar' sx={{ height: '100%', width: '18%' }}>
                <RightSidebar/>
                </Box>
            </Box>
            <Box id='mainContentMobileView' sx={{display:{xs:'flex', md:'none'}, height: '100%', width: '100%', backgroundColor: 'purple' }}>
                    <Outlet />
                </Box>
            <Box id='rightSidebarMobileView' sx={{display:{xs:'flex', md:'none'}, flexDirection:{xs:'column',sm:'row'}, width: '100%' }}>
                   <RightSidebar/>
            </Box>
        </Box>
    )
}

export default Layout
