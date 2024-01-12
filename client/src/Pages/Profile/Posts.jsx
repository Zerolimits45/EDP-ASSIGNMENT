import React, { useState, useEffect, useContext } from 'react'
import { Container, Box, Paper, Grid, Typography, Button, Divider, Card, CardContent } from '@mui/material'
import { MarginTwoTone } from '@mui/icons-material'
import { Link, useNavigate } from 'react-router-dom'
import http from '../../http.js';
import UserContext from '../../contexts/UserContext.js';

function Posts() {
  const btnstyle = { margin: '8px 0', fontWeight: 'bold', color: 'white', backgroundColor: '#FF4E00' };
  const dividerstyle = { backgroundColor: '#150039', fontWeight: 'bold', margin: '10px 0' };

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
                            <Link to={`/profile/edit/${post.id}`} style={{ textDecoration: 'none' }}>
                              <Button
                                variant='contained'
                                color='btn'
                                style={{ margin: '8px 0', fontWeight: 'bold', color: 'white', backgroundColor: 'red', marginLeft: 50 }}
                              >
                                Delete Post
                              </Button>
                            </Link>
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