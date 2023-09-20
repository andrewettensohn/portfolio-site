import { Outlet, } from "react-router-dom";
import { getContacts } from "../contacts";
import * as React from 'react';
import { Container } from "@mui/material";
import NavMenu from "../components/navMenu";

export async function loader() {
  const contacts = await getContacts();
  return { contacts };
}

export default function Root() {
    return (
      <>
        <Container>

        </Container>
      </>
    );
  }