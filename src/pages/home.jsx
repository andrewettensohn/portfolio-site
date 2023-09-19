import { Outlet, Link, useLoaderData, } from "react-router-dom";
import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ProjectList from "../components/projectList";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import Intro from "../components/intro";

export default function Home() {
    return (
      <>
      <Box sx={{ m: 4 }}>
        <Grid container spacing={10}>
        <Grid item xs={12}>
            <Box
                component="img"
                sx={{
                    height: 233,
                    width: 350,
                    maxHeight: { xs: 233, md: 167 },
                    maxWidth: { xs: 350, md: 250 },
                }}
                alt="The house from the offer."
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
                />
        </Grid>
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
              <ProjectList />
            </Grid>
          </Grid>
      </Box>
      </>
    );
  }