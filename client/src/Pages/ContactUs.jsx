import React from 'react'
import { Container, Box, Paper, Grid, Typography, Button, Divider, Card, CardContent } from '@mui/material'
import { Dropdown } from '@mui/base/Dropdown';
import { MenuButton } from '@mui/base/MenuButton';
import { Menu } from '@mui/base/Menu';
import { MenuItem } from '@mui/base/MenuItem'
import { Link, useNavigate } from 'react-router-dom'

function ContactUs() {
    return (
        <Container maxWidth="xl" >
            <Box style={{ backgroundImage: 'url("../Images/contactusbgimage.png")', backgroundSize: 'cover', borderRadius: 15 }} display={'flex'} flexDirection={'column'}>
                <Typography variant="h4" style={{ textAlign: "left", fontWeight: "bold", paddingTop: 100, fontSize: '60px' }}>
                    Contact Us!
                </Typography>
                <Typography variant="h6" style={{ textAlign: "left", paddingTop: 20, }}>
                    Address:
                </Typography>
                <Typography variant="h6" style={{ textAlign: "left" }}>
                    NTUC Club -
                </Typography>
                <Typography variant="h6" style={{ textAlign: "left" }}>
                    UPlayMarket Square @ Downtown
                </Typography>
                <Typography variant="h6" style={{ textAlign: "left" }}>
                    EastE!Avenue,
                </Typography>
                <Typography variant="h6" style={{ textAlign: "left" }}>
                    Level 31 Pasir Ris Close
                </Typography>
                <Typography variant="h6" style={{ textAlign: "left" }}>
                    Singapore 519599
                </Typography>
                <Box display={'flex'} flexDirection={'column'}>
                    <Grid container spacing={15} marginTop={5} justifyContent="center">
                        <Grid item xs={12} md={4} >
                            <Box style={{ backgroundSize: 'cover', borderRadius: 15, backgroundColor: '#484752', backgroundImage: 'url("../Images/hexagon.png")' }} display={'flex'} flexDirection={'column'}>
                                <Box style={{ justifyContent: "center", paddingTop: 30 }} display={'flex'} >
                                    <img src="../images/ContactUsLogo1.png" style={{ width: '20%', borderRadius: '10px' }} />
                                </Box>
                                <Typography variant="h5" style={{ textAlign: "center", fontWeight: "bold", paddingTop: 60, color: "white", paddingLeft: 20, paddingRight: 20, }}>
                                    Talk to a member of our Sales team
                                </Typography>
                                <Typography variant="h7" style={{ textAlign: "center", paddingTop: 20, paddingBottom: 20, paddingLeft: 20, paddingRight: 20, color: "white" }}>
                                    You can raise a request to our sales team about any enquires
                                    and we will get back to you as soon as possible
                                </Typography>
                                <Link to="/contactus/raisedrequest" style={{ textDecoration: 'none' }}>
                                    <Button variant="contained" color="btn" style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block', fontWeight: "bold", color: 'white', padding: 15, }}>
                                        Send an Enquiry
                                    </Button>
                                </Link>
                                <Typography variant="h6" style={{ textAlign: "center", paddingTop: 20, paddingBottom: 20, paddingLeft: 20, paddingRight: 20, color: "white" }}>
                                </Typography> {/* paddingbottom for button (temporary) */}
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4} >
                            <Box style={{ backgroundSize: 'cover', borderRadius: 15, backgroundColor: '#484752', backgroundImage: 'url("../Images/hexagon.png")' }} display={'flex'} flexDirection={'column'}>
                                <Box style={{ justifyContent: "center", paddingTop: 30 }} display={'flex'} >
                                    <img src="../images/ContactUsLogo2.png" style={{ width: '20%', borderRadius: '10px' }} />
                                </Box>
                                <Typography variant="h5" style={{ textAlign: "center", fontWeight: "bold", paddingTop: 60, color: "white", paddingLeft: 20, paddingRight: 20, }}>
                                    Chat with Annie
                                </Typography>
                                <Typography variant="h7" style={{ textAlign: "center", paddingTop: 20, paddingBottom: 73, paddingLeft: 20, paddingRight: 20, color: "white" }}>
                                    Chat with Annie to get frequently asked questions
                                </Typography>
                                <Button variant="contained" color="btn" style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block', fontWeight: "bold", color: 'white', padding: 15, }}>
                                    Chat with Annie
                                </Button>
                                <Typography variant="h6" style={{ textAlign: "center", paddingTop: 20, paddingBottom: 20, paddingLeft: 20, paddingRight: 20, color: "white" }}>
                                </Typography> {/* paddingbottom for button (temporary) */}
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box display={'flex'} flexDirection={'column'}>
                    <Grid container spacing={0} marginTop={5} justifyContent="center">
                        <Grid item xs={12} md={5} >
                            <Box style={{ backgroundSize: 'cover', borderRadius: 15, backgroundColor: '#484752' }} display={'flex'} flexDirection={'column'}>
                                <Typography variant="h5" style={{ textAlign: "center", fontWeight: "bold", paddingTop: 60, color: "white", paddingLeft: 20, paddingRight: 20, }}>
                                    Leave us some Feedback!
                                </Typography>
                                <Typography variant="h7" style={{ textAlign: "center", paddingTop: 20, paddingBottom: 20, paddingLeft: 20, paddingRight: 20, color: "white" }}>
                                    You can raise a request to our sales team about any enquires
                                    and we will get back to you as soon as possible
                                </Typography>
                                <Button variant="contained" color="btn" style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block', fontWeight: "bold", color: 'white', padding: 15, }}>
                                    Submit Feedback
                                </Button>
                                <Typography variant="h6" style={{ textAlign: "center", paddingTop: 20, paddingBottom: 20, paddingLeft: 20, paddingRight: 20, color: "white" }}>
                                </Typography> {/* paddingbottom for button (temporary) */}
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

            </Box>


        </Container>

    )
}
export default ContactUs