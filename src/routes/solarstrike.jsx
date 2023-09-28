import * as React from 'react';
import NavMenu from "../components/navMenu";
import { Box } from '@mui/system';
import { Typography, Grid, Divider, Card, CardContent, Button } from '@mui/material';
import ImageGallery from "../components/imageGallery";
import GitHubIcon from '@mui/icons-material/GitHub';

export default function SolarStrike() {
    return (
        <Box sx={{ mt: 10 }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="h4" gutterBottom>
                                Wrath & Glory Companion
                            </Typography>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Button variant="outlined" href="https://github.com/andrewettensohn/Strike" target="_blank" rel="noopener noreferrer">
                                        <GitHubIcon /> Solar Strike Project
                                    </Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <iframe src='https://www.youtube.com/embed/w03jQyD93eg'
                        frameBorder='0'
                        allow='encrypted-media'
                        width="100%"
                        height="360"
                        title='video'
                    />
                </Grid>
                <Grid item xs={12}>
                    <Typography>
                        What is this? Well this one comes with a trailer to help explain that. 
                        It's a sci-fi real time strategy game I made with Godot 4.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h5" gutterBottom>
                        Game Design
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography>
                        When I showed my project off to people they usually had the same first impression, "Oh cool, you made a 2D Homeworld".
                        Homeworld is one of the best looking RTS games with beautiful ship designs and vibrant nebulas.
                        I did want to copy the esthetic of Homeworld but in terms of gameplay I went for an often overlooked RTS from my childhood, World in Conflict.
                        Unlike traditional RTS, World in Conflict forgoes base building and tech trees and focuses in on a few points:
                    </Typography>
                    <ul>
                        <li>Can the player choose the right composition of units.</li>
                        <li>Can the player position their units effectively.</li>
                        <li>Can the player use the special abilities of their units in a tactical and timely manner.</li>
                    </ul>
                </Grid>
                <Grid item xs={12}>
                    <Typography>
                        At the heart of most RTS games is the basic rock paper scissors formula.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <img
                        srcSet={imgData[0]}
                        src={imgData[0]}
                        loading="lazy"
                        style={{ width:'auto', maxWidth:'100%' }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h5" gutterBottom>
                        Hosting
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography>
                        Keeping a 1:1 copy of a database on a ton of different devices would be a nightmare to maintain, especially with a constantly changing database structure.
                        Enter the SyncModel, a data model that represents when a piece of data has been modified along with a JSON serialized object that contains the actual data.
                        The desktop app has a local SQLite database that can be used offline, it polls the API and reconciles changes by overwriting the JSON value with whatever is latest.
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
  }

  const imgData = [
    'solarstrike/Screenshot 2023-08-11 000105.png',
    'solarstrike/strike1.png',
  ]