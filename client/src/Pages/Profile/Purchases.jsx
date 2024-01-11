import React from 'react'
import { Typography, Grid, Container, TextField, Box, Button, Card, CardContent, Divider } from '@mui/material'
import { useState, useEffect, useContext } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

function Purchases() {

  return (
    <Container maxWidth="xl" >
      <Typography variant="h4" style={textstyle} marginBottom={2}>
        Purchases
      </Typography>
    </Container>
  )
}

export default Purchases