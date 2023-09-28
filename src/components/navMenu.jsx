import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Stack } from '@mui/material';
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';

export default function NavMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="fixed">
            <Toolbar>
            {/* <IconButton
                onClick={handleClick}
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{'aria-labelledby': 'basic-button'}}
              >
            <MenuIcon />
              </IconButton>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
                >
                <MenuItem><a href='/'>Home</a></MenuItem>
                <MenuItem><a href='/aboutme'>Personal Projects</a></MenuItem>
                <MenuItem><a href='/aboutme'>Work Experience</a></MenuItem>
                <MenuItem><a href='/aboutme'>About Me</a></MenuItem>
                </Menu> */}
                <Box>
                    <Stack direction="row" justifyContent="flex-end" alignItems="center">
                        <IconButton href='/'>
                          <HomeIcon />
                        </IconButton>
                        <IconButton href='https://github.com/andrewettensohn'>
                            <GitHubIcon />
                        </IconButton>
                        <IconButton href='https://www.linkedin.com/in/andrew-ettensohn-685721187'>
                            <LinkedInIcon />
                        </IconButton>
                    </Stack>
                </Box>
            </Toolbar>
          </AppBar>
        </Box>
    );
}