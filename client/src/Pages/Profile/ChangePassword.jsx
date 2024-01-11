import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Typography, Grid, Container, TextField, Box, Button, Card, CardContent } from '@mui/material'

//icons
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


function ChangePassword() {
  const btnstyle = { margin: '8px 0', fontWeight: 'bold', color: 'white', backgroundColor: '#FF4E00' };
  return (
    <Container maxWidth='xl'>
      <Typography variant='h4' color="#000000" marginBottom={2}>
        Change your password
      </Typography>
      <Box>
        <Card>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <TextField
                  name="password"
                  label="Old Password"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  name="newPassword"
                  label="New Password"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  name="confirmPassword"
                  label="Confirm Password"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Button
                  type="submit"
                  variant='contained'
                  color='btn'
                  style={btnstyle}
                >
                  Save Password
                </Button>
              </Grid>
            </Grid>
            <Button
              variant='contained'
              endIcon={<ArrowBackIcon />}
              LinkComponent={Link} to={`/profile/profile`}
              style={btnstyle}
            >
              Back
            </Button>
          </CardContent>
        </Card>
      </Box>

    </Container>
  )
}

export default ChangePassword