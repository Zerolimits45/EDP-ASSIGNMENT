import { React, useRef } from 'react'
import { Grid, Paper, Typography, TextField, Button, Box, Container, Card, CardContent } from '@mui/material'


// import icons
import SearchIcon from '@mui/icons-material/Search';

function Categories() {
  //function
  const ref = useRef(null);
  //style
  const paperStyle = { padding: 20, width: '60%', marginTop: 30, borderRadius: 10 }
  const searchbtnstyle = { backgroundColor: '#FF4E00', color: 'white', borderRadius: 17, alignItems: 'center', margin: 'auto', width: '30%', height: 50, marginLeft: '40px' }
  const btnstyle = { backgroundColor: 'btn', fontWeight: 'bold', color: 'white' }


  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Container maxWidth='xl'>
      <Grid align={'center'}>
        <Paper style={paperStyle}>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField
              name='search'
              label="Search"
              variant="standard"
              fullWidth
            />
            <Button variant="contained" endIcon={<SearchIcon />}
              style={searchbtnstyle}>
              Search </Button>
          </Box>
        </Paper>
      </Grid>

      <Box sx={{ flexGrow: 1 }} display={'flex'} justifyContent='center' >

        <Button variant='contained' color='btn' style={btnstyle} onClick={handleClick}>Dine & Wine</Button>


        <Button variant='contained' color='btn' style={btnstyle} onClick={handleClick}>Family bonding</Button>


        <Button variant='contained' color='btn' style={btnstyle} onClick={handleClick}>Sports & Adventure</Button>


        <Button variant='contained' color='btn' style={btnstyle} onClick={handleClick}>Hobbies & Wellness</Button>


        <Button variant='contained' color='btn' style={btnstyle} onClick={handleClick}>Travel</Button>

      </Box>

      <Box>

        <Typography variant='h6' align='left' style={{ marginTop: '50px', fontWeight: 'bold', fontSize: '30px' }}>
          Dine & Wine
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6} xl={4}>
            <Card elevation={5} style={paperStyle}>
              <CardContent>
                <Box component="img" width="100%"
                  src="../images/test.png"
                  alt="car image">
                </Box>
                <Typography style={{ fontWeight: 'bold' }}>
                  Activity Title
                </Typography>
                <Typography style={{ fontWeight: 'bold' }}>
                  Timing?
                </Typography>
                <Box display={'flex'}>
                  <Typography style={{ flexGrow: 1 }}>
                    $45
                  </Typography>
                  <Button variant='contained' color='btn' style={btnstyle}>View More</Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Typography variant='h6' align='left' style={{ marginTop: '50px', fontWeight: 'bold', fontSize: '30px' }}>
          Family bonding
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6} xl={4}>
            <Card elevation={5} style={paperStyle}>
              <CardContent>
                <Box component="img" width="100%"
                  src="../images/test.png"
                  alt="car image">
                </Box>
                <Typography style={{ fontWeight: 'bold' }}>
                  Activity Title
                </Typography>
                <Typography style={{ fontWeight: 'bold' }}>
                  Timing?
                </Typography>
                <Box display={'flex'}>
                  <Typography style={{ flexGrow: 1 }}>
                    $45
                  </Typography>
                  <Button variant='contained' color='btn' style={btnstyle}>View More</Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Typography variant='h6' align='left' style={{ marginTop: '50px', fontWeight: 'bold', fontSize: '30px' }}>
          Sports & Adventure
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6} xl={4}>
            <Card elevation={5} style={paperStyle}>
              <CardContent>
                <Box component="img" width="100%"
                  src="../images/test.png"
                  alt="car image">
                </Box>
                <Typography style={{ fontWeight: 'bold' }}>
                  Activity Title
                </Typography>
                <Typography style={{ fontWeight: 'bold' }}>
                  Timing?
                </Typography>
                <Box display={'flex'}>
                  <Typography style={{ flexGrow: 1 }}>
                    $45
                  </Typography>
                  <Button variant='contained' color='btn' style={btnstyle}>View More</Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Typography variant='h6' align='left' style={{ marginTop: '50px', fontWeight: 'bold', fontSize: '30px' }}>
          Hobbies & Wellness
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6} xl={4}>
            <Card elevation={5} style={paperStyle}>
              <CardContent>
                <Box component="img" width="100%"
                  src="../images/test.png"
                  alt="car image">
                </Box>
                <Typography style={{ fontWeight: 'bold' }}>
                  Activity Title
                </Typography>
                <Typography style={{ fontWeight: 'bold' }}>
                  Timing?
                </Typography>
                <Box display={'flex'}>
                  <Typography style={{ flexGrow: 1 }}>
                    $45
                  </Typography>
                  <Button variant='contained' color='btn' style={btnstyle}>View More</Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Typography variant='h6' align='left' style={{ marginTop: '50px', fontWeight: 'bold' }}>
          Travel
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6} xl={4}>
            <Card elevation={5} style={paperStyle}>
              <CardContent>
                <Box component="img" width="100%"
                  src="../images/test.png"
                  alt="car image">
                </Box>
                <Typography style={{ fontWeight: 'bold' }}>
                  Activity Title
                </Typography>
                <Typography style={{ fontWeight: 'bold' }}>
                  Timing?
                </Typography>
                <Box display={'flex'}>
                  <Typography style={{ flexGrow: 1 }}>
                    $45
                  </Typography>
                  <Button variant='contained' color='btn' style={btnstyle}>View More</Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

      </Box>

    </Container>
  )
}

export default Categories