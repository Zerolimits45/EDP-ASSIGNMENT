import React, { useEffect, useState } from 'react'
import { Typography, Grid, Container, TextField, Box, Button, Card, CardContent } from '@mui/material'

function Dashboard() {
    const itemcolor = { backgroundColor: '#8a8a88' }
  return (
    <Container maxWidth='xl'>
            <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                    <Card style={itemcolor}>
                        <CardContent>
                            <Typography variant='h6' color="white" marginBottom={2} align='center'>
                                Total Users
                            </Typography>
                            <Typography variant='h3' color="white" marginBottom={2} align='center'>
                                0
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card style={itemcolor}>
                        <CardContent>
                            <Typography variant='h6' color="white" marginBottom={2} align='center'>
                                Total Orders
                            </Typography>
                            <Typography variant='h3' color="white" marginBottom={2} align='center'>
                                0
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card style={itemcolor}>
                        <CardContent>
                            <Typography variant='h6' color="white" marginBottom={2} align='center'>
                                Total Merchants
                            </Typography>
                            <Typography variant='h3' color="white" marginBottom={2} align='center'>
                                0
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card style={itemcolor}>
                        <CardContent>
                            <Typography variant='h6' color="white" marginBottom={2} align='center'>
                                No. of Requests
                            </Typography>
                            <Typography variant='h3' color="white" marginBottom={2} align='center'>
                                0
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

        </Container>
  )
}

export default Dashboard
