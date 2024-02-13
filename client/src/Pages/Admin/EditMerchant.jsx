import React from 'react'
import { Container, Box, Paper, Grid, Typography, Button, TextField, Card, CardContent } from '@mui/material'
import { useNavigate, Link } from 'react-router-dom'

function EditMerchant() {
    const btnstyle = { margin: '30px 0', fontWeight: 'bold', color: 'white', backgroundColor: '#FF4E00' };
    return (
        <Container maxWidth='xl'>
            <Typography variant='h6' color="black" marginBottom={2}>
                Edit Merchant details
            </Typography>
            <Box component="form">
                <Card>
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4} >
                                <TextField
                                    label='Merchant Name'
                                    name='title'
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} md={4} >
                                <TextField
                                    fullWidth
                                    label='Enter Email'
                                    name='email'
                                />
                            </Grid>
                            <Grid item xs={12} md={4} >
                                <TextField
                                    fullWidth
                                    label='Enter Phone Number'
                                    name='phone'
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
                <Button type="submit" variant='contained' style={btnstyle}>Save Details</Button>
            </Box>
        </Container>
    )
}

export default EditMerchant