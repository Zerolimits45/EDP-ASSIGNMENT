import React from 'react'
import { Container, Box, Paper, Grid, Typography, Button, Divider, Card, CardContent } from '@mui/material'
import { TextField } from '@mui/material';


function SignIn() {
    return (
        <Container maxWidth="xl">
            <Box style={{ paddingTop: 200 }} display={'flex'} flexDirection={'column'}>
                <Grid container spacing={0} marginTop={5} justifyContent="center">
                    <Grid item xs={12} md={4} >
                        <Box sx={{ border: 1, borderRight: 0 }} style={{ backgroundSize: 'cover', borderBottomLeftRadius: 20, borderTopLeftRadius: 20, paddingBottom: 102}} display={'flex'} flexDirection={'column'}>
                            <Typography variant="h5" style={{ textAlign: "center", fontWeight: "bold", paddingTop: 60, color: "black", paddingLeft: 20, paddingRight: 20, }}>
                                New Here?
                            </Typography>
                            <Typography variant="h7" style={{ textAlign: "center", paddingTop: 20, paddingBottom: 20, paddingLeft: 20, paddingRight: 20, color: "black" }}>
                                Become a friend of UPlay today!
                            </Typography>
                            <Button variant="contained" color="btnBlack" style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block', fontWeight: "bold", color: 'white', padding: 15, }}>
                                Sign Up
                            </Button>
                            <Typography variant="h6" style={{ textAlign: "center", paddingTop: 20, paddingBottom: 20, paddingLeft: 20, paddingRight: 20, color: "black" }}>
                            </Typography> {/* paddingbottom for button (temporary) */}
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4} >
                        <Box sx={{ border: 1 }} style={{ backgroundSize: 'cover', borderBottomRightRadius: 20, borderTopRightRadius: 20 }} display={'flex'} flexDirection={'column'}>

                            <Typography variant="h5" style={{ textAlign: "center", fontWeight: "bold", paddingTop: 60, color: "black", paddingLeft: 20, paddingRight: 20, }}>
                                Login to your account
                            </Typography>
                            <Box component="form" padding={3}>
                                <TextField
                                    fullWidth margin="dense" autoComplete="off"
                                    label="Email"
                                    name="email"
                                />
                                <TextField
                                    fullWidth margin="dense" autoComplete="off"
                                    label="Password"
                                    name="password"
                                />
                            </Box>
                            <Grid container spacing={0} marginBottom={2} justifyContent="center">
                                <Grid item xs={12} md={6} >
                                    <Box style={{ marginRight: 120}}>
                                        <Button variant="contained" color="btn" style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block', fontWeight: "bold", color: 'white',}}>
                                            Login
                                        </Button>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={6} >
                                    <Box style={{}} display={'flex'}>
                                        <Typography variant="h5" style={{ color: "black", paddingLeft: 107, fontSize: 15 }}>
                                            Forget Password
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>



                            <Divider variant="middle" component="li" > or Login with</Divider>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>

    )
}

export default SignIn