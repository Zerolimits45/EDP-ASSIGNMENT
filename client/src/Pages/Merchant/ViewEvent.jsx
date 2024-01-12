import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { Typography, Grid, Container, TextField, Box, Button, Card, CardContent, CardMedia } from '@mui/material'
import { Link } from 'react-router-dom'
import http from '../../http.js';
import * as yup from 'yup';
import { useFormik } from 'formik';
import dayjs from 'dayjs';

function ViewEvent() {
    const [eventList, setEventList] = useState([]);
    useEffect(() => {
        http.get(`/Event`).then((res) => {
            setEventList(res.data);
            console.log(res.data)
        })
    }, [])

    return (
        <Container maxWidth="xl" >
            <Typography variant="h4" marginBottom={2}>
                View Event
            </Typography>
            {eventList.map((event) =>
                <Card>
                    <CardMedia
                        component="img"
                        height="200"
                        image="../images/product_test.jpg"
                        alt="Event Image">
                    </CardMedia>
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <Typography variant="h5" marginBottom={2}>
                                    Title: {event.title}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant="h6" marginBottom={2}>
                                    Category: {event.category}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Typography variant="h6" marginBottom={2}>
                                    Price: ${event.price}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Typography variant="h6" marginBottom={2}>
                                    Capacity: {event.capacity}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Typography variant="h6" marginBottom={2}>
                                    Address: {event.address}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant="h6" marginBottom={2}>
                                    Date: {new Date(event.startDate).toLocaleDateString()} To {new Date(event.endDate).toLocaleDateString()}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant="h6" marginBottom={2}>
                                    Description: {event.description}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Link to={`/Merchant/EditEvent/${event.id}`}>
                                    <Button variant="contained" color="primary" fullWidth>
                                        Edit Event
                                    </Button>
                                </Link>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Button variant="contained" color="primary" fullWidth>
                                    Delete Event
                                </Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            )}
        </Container>
    )
}

export default ViewEvent