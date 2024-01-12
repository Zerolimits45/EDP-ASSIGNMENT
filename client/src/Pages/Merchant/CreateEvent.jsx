import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { Typography, Grid, Container, TextField, Box, Button, Card, CardContent, Divider, MenuItem } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import * as yup from 'yup';
import { useFormik } from 'formik';
import http from '../../http.js';
import { useNavigate, Link } from 'react-router-dom'
import dayjs from 'dayjs';

function CreateEvent() {
    const btnstyle = { margin: '30px 0', fontWeight: 'bold', color: 'white', backgroundColor: '#FF4E00' };

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            category: '',
            startdate: dayjs(),
            enddate: dayjs(),
            capacity: '',
            price: '',
            address: '',
        },
        validationSchema: yup.object({
            title: yup.string().trim().min(3).max(100).required(),
            description: yup.string().trim().min(3).max(500).required(),
            category: yup.string().trim().min(3).max(500).required(),
            address: yup.string().trim().min(3).max(500).required(),
            startdate: yup.date().required('Start Date is required'),
            enddate: yup.date().required('End Date is required'),
            capacity: yup.number().required('Quantity is required').positive('Quantity must be greater than 0'),
            price: yup.number().required('Price is required').positive('Price must be greater than 0')
        }),
        onSubmit: (data) => {
            data.title = data.title.trim();
            data.description = data.description.trim();
            data.address = data.address.trim();
            data.category = data.category.trim();
            http.post('/Event', data)
                .then((res) => {
                    console.log(res.data)
                    formik.resetForm();
                }).catch((error) => {
                    if (error.response && error.response.status === 400) {
                        const errorMessages = error.response.data.errors;

                        const formikErrors = {};
                        for (const field in errorMessages) {
                            const lowercaseField = field.toLowerCase();
                            formikErrors[lowercaseField] = errorMessages[field];
                        }
                        console.log(formikErrors)
                        const combinedErrors = { ...formikErrors };
                        formik.setErrors(combinedErrors);
                    }
                })
        },
    });


    return (
        <Container maxWidth='xl'>
            <Typography variant='h4' color="#000000" marginBottom={2}>
                Create Your Event
            </Typography>
            <Typography variant='h5' color="#000000" marginBottom={2}>
                Event Details
            </Typography>
            <Box component="form" onSubmit={formik.handleSubmit}>
                <Card>
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4}>
                                <TextField
                                    label="Event Title"
                                    name="title"
                                    fullWidth
                                    onChange={formik.handleChange}
                                    value={formik.values.title}
                                    error={formik.touched.title && Boolean(formik.errors.title)}
                                    helperText={formik.touched.title && formik.errors.title}
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField
                                    label="Price"
                                    name="price"
                                    fullWidth
                                    onChange={formik.handleChange}
                                    value={formik.values.price}
                                    error={formik.touched.price && Boolean(formik.errors.price)}
                                    helperText={formik.touched.price && formik.errors.price}
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField
                                    label="Capacity"
                                    name="capacity"
                                    fullWidth
                                    onChange={formik.handleChange}
                                    value={formik.values.capacity}
                                    error={formik.touched.capacity && Boolean(formik.errors.capacity)}
                                    helperText={formik.touched.capacity && formik.errors.capacity}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    label="Address"
                                    name="address"
                                    fullWidth
                                    onChange={formik.handleChange}
                                    value={formik.values.address}
                                    error={formik.touched.address && Boolean(formik.errors.address)}
                                    helperText={formik.touched.address && formik.errors.address}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    label="Category"
                                    name="category"
                                    fullWidth
                                    onChange={formik.handleChange}
                                    value={formik.values.category}
                                    error={formik.touched.category && Boolean(formik.errors.category)}
                                    helperText={formik.touched.category && formik.errors.category}
                                    select
                                >
                                    <MenuItem value='Dine & Wine'>Dine & Wine</MenuItem>
                                    <MenuItem value='Family Bonding'>Family Bonding</MenuItem>
                                    <MenuItem value='Sports & Adventure'>Sports & Adventure</MenuItem>
                                    <MenuItem value='Hobbies & Wellness'>Hobbies & Wellness</MenuItem>
                                    <MenuItem value='Travel'>Travel</MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <TextField
                                    label="Description"
                                    name="description"
                                    multiline
                                    maxRows={4}
                                    fullWidth
                                    onChange={formik.handleChange}
                                    value={formik.values.description}
                                    error={formik.touched.description && Boolean(formik.errors.description)}
                                    helperText={formik.touched.description && formik.errors.description}
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
                <Typography variant='h5' color="#000000" marginBottom={2} marginTop={5}>
                    How Long is Your Event?
                </Typography>
                <Card>
                    <CardContent style={{ display: 'flex', flexGrow: 1 }}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                name='startdate'
                                label="Start Date"
                                value={formik.values.startdate}
                                onChange={(value) => formik.setFieldValue('startdate', value)}
                                error={formik.touched.startdate && Boolean(formik.errors.startdate)}
                            />
                        </LocalizationProvider>
                        <Typography variant='h6' color="#000000" marginTop={2} marginLeft={5} marginRight={5}>
                            To
                        </Typography>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                name='enddate'
                                label="End Date"
                                value={formik.values.enddate}
                                onChange={(value) => formik.setFieldValue('enddate', value)}
                                error={formik.touched.enddate && Boolean(formik.errors.enddate)}
                            />
                        </LocalizationProvider>
                        {formik.touched.enddate && formik.errors.enddate && (
                            <Typography variant="caption" color="error">
                                <br />
                                {formik.errors.enddate}
                            </Typography>
                        )}
                        {formik.touched.startdate && formik.errors.startdate && (
                            <Typography variant="caption" color="error">
                                {formik.errors.startdate}
                            </Typography>
                        )}
                    </CardContent>
                </Card>
                <Button type="submit" variant='contained' style={btnstyle}>Create Event</Button>
            </Box>
        </Container>
    )
}

export default CreateEvent