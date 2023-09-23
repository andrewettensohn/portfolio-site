import { Outlet, Link, useLoaderData, } from "react-router-dom";
import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import Intro from "../components/intro";
import ImageGallery from "../components/imageGallery";
import { CardContent, Card, ListItem, ListItemText, List, CardActionArea, CardActions } from "@mui/material";

export default function Home() {
    return (
      <Box sx={{ mt: 10 }}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
              <Intro />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h4">
                  Personal Projects
              </Typography>
              <ImageGallery props={{imageData: imageDataPersonalProjects}} />
              <Card>
                <CardContent>
                  <List>
                    {descriptionDataPersonalProjects.map(x => {
                      return (
                        <ListItem divider>
                          <ListItemText
                            primary={x.name}
                            secondary={x.type}
                          />
                        </ListItem>
                      );
                    })}
                  </List>
                </CardContent>
                <CardActions>
                  <Button  variant="outlined">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h4">
                  Work Experience
              </Typography>
              <ImageGallery props={{imageData: imageDataWorkExperience}} />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h4">
                  About Me
              </Typography>
              <ImageGallery props={{imageData: imageDataOfMe}} />
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

const imageDataPersonalProjects = [
  {
      img: 'felldeeds/CoverImage.PNG',
      title: 'Camera',
  },
  {
    img: 'solarstrike/splashscreen.png',
    title: 'SolarStrike',
  },
  {
      img: 'endevrian/desktop-end-home.png',
      title: 'Endevrian',
  },
  {
    img: 'wrathandglory/PromoImage2.png',
    title: 'WrathAndGlory',
  },
  {
    img: 'kanbanlite/PromoImageKanban.png',
    title: 'Kanban',
  },
  {
    img: 'blazornews/desktop-hnb-light.png',
    title: 'Honey',
  },
];

const imageDataWorkExperience = [
  {
      img: 'work/concord.jpg',
      title: 'Concord',
  },
  {
    img: 'work/meatballs.jpg',
    title: 'SolarStrike',
  },
  {
      img: 'work/pmlogo.jpg',
      title: 'Endevrian',
  },
  {
    img: 'work/pmoffice.jpg',
    title: 'WrathAndGlory',
  },
  {
    img: 'work/publixThumbsUp.jpg',
    title: 'Kanban',
  },
  {
    img: 'work/publixStore.jpg',
    title: 'Honey',
  },
];

const descriptionDataPersonalProjects = [
  {
    name: "Fell Deeds",
    type: "2D Unity Game",
  },
  {
    name: "Solar Strike",
    type: "2D Godot 4 Game",
  },
  {
    name: "Endevrian",
    type: "D&D Campaign Management Tool",
  },
  {
    name: "Wrath & Glory Companion",
    type: "Table-top RPG companion app",
  },
  {
    name: "KanbanLite",
    type: "Project Management Tool",
  },
  {
    name: "BlazorNews",
    type: "Hacker News Remake",
  },
]