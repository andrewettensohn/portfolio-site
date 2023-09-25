import { Outlet, Link, useLoaderData, } from "react-router-dom";
import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import Intro from "../components/intro";
import ImageGallery from "../components/imageGallery";
import { CardContent, Card, ListItem, ListItemText, List, CardActionArea, CardActions, CardMedia } from "@mui/material";
import { Stack } from "@mui/system";

export default function Home() {
    return (
      <Box sx={{ mt: 10 }}>
        <Grid container spacing={10}>
          <Grid item>
              <Intro />
            </Grid>
            <Grid item>
              <Stack direction="row" justifyContent="center" alignItems="center">
                <Typography variant="h4" gutterBottom>
                      Personal Projects
                </Typography>
              </Stack>
              <Grid container spacing={1} alignItems="center" justifyContent="center" direction="row">
                {descriptionDataPersonalProjects.map(x => {
                  return (
                    <Grid item>
                      <Card sx={{ width: 286, height: 286 }} raised={true} variant="outlined">
                        <CardActionArea sx={{ width: 286, height: 286 }}>
                            <CardMedia
                              component="img"
                              image={x.img}
                              alt={x.name}
                              width={150}
                              height={150}
                            />
                            <CardContent>
                              <Typography gutterBottom variant="h5" component="div">
                                {x.name}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {x.type}
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </Grid>
                  );
                })}
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Stack direction="row" justifyContent="center" alignItems="center">
                <Typography variant="h4" gutterBottom>
                  Work Experience
                </Typography>
              </Stack>
              <Grid container spacing={1} alignItems="center" justifyContent="center" direction="row">
                {workExperienceInfo.map(x => {
                  return(
                    <Grid item>
                      <Card sx={{ width: 286, height: 400 }} raised={true} variant="outlined">
                        <CardActionArea sx={{ width: 286, height: 400 }}>
                          <ImageGallery props={{imageData: x.imgData}} />
                            <CardContent>
                              <Typography gutterBottom variant="h5" component="div">
                                {x.name}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {x.description}
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                    </Grid>
                  )
                })}
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Stack direction="row" justifyContent="center" alignItems="center">
                <Typography variant="h4" gutterBottom>
                  About Me
                </Typography>
              </Stack>
              <Grid container spacing={1} alignItems="center" justifyContent="center" direction="row">
                <Grid item>
                    <Card sx={{ width: 286, height: 400 }} raised={true} variant="outlined">
                      <CardActionArea sx={{ width: 286, height: 400 }} href="/aboutme">
                        <ImageGallery props={{imageData: imageDataOfMe }} />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                              Personal Details
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              I do some stuff outside of coding.
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                  </Grid>
              </Grid>
          </Grid>
        </Grid>
      </Box>
    );
  }

const imageDataOfMe = [
  {
      img: 'me/knight.png',
      title: 'knight',
  },
  {
    img: 'me/rainer.jpg',
    title: 'SolarStrike',
  },
  {
      img: 'me/books.jpg',
      title: 'Endevrian',
  },
  {
    img: 'me/east.jpg',
    title: 'Kanban',
  },
  {
      img: 'me/cosmicRolling.jpg',
      title: 'Honey',
  },
  {
      img: 'me/seattle.jpg',
      title: 'Me But cool',
  },
];

const workExperienceInfo = [
  {
    name: "Publix Super Markets",
    description: "7 years as a Software Engineer, Tester, IT Analyst, and Stock Clerk.",
    imgData: [
      {
        img: 'work/meatballs.jpg',
        title: 'SolarStrike',
      },
      {
        img: 'work/publixThumbsUp.jpg',
        title: 'Kanban',
      },
      {
        img: 'work/publixStore.jpg',
        title: 'Honey',
      },
    ]
  },
  {
    name: "ProbablyMonsters",
    description: "A year and a half as a Build and Release Engineer.",
    imgData: [
      {
        img: 'work/pmlogo.jpg',
        title: 'Endevrian',
      },
      {
        img: 'work/pmoffice.jpg',
        title: 'WrathAndGlory',
      },
      {
        img: 'work/concord.jpg',
        title: 'Concord',
      },
    ]
  }
]

const descriptionDataPersonalProjects = [
  {
    name: "Fell Deeds",
    type: "2D Unity Game",
    img: 'felldeeds/CoverImage.PNG',
  },
  {
    name: "Solar Strike",
    type: "2D Godot 4 Game",
    img: 'solarstrike/splashscreen.png',
  },
  {
    name: "Endevrian",
    type: "D&D Campaign Management Tool",
    img: 'endevrian/desktop-end-home.png',
  },
  {
    name: "Wrath & Glory",
    type: "Table-top RPG companion app",
    img: 'wrathandglory/PromoImage2.png',
  },
  {
    name: "KanbanLite",
    type: "Project Management Tool",
    img: 'kanbanlite/PromoImageKanban.png',
  },
  {
    name: "BlazorNews",
    type: "Hacker News Remake",
    img: 'blazornews/desktop-hnb-light.png',
  },
]