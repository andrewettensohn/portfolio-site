import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import "./index.css";
import ErrorPage from "./error-page";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Home from "./routes/home";
import NavMenu from "./components/navMenu";
import { Container } from "@mui/system";
import AboutMe from "./routes/aboutMe";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
    <Container>
      <NavMenu />
      <CssBaseline />
      <BrowserRouter errorElement={<ErrorPage />}>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route
              path="home"
              element={<Home />}
            />
          </Route>
          <Route path="/aboutme" element={<AboutMe />} />
      </Routes>
      </BrowserRouter>
    </Container>
    </ThemeProvider>
  </React.StrictMode>
);