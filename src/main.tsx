import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import theme from './themes/theme';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';

import Home from './routes/Home';
import Devices from './routes/Devices';
import Device from './routes/Device';



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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
