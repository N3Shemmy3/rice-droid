import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Typography from "@mui/material/Typography";
import theme from '../themes/theme'


import SearchIcon from '@mui/icons-material/Search';

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
    },
];


export default function Download() {

    return (
        <Container>
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
                }}
            >
                Popular Devices:
            </Typography>
            <div style={{ height: window.innerWidth > 600 ? 50 : 16 }} />
            {devices.map((device) => (
                <Paper
                    sx={{
                        p: '16px',
                        mb: "8px",
                        display: 'flex',
                        borderRadius: "6px",
                        alignItems: 'center',
                        width: window.innerWidth > 600 ? 400 : "fit"
                    }}
                >
                    <div style={{ marginRight: "8px", }}>
                        <Typography
                            variant='h6'
                            sx={{
                                fontWeight: 400,
                                color: 'inherit',
                                letterSpacing: '.1rem',
                                textDecoration: 'none',
                            }}
                        >
                            {device.name}
                        </Typography>
                        <Typography
                            variant='subtitle1'
                            sx={{
                                fontWeight: 400,
                                color: 'inherit',
                                letterSpacing: '.1rem',
                                textDecoration: 'none',
                            }}
                        >
                            {device.codeName}
                        </Typography>
                        <Typography
                            variant='subtitle1'
                            sx={{
                                fontWeight: 400,
                                color: 'inherit',
                                letterSpacing: '.1rem',
                                textDecoration: 'none',
                            }}
                        >
                            {device.lastUpdate}
                        </Typography>
                    <Box sx={{ flexGrow: 1, display: "flex" }} />
                    </div>
                    <div>

                        <img
                            height="fit"
                            style={{
                                maxHeight: "100%",
                                maxWidth: "40%",
                                borderRadius: 4,
                            }}
                            src="https://teqip.in/wp-content/uploads/2022/10/Xaiomi-redmi-9-power.jpg" />

                    </div>


                </Paper>

            ))}

        </Container>
    )
}