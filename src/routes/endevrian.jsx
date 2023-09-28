import * as React from 'react';
import NavMenu from "../components/navMenu";
import { Box } from '@mui/system';
import { Typography, Grid, Divider, Card, CardContent, Button } from '@mui/material';
import ImageGallery from "../components/imageGallery";
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Endevrian() {
    return (
        <Box sx={{ mt: 10, mb: 10 }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="h4" gutterBottom>
                                Endevrian
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <Typography gutterBottom>
                    What is this? Endevrian is a Dungeons & Dragons campaign management web app.
                    While making this project I was briefly working as QA at Publix Super Markets and had the goal of transitioning to a development role.
                    I had been coding with C# for a little over a year but I was still making as many side projects as possible in order to understand concepts like MVC and the ASP.NET framework.
                    </Typography>
                    <Typography>
                        This is a pretty complex project that utilizes the following:
                    </Typography>
                    <ul>
                        <li>.NET Core 3.1</li>
                        <li>Azure Blob Storage</li>
                        <li>Azure Web Apps</li>
                        <li>SQLite</li>
                        <li>Entity Framework Core</li>
                        <li>Identity Core  (it has auth and role management)</li>
                        <li>Some vanilla JavaScript</li>
                        <li>Progressive Web App</li>
                    </ul>
                </Grid>
                <Grid item xs={12}>
                    <Typography gutterBottom>
                        This might sound like a lot for a beginner to do but completing projects like this allowed me to easily transition from QA and I started contributing code on my first day as a dev.
                        I was also really driven to finish a tool that used my passion at the time for being a Dungeon Master.
                    </Typography>
                    <Typography>
                        The core features I implemented:
                    </Typography>
                    <ul>
                        <li>Blog</li>
                        <li>Map Gallery</li>
                        <li>Wiki</li>
                        <li>Note Section in the style of One Note</li>
                    </ul>
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
                    <img
                        srcSet={imgData[1]}
                        src={imgData[1]}
                        loading="lazy"
                        style={{ width:'auto', maxWidth:'100%' }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
  }

  const imgData = [
    'endevrian/desktop-end-gallery.png',
    'endevrian/desktop-end-note.png',
  ]