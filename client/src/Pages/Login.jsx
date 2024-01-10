import React from 'react'
import { Container, Box, Paper, Grid, Typography, Button, Divider, Card, CardContent,TextField } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'

function SignIn() {
    // style
    const btnstyle = { backgroundColor: 'black', fontWeight: 'bold', color: 'white', marginTop: '50px' }
    const loginbtnstyle = { backgroundColor: '#FF4E00', fontWeight: 'bold', color: 'white' }

    return (
        <Container maxWidth="xl">
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
                <Paper elevation={3} sx={{ padding: '2rem', maxWidth: '400px', height: '284px', backgroundImage: 'url("../Images/background 2.png")', backgroundSize: 'cover' }}>
                    <Typography variant="h5" align="center" gutterBottom fontWeight={'bold'}>
                        New Here?
                    </Typography>
                    <Typography variant="body1" align="center" gutterBottom fontWeight={'bold'} >
                        Create an account to get started!
                    </Typography>
                    <Link to='/signup'>
                    <Button variant='contained' color='btn' style={btnstyle} fullWidth>
                        Sign Up
                    </Button>
                    </Link>
                </Paper>

                <Paper elevation={3} sx={{ padding: '2rem', maxWidth: '400px' }}>
                    <Box>
                        <Typography variant="h5" align="center" gutterBottom>
                            Login
                        </Typography>
                        <Divider sx={{ margin: '1rem 0' }} />
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    name='email'
                                    label="Email"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name='password'
                                    label="Password"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" fullWidth style={loginbtnstyle}>
                                     Login
                                </Button>
                            </Grid>
                        </Grid>
                        <Typography marginTop={'15px'}>
                            Forgot password ?
                        </Typography>
                    </Box>
                </Paper>
            </Box>
        </Container>
    );
}


export default SignIn