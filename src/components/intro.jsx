import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';

export default function Intro() {
    return (
        <Card>
            <CardContent>
            <Grid container>
                <Grid item xs={6} md={3} lg={2}>
                    <Avatar alt="me" src="me/headshot.jpg" sx={{ width: 128, height: 128 }} />
                </Grid>
                <Grid item xs={12} md={7} lg={10} container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h2">
                        Andrew Ettensohn
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6">
                        Software Engineer/Game Dev
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>
                        Welcome to my portfolio site! I love building tools that make people's lives easier and I'm also very passionate about game development. Take a look at what I've been up to!
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="outlined" href="resume.pdf">
                            Resume
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            </CardContent>
        </Card>
      
    );
  }