import * as React from 'react';
import NavMenu from "../components/navMenu";
import { Box } from '@mui/system';
import { Typography, Grid, Divider, Card, CardContent, Button } from '@mui/material';
import ImageGallery from "../components/imageGallery";
import GitHubIcon from '@mui/icons-material/GitHub';

export default function ProbablyMonsters() {
    return (
        <Box sx={{ mt: 10, mb: 10 }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="h4" gutterBottom>
                                ProbablyMonsters
                            </Typography>
                            <Typography gutterBottom>
                                May 2022 - October 2023
                            </Typography>
                            <Typography gutterBottom>
                            People That Helped Me Along the Way: Michael McDermott, Matt Gross, Jay Spang, Brad Klocksiem, Cody Pitman, Dennis Crowley, Sarah Fischer, Shivaun Robinson, Dean Johnson
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <Typography>
                        I'm an avid watcher of NoClip, the video game documentary channel on YouTube.
                        I spent plenty of nights making games in Unity on one monitor and learning about the game industry on the other.
                        I had been looking at jobs in Seattle for almost a year but the idea of actually moving there was a dream and the idea of getting to work in games was unthinkable.
                        In February 2022 FromSoftware's Elden Ring came out and I was blown away.
                        While playing Elden Ring I told myself "you're gonna regret it if you can't be apart of all this".
                        I applied for an entry level position as a Build Engineer at ProbablyMonsters and after a coding assessment and a 6 hour long interview I had my first day on-site in Bellevue, Washington.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h5">
                       Working in DevOps
                    </Typography>
                    <Typography>
                        I was very lucky to be joining a world class veteran team of build engineers.
                        Although I had some DevOps experience previously at Publix using Azure Pipelines, games require a much larger scale of support for builds which means much more complex architecture.
                        I had the chance to work with Jenkins, VSphere, AWS, Docker, Slack's API, HashiCorp Terraform, Perforce, Unreal Engine, GitHub Actions, Steamworks, Prospero for PS5, this list could get really long.
                        For languages I used C#, Groovy, Python, PowerShell, Perl, batch script, and I would have to occasionally read C++.
                        When working in DevOps you have to be ready to learn a new framework or technology very quickly because you never know what you're going to work on next.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h5">
                       Working in Games
                    </Typography>
                    <Typography>
                        It's cool working in games. 
                        Really cool.
                        I loved having the opportunity to be surrounded by people that were also passionate about making games.
                        Seeing concept art get posted, reading a bug report, giving feedback, the entire process was amazing.
                        My favorite project was working on a pre-commit tool that was used by our game teams.
                        Anytime someone wanted to check in new code they could use my pre-commit tool to make sure it didn't break the build.
                        It was really satisfying having a tool that was integral to people's workflow and I really enjoyed making my users happy.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h5">
                       Workflow
                    </Typography>
                    <Typography>
                        I was the noob on the team which meant I was in charge of the help desk queue.
                        A pretty easy price to pay for getting my foot in the door to games.
                        It actually had a lot of upsides, I got to know people from all of our game teams and build relationships with them.
                        If there was a problem with a build or tool I was the first point of contact.
                        If someone had a question about how Perforce or Jenkins worked, I was also the first point of contact.
                        The only downside was constant context switching.
                        I would take on as much project work as I could while also dealing with the possibility of a Slack message getting sent my way at any minute.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h5">
                       Games I Worked On
                    </Typography>
                    <Typography>
                        I'm hoping I'll be able to add more to this section later.
                        The only game that I worked on that's been publicly announced is Firewalk Studio's Concord coming in 2024.
                        I loved working on Concord!
                        I can't say much more than that but having the chance to work with Firewalk was great and I'll miss the people I worked with as they go off and do big things for Sony.
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <img
                        srcSet="work/concord.jpg"
                        src="work/concord.jpg"
                        loading="lazy"
                        style={{ width:'auto', maxWidth:'100%' }}
                    />
                </Grid>
                <Grid item xs={6}>
                    <img
                        srcSet="work/PXL_20230109_213630281.jpg"
                        src="work/PXL_20230109_213630281.jpg"
                        loading="lazy"
                        style={{ width:'auto', maxWidth:'100%' }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
  }