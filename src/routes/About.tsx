import Box from "@mui/material/Box";
import Button from "@mui/material/Button"
import Container from "@mui/material/Container";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Unstable_Grid2';
import IconButton from '@mui/material/IconButton';
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import theme from '../themes/theme'

import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const maintainers =
{
    "name": "N3Shemmy3",
    "role": "Web Developer",
    "telegram": "https://t.me/N3Shemmy3",
    "github": "https://github.com/N3Shemmy3",
    "linkedIn": "",
};


export default function About() {

    const isTablet = () => (window.innerWidth > 600);

    return (
        <div>
            <Box>
                <Typography
                    variant="h4"
                    sx={{
                        mt: "80px",
                        mb: "24px",
                        fontWeight: 600,
                    }}
                >
                    About US</Typography>
                <Typography
                    variant={isTablet() ? "h6" : "subtitle1"}
                    gutterBottom
                >
                    Ricedroid is a fast and stable Android operating system based on LineageOS and crDroid. <br />
                    It aims to provide customizations inspired by Oxygen OS and nothingOS while staying close to AOSP, and is available as a free and open-source software.

                </Typography>

                <Typography
                    variant="h4"
                    sx={{
                        mt: "80px",
                        mb: "24px",
                        fontWeight: 600,
                    }}
                >
                    Device Maintainers:</Typography>
                <Grid
                    container
                    sx={{
                        mt: "16px",
                    }}
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 1, sm: 6, md: 9 }}
                >
                    {[...Array(10)].map((e, index) => (
                        <Grid sx={{ mx: "auto", }} key={index} xs={2}>

                            <Card
                                sx={{
                                    mb: "16px",
                                    width: "100%",
                                    height: "380px",
                                    mx: "auto",
                                    maxWidth: isTablet() ? 380 : window.innerWidth - 100,
                                    selectable: "none",
                                    borderRadius: "12px",
                                    position: "relative",
                                    zIndex: 0,
                                }}
                            >

                                <CardMedia
                                    sx={{ height: "250px", }}
                                    image='https://avatars.githubusercontent.com/u/67279072?v=4'
                                    title="mock"

                                />
                                <Box
                                    sx={{
                                        height: "380px",
                                        width: "100%",
                                        position: "absolute",
                                        top: "0px",
                                        zIndex: 3,
                                        backgroundColor: "#00000011",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "bottom",
                                    }}>

                                    <Box
                                        sx={{
                                            mt: "auto",
                                            backdropFilter: "blur(5px)",
                                            borderRadius: "12px",
                                        }}>

                                        <CardContent>

                                            <Typography
                                                variant="h5"
                                                component="div"
                                                sx={{
                                                    fontWeight: 700,
                                                }}>
                                                {maintainers.name}
                                            </Typography>
                                            <Typography
                                                variant="h6"
                                                color="text.secondary">
                                                {maintainers.role}
                                            </Typography>

                                        </CardContent>
                                        <CardActions
                                            sx={{
                                                pt: 0,
                                            }}>

                                            <Box sx={{
                                                ml: "8px",
                                                flexGrow: 1,
                                            }}
                                            >
                                                <Typography
                                                    variant="h6"
                                                    color="text.secondary">

                                                </Typography>
                                            </Box>

                                            <IconButton
                                                color="secondary"
                                                aria-label="Telegram"
                                                sx={{ ml: "8px" }}
                                            >
                                                <TelegramIcon />
                                            </IconButton>
                                            <IconButton
                                                color="secondary"
                                                aria-label="Github"
                                                sx={{ ml: "8px" }}
                                            >
                                                <GitHubIcon />
                                            </IconButton>


                                            <IconButton
                                                color="secondary"
                                                aria-label="Linked-In"
                                                sx={{ ml: "8px", display: "none", }}
                                            >
                                                <LinkedInIcon />
                                            </IconButton>


                                        </CardActions>
                                    </Box>
                                </Box>

                            </Card>
                        </Grid>
                    ))
                    }
                </Grid>
            </Box>

        </div >
    )
}