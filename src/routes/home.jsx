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
    <Box sx={{ mt: 10, mb: 10 }}>
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
                    <CardActionArea sx={{ width: 286, height: 286 }} href={x.page}>
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
              return (
                <Grid item>
                  <Card sx={{ width: 286, height: 400 }} raised={true} variant="outlined">
                    <CardActionArea sx={{ width: 286, height: 400 }} href={x.page}>
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
                  <ImageGallery props={{ imageData: imageDataOfMe }} />
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
        <Grid item xs={12}>
          <Stack direction="row" justifyContent="center" alignItems="center">
            <Typography gutterBottom>
              This site was made by me.
            </Typography>
          </Stack>
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
    page: '/publix',
    img: 'work/Publix-brandmark-copy.jpg',
  },
  {
    name: "ProbablyMonsters",
    description: "A year and a half as a Build and Release Engineer.",
    page: '/probablymonsters',
    img: 'work/pmlogo.jpg',
  }
]

const descriptionDataPersonalProjects = [
  {
    name: "Omen",
    type: "Godot 4 Game for Steam Release",
    img: 'omen/MainCapsule.png',
    page: '/omen'
  },
  {
    name: "Fell Deeds",
    type: "2D Unity Game",
    img: 'felldeeds/Layer1-2.png',
    page: '/felldeeds'
  },
  {
    name: "Solar Strike",
    type: "2D Godot 4 Game",
    img: 'solarstrike/Screenshot 2023-08-11 000105.png',
    page: '/solarstrike'
  },
  {
    name: "Endevrian",
    type: "D&D Campaign Management Tool",
    img: 'endevrian/desktop-end-home.png',
    page: '/endevrian'
  },
  {
    name: "Wrath & Glory",
    type: "Table-top RPG companion app",
    img: 'wrathandglory/PromoImage2.png',
    page: '/wrathandglory'
  },
  {
    name: "UE5 Course",
    type: "Unreal C++ Developer Course",
    img: 'unreal/photo_2023-09-27_10-59-42.jpg',
    page: '/unreal'
  }
]
