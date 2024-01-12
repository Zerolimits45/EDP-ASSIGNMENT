import React from 'react'
import { Typography, Grid, Container, TextField, Box, Button, Card, CardContent, CardMedia } from '@mui/material'
import { Link } from 'react-router-dom'

function ViewEvent() {
    return (
        <Container maxWidth="xl" >
            <Typography variant="h4" marginBottom={2}>
                View Event
            </Typography>
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
                                Event Title
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                        <Typography variant="h6" marginBottom={2}>
                            Event Category
                        </Typography>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Typography variant="h6" marginBottom={2}>
                                Event Price
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4}>
                        <Typography variant="h6" marginBottom={2}>
                            Event Quantity
                        </Typography>
                        </Grid>
                        <Grid item xs={12} md={4}>
                        <Typography variant="h6" marginBottom={2}>
                            Event Location
                        </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                        <Typography variant="h6" marginBottom={2}>
                            Event Date
                        </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                        <Typography variant="h6" marginBottom={2}>
                            Event Description
                        </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Link to="/Merchant/EditEvent">
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
        </Container>
    )
}

export default ViewEvent