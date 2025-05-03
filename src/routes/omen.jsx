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
                    Infiltrate the remnants of a fallen empire in this dark sci-fi isometric action game where extraction meets base defense. Extract valuable loot, establish defenses against hostile fanatics, and unlock the gateway to a dimension of cosmic dread that defies comprehension.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <iframe src='https://www.youtube.com/embed/_xJAHTOpxso?si=YpO7aad-vzjwt7t0'
                        frameBorder='0'
                        allow='encrypted-media'
                        width="100%"
                        height="800"
                        title='video'
                    />
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
    'omen/HeaderCapsule.png',
    'omen/shote.png',
    'omen/shotf.png',
]