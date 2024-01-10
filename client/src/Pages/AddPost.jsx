import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { Container, Box, Paper, Grid, Typography, Button, Divider, Card, CardContent, TextField } from '@mui/material'
import * as yup from 'yup';
import { useFormik } from 'formik';
import http from '../http.js';
import { useNavigate, Link } from 'react-router-dom'

function AddPost() {
    const btnstyle = { fontWeight: 'bold', color: 'white', backgroundColor: '#FF4E00' }
    const navigate = useNavigate();

    //validation schema
    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
        },
        validationSchema: yup.object({
            title: yup.string().trim().min(3).max(100).required(),
            description: yup.string().trim().min(3).max(500).required()
        }),
        onSubmit: (data) => {
            data.title = data.title.trim();
            data.description = data.description.trim();
            http.post('/forum', data)
                .then((res) => {
                    console.log(res.data)
                    navigate("/forum")
                    formik.resetForm();
                })
        },
    });
    return (
        <Container maxWidth="x1">
            <Typography variant="h4" style={{ textAlign: "left", fontWeight: "bold", paddingTop: 100, fontSize: '50px' }}>
                Start your Discussions
            </Typography>
            <Box component="form" onSubmit={formik.handleSubmit}>
                <Grid container justifyContent='center' spacing={2} direction= "column">
                    <Grid item xs={4} style={{maxWidth: 596}}>
                        <TextField
                            fullWidth
                            label='Enter Title'
                            name='title'
                            onChange={formik.handleChange}
                            value={formik.values.title}
                            error={formik.touched.title && Boolean(formik.errors.title)}
                            helperText={formik.touched.title && formik.errors.title}

                        />
                    </Grid>
                    <Grid item xs={7} style={{maxWidth: 800}}>
                        <TextField

                            multiline
                            fullWidth
                            label='Enter Description'
                            name='description'
                            onChange={formik.handleChange}
                            value={formik.values.description}
                            error={formik.touched.description && Boolean(formik.errors.description)}
                            helperText={formik.touched.description && formik.errors.description}
                        />
                    </Grid>
                    <Grid item xs={1}>
                        <Button type='submit' color='btn' variant="contained" style={btnstyle} fullWidth sx={{ height: '50px' }}>
                            Post
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}
export default AddPost