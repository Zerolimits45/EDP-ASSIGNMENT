import React from 'react'
import { Container, Box, Paper, Grid, Typography, Button, Divider, Card, CardContent } from '@mui/material'

function Cart() {
    return (
        <Container maxWidth="x1">
            <Grid direction={'column'} marginTop={10} maxWidth={631}>
                <Grid item xs={6} md={3} style={{backgroundColor: "#F76817", borderRadius: 15}}>
                    <Typography variant="h5" style={{ textAlign: "left", fontWeight: "bold", paddingTop: 20, color: 'white', marginLeft:15}}>
                        My Cart
                    </Typography>
                </Grid>
                <Grid item xs={6} md={3} >
                    <Typography variant="h4" style={{ textAlign: "left", fontWeight: "bold", paddingTop: 20 }}>
                        Book Your Activities
                    </Typography>
                    <Typography variant="h6" style={{ textAlign: "left", paddingTop: 20, paddingBottom: 20 }}>
                        Uplay has many activities for you to choose from and you can book them here!. We have a wide variet of activities that promote family bonding to bettering your health.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    )
}
export default Cart