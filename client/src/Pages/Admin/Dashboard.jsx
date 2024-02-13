import React, { useEffect, useState } from 'react'
import { Typography, Grid, Container, TextField, Box, Button, Card, CardContent } from '@mui/material'
import OrdersChart from '../Charts/OrdersChart'
import http from '../../http'

function Dashboard() {
    const itemcolor = { backgroundColor: '#8a8a88' }
    const [userList, setUserList] = useState([]);

    const getUsers = () => {
        http.get(`/AdminUser/allusers`).then((res) => {
            setUserList(res.data);
        });
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <Container maxWidth='xl'>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <Card style={itemcolor}>
                        <CardContent>
                            <Typography variant='h6' color="white" marginBottom={2} align='center'>
                                Total Orders
                            </Typography>
                            <OrdersChart />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card style={itemcolor}>
                        <CardContent>
                            <Typography variant='h6' color="white" marginBottom={2} align='center'>
                                Total Customers
                            </Typography>
                            <Typography variant='h3' color="white" marginBottom={2} align='center'>
                                {userList.length}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card style={itemcolor}>
                        <CardContent>
                            <Typography variant='h6' color="white" marginBottom={2} align='center'>
                                Total Merchants
                            </Typography>
                            <Typography variant='h3' color="white" marginBottom={2} align='center'>
                                0
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

        </Container>
    )
}

export default Dashboard
