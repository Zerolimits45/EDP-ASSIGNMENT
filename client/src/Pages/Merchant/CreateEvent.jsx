import React from 'react'
import { Typography, Grid, Container, TextField, Box, Button, Card, CardContent, Divider, MenuItem } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function CreateEvent() {
    const btnstyle = { margin: '30px 0', fontWeight: 'bold', color: 'white', backgroundColor: '#FF4E00' };
    return (
        <Container maxWidth='xl'>
            <Typography variant='h4' color="#000000" marginBottom={2}>
                Create Your Event
            </Typography>
            <Typography variant='h5' color="#000000" marginBottom={2}>
                Event Details
            </Typography>
            <Box>
                <Card>
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4}>
                                <TextField
                                    label="Event Title"
                                    name="eventTitle"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField
                                    label="Price"
                                    name="price"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField
                                    label="Quantity"
                                    name="quantity"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    label="Location"
                                    name="location"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    label="Category"
                                    name="category"
                                    fullWidth
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
                                name='date'
                                label="Start Date"
                            />
                        </LocalizationProvider>
                        <Typography variant='h6' color="#000000" marginTop={2} marginLeft={5} marginRight={5}>
                            To
                        </Typography>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                name='date'
                                label="End Date"
                            />
                        </LocalizationProvider>
                    </CardContent>
                </Card>

                <Typography variant='h5' marginTop={10} marginBottom={2}>
                    Please upload an image of your event
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                        <Box sx={{ textAlign: 'center', mt: 2 }} >
                            <Button variant="contained" style={btnstyle} component="label">
                                Upload Image
                                <input hidden accept="image/*" multiple type="file"
                                    // onChange={onFileChange} 
                                    />
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Card>
                            <CardContent>
                                {
                                    <Typography variant='h6' color="#000000" marginBottom={2}>
                                        Image Preview
                                    </Typography>
                                }
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                <Button type="submit" variant='contained' style={btnstyle}>Create Event</Button>
            </Box>
        </Container>
    )
}

export default CreateEvent