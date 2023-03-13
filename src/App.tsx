import './App.css'

import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/MenuOutlined';
import CloseIcon from '@mui/icons-material/CloseOutlined';
import IconButton from '@mui/material/IconButton';
import { Button, Typography } from '@mui/material';
import banner37 from '/Group37mainBanner-bg.png';
import banner37Mobile from '/Group37mainBanner-bg-mobile.png';
import Group22 from '/Group22.png';
import theme from './themes/theme';
import Twitter from '/twitter.svg';
import Git from '/git.svg';
import Chat from '/vector.svg';
import Updates from '/updates.svg';


const pages = [
  {
    id: 0,
    name: 'Home',
    url: '/'
  },
  {
    id: 1,
    name: 'About',
    url: '/about'
  },
  {
    id: 2,
    name: 'Team',
    url: '/team'
  },
  {
    id: 3,
    name: 'Download',
    url: '/dowload'
  }];

export default function App() {
  const [isDrawerOpen, setDrawerOpen] = React.useState(false);


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
  return (
    <React.Fragment >
      <CssBaseline />
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
           
            style={{
              height: 24,
              width: 24,
              marginRight: "10px",
            }}
            src="/rice-droid/logo.png" />
          <Typography
            variant="h5"
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
            {pages.map((page) => (
              <Button
                size="large"
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Typography
                  variant="subtitle1"
                  component="a"
                  href={page.url}
                  sx={{
                    fontWeight: 700,
                    color: 'inherit',
                    letterSpacing: '.1rem',
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
              component="a"
              href='/'
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
      </Container>

      <Container disableGutters>
        <Box sx={{ my: 2 }}>
          <Container sx={{}}>
            <div style={{ position: "relative", zIndex: 1, height: "fit-content", }} >
              <Box height="fit" sx={{ display: { xs: 'none', md: 'flex' }, }}>
                <img src={banner37} height="fit"
                  style={{
                    width: "auto",
                    height: "auto",
                    maxHeight: "80%",
                    maxWidth: "100%",

                  }}
                />
              </Box>
              <Box height="fit" sx={{ display: { xs: 'flex', md: 'none' }, }}>
                <img src={banner37Mobile} height="fit"
                  style={{
                    width: "auto",
                    height: "auto",
                    maxHeight: "90%",
                    maxWidth: "100%"
                  }} />
              </Box>
              <div style={{ position: "absolute", top: "0px", zIndex: 3, }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                  }}>
                  <Box
                    sx={{
                      mt: "200px"
                    }}>
                    <Typography
                      variant='h4'
                      sx={{
                        fontWeight: 700,
                        color: 'inherit',
                        letterSpacing: '.1rem',
                        textDecoration: 'none',
                      }}
                    >
                      Ready for a <span style={{ color: theme.palette.primary.main, }}>Riced</span> Experience?
                    </Typography>
                    <Typography
                      variant='body2'
                      sx={{
                        fontWeight: 400,
                        color: theme.palette.text.secondary,
                        display: "inline",
                        textDecoration: 'none',
                      }}
                    >
                      We are <span style={{ color: theme.palette.primary.main, }}>ricedroid</span>, A custom rom based on lineage.
                    </Typography>
                    <Box
                      sx={{
                        '& > :not(style)': {
                          mx: 1,
                          my: 2,
                        },
                      }}
                    >
                      <IconButton>
                        <img src={Updates} />
                      </IconButton>
                      <IconButton>
                        <img src={Chat} />
                      </IconButton>
                      <IconButton>
                        <img src={Git} />
                      </IconButton>
                      <IconButton>
                        <img src={Twitter} />
                      </IconButton>
                    </Box>
                    <Button
                      color='secondary'
                      variant="contained"
                      size='large'
                      sx={{ borderRadius: 50, px: 6, }}
                    >Learn more</Button>
                  </Box>

                  <Box
                    height="fit"
                    sx={{
                      display: {
                        xs: 'none',
                        md: 'flex'
                      },
                    }}>
                    <img src={Group22} height="fit" style={{
                      width: "auto",
                      height: "auto",
                      maxHeight: "80%",
                      transform: "translate(150px, 50px)",
                      maxWidth: "100%",
                    }} />

                  </Box>
                </Box>
              </div>
            </div>

          </Container>
        </Box>
      </Container >
      <Drawer
        PaperProps={{
          sx: {
            backgroundColor: "transparent",
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
              {pages.map((page) => (
                <a
                  style={{
                    color: "InfoBackground",
                    textDecorationLine: "none",
                    fontSize: "20px",
                    fontWeight: "700",
                  }}
                  href={page.url}>
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
                href='/'>
                Contact us
              </a>
            </div>
          </div>
        </Box >
      </Drawer >
    </React.Fragment >
  );
}