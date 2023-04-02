import { useState, useEffect } from 'react';
import axios from "axios";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import theme from '../themes/theme'

import banner from '/src/assets/images/banner.jpg';
import group7 from '/src/assets/images/Group7.png';
import SearchIcon from '@mui/icons-material/Search';
import { Data } from './Data';
export type Device = {
    "maintainer": "Name (nickname)",
    "oem": "OEM",
    "device": "Device Name",
    "filename": "riceDroidAndroid-12.0-<date>-<device codename>-v<crversion>.zip",
    "download": "https://sourceforge.net/projects/ricedroid/files/<device codename>/<crversion>/riceDroidAndroid-12.0-<date>-<device codename>-v<crversion>.zip/download",
    "timestamp": 0,
    "md5": "abcdefg123456",
    "sha256": "abcdefg123456",
    "size": 12349,
    "version": "<crversion>",
    "buildtype": "Testing/Alpha/Beta/Weekly/Monthly",
    "forum": "https://forum link",
    "gapps": "https://gapps link",
    "firmware": "https://firmware link",
    "modem": "https://modem link",
    "bootloader": "https://bootloader link",
    "recovery": "https://recovery link",
    "paypal": "https://donation link",
    "telegram": "https://telegram link",
    "dt": "https://github.com/ricedroidandroid/android_device_<oem>_<device_codename>",
    "common-dt": "https://github.com/ricedroidandroid/android_device_<orm>_<SOC>-common",
    "kernel": "https://github.com/ricedroidandroid/android_kernel_<oem>_<SOC>"
}

export default function Devices() {
    const url = `https://raw.githubusercontent.com/N3Shemmy3/android_vendor_RiceDroidOTA/patch-1/ricedroid.devices`;
    const isTablet = () => (window.innerWidth > 600)
    const result: Array<Device> = [];
    const [devices, setDevices] = useState(Data);
    const [devicess, setDevicess] = useState(Data);

    const [text, setText] = useState('');

    const splitTextIntoLines = (text: string) => {
        const lines = text.split(/\r?\n/);
        return lines;
    }
    const getDeviceUrl = (name: string) => {
        return "https://raw.githubusercontent.com/ricedroidOSS-devices/android_vendor_RiceDroidOTA/thirteen/" + name + ".json";
    }
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    const handleKeyDown = (event: React.KeyboardEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (event.key === 'Enter') {
            searchDevices(Data, text);
        }
        setText("");
        return false;
    }
    const searchDevices = (arr, searchInput: string) => {
        const filteredData = arr.filter(value => {
            const searchStr = searchInput.toLowerCase();
            const nameMatches = value.device.toLowerCase().includes(searchStr);
            const daysMatches = value.filename.toString().includes(searchStr);

            return nameMatches || daysMatches;
        });
        console.log(filteredData);
        setDevices(filteredData)
    }
    useEffect(() => {
        /*
        axios.get(url).then((response) => {
            const value = splitTextIntoLines(response.data);
            var list = new Array();
            for (var i = 0; i < (value.length - 1); i++) {
                var object: Device = null;
 
                axios
                    .get(getDeviceUrl(value[i]))
                    .then((response) => {
                        if (response.data.response == null) return;
                        object = response.data.response[0];
                        //console.log(object);
                        list.push(object)
                    })
                    .catch(function (error) {
                    });
            }
            console.log(list);
            setDevices(list);
            console.log('i fire once');
        });
        */
    }, []);


    return (
        <Container
            sx={{
                height: "100%",
                width: "100%",
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
                pt: "16px",
                pb: "24px",
                zIndex: "1100",

            }}>
                <Paper
                    component="form"
                    sx={{
                        p: '2px 4px',
                        display: 'flex',
                        alignItems: 'center',
                        width: isTablet() ? 400 : "fit"
                    }}
                >
                    <InputBase
                        id="my-input"
                        sx={{
                            ml: 1,
                            flex: 1,
                            borderRadius: 8,
                            color: "inherit"
                        }}
                        placeholder="Search Device"
                    />
                    <IconButton
                        color="inherit"
                        sx={{ p: '10px' }}
                        aria-label="search"
                        onMouseDown={handleMouseDownPassword}
                    >
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </Box>

            <div style={{ width: isTablet() ? 50 : 16 }} />
            <div>

                <Grid
                    container
                    sx={{
                        mt: "16px",
                    }}
                    spacing={{ xs: 2, md: 2 }}
                    columns={{ xs: 1, sm: 4, md: 8 }}
                >
                    {devices.map((device, index) => (
                        <Grid key={index} xs={2}>
                            <Card

                                sx={{
                                    mb: "16px",
                                    width: "100%",
                                    maxWidth: isTablet() ? 600 : "600px",
                                    selectable: "none",
                                    borderRadius: "8px",
                                }}
                            >
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={banner}
                                    title="mock"
                                />

                                <CardContent>
                                    <Stack direction="row" spacing={1} sx={{ mb: "8px" }} >
                                        <Chip
                                            label={device.oem}
                                            size="small"
                                            color="primary"
                                            variant="outlined" />
                                        <Chip
                                            label={"v" + device.version}
                                            size="small"
                                            color="primary"
                                            variant="outlined" />
                                        <Chip
                                            label={device.buildtype}
                                            size="small"
                                            color="primary"
                                            variant="outlined" />

                                    </Stack>
                                    <Typography
                                        variant="h6"
                                        component="div">
                                        {device.device}
                                    </Typography>
                                    <Typography
                                        variant="subtitle1"
                                        color="text.secondary">
                                        {device.oem}
                                    </Typography>

                                </CardContent>
                                <CardActions>
                                    <Button
                                        size="small"
                                        variant="contained"
                                        href={device.download}
                                        sx={{
                                            borderRadius: "16px",
                                            textTransform: "none",
                                        }}>Download</Button>


                                    <Button
                                        size="small"
                                        variant="contained"
                                        href={device.forum}
                                        sx={{
                                            display: device.forum ? "flex" : "none",
                                            borderRadius: "16px",
                                            textTransform: "none",
                                        }}>Forum</Button>
                                </CardActions>

                            </Card>
                        </Grid>
                    ))
                    }
                </Grid>
            </div>

        </Container >
    )
}