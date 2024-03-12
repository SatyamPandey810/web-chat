import { AppBar, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material';
import React, { useState } from 'react';
import { orange } from '../../constants/color';
import { Add as AddIcon, Group as GroupIcon, Menu as MenuIcon, Search as SearchIcon, Logout as LogoutIcon, Notifications as NotificationsIcon } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import Search from '../specific/Search';

const Header = () => {
    const navigate = useNavigate()
    const [ismobile, setIsMobile] = useState(false);
    const [isSearch, setIsSearch] = useState(false);
    const [isNewGroup, setIsNewGroup] = useState(false);
    const [isNotification, setIsNotification] = useState(false);

    const mobileHandler = () => {
        setIsMobile(prev => !prev);
    }
    const openSearchBar = () => {
        setIsSearch(prev => !prev)
    }
    const openGroup = () => {
        setIsNewGroup(prev => !prev)
    }
    const openNotification = () => {
        setIsNotification(prev => !prev)
    }

    const navigateGroup = () => {
        navigate('/group')
    }

    const logoutHandler = () => {

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
                            <IconBtn title={'Search'} icon={<SearchIcon />} onClick={openSearchBar} />
                            <IconBtn title={'New Group'} icon={<AddIcon />} onClick={openGroup} />
                            <IconBtn title={'Notification'} icon={<NotificationsIcon  />} onClick={openNotification} />
                            <IconBtn title={'Manage Group'} icon={<GroupIcon />} onClick={navigateGroup} />
                            <IconBtn title={'Logout'} icon={<LogoutIcon />} onClick={logoutHandler} />
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            {
             isSearch && <Search/>
            }
        </>
    );
}

const IconBtn = ({ title, icon, onClick }) => {
    return (
        <Tooltip title={title}>
            <IconButton color="inherit" size="large" onClick={onClick}>
                {icon}
            </IconButton>
        </Tooltip>
    )

}

export default Header;
