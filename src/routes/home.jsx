import { Outlet, Link, useLoaderData, } from "react-router-dom";
import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ProjectList from "../components/projectList";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import Intro from "../components/intro";
import GalleryOfMe from "../components/galleryOfMe";


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
              <ProjectList />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h4">
                  Work Experience
              </Typography>
              <ProjectList />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h4">
                  About Me
              </Typography>
              <GalleryOfMe />
            </Grid>
          </Grid>
      </Box>
    );
  }