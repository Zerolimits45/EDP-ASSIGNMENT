import React from 'react'
import { Container, Box, Paper, Grid, Typography, Button, Divider, Card, CardContent, TextField } from '@mui/material'

function FeedbackForm() {
    const btnstyle = { margin: '30px 0', fontWeight: 'bold', color: 'white', backgroundColor: '#FF4E00' };
    return (
        <Container maxWidth='xl'>
            <Typography variant='h6' color="black" fontWeight={600} marginBottom={2} marginTop={10} align='center'>
                Please send us a message if you need any help
            </Typography>
            <Box component="form">
                <Card>
                    <CardContent>

                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    label="Name"
                                    name='name'
                                    fullWidth

                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    label="Email"
                                    name='email'
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <TextField
                                    label="Reason"
                                    name='reason'
                                    multiline
                                    rows={4}
                                    fullWidth
                                />
                            </Grid>
                        </Grid>


                    </CardContent>
                </Card>
                <Button type='submit' color='btn' variant="contained" style={btnstyle} align="center">
                    Send your help request
                </Button>
            </Box>
        </Container>
    )
}

export default FeedbackForm