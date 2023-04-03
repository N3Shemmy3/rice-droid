import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline, Container, Box } from '@mui/material';
import theme from './themes/theme';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';

import Home from './routes/Home';
import Devices from './routes/Devices';
import Device from './routes/Device';
import About from './routes/About';
import Gallery from './routes/Gallery';

import group7 from "/src/assets/images/Group7.png";
import group7_1 from "/src/assets/images/Group7-1.png";


const router = createBrowserRouter([
  {
    path: "/rice-droid/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "device/:deviceId",
        element: <Device />,
      },
      {
        path: "devices",
        element: <Devices />,

      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <div>
      <div style={{
        position: "relative",
        zIndex: 0,

      }}>
        <Box height="fit" sx={{ display: { xs: 'none', md: 'flex' }, }}>
          <img src={group7} height="fit"
            style={{
              width: "100vw",
              height: "auto",
              scale: "inherit",
              maxHeight: "80%",
              maxWidth: "100%",

            }}
          />
        </Box>
        <Box height="fit" sx={{ display: { xs: 'flex', md: 'none' }, }}>
          <img src={group7_1} height="fit"
            style={{
              width: "auto",
              height: "auto",
              maxHeight: "90%",
              maxWidth: "100%"
            }} />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "0px",
            zIndex: 3,
            height: "100%",
            width: "100%",
            backdropFilter: "blur(8px)",
          }}
        >

          <RouterProvider router={router} />
        </Box>
      </div>
    </div>
  </ThemeProvider>
);
