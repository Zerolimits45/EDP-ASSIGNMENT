import React from 'react'
import { Typography, Grid, Container, TextField, Box, Button, Card, CardContent} from '@mui/material'

function UserEdit() {
  const btnstyle = { margin: '30px 0', fontWeight: 'bold', color: 'white', backgroundColor: '#FF4E00' };
  return (
    <Container maxWidth='xl'>
    <Typography variant='h6' color="white" marginBottom={2}>
        Edit User details
    </Typography>
    <Box component="form">
        <Card>
            <CardContent>
                <Grid container spacing={2} sx={{width: "100%"}}>
                    <Grid item xs={12} md={4}>
                        <TextField
                            label="Name"
                            name="name"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField
                            label="Email"
                            name="email"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField
                            label="Phone"
                            name="phone"
                            fullwidth
                        />
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <TextField
                            label="Address"
                            name="address"
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

export default UserEdit