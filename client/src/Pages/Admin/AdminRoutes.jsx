import React from 'react'
import { Container, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Grid, Card } from '@mui/material'
import { Link, Routes, Route } from 'react-router-dom'

//Pages
import UserView from './UserView'
import UserEdit from './UserEdit'
import OrdersView from './OrdersView'
import OrderItems from './OrderItems'
import PostsView from './PostsView'
import AddAdminPost from './AddAdminPost'
import AdminEditPost from './AdminEditPost'
import EventsView from './EventsView'
import CustomerServiceTickets from './CustomerServiceTickets'

//icons
import CreateIcon from '@mui/icons-material/Create';
import EventIcon from '@mui/icons-material/Event';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';



function ProfileRoutes() {
    return (
        <Container maxWidth='xl'>
            <Grid container spacing={2} marginTop={10}>
                <Grid item xs={12} sm={3}>
                    <Card>
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <CreateIcon color='primary' />
                                </ListItemIcon>
                                <ListItemButton LinkComponent={Link} to='/admin/viewusers' >
                                    <ListItemText primary="View All Users" />
                                </ListItemButton>
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <ListItemIcon>
                                    <EventIcon color='primary' />
                                </ListItemIcon>
                                <ListItemButton LinkComponent={Link} to='/admin/vieworders' >
                                    <ListItemText primary="View All Orders" />
                                </ListItemButton>
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <ListItemIcon>
                                    <ChatBubbleIcon color='primary' />
                                </ListItemIcon>
                                <ListItemButton LinkComponent={Link} to='/admin/viewposts' >
                                    <ListItemText primary="View All Posts" />
                                </ListItemButton>
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <ListItemIcon>
                                    <ConfirmationNumberIcon color='primary' />
                                </ListItemIcon>
                                <ListItemButton LinkComponent={Link} to='/admin/customerserviceticket' >
                                    <ListItemText primary="View Customer Service Tickets" />
                                </ListItemButton>
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <ListItemIcon>
                                    <EventIcon color='primary' />
                                </ListItemIcon>
                                <ListItemButton LinkComponent={Link} to='/admin/viewevents' >
                                    <ListItemText primary="View Merchant Events" />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={9}>
                    <Routes>
                        <Route path="/viewusers/edit/:id" element={<UserEdit />} />
                        <Route path='/viewusers' element={<UserView />} />
                        <Route path='/vieworders' element={<OrdersView />} />
                        <Route path='/orderitems/:id' element={<OrderItems />} />
                        <Route path='/viewposts' element={<PostsView />} />
                        <Route path='/addadminpost' element={<AddAdminPost />} />
                        <Route path='/admineditpost' element={<AdminEditPost />} />
                        <Route path='/customerserviceticket' element={<CustomerServiceTickets />} />
                        <Route path='/viewevents' element={<EventsView />} />
                    </Routes>
                </Grid>
            </Grid>
        </Container>
    )
}

export default ProfileRoutes