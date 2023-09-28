import * as React from 'react';
import NavMenu from "../components/navMenu";
import { Box } from '@mui/system';
import { Typography, Grid, Divider, Card, CardContent, Button } from '@mui/material';
import ImageGallery from "../components/imageGallery";
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Publix() {
    return (
        <Box sx={{ mt: 10, mb: 10 }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="h4" gutterBottom>
                                Publix Super Markets
                            </Typography>
                            <Typography>
                                January 2015 - December 2021
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                <Typography>
                    Publix was my local Fortune 500 company growing up. 
                    Everyone either worked for or knew someone who worked for Publix.
                    It's almost a right of passage for every Lakeland teenager to go bag groceries for at least a few months.
                    A few months turned into seven years.
                    I worked my way through college and thanks to Publix's tuition reimbursement program I graduated debt free.
                    During those seven years I worked my way up from bagger to software engineer.
                </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h5">
                        Tech Support
                    </Typography>
                    <Typography>
                        After months of late nights where I was stocking shelves by myself, I began working in the Information Systems Customer Support department.
                        It was a call center, complete with boards that showed how many people were on hold, but our customers were retail associates.
                        There were plenty of calls that involved me asking someone "did you power it off and back on?".
                        But there were also calls where I had to think very quickly on how to fix a server while a stressed out associate was dealing with lines of customers on the other end of the phone.
                        As I was finishing up school I went full-time and joined a Tier II support team that focused on Publix's ATMs and HR software.
                        I had the chance to start writing PowerShell scripts for other analysts to use during this time.
                        The hardest part of this period was working 4 AM to 2:30 PM and never getting any sleep.
                        I was incredibly motivated to graduate college and move into a position where I could code as much as possible.
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h5">
                       Software Quality Assurance
                    </Typography>
                    <Typography>
                        I worked in QA briefly.
                    </Typography>
                </Grid>
                {/* <Grid item xs={12}>
                    <ImageGallery props={{imageData: imgData }} />
                </Grid> */}
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