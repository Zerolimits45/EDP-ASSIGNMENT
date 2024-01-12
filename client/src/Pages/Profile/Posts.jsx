import React, { useState, useEffect, useContext } from 'react'
import { Container, Box, Paper, Grid, Typography, Button, Divider, Card, CardContent } from '@mui/material'
import { MarginTwoTone } from '@mui/icons-material'
import { Link, useNavigate } from 'react-router-dom'
import http from '../../http.js';
import UserContext from '../../contexts/UserContext.js';

import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';



function Posts() {
  const btnstyle = { margin: '8px 0', fontWeight: 'bold', color: 'white', backgroundColor: '#FF4E00' };
  const dividerstyle = { backgroundColor: '#150039', fontWeight: 'bold', margin: '10px 0' };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { user } = useContext(UserContext);
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    http.get(`/Post/User`).then((res) => {
      setPostList(res.data);
      console.log(res.data)
    })
  }, [])

  return (
    <Container maxWidth="xl" >
      <Typography variant="h4" marginBottom={2}>
        My Posts
      </Typography>
      <Grid container>
        <Grid item xs={12} md={12}>
          {
            postList.map((post) =>
              <>
                <Card elevation={5}>
                  <CardContent>
                    <Grid container spacing={2}>
                      <Grid item xs={12} display={'flex'}>
                        <Box style={{ display: 'flex', flexDirection: 'column' }}>
                          <Typography variant='h5' fontWeight={600}>
                            {post.title}
                          </Typography>
                          <Typography variant='h6'>
                            Messages number
                          </Typography>
                          <Divider style={dividerstyle} />
                          <Box style={{ display: 'flex', flexDirection: 'row' }}>
                            <Link to={`/forum/viewpost/${post.id}`} style={{ textDecoration: 'none' }}>
                              <Button
                                variant='contained'
                                color='btn'
                                style={btnstyle}
                              >
                                Go to your post
                              </Button>
                            </Link>
                            <Link to={`/profile/editpost/${post.id}`} style={{ textDecoration: 'none' }}>
                              <Button
                                variant='contained'
                                color='btn'
                                style={{ margin: '8px 0', fontWeight: 'bold', color: 'white', backgroundColor: '#FF4E00', marginLeft: 550 }}
                              >
                                Edit Post
                              </Button>
                            </Link>
                            <Dialog open={open} onClose={handleClose}>
                              <DialogTitle>
                                Delete Post
                              </DialogTitle>
                              <DialogContent>
                                <DialogContentText>
                                  Are you sure you want to delete this Post?
                                </DialogContentText>
                              </DialogContent>
                              <DialogActions>
                                <Button variant="contained" color="inherit"
                                  onClick={handleClose}>
                                  Cancel
                                </Button>
                                <Button variant="contained" color="error"
                                  >
                                  Delete
                                </Button>
                              </DialogActions>
                            </Dialog>
                            <Button
                              variant='contained'
                              color='btn'
                              style={{ margin: '8px 0', fontWeight: 'bold', color: 'white', backgroundColor: 'red', marginLeft: 50 }}
                              onClick={handleOpen}
                            >
                              Delete Post
                            </Button>

                          </Box >
                        </Box>

                      </Grid>
                    </Grid>
                  </CardContent>
                </Card >
              </>
            )
          }
        </Grid>
      </Grid>
    </Container >
  )
}

export default Posts