import React from 'react'
import { Container, Box, Paper, Grid, Typography, Button, Divider, Card, CardContent } from '@mui/material'
import { Dropdown } from '@mui/base/Dropdown';
import { MenuButton } from '@mui/base/MenuButton';
import { Menu } from '@mui/base/Menu';
import { MenuItem } from '@mui/base/MenuItem'
import { Link, useNavigate } from 'react-router-dom'

function Cart() {
    return (
        <Container maxWidth="x1">
            <Box flexDirection={'row'} display={'flex'} justifyContent={'center'}>
                <Box border={0} marginTop={15} height={600} width={632} marginLeft={0}>
                    <Box border={0} borderRadius={3} height={64} width={697} style={{ backgroundColor: '#000000' }}>
                        <Typography variant="h6" style={{ textAlign: "left", paddingTop: 15, paddingLeft: 20, fontWeight: 'bold', color: 'white' }}>My Cart</Typography>
                    </Box>
                    <Box border={1} borderRadius={3} width={632} height={300} padding={4} marginTop={3}>
                        <Grid container direction='row' border={0} justifyContent={'center'} spacing={1}>
                            <Grid item xs={4} borderRadius={4}>
                                <img src="../images/test.png" style={{ width: '100%', borderRadius: '10px' }} />
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="h7" style={{ textAlign: "left", paddingTop: 15, fontWeight: 'bold' }}>
                                    Private Yacht Rental (inclusive of BBQ pit usage onboard)
                                </Typography>
                                <Grid container direction='row' border={0} justifyContent={'left'} spacing={0}>
                                    <Grid item xs={6}>
                                        <Typography variant="h8" style={{ textAlign: "left", paddingTop: 15, }}>Date: 03-04-2024</Typography>
                                    </Grid>
                                    {/* <Grid item xs={4}>
                                        <Typography variant="h8" style={{ textAlign: "left", paddingTop: 15,}}>Time</Typography>
                                    </Grid> */}
                                </Grid>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography variant="h6" style={{ textAlign: "right", paddingTop: 15 }}>$120.00</Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Box border={1} marginTop={15} width={632} marginLeft={20}>
                    <Box border={0} height={64} width={632} style={{ backgroundColor: '#000000', }}>
                        <Typography variant="h6" style={{ textAlign: "left", paddingTop: 15, paddingLeft: 20, fontWeight: 'bold', color: 'white' }}>Order Summary</Typography>
                    </Box>
                    <Box border={0}>
                        <Typography variant="h6" style={{ textAlign: "left", paddingTop: 50, paddingLeft: 20, fontWeight: 'bold' }}>Subtotal</Typography>
                    </Box>
                    <Grid container direction="row">
                        <Grid item xs={8}>
                            <Typography variant="h6" style={{ textAlign: "left", paddingTop: 15, paddingLeft: 20, }}>Private Yacht Rental (inclusive of BBQ pit usage onboard)</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="h6" style={{ textAlign: "right", paddingTop: 15, paddingRight: 20, }}>$120.00</Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Box maxWidth={110} marginLeft={159} marginTop={10}>
                <Link to="" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" color='btnGreen' style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block', fontWeight: "bold", color: 'white', padding: 15, }}>
                        Checkout
                    </Button>
                </Link>
            </Box>
        </Container>
    )
}
export default Cart