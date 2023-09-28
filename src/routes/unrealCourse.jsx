import * as React from 'react';
import NavMenu from "../components/navMenu";
import { Box } from '@mui/system';
import { Typography, Grid, Divider, Card, CardContent, Button } from '@mui/material';
import ImageGallery from "../components/imageGallery";
import GitHubIcon from '@mui/icons-material/GitHub';

export default function UnrealCourse() {
    return (
        <Box sx={{ mt: 10 }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="h4" gutterBottom>
                                Unreal Course
                            </Typography>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Button variant="outlined" href="https://github.com/andrewettensohn/Strike" target="_blank" rel="noopener noreferrer">
                                        <GitHubIcon /> Solar Strike Project
                                    </Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
  }

  const imgData = [
    'solarstrike/Screenshot 2023-08-11 000105.png',
    'solarstrike/strike1.png',
  ]