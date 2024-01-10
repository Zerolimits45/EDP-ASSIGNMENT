import React from 'react'
import { Container, Box, Paper, Grid, Typography, Button, Divider, Card, CardContent, CardMedia, TextField } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function Description() {
    return (
        <Box>
            <Card>
                <CardMedia
                    component="img"
                    height="500"
                    image="../images/product_test.jpg"
                    alt="Product Image"
                />
            </Card>
            <Grid container spacing={1} marginTop={5}>
                <Grid item xs={12} md={8}>
                    <Paper elevation={3}>
                        <Typography variant="h4" style={{ fontWeight: "bold", paddingTop: 20 }}>
                            Yacht Experience
                        </Typography>
                        <Typography variant="h6" style={{ paddingTop: 20 }}>
                            Price: $1000
                        </Typography>
                        <Typography variant="h6" style={{ paddingTop: 20 }}>
                            Duration: 3 hours
                        </Typography>
                        <Typography variant="h6" style={{ paddingTop: 20 }}>
                            Location: Marina Bay
                        </Typography>
                        <Typography variant="h6" style={{ paddingTop: 20 }}>
                            Category: Travel
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                        <Paper elevation={3} sx={{ padding: '2rem', justifyContent: 'center' }}>
                            <Typography variant="h5" align="center" gutterBottom fontWeight={'bold'}>
                                Book Now!
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant="body1" gutterBottom fontWeight={'bold'} >
                                        Select your date
                                    </Typography>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker
                                            label="Pick your date"
                                        />
                                    </LocalizationProvider>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="body1" gutterBottom fontWeight={'bold'} >
                                        Quantity
                                    </Typography>
                                    <TextField
                                        name='Quantity'
                                        label="Quantity"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="contained" fullWidth style={{ backgroundColor: '#FF4E00', fontWeight: 'bold', color: 'white' }}>
                                        Book Now
                                    </Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Description