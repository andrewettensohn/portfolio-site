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
import FellDeeds from "./routes/felldeeds";
import WrathAndGlory from "./routes/wrathandglory";
import SolarStrike from "./routes/solarstrike";
import UnrealCourse from "./routes/unrealCourse";
import ProbablyMonsters from "./routes/probablyMonsters";
import Publix from "./routes/publix";
import Endevrian from "./routes/endevrian";
import Omen from "./routes/omen";

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
            <Route path="/felldeeds" element={<FellDeeds />} />
            <Route path="/wrathandglory" element={<WrathAndGlory />} />
            <Route path="/solarstrike" element={<SolarStrike />} />
            <Route path="/unreal" element={<UnrealCourse />} />
            <Route path="/probablymonsters" element={<ProbablyMonsters />} />
            <Route path="/publix" element={<Publix />} />
            <Route path="/endevrian" element={<Endevrian />} />
            <Route path="/omen" element={<Omen />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  </React.StrictMode>
);