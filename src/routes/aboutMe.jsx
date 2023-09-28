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
                    I lived in Lakeland, FL for the majority of my life where I worked for Publix Super Markets while attending Polk State College. 
                    I graduated in 2019 with a BAS in Business Information Technology and switched from IT to software development.
                    After helping to make Publix's new inventory system, I was hired by ProbablyMonsters and moved out to Seattle in April 2022.
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
                    <Typography>
                        I spend a lot of time doing Jiu-Jitsu, it's a full body workout that's great if you want new interesting injuries all the time.
                        The picture here is of an event called cosmic rolling where there's a fog machine, disco ball, and 80s music.
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography>
                        I love reading and watching video essays about game design and the history of the game industry.
                        Some of my favorite series are Dark Souls, Halo, Fallout, Half Life, Left 4 Dead, Total War, Homeworld, Splinter Cell...this list could get really long.
                        I do want to mention The Outer Wilds and Disco Elysium as well, it's hard to say what my favorite game is but those two are in the top 5.
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <img
                        srcSet={booksImageData.img}
                        src={booksImageData.img}
                        alt={booksImageData.title}
                        loading="lazy"
                        style={{ width:'auto', maxWidth:'100%' }}
                    />
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

    const booksImageData = {
        img: 'me/books.jpg',
        title: 'Endevrian',
    }