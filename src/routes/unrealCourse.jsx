import * as React from 'react';
import NavMenu from "../components/navMenu";
import { Box } from '@mui/system';
import { Typography, Grid, Divider, Card, CardContent, Button } from '@mui/material';
import ImageGallery from "../components/imageGallery";
import GitHubIcon from '@mui/icons-material/GitHub';

export default function UnrealCourse() {
    return (
        <Box sx={{ mt: 10, mb: 10 }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="h4" gutterBottom>
                                Unreal Engine 5 C++ Developer Course
                            </Typography>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Button variant="outlined" href="https://www.udemy.com/certificate/UC-b6272d32-2946-4130-bc7a-7fac9623b5a1/" target="_blank" rel="noopener noreferrer">
                                        Certificate
                                    </Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <Typography>
                        While working at ProbablyMonsters I wanted to gain as much experience with Unreal as possible.
                        My goal is to one day work as a Gameplay Engineer and the only way I'll be able to do that is by completing a bunch of side projects.
                        The course contained about 30 hours of videos, many of which contained challenges that I would have to complete on my own.
                        Each section built on the previous one beginning with a simple physics game and ending with a small 3rd person shooter.
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <img
                        srcSet={imgData[0]}
                        src={imgData[0]}
                        loading="lazy"
                        style={{ width:'auto', maxWidth:'100%' }}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Typography>
                        Blueprints, animations, effects, and audio were covered. 
                        The main focus of the course was on using C++ with Unreal.
                        After getting used to the workflow, I realized that C++ really isn't too different from C# and I feel pretty comfortable solving problems with it.
                        The most challenging part was figuring out the Unreal specific syntax.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    My favorite project was setting up a crypt complete with lighting and a few puzzles for the player to solve.
                    I'm planning on coming back to the crypt I made so I can use it in a decent sized portfolio project.
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
                        I also had the chance to make a 3rd person platformer with a variety of obstacles that knock the player off like Wipe Out™.
                        You can also see a screenshot below of the tank game I made where the player goes through a small maze and fights with some turrets.
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
    'unreal/Screenshot 2023-09-27 235116.png',
    'unreal/photo_2023-09-27_10-59-46.jpg',
    'unreal/Screenshot 2023-09-27 235336.png',
    'unreal/Screenshot 2023-09-27 235508.png',
  ]