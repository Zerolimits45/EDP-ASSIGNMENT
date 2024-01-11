import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Box, AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import UserContext from '../contexts/UserContext.js';

import MenuIcon from '@mui/icons-material/Menu'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AccountCircle } from '@mui/icons-material';

function Navbar() {
    const logout = () => {
        localStorage.clear();
        window.location = "/";
    };
    const { user, setUser } = useContext(UserContext);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" elevation={0} style={{ backgroundColor: 'white', color: 'black' }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => setIsOpen(true)}
                    >
                        <MenuIcon />
                    </IconButton>



                    <Box marginLeft={"1rem"} display={["none", "none", "flex"]} sx={{ flexGrow: 1 }}>
                        <img src="../Images/logo_uplay.png" alt="logo" style={{ height: "30px", width: "90px" }} />
                        <Button color="inherit" LinkComponent={Link} to='/' sx={{ fontWeight: 'bold' }}>Home</Button>
                        <Button color="inherit" LinkComponent={Link} to='/categories' sx={{ fontWeight: 'bold' }}>Categories</Button>
                        <Button color="inherit" LinkComponent={Link} to='/memberships' sx={{ fontWeight: 'bold' }}>Memberships</Button>
                        <Button color="inherit" LinkComponent={Link} to='/aboutus' sx={{ fontWeight: 'bold' }}>About Us</Button>
                        <Button color="inherit" LinkComponent={Link} to='/contactus' sx={{ fontWeight: 'bold' }}>Contact Us</Button>
                        <Button color="inherit" LinkComponent={Link} to='/forum' sx={{ fontWeight: 'bold' }}>Forum</Button>
                    </Box>
                    <>
                        <ShoppingCartIcon style={{ color: "black" }} />
                        <Button color="inherit" LinkComponent={Link} to='/cart' sx={{ fontWeight: 'bold' }}>Cart</Button>
                        {user && (
                            <>
                                <AccountCircle style={{ color: 'black' }} />
                                <Button color="inherit" LinkComponent={Link} to={`/profile/account`}>{user.name}</Button>
                                <Button onClick={logout} color="inherit" sx={{ fontWeight: 'bold' }}>Logout</Button>
                            </>
                        )}
                        {!user && (
                            <>
                                <AccountCircle style={{ color: "black" }} />
                                <Button color="inherit" LinkComponent={Link} to='/login' sx={{ fontWeight: 'bold' }}>Login</Button>
                            </>
                        )}
                    </>
                </Toolbar>
            </AppBar>
        </Box>


    )
}

export default Navbar