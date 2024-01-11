import React from 'react'
import { Container, Box, Paper, Grid, Typography, Button, Divider, Card, CardContent } from '@mui/material'
import { MarginTwoTone } from '@mui/icons-material'
import { Link, useNavigate } from 'react-router-dom'

function FeedbackForm() {
    const btnstyle = { backgroundColor: 'btn', fontWeight: 'bold', color: 'white', marginLeft: 50 }

    const handleClick = () => {

    };
    return (
        <Container maxWidth="x1">

            <Box sx={{ flexGrow: 1 }} display={'flex'} justifyContent='left' marginTop={10}>
                <Button variant='contained' color='btn' style={btnstyle} onClick={handleClick}>All</Button>
            </Box>
            <Grid container spacing={0} marginTop={5} justifyContent={"center"}>
                <Grid item xs={12} md={5} marginLeft={10} justifyContent={'center'}>
                    <img src="../images/calender.png" style={{ width: '100%', borderRadius: '10px' }} />

                </Grid>
                <Grid item xs={12} md={4} marginRight={10}>
                    <Typography variant="h5" style={{ fontWeight: "bold", textAlign: 'left', fontSize: 45 }}>
                        Join In On The Discussions
                        In The Community
                    </Typography>
                    <Typography variant="h7" style={{ color: "black", textAlign: 'left', fontSize: 24, marginTop: 10 }}>
                        Search for relevant topics that you may enjoy, you can also find out official forums from UPlay to aid any troubles you may have.
                    </Typography>
                    <Typography variant="h6" style={{ textAlign: "center", paddingTop: 20, paddingBottom: 20, paddingLeft: 20, paddingRight: 20, color: "black" }}>
                    </Typography> {/* paddingbottom for button (temporary) */}
                    <Link to="/addpost" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" color="btnGreen" style={{ marginRight: 'auto', display: 'block', fontWeight: "bold", color: 'white', padding: 15 }}>
                            Start your own Discussion
                        </Button>
                    </Link>

                </Grid>
            </Grid>
        </Container>
    )
}
export default FeedbackForm