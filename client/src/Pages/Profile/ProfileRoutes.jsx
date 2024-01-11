import React from 'react'

//Pages
import Profile from './Profile'
import Purchases from './Purchases';
import Posts from './Posts';
import Reviews from './Reviews';

//icons
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
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
                                    <DirectionsCarIcon color='primary' />
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
                        <Route path="/profile/purchases" element={<Purchases />} />
                        <Route path="/profile/posts" element={<Posts />} />
                        <Route path="/profile/reviews" element={<Reviews />} />
                    </Routes>
                </Grid>
            </Grid>
        </Container>
  )
}

export default ProfileRoutes