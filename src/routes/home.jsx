import { Outlet, Link, useLoaderData, } from "react-router-dom";
import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import Intro from "../components/intro";
import ImageGallery from "../components/imageGallery";

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
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h4">
                  Work Experience
              </Typography>
              <ImageGallery props={{imageData: imageDataPersonalProjects}} />
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