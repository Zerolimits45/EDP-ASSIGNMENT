import React from 'react'
import { Parallax } from 'react-parallax';
import { Container, Box, Paper, Grid, Typography, Button, Divider, Card, CardContent } from '@mui/material'



function Home() {
    return (

        <div>

            <Parallax bgImage="../Images/background.png" strength={300}>
                <div className='content'>
                    <div className='content-text'>
                    <Typography variant="h4" style={{ fontWeight: "bold", fontSize: '100px' }}>
                        Welcome to Uplay!
                    </Typography>
                    <Typography variant="h6" style={{ }}>
                        You play, We'll do the rest
                    </Typography>
                    </div>
                </div>
            </Parallax>
            <Parallax bgImage="../Images/bg2.png" strength={200}>
                <div className='content'>
                    <div className='content-text'>
                    <Typography variant="h6" style={{ color: 'white' }}>
                        Introducing our
                    </Typography>
                    <Typography variant="h4" style={{ fontWeight: "bold", fontSize: '100px', color: 'white'}}>
                        Experiences
                    </Typography>
                    </div>
                </div>
            </Parallax>
            

        </div>

    )
}

export default Home