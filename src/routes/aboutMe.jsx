import * as React from 'react';
import NavMenu from "../components/navMenu";
import { Box } from '@mui/system';
import { Typography, Grid, Divider, Card } from '@mui/material';
import ImageGallery from "../components/imageGallery";

export default function AboutMe() {
    return (
        <Box sx={{ mt: 10 }}>
            <Grid container spacing={5}>
                <Grid item xs={12}>
                    <Typography variant="h4" gutterBottom>
                        About Me
                    </Typography>
                </Grid>
                <Grid item xs={12}>

                </Grid>
                <Grid item xs={6}>
                    <img
                        srcSet={pikePlaceData.img}
                        src={pikePlaceData.img}
                        alt={pikePlaceData.title}
                        loading="lazy"
                        style={{ width:'auto', maxWidth:'100%' }}
                    />
                </Grid>
                <Grid item xs={6}>
                    <img
                        srcSet={valleyData.img}
                        src={valleyData.img}
                        alt={valleyData.title}
                        loading="lazy"
                        style={{ width:'auto', maxWidth:'100%' }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Typography gutterBottom>
                    I moved to Seattle in May 2022 after living the majority of my life in Lakeland, FL. 
                    </Typography>
                    <Typography>
                    I’m in constant awe of Seattle from the views of the waterfront to looking up and being surrounded by glass towers. The first time I visited I felt an overwhelming sense that things were happening in Seattle.
                    There’s a ton of people that live here and they all bring a diverse range of food, music, and art to the city.
                    I enjoy seeing the different communities, even if I’m not a part of them there's so much to appreciate and learn.
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Divider />
                            <Typography variant="caption" gutterBottom>
                            Don’t tell me about the seasons in the East, don’t talk to me about eternal California summer. It’s enough to have a few days naked among three hundred kinds of rain.
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="caption">
                            ― Sam Hill, on a concrete pillar called Memory's Vault in Port Townsend
                            </Typography>
                            <Divider />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <img
                        srcSet={lightHouseImageData.img}
                        src={lightHouseImageData.img}
                        alt={lightHouseImageData.title}
                        loading="lazy"
                        style={{ width:'auto', maxWidth:'100%' }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Typography gutterBottom>
                        I love Washington, I think it's one of the most beautiful places in the world. 
                    </Typography>
                    <Typography>
                        I try to hike as often as I can, I enjoy the challenge of backpacking and going long distances. 
                        There's a constant sense of discovery and adventure, all I have to do is pick a direction to go in and start driving to have a memorable day.
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <img
                        srcSet={rollingImageData.img}
                        src={rollingImageData.img}
                        alt={rollingImageData.title}
                        loading="lazy"
                        style={{ width:'auto', maxWidth:'100%' }}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Typography gutterBottom>
                        BLAH BHA
                    </Typography>
                    <Typography>
                        BLAH BLAH BLAH
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
  }


    const valleyData = {
        img: 'me/valley.jpg',
        title: 'Endevrian',
    }

    const pikePlaceData = {
        img: 'me/pikeplace.jpg',
        title: 'Endevrian',
    }

    const lightHouseImageData = {
        img: 'me/lighthouse.jpg',
        title: 'Endevrian',
    }

    const rollingImageData = {
        img: 'me/cosmicRolling.jpg',
        title: 'Endevrian',
    }