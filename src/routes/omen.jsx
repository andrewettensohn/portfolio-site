import * as React from 'react';
import NavMenu from "../components/navMenu";
import { Box } from '@mui/system';
import { Typography, Grid, Divider, Card, CardContent, Button } from '@mui/material';
import ImageGallery from "../components/imageGallery";
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Omen() {
    return (
        <Box sx={{ mt: 10, mb: 10 }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="h4" gutterBottom>
                                Omen
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <Typography>
                        This will be my first commercial release of a personal project I've made and is a collaboration between myself and my friend Bryce Bresnan. Omen will be coming to Steam for Windows in 2025.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <iframe src='https://www.youtube.com/embed/cSpWw-dj4qY'
                        frameBorder='0'
                        allow='encrypted-media'
                        width="100%"
                        height="800"
                        title='video'
                    />
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
                        Take on the role of a freelance starship captain in a dark action roguelike. Fight your way past fleets of enemy ships in fast paced combat, delve into ruined megastructures, and reach the heart of a lost sector to discover its terrible secrets.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography>
                        Key Features:
                    </Typography>
                    <ul>
                        <li>Roguelike - Death means the loss of your ship's inventory. Keep items in a stash to have them persist between expeditions and start a new ship to carry on the exploration of the lost sector.</li>
                        <li>Fast Paced Combat - Gain mastery of dozens of different weapon types and battle against a variety of enemies that will test reflexes and the strength of your ship's build.</li>
                        <li>Progression - Level up your expedition's knowledge to use the loot you acquire from defeated enemies. Unlock new ship hulls ranging from nimble fighters to hulking capital ships with their own fleets of fighters.</li>
                        <li>Randomized Regions - The lost sector is made of regions which are made of levels. Which region you get next during your expedition is randomly pulled from a deck.</li>
                    </ul>
                </Grid>
                <Grid item xs={12}>
                    <img
                        srcSet={imgData[1]}
                        src={imgData[1]}
                        loading="lazy"
                        style={{ width: 'auto', maxWidth: '100%' }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <img
                        srcSet={imgData[2]}
                        src={imgData[2]}
                        loading="lazy"
                        style={{ width: 'auto', maxWidth: '100%' }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}

const imgData = [
    'omen/shotb.png',
    'omen/shote.png',
    'omen/shotf.png',
]