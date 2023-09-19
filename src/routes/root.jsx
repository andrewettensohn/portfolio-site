import { Outlet, Link, useLoaderData, } from "react-router-dom";
import { getContacts } from "../contacts";
import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ProjectList from "../components/projectList";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import Intro from "../components/intro";
import { Container, Menu, MenuItem } from "@mui/material";
import Home from "../pages/home";
import NavMenu from "../components/navMenu";

export async function loader() {
  const contacts = await getContacts();
  return { contacts };
}

export default function Root() {
    return (
      <>
        <Container>
          <NavMenu />
          <Home />
        </Container>
      </>
    );
  }