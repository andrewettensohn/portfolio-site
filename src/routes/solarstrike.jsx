import * as React from 'react';
import NavMenu from "../components/navMenu";
import { Box } from '@mui/system';
import { Typography, Grid, Divider, Card, CardContent, Button } from '@mui/material';
import ImageGallery from "../components/imageGallery";
import GitHubIcon from '@mui/icons-material/GitHub';

export default function SolarStrike() {
    return (
        <Box sx={{ mt: 10, mb: 10 }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="h4" gutterBottom>
                                Solar Strike
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
                        height="800"
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
                        A category of a unit needs to be strong against one type and weak against another.
                        I have 3 categories of ships:
                    </Typography>
                    <ul>
                        <li>Picket: Strong against drone ships, weak against cruisers</li>
                        <li>Drone: Strong against cruisers, weak against pickets</li>
                        <li>Cruisers: Strong against picket, weak against drones</li>
                    </ul>
                </Grid>
                <Grid item xs={6}>
                    <img
                        srcSet={imgData[0]}
                        src={imgData[0]}
                        loading="lazy"
                        style={{ width: 'auto', maxWidth: '100%' }}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Typography>
                        The special abilities of the units also support the formula while adding in a reflex challenge for the player.
                        I had looked at a number of RTS games for UI inspiration but none of them felt great.
                        I opted for a new design that I hadn't seen before that kept the ability buttons close to the unit information.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h5" gutterBottom>
                        Postmortem
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    The goal of this project was to see if I could make an RTS.
                    My focus was on making a bite sized project I could finish with polish.
                    Although the game only has an old fashioned skirmish mode, I think it showcases some decent game design.
                    I believe I made effective use of inheritance, all of the ships inherit from a single Unit class.
                    I enjoyed figuring out challenges like making a "drag to select" box.
                    The art style I came up with also looks really unique, I'd love to use it again.
                    Maybe one day I'll fork this code and make an RTS in this style at a much larger scale.
                </Grid>
                <Grid item xs={12}>
                    <img
                        srcSet={imgData[1]}
                        src={imgData[1]}
                        loading="lazy"
                        style={{ width: 'auto', maxWidth: '100%' }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}

const imgData = [
    'solarstrike/Screenshot 2023-08-11 000105.png',
    'solarstrike/strike1.png',
]