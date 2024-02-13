import React from 'react'
import { Typography, Grid, Container, TextField, Box, Button, Card, CardContent, Divider } from '@mui/material'
import { useState, useEffect, useContext } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

function Purchases() {
  const btnstyle = { margin: '8px 0', fontWeight: 'bold', color: 'white', backgroundColor: '#FF4E00' };
  const dividerstyle = { backgroundColor: '#150039', fontWeight: 'bold', margin: '10px 0' };

  return (
    <Container maxWidth="xl" >
      <Typography variant="h4" marginBottom={2}>
        Purchases
      </Typography>
      <Grid container>
        <Grid item xs={12} md={12} >
          <Card elevation={5}>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Box
                    component="img"
                    width="100%"
                    src="../images/product_test.jpg"
                    alt="car image">
                  </Box>
                </Grid>
                <Grid item xs={12} md={6} display={'flex'} >
                  <Box style={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant='h5' fontWeight={600}>
                      Booking Details:
                    </Typography>
                    <Typography variant='h6'>
                      Title
                    </Typography>
                    <Typography variant='h6'>
                      Quantity
                    </Typography>
                    <Typography variant='h6'>
                      Date
                    </Typography>
                    <Divider style={dividerstyle} />
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Purchases