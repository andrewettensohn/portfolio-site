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
                            <Typography gutterBottom>
                                January 2015 - December 2021
                            </Typography>
                            <Typography gutterBottom>
                            People That Helped Me Along the Way: Ryan Bowser, Brien Kenyon, Christen Harmon, Michelle Oliver, Sam Gaskins, Kevin Thomas
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
                    It's difficult to capture so much time in only a few paragraphs but this page serves as a decent summary outside of the bullet points on my resume.
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
                <Grid item xs={12} md={6}>
                    <Typography variant="h5">
                       Software Quality Assurance
                    </Typography>
                    <Typography>
                        I worked in QA briefly and spent about half of the time writing automated tests before Publix had came up with the title of Test Automation Engineer.
                        This was my first chance to work on Publix's inventory system.
                        I had plenty of knowledge about how the stores worked but now I really needed to understand the difference between a SKU and GTIN and how you organize that in a database (one SKU has many GTIN by the way).
                        Then there were barcode types like UPC-E, UPC-A, and EAN-13 that I would spend hours scanning.
                        I technically wasn't assigned to the new inventory system project at first, but I would finish my work as quickly as possible on the old system so that I could help the devs with the new one.
                        The manager that would end up hiring me as a dev once said "it would take a grenade to get Andrew out of the team room".
                        The team room was a giant cubicle where we were packed in like sardines working on the new system, my first desk in there was actually a shelf that one of my co-workers setup for me.
                        During this time I worked every single day on learning C# and JavaScript outside of work so that I could be selected as a dev.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h5">
                       Software Engineer
                    </Typography>
                    <Typography>
                        By 2020 I was a dev working on the new inventory system, I was beyond excited, I felt like I had been unleashed finally.
                        I was fullstack which meant writing SQL, JavaScript, and C# on web and mobile with Xamarin.
                        One of my first projects was replacing an old app for making signs a new feature in our inventory system, it took me a while to realize that thousands of people were now using the apps I was making.
                        During my time on the team I spent a lot of effort reading ancient source code written in a variety of languages and then doing some reverse engineering.
                        I also led several refactor efforts that focused on performance like a large rewrite to our item search API and a rewrite of the backend for creating inventory adjustments.
                        My work was solid enough that our principal engineer wanted to keep me close in order to take on more difficult tasks like authorization and key management as well as prototyping.
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <img
                        srcSet="work/publixThumbsUp.jpg"
                        src="work/publixThumbsUp.jpg"
                        loading="lazy"
                        style={{ width:'auto', maxWidth:'100%' }}
                    />
                </Grid>
                <Grid item xs={6}>
                    <img
                        srcSet="work/meatballs.jpg"
                        src="work/meatballs.jpg"
                        loading="lazy"
                        style={{ width:'auto', maxWidth:'100%' }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <img
                        srcSet="work/IMG_20191016_132223.jpg"
                        src="work/IMG_20191016_132223.jpg"
                        loading="lazy"
                        style={{ width:'auto', maxWidth:'100%' }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
  }