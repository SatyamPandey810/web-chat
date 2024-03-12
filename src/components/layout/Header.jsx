import { AppBar, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material';
import React from 'react';
import { orange } from '../../constants/color';
import { Add as AddIcon, Group as GroupIcon, Menu as MenuIcon, Search as SearchIcon } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()

    const mobileHandler = () => { }
    const openSearchBar = () => { }
    const openGroup = () => { }
    const navigateGroup = () => {
        navigate('/group')
    }

    return (
        <>
            <Box sx={{ flexGrow: 1 }} height={"4rem"}>
                <AppBar position="static" sx={{
                    bgcolor: orange,
                }}
                >
                    <Toolbar>
                        <Typography variant='h6' sx={{
                            display: { xs: "none", sm: "block" }
                        }}>
                            Chat App
                        </Typography>
                        <Box sx={{
                            display: { xs: "block", sm: "none" }
                        }}>
                            <IconButton color="inherit" onClick={mobileHandler}>
                                <MenuIcon />
                            </IconButton>
                        </Box>
                        <Box sx={{
                            flexGrow: 1
                        }} />
                        <Box>
                            <Tooltip title="Search">
                                <IconButton color="inherit" size="large" onClick={openSearchBar}>
                                    <SearchIcon />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="New Group">
                                <IconButton color="inherit" size="large" onClick={openGroup}>
                                    <AddIcon />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title='Manage Group'>
                                <IconButton color="inherit" size="large" onClick={navigateGroup}>
                                    <GroupIcon />
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
}

const IconBtn = ({ title, icon, onClick }) => {
    return (
        <Tooltip title={title}>
            <IconButton color="inherit" size="large" onClick={onClick}>
                <icon />
            </IconButton>
        </Tooltip>
    )

}

export default Header;
