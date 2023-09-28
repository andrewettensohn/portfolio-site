import * as React from 'react';
import NavMenu from "../components/navMenu";
import { Box } from '@mui/system';
import { Typography, Grid, Divider, Card, CardContent, Button } from '@mui/material';
import ImageGallery from "../components/imageGallery";
import GitHubIcon from '@mui/icons-material/GitHub';

export default function WrathAndGlory() {
    return (
        <Box sx={{ mt: 10, mb: 10 }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="h4" gutterBottom>
                                Wrath & Glory Companion
                            </Typography>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Button variant="outlined" href="https://github.com/andrewettensohn/40kwrathandglory" target="_blank" rel="noopener noreferrer">
                                        <GitHubIcon /> React Typescript Project
                                    </Button>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="outlined" href="https://github.com/andrewettensohn/CharacterManager" target="_blank" rel="noopener noreferrer">
                                        <GitHubIcon /> Blazor Electron .NET Project
                                    </Button>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="outlined" href="https://github.com/andrewettensohn/WrathAndGloryAPI" target="_blank" rel="noopener noreferrer">
                                        <GitHubIcon /> .NET API Project
                                    </Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    What is this? It's a companion app for Wrath & Glory, a tabletop roleplaying game I used to play with some coworkers from Publix.
                    I'm still not convinced that the majority of tabletop RPGs shouldn't be video games.
                    They often require you to do math and spend what seems like an eternity to everyone waiting as someone at the table pages through a rule book.
                    It's still fun seeing everyone in person though so I went about automating and simplifying the Wrath & Glory experience into an app that could be used at the table.
                    What better way to learn a new game system?
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
                    <Typography variant='caption'>
                        Above is a screenshot of the desktop app version.
                        Below is a screenshot of the web app version.
                        Both use the Material UI framework but the web app has more focus on responsive design.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <img
                        srcSet={imgData[1]}
                        src={imgData[1]}
                        loading="lazy"
                        style={{ width:'auto', maxWidth:'100%' }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Typography>
                        There's two frontend versions for this project. A Blazor Electron .NET desktop app and a React Typescript web app.
                        The backend is a .NET API that utilizes a SQLite database.
                        You might be saying "why not use a real database" and that's unfair because SQLite is actually really powerful and costs nothing.
                        Now you might also be saying "why use Blazor for a desktop app" and I don't have a good answer for that other than I thought it would be neat.
                        In the end the React frontend is the way to go since it's fast, works on mobile, and is easy to update.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography gutterBottom>
                        I'm going to talk about the data models for this project and it's going to require some background so you don't think I'm crazy.
                        When I worked at Publix I was obsessed with the idea of putting a copy of our retail item database on our store mobile devices.
                        I wanted to eliminate the possibility of network issues which is really common when your users are walking in and out of metal freezers all day that might as well be Faraday cages.
                        There's a challenge with offline behavior though, you have to reconcile whatever happened once you do go online.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography>
                        Keeping a 1:1 copy of a database on a ton of different devices would be a nightmare to maintain, especially with a constantly changing database structure.
                        Enter the SyncModel, a data model that represents when a piece of data has been modified along with a JSON serialized object that contains the actual data.
                        The desktop app has a local SQLite database that can be used offline, it polls the API and reconciles changes by overwriting the JSON value with whatever is latest.
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <img
                        srcSet={imgData[2]}
                        src={imgData[2]}
                        loading="lazy"
                        style={{ width:'auto', maxWidth:'100%' }}
                    />
                </Grid>
                <Grid item xs={6}>
                    <img
                        srcSet={imgData[3]}
                        src={imgData[3]}
                        loading="lazy"
                        style={{ width:'auto', maxWidth:'100%' }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
  }

  const imgData = [
    'wrathandglory/Screenshot 2023-09-19 124413.png',
    'wrathandglory/Screenshot 2023-07-20 175535.png',
    'wrathandglory/Screenshot_20230720-222420.png',
    'wrathandglory/Screenshot_20230720-222400.png',
    'felldeeds/olddialouge.png',
    'felldeeds/Layer2-3.png',
    'felldeeds/Layer3-1.png',
    'felldeeds/Layer1Media.gif',
    'felldeeds/Layer1Boss.gif'
  ]