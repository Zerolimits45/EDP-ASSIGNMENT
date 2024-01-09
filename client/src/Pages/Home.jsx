import React from 'react'
import { Container, Box, Paper, Grid, Typography, Button, Divider, Card, CardContent } from '@mui/material'


function Home() {
    return (
        <Container maxWidth="xl" >
            <Box style={{ backgroundImage: 'url("../Images/background.png")', backgroundSize: 'cover', borderRadius: 15 }} display={'flex'} flexDirection={'column'}>
                <Typography variant="h4" style={{ textAlign: "center", fontWeight: "bold", paddingTop: 150, fontSize: '100px' }}>
                    Welcome to Uplay!
                </Typography>
                <Typography variant="h6" style={{ textAlign: "center", paddingTop: 20, paddingBottom: 140 }}>
                    You play, We'll do the rest
                </Typography>
            </Box>
            <Box display={'flex'} flexDirection={'column'}>
                <Grid container spacing={4} marginTop={5} >
                    <Grid item xs={12} md={6} >
                        <img src="../images/home1.png" style={{ width: '100%', borderRadius: '10px' }} />
                        <Typography variant="h4" style={{ textAlign: "center", fontWeight: "bold", paddingTop: 20 }}>
                            Book Your Activities
                        </Typography>
                        <Typography variant="h6" style={{ textAlign: "center", paddingTop: 20, paddingBottom: 20 }}>
                            Uplay has many activities for you to choose from and you can book them here!. We have a wide variet of activities that promote family bonding to bettering your health.
                        </Typography>
                        <Button variant="contained" color="btn" style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block', fontWeight: "bold", color: 'white', padding: 15 }}>
                            Book Now
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src="../images/home3.png" style={{ width: '100%', borderRadius: '10px' }} />
                        <Typography variant="h4" style={{ textAlign: "center", fontWeight: "bold", paddingTop: 20 }}>
                            Join our Community Forums
                        </Typography>
                        <Typography variant="h6" style={{ textAlign: "center", paddingTop: 20, paddingBottom: 20 }}>
                           Uplay consists of many community forums that you can join. You can join communities that are based on your interests and hobbies. You can also create your own community and invite your friends to join!
                        </Typography>
                        <Button variant="contained" color="btn" style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block', fontWeight: "bold", color: 'white', padding: 15 }}>
                            Join Now
                        </Button>
                    </Grid>
                </Grid>
            </Box>

        </Container>

    )
}

export default Home