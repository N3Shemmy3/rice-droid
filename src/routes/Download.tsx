import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Typography from "@mui/material/Typography";
import theme from '../themes/theme'

import banner from '/src/assets/images/banner.jpg'
import SearchIcon from '@mui/icons-material/Search';
import AppBar from "@mui/material/AppBar";

const devices = [
    {
        codeName: "chime",
        name: 'RedMi 9 Power',
        lastUpdate: '14/4/2023',
        img: ''
    },
    {
        codeName: "chime",
        name: 'RedMi 9 Power',
        lastUpdate: '14/4/2023',
        img: ''
    },
    {
        codeName: "chime",
        name: 'RedMi 9 Power',
        lastUpdate: '14/4/2023',
        img: ''
    },
    {
        codeName: "chime",
        name: 'RedMi 9 Power',
        lastUpdate: '14/4/2023',
        img: ''
    },
    {
        codeName: "chime",
        name: 'RedMi 9 Power',
        lastUpdate: '14/4/2023',
        img: ''
    }, {
        codeName: "chime",
        name: 'RedMi 9 Power',
        lastUpdate: '14/4/2023',
        img: ''
    },
    {
        codeName: "chime",
        name: 'RedMi 9 Power',
        lastUpdate: '14/4/2023',
        img: ''
    },
    {
        codeName: "chime",
        name: 'RedMi 9 Power',
        lastUpdate: '14/4/2023',
        img: ''
    },
    {
        codeName: "chime",
        name: 'RedMi 9 Power',
        lastUpdate: '14/4/2023',
        img: ''
    },
    {
        codeName: "chime",
        name: 'RedMi 9 Power',
        lastUpdate: '14/4/2023',
        img: ''
    },
];


export default function Download() {

    return (
        <Container sx={{
            height: "100%",
            width: "100%"
        }}>
            <div style={{ height: "100px" }} />
            <Typography
                variant='h4'
                sx={{
                    fontWeight: 700,
                    color: 'inherit',
                    letterSpacing: '.1rem',
                    textDecoration: 'none',
                }}
            >
                Download <span style={{ color: theme.palette.primary.main, }}>riceDroid</span>
            </Typography>
            <Typography
                variant='h4'
                sx={{
                    fontWeight: 300,
                    color: 'inherit',
                    letterSpacing: '.1rem',
                    textDecoration: 'none',
                }}
            >
                for your <span style={{ color: theme.palette.primary.main, }}>device</span> now!
            </Typography>
            <Box sx={{
                position: "sticky",
                top: 0,
                pt: "16px",
                pb: "24px",
                zIndex: "1100",
                backgroundColor: theme.palette.background.default,
            }}>
                <Paper
                    component="form"
                    sx={{
                        p: '2px 4px',
                        display: 'flex',
                        alignItems: 'center',
                        width: window.innerWidth > 600 ? 400 : "fit"
                    }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1, borderRadius: 8, color: "inherit" }}
                        placeholder="Search by Device or codeName"

                    />
                    <IconButton type="button" color="inherit" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </Box>
            <Typography
                variant='h6'
                sx={{
                    fontWeight: 400,
                    color: 'inherit',
                    letterSpacing: '.1rem',
                    textDecoration: 'none',
                    boxShadow: "none",
                }}
            >
                Popular Devices:
            </Typography>
            <div style={{ height: window.innerWidth > 600 ? 50 : 16 }} />
            <div>

                <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 1, sm: 6, md: 10 }}
                >
                    {devices.map((device, n) => (
                        <Grid key={n} item xs={2}>
                            <Paper
                                sx={{
                                    mb: "16px",
                                    maxWidth: "100%",
                                    width: window.innerWidth > 600 ? 250 : "100%",
                                }}
                            >
                                <CardMedia
                                    sx={{
                                        height: 140,
                                        maxHeight: "100%"
                                    }}
                                    image={banner}
                                    title={device.name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {device.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {device.codeName}
                                    </Typography>
                                </CardContent>

                                <CardActions
                                    sx={{
                                        z: 1,
                                    }}>

                                    <Button
                                        variant="contained"
                                        size="small"
                                        sx={{
                                            borderRadius: 50,
                                            textTransform: "none",
                                        }}
                                    >
                                        Download
                                    </Button>
                                    <Button
                                        variant="contained"
                                        size="small"
                                        sx={{
                                            borderRadius: 50,
                                            textTransform: "none",
                                        }}
                                    >
                                        Info
                                    </Button>

                                </CardActions>
                            </Paper>
                        </Grid>
                    ))
                    }
                </Grid>
            </div>

        </Container >
    )
}