import Box from '@mui/material/Box'
import Button from '@mui/material/Button';
import Container from "@mui/material/Container";
import Chip from '@mui/material/Chip';
import Toolbar from "@mui/material/Toolbar";
import BackIcon from '@mui/icons-material/ArrowBackIosOutlined';
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';


import theme from '../themes/theme';

import banner from '../assets/images/banner.jpg';
import DeviceIcon from '@mui/icons-material/PermDeviceInformationOutlined';
import InfoIcon from '@mui/icons-material/InfoOutlined';
import UpdateIcon from '@mui/icons-material/UpdateOutlined';

import group7 from '/src/assets/images/group7.png';
import group7_1 from '/src/assets/images/group7-1.png';
const variants = ["Vanilla", "Core", "Pixel"]

export default function Device() {
    const isTablet = () => (window.innerWidth > 600)

    return (
        <div style={{ position: "relative", zIndex: 1, height: "fit-content", }} >
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
            <Container
                sx={{
                    pt: 10,
                    maxWidth: "600px",
                    alingContent: "center",
                    position: "absolute",
                    top: "0px",
                    zIndex: 3,
                }}
            >
                <Typography
                    variant={isTablet() ? "h3" : "h6"}
                    gutterBottom
                    sx={{
                        mb: "80px",
                        fontWeight: 600,
                    }}
                >
                    Tecno Spark 5 Pro
                </Typography>

                <Stack direction={"row"} sx={{ my: "8px" }} spacing={2}>
                    <Chip
                        icon={<DeviceIcon />}
                        label="tecno-kd7"
                        color="primary"
                        variant="outlined"
                    />
                    <Chip
                        icon={<InfoIcon />}
                        label="v8.6"
                        color='primary'
                        variant="outlined"
                    />
                    <Chip
                        icon={<UpdateIcon />}
                        label="17-12-23"
                        color="primary"
                        variant="outlined"
                    />
                </Stack>
                <p
                    style={{
                        display: "inline-block",
                    }}
                >
                    Project Elixir OFFICIAL | v3.6<br /><br />

                    • Merged latest February Security patch<br />

                    • CTS Passes by default and banking apps are working fine<br />

                    • Exclusive: Added 3 new lock screen clock<br />

                    • Exclusive: Add minimal clock<br />

                    • Exclusive: Add oxygen os alike clock<br />

                    • Exclusive: Add analog clock<br />

                    • Exclusive: Card layout optional<br />

                    • Essence: Import Wi-Fi standard icon<br />

                    • Essence: Battery Styles: Added 9 more battery styles<br />

                    • Much More - Try by yourself<br />
                </p>

                <Typography
                    variant={isTablet() ? "h6" : "subtitle1"}
                    gutterBottom
                    sx={{
                        fontWeight: 400,
                    }}
                >
                    Donwload:
                </Typography>


                <Box sx={{ display: 'flex', mb: "24px" }} >
                    {variants.map((variant) => (
                        <Box key={variant}>
                            <Button
                                variant="contained"
                                size='large'
                                sx={{
                                    borderRadius: "16px",
                                    mr: "8px",
                                    mb: "8px",
                                    textTransform: "none",
                                }}
                            >
                                {variant}
                            </Button>
                        </Box>
                    ))
                    }
                </Box>
            </Container>
        </div>
    )
}