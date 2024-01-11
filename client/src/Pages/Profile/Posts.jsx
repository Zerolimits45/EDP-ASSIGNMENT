import React from 'react'
import { Typography, Grid, Container, TextField, Box, Button, Card, CardContent, Divider } from '@mui/material'

function Posts() {
  const btnstyle = { margin: '8px 0', fontWeight: 'bold', color: 'white', backgroundColor: '#FF4E00' };
  const dividerstyle = { backgroundColor: '#150039', fontWeight: 'bold', margin: '10px 0' };
  return (
    <Container maxWidth="xl" >
      <Typography variant="h4" marginBottom={2}>
        My Posts
      </Typography>
      <Grid container>
        <Grid item xs={12} md={12} >
          <Card elevation={5}>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} display={'flex'} >
                  <Box style={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant='h5' fontWeight={600}>
                     IDK WHATS HERE
                    </Typography>
                    <Typography variant='h6'>
                      Forum Post title
                    </Typography>
                    <Typography variant='h6'>
                      Messages number
                    </Typography>
                    <Divider style={dividerstyle} />
                    <Button
                      variant='contained'
                      color='btn'
                      style={btnstyle}
                    >
                      Go to your post
                    </Button>
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

export default Posts