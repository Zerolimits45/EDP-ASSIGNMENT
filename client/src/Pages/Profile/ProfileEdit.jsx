import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { Typography, Grid, Container, TextField, Box, Button, Card, CardContent, Avatar } from '@mui/material'

function ProfileEdit() {
  const btnstyle = { margin: '20px 0', fontWeight: 'bold', color: 'white', backgroundColor: '#FF4E00' }

  return (
    <Container maxWidth='xl'>
            <Typography variant='h6' color="#000000" marginBottom={2}>
                Edit your details
            </Typography>
            <Box>
                <Card>
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4}>
                                <TextField
                                    label="Name"
                                    name="name"
                                    placeholder='Name'
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField
                                    label="Email"
                                    name="email"
                                    placeholder='Email'
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField
                                    label="Phone"
                                    name="phone"
                                    placeholder='Phone'
                                    fullwidth
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

export default ProfileEdit