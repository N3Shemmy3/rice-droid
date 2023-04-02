import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Container from "@mui/material/Container";
import Chip from '@mui/material/Chip';

import Grid from '@mui/material/Unstable_Grid2';

import banner from '/src/assets/images/banner.jpg';
import Stack from "@mui/material/Stack";
import Typography from '@mui/material/Typography';



import { Data } from './Data';
import theme from '../themes/theme';
import { useEffect } from 'react';


export default function Gallery() {
    const isTablet = () => (window.innerWidth > 600);

    const getImage = (id: number) => {
        const baseurl = "https://raw.githubusercontent.com/N3Shemmy3/rice-droid/master/Screenshots/N3Shemmy3/"

        return baseurl + id + ".png";
    }


    return (
        <Container>

            <Box mt={isTablet() ? "100px" : "30px"}>
                <Typography variant={isTablet() ? "h4" : "h5"} sx={{ flexGrow: 1 }}>
                    Gallery
                </Typography>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    A collection of <span
                        style={{
                            color: theme.palette.primary.main,
                        }}>RiceDroid</span> screenshots by  <a
                            href="https://t.me/N3Shemmy3"
                            style={{
                                textDecoration: 'none',
                                color: theme.palette.primary.main,
                            }}>N3Shemmy3</a>
                </Typography>
            </Box>
            <Container disableGutters>
                <Grid
                    container
                    sx={{
                        mt: "16px",
                    }}
                    spacing={{ xs: 2, md: 2 }}
                    columns={{ xs: 1, sm: 6, md: 10 }}
                >
                    {[...Array(10)].map((e, index) => (
                        <Grid
                            style={{
                                display: index > 0 ? "inline" : "none",
                            }}
                            key={index}
                            xs={2}
                        >
                            <Card
                                sx={{
                                    p: .4,
                                    mb: "16px",
                                    mx: "auto",
                                    width: isTablet() ? "fit-content" : "100%",
                                    height: isTablet() ? "467px" : "fit-content",
                                    selectable: "none",
                                    borderRadius: "15px",
                                }}
                            >
                                <img
                                    style={{
                                        height: isTablet() ? "100%" : "fit-content",
                                        width: isTablet() ? "fit-content" : "100%",
                                        borderRadius: "15px",
                                        objectFit: "contain",
                                    }}
                                    src={getImage(index)}
                                    alt={"ScreenShot #" + index}
                                />



                            </Card>
                        </Grid>
                    ))
                    }
                </Grid>
            </Container>

        </Container>
    )
}