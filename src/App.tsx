import './App.css'

import * as React from 'react';
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/MenuOutlined';
import CloseIcon from '@mui/icons-material/CloseOutlined';
import IconButton from '@mui/material/IconButton';
import { Button, Typography } from '@mui/material';

const pages = [
  {
    name: 'Home',
    url: ''
  },

  {
    name: 'Download',
    url: 'devices'
  },
  {
    name: 'Gallery',
    url: 'gallery'
  },
  {
    name: 'About',
    url: 'about'
  },
];

export default function App() {
  const [isDrawerOpen, setDrawerOpen] = React.useState(false);
  const [isHeaderShown, setHeaderShown] = React.useState(false);
  const isTablet = () => (window.innerWidth > 600);
  const location = useLocation()

  let navigate = useNavigate();

  const toggleDrawer =
    (open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        setDrawerOpen(open);
      };
  const navigateTo =
    (path: string) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        setHeaderShown(location.pathname == "Home" ? true : false);
        navigate(path);
      };
  return (
    <div style={{
      margin: "0 auto",
    }}>
      <Container >
        <Toolbar
          disableGutters
        >
          <img
            style={{
              height: 24,
              width: 24,
              marginRight: "10px",
            }}
            src="/rice-droid/logo.png" />
          <Typography
            variant={isTablet() ? "h5" : "h6"}
            component="a"
            href="/"
            sx={{
              fontWeight: 700,
              color: 'inherit',
              letterSpacing: '.1rem',
              textDecoration: 'none',
            }}>
            RiceDroid
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, index) => (
              <Button
                size="large"
                key={index}
                sx={{
                  my: 2,
                  color: 'white',
                  display: 'block',
                }}
                onClick={navigateTo(page.url)}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 800,
                    color: 'inherit',
                    letterSpacing: '.1rem',
                    textTransform: "none",
                    textDecoration: 'none',
                  }}>
                  {page.name}
                </Typography>

              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 1, }} />
          <IconButton
            onClick={toggleDrawer(true)}
            size="large"
            sx={{ display: { xs: 'flex', md: 'none' }, }}
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Button
            variant="contained"
            sx={{
              color: "white",
              display: {
                xs: 'none',
                md: 'flex',
                borderRadius: 50,
              }
            }}
          >
            <Typography
              variant="subtitle1"
              color="white"
              sx={{
                fontWeight: 400,
                color: 'inherit',
                letterSpacing: '.1rem',
                textDecoration: 'none',
                textTransform: "none",
              }}>
              Contact us
            </Typography>
          </Button>
        </Toolbar>

        <Outlet />
      </Container>

      <Drawer
        PaperProps={{
          sx: {
            backgroundColor: "#00000091",
            backdropFilter: "blur(20px)",
          }
        }}

        style={{ width: window.innerWidth }}
        anchor="right"
        color='transparent'
        hideBackdrop={true}
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
      >
        <Box
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Container style={{ width: window.innerWidth }} />
          <div style={{ display: "flex", flexDirection: "column", }}>

            <div style={{ display: "flex", flexDirection: "row", }}>
              <Box sx={{ flexGrow: 1 }} />
              <IconButton
                onClick={toggleDrawer(true)}
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <CloseIcon />
              </IconButton>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "16px",
              }}>
              {pages.map((page, index) => (
                <a
                  key={index}
                  style={{
                    color: "InfoBackground",
                    textDecorationLine: "none",
                    fontSize: "20px",
                    fontWeight: "700",
                  }}
                  onClick={navigateTo(page.url)}>
                  {page.name}
                </a>
              ))}
              <a
                style={{
                  color: "InfoBackground",
                  textDecorationLine: "none",
                  fontSize: "20px",
                  fontWeight: "700",
                }}
                onClick={navigateTo("/constactus")}>
                Contact us
              </a>
            </div>
          </div>
        </Box >
      </Drawer >
    </div>
  );
}