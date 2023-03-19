import Box from '@mui/material/Box'
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import BackIcon from '@mui/icons-material/ArrowBackIosOutlined';
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import Paper from '@mui/material/Paper';
import theme from '../themes/theme'


import banner from '/src/assets/images/banner.jpg'

export default function Device() {
    const isTablet = () => (window.innerWidth > 500)


    return (
        <div>

        <Container
            sx={{
                height: "100%",
                width: "100%"
            }}
            >
            <Box
                sx={{
                    backgroundColor: theme.palette.background.default,
                }}>

                <Toolbar sx={{ mt: "100px" }}>
                    <IconButton
                        color="inherit"
                        edge="start"
                        aria-label="back"
                        sx={{
                            display: "none",
                            mr: 2,
                        }}>
                        <BackIcon fontSize={isTablet() ? "medium" : "small"} />
                    </IconButton>
                    <Typography
                        variant={isTablet() ? "h4" : "h6"}
                        component="div"
                        sx={{
                            flexGrow: 1,
                            fontWeight: 700,
                            letterSpacing: '.1rem',
                            textDecoration: 'none',
                        }}
                    >
                        Redmi Note 9Pro
                    </Typography>
                </Toolbar>
            </Box>


            <Paper height="fit">
                <img
                    height="fit"
                    style={{
                        width: "auto",
                        height: "auto",
                        maxHeight: "80%",
                        maxWidth: "100%",
                    }}
                    src={banner}
                    alt="banner" />
            </Paper>
            <div style={{
                height: "1000px"
            }} />

        </Container>
                </div>
    )
}