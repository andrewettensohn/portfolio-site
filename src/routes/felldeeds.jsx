import * as React from 'react';
import NavMenu from "../components/navMenu";
import { Box } from '@mui/system';
import { Typography, Grid, Divider, Card, CardContent, Button } from '@mui/material';
import ImageGallery from "../components/imageGallery";
import GitHubIcon from '@mui/icons-material/GitHub';

export default function FellDeeds() {
    return (
        <Box sx={{ mt: 10, mb: 10 }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="h4" gutterBottom>
                                Fell Deeds
                            </Typography>
                            <Button variant="outlined" href="https://github.com/andrewettensohn/Below-the-Sands" target="_blank" rel="noopener noreferrer">
                                <GitHubIcon /> GitHub Project
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <Typography>
                        What is this? Everyone told me to make a Mario clone and I made this instead. 
                        The player is a hero sent into a dungeon to defeat an evil wizard, he's aided by an array of special abilities and can turn into a ghost to help beat the bad guys.
                        Fell Deeds was the first game I put on Itch and my first time seeing a game project through to the end with a decent level of polish.
                        By this point I was fairly comfortable with Unity and I had been coding with C# for years.
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <img
                        srcSet={coverImageData.img}
                        src={coverImageData.img}
                        loading="lazy"
                        style={{ width:'auto', maxWidth:'100%' }}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h5" gutterBottom>
                        The Idea
                    </Typography>
                    <Typography gutterBottom>
                        For several months I had made clones of old games, classic stuff like pong and pac-man. 
                        My first original game I wanted to be a Metroidvannia.
                    </Typography>
                    <Divider />
                        <Typography variant='caption'>
                            Metroidvania is a sub-genre of action-adventure games and/or platformers focused on guided non-linearity and utility-gated exploration and progression. - Wikipedia
                        </Typography>
                    <Divider />
                </Grid>
                <Grid item xs={12}>
                    <Typography>
                        Non-linearity is very complicated, it's not the best feature to focus on for a new game developer.
                        In a lot of ways the creation of this game felt like a trial by fire. In the first version I had branching dialogue, a quest system, non-linear levels, collectables, and several enemy types.
                        By the end I was focusing on just making a linear experience as I grappled with the struggles of game design. 
                        That first version was completed, you could play it from start to end but it's not worth your time.
                        I force my friends to playtest my games and the feedback I was getting was "it's way too hard and way too tedious".
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <img
                        srcSet={imgData[3]}
                        src={belowTheSandsData[3]}
                        loading="lazy"
                        style={{ width:'auto', maxWidth:'100%' }}
                    />
                </Grid>
                <Grid item xs={6}>
                    <img
                        srcSet={imgData[4]}
                        src={imgData[4]}
                        loading="lazy"
                        style={{ width:'auto', maxWidth:'100%' }}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Typography variant='caption'>
                        To the right is an example of a diagram I would have to make to understand how all of the rooms connected in the dungeon from the first version.
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <img
                        srcSet={belowTheSandsData.img}
                        src={belowTheSandsData.img}
                        loading="lazy"
                        style={{ width:'auto', maxWidth:'100%' }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h5" gutterBottom>
                        Game Design
                    </Typography>
                    <Typography gutterBottom>
                        I was reading Masters of Doom while I was making this game, the classic story of John Romero and John Carmack creating the original 1993 Doom.
                        That book coupled with my frontal lobe fully developing allowed me to come to the realization that the most important thing in game design isn't story
                        and no one is going to care that you have this non-linear nightmare labyrinth of a dungeon, rougelike gameplay, a "great" story, and another 100 half baked features.
                        What matters is the core gameplay loop, can the second to second gameplay feel good. One polished feature is worth 100 unpolished half baked ideas. 
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Divider />
                    <Typography variant='caption'>
                        "Gameplay is more important than story." - John Carmack said something like this
                    </Typography>
                    <Divider />
                </Grid>
                <Grid item xs={6}>
                    <Typography>
                        The real quote by John Carmack is vulgar so I'm not saying it, but it gets a point across. 
                        This isn't to say a game can't have a great and compelling story but the player is here to play a game, gameplay is everything.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography gutterBottom>
                        So what is the core gameplay loop of Fell Deeds? 
                        It's a platformer, jumping has to feel good. I learned the value of greyboxing and spent days making sure the jumping felt better.
                        It's also got some action in it, likewise I spent plenty of time focusing on the player's attacks. 
                        I introduced stagger mechanics, the player gets a chance to adjust before another enemy attack can land on them.
                        Movement and combat, these were some basic puzzles I was presenting the player that would remain interesting for several minutes.
                    </Typography>
                    <Typography>
                        After making sure those core features were in place I added some special abilities that the player could do: a dash, an arrow deflection, and a rapid attack.
                        In my opinion I didn't think about those special abilities enough, they're fine but I don't present many challenges that require them to be used and they lack any real feeling or punch.
                        The UX challenge presented by the abilities was enjoyable, I think highlighting the icon while an ability was in use was an effective solution.
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <img
                        srcSet={imgData[5]}
                        src={imgData[5]}
                        loading="lazy"
                        style={{ width:'auto', maxWidth:'100%' }}
                    />
                </Grid>
                <Grid item xs={6}>
                    <img
                        srcSet={imgData[6]}
                        src={imgData[6]}
                        loading="lazy"
                        style={{ width:'auto', maxWidth:'100%' }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Typography>
                        To keep the player interested past the first few minutes, I developed a diverse cast of bad guys. 
                        The skeleton is basic, it walks up and swings, it has a couple of variations where they'll have either a shield or spear but the idea remains the same.
                        There's a few flying enemies like the flying eye, an acolyte that shoots fire, and the high health ghost warrior.
                        There's plenty of other enemy types I won't go over, but the idea was to present challenges that would make the player switch their approach to combat as much as possbile.
                        To further mix things up there's a range of traps that are meant to force the player into moving in directions with different timing.
                        Each level also presents a mini-boss for the player to fight in an arena with a few traps.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <img
                        srcSet={imgData[8]}
                        src={imgData[8]}
                        loading="lazy"
                        style={{ width:'auto', maxWidth:'100%' }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h5" gutterBottom>
                        Code
                    </Typography>
                    <Typography>
                        The main take away I had from coding Fell Deeds was how powerful inheritance was.
                        Every enemy in the game inherits from a shared Enemy class.
                        That shared class contains behavior trees, hooks for animations and effects, and logic that allows for raycasting.
                        I implemented overrides of the base Enemy class when needed, often for special abilities that make an enemy type standout.
                        I took a similar approach of using a base class with traps, pickups, and triggers.
                        By the time I was finished I felt pretty comfortable making animations in Unity. 
                        Also, ideas like raycasting and pathfinding with A* didn't seem as complicated as they used to be.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <img
                        srcSet={imgData[7]}
                        src={imgData[7]}
                        loading="lazy"
                        style={{ width:'auto', maxWidth:'100%' }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
  }

  const imgData = [
    'felldeeds/CoverImage.PNG',
    'felldeeds/belowTheSandsLevels.png',
    'felldeeds/Layer1-2.png',
    'felldeeds/belowthesands.png',
    'felldeeds/olddialouge.png',
    'felldeeds/Layer2-3.png',
    'felldeeds/Layer3-1.png',
    'felldeeds/Layer1Media.gif',
    'felldeeds/Layer1Boss.gif'
  ]

    const coverImageData = {
        img: 'felldeeds/CoverImage.PNG',
        title: 'Endevrian',
    }

    const belowTheSandsData = {
        img: 'felldeeds/belowTheSandsLevels.png',
        title: 'Endevrian',
    }

    const gameplayImage = {
        img: 'felldeeds/Layer1-2.png',
        title: 'Endevrian',
    }

    const lightHouseImageData = {
        img: 'me/lighthouse.jpg',
        title: 'Endevrian',
    }