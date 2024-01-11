import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { Container, Box, Paper, Grid, Typography, Button, Divider, Card, CardContent, TextField } from '@mui/material'
import * as yup from 'yup';
import { useFormik } from 'formik';
import http from '../http.js';
import { useNavigate, Link } from 'react-router-dom'
import Stack from '@mui/material/Stack';


function Profile() {
    const btnstyle = { fontWeight: 'bold', color: 'white', backgroundColor: '#FF4E00' }
    const navigate = useNavigate();
    const regEx = /^[89]{1}\d{7}$/

    //validation schema
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
        },
        validationSchema: yup.object({
            name: yup.string().trim().min(5, 'Minimum 5 characters').required('Required'),
            email: yup.string().trim().email('Invalid email format').required('Required'),
            phone: yup.string().trim().min(8).max(8).matches(regEx, "Phone is Invalid").required('Required'),
            
                }),
            onSubmit: (data) => {
                data.title = data.title.trim();
                data.description = data.description.trim();
                http.post('/Post', data)
                    .then((res) => {
                        console.log(res.data)
                        navigate("/forum")
                        formik.resetForm();
                    })
            },
        });
        return(
        <Container maxWidth = "xl" >
                <Box flexDirection={'row'} display={'flex'}>
                    <Box marginTop={25} height={300}>
                        <Typography variant="h6" style={{ textAlign: "left", paddingTop: 20, fontWeight: 'bold' }}>Profile</Typography>
                        <Typography variant="h6" style={{ textAlign: "left", paddingTop: 20, }}>Purchases</Typography>
                        <Typography variant="h6" style={{ textAlign: "left", paddingTop: 20, }}>Posts</Typography>
                        <Typography variant="h6" style={{ textAlign: "left", paddingTop: 20, }}>Reviews</Typography>
                    </Box>
                    <Box marginLeft={30} marginTop={10} borderRadius={2} border={0} height={630} width={1600} padding={10}>
                        <Grid container direction='row' border={0} justifyContent={'center'} spacing={4}>
                            <Grid item xs={6} >
                                <Paper>
                                    <img src="../images/profilebg.png" style={{ width: '50%', borderRadius: '10px', marginLeft: '120px' }} />
                                    <Typography variant="h5" style={{ textAlign: "center", fontWeight: 'bold' }}>My Profile</Typography>
                                    <br />
                                    <Grid container direction='row' border={0} justifyContent={'center'} spacing={2}>
                                        <Grid item xs={6}>
                                            <TextField
                                                fullWidth
                                                label='Name'
                                                name='name'
                                                onChange={formik.handleChange}
                                                value={formik.values.name}
                                                error={formik.touched.name && Boolean(formik.errors.name)}
                                                helperText={formik.touched.name && formik.errors.name}

                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                fullWidth
                                                label='Phone Number'
                                                name='phone'
                                                onChange={formik.handleChange}
                                                value={formik.values.phone}
                                                error={formik.touched.phone && Boolean(formik.errors.phone)}
                                                helperText={formik.touched.phone && formik.errors.phone}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid container direction='column' border={0} justifyContent={'center'} spacing={1} marginTop={'auto'}>
                                        <Grid item xs={6}>
                                            <TextField
                                                fullWidth
                                                label='Email'
                                                name='email'
                                                onChange={formik.handleChange}
                                                value={formik.values.email}
                                                error={formik.touched.email && Boolean(formik.errors.email)}
                                                helperText={formik.touched.email && formik.errors.email}

                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                fullWidth
                                                label='Address'
                                                name='address'
                                                
                                            />
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                            <Grid item xs={6}>
                                <Stack direction="column" spacing={2}>
                                    <Paper elevation={4}>
                                        <Typography variant="h5" style={{ textAlign: "left", fontWeight: 'bold', paddingLeft: 10, paddingBottom: 40, paddingTop: 20 }}>My Memberships:</Typography>
                                        <Grid container direction='column' border={0} justifyContent={'center'} spacing={0}>
                                            <Grid item xs={6}>
                                                <Grid container direction='row' border={0} justifyContent={'center'} spacing={0}>
                                                    <Grid item xs={6}>
                                                        <Typography variant="h5" style={{ textAlign: "left", fontWeight: 'bold', paddingLeft: 10, paddingBottom: 6 }}>Friends Of UPlay</Typography>
                                                        <Typography variant="h7" style={{ textAlign: "left", fontWeight: '', paddingLeft: 10, paddingBottom: 15 }}>Benefits Applied</Typography>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Button variant="contained" color="btn" style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block', fontWeight: "bold", color: 'white', padding: 15 }}>
                                                            View More
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Grid container direction='row' border={0} justifyContent={'center'} spacing={0}>
                                                    <Grid item xs={6}>
                                                        <Typography variant="h5" style={{ textAlign: "left", fontWeight: 'bold', paddingLeft: 10, paddingBottom: 15 }}>NTUC Member</Typography>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Button variant="contained" color="btn" style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block', fontWeight: "bold", color: 'white', padding: 15 }}>
                                                            View More
                                                        </Button>                                                </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                    <Paper elevation={4}>
                                        <Typography variant="h5" style={{ textAlign: "left", fontWeight: 'bold', paddingLeft: 10, paddingBottom: 40, paddingTop: 20 }}>My Activities</Typography>
                                        <Typography variant="h6" style={{ textAlign: "left", fontWeight: 'bold', paddingLeft: 10 }}>Upcoming Activities</Typography>
                                        <Typography variant="h7" style={{ textAlign: "left", paddingLeft: 10, paddingBottom: 40 }}>SG Pub Crawls: Nightlife Tour + 3 Free Shots </Typography>
                                        <br />
                                        <Typography variant="h7" style={{ textAlign: "left", paddingLeft: 10, paddingBottom: 40 }}>Clay Sculpture Workshop</Typography>
                                        <br />
                                        <Typography variant="h6" style={{ textAlign: "left", fontWeight: 'bold', paddingLeft: 10, paddingTop: 20 }}>Activities Participated</Typography>
                                        <Typography variant="h7" style={{ textAlign: "left", paddingLeft: 10, paddingBottom: 40 }}>SG Pub Crawls: Nightlife Tour + 3 Free Shots </Typography>
                                        <br />
                                        <Typography variant="h7" style={{ textAlign: "left", paddingLeft: 10, paddingBottom: 40 }}>Clay Sculpture Workshop</Typography>
                                    </Paper>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>

        </Container >
    )
}
export default Profile