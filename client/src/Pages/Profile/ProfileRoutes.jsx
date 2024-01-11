import React from 'react'
import { Collapse, Container, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Grid, Card } from '@mui/material'
import { Link, Routes, Route } from 'react-router-dom'

//Pages
import Profile from './Profile'
import Purchases from './Purchases';
import Posts from './Posts';
import Reviews from './Reviews';
import ChangePassword from './ChangePassword';
import ProfileEdit from './ProfileEdit';

//icons
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';


function ProfileRoutes() {
  return (
    <Container maxWidth='xl'>
            <Grid container spacing={2} marginTop={10}>
                <Grid item xs={12} sm={3}>
                    <Card>
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <AccountCircleIcon color='primary' />
                                </ListItemIcon>
                                <ListItemButton LinkComponent={Link} to='/profile/profile' >
                                    <ListItemText primary="Profile" />
                                </ListItemButton>
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <ListItemIcon>
                                    <AttachMoneyIcon color='primary' />
                                </ListItemIcon>
                                <ListItemButton LinkComponent={Link} to='/profile/purchases' >
                                    <ListItemText primary="My Purchases" />
                                </ListItemButton>
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <ListItemIcon>
                                    <LocalPostOfficeIcon color='primary' />
                                </ListItemIcon>
                                <ListItemButton LinkComponent={Link} to='/profile/posts' >
                                    <ListItemText primary="My Posts" />
                                </ListItemButton>
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <ListItemIcon>
                                    <LibraryBooksIcon color='primary' />
                                </ListItemIcon>
                                <ListItemButton LinkComponent={Link} to='/profile/reviews' >
                                    <ListItemText primary="My Reviews" />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={9}>
                    <Routes>
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/purchases" element={<Purchases />} />
                        <Route path="/posts" element={<Posts />} />
                        <Route path="/reviews" element={<Reviews />} />
                        <Route path="/changepassword" element={<ChangePassword />} />
                        <Route path="/edit" element={<ProfileEdit />} />
                    </Routes>
                </Grid>
            </Grid>
        </Container>
  )
}

export default ProfileRoutes