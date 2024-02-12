import React from 'react'
import { Container, Box, Paper, Grid, Typography, Button, TextField, Card, CardContent } from '@mui/material'
import { useNavigate, Link } from 'react-router-dom'

function AdminEditPost() {
    const btnstyle = { margin: '30px 0', fontWeight: 'bold', color: 'white', backgroundColor: '#FF4E00' };
  return (
    <Container maxWidth='xl'>
    <Typography variant='h6' color="black" marginBottom={2}>
        Edit Post details
    </Typography>
    <Box component="form">
        <Card>
            <CardContent>
                <Grid container spacing={2} direction="column">
                    <Grid item xs={12} md={6} >
                        <TextField
                            fullWidth
                            label='Enter Title'
                            name='title'
                        />
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <TextField
                            inputProps={{
                                style: {
                                    height: "90px",
                                },
                            }}
                            multiline
                            fullWidth
                            label='Enter Description'
                            name='description'
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

export default AdminEditPost