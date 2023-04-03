import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, Typography } from '@mui/material';

import IconButton from '@mui/material/IconButton';
import theme from '../themes/theme';

import banner37 from '/src/assets/images/Group37mainBanner-bg.png';
import banner37Mobile from '/src/assets/images/Group37mainBanner-bg-mobile.png';
import Group22 from '/src/assets/images/Group22.png';

import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';

import { useNavigate } from 'react-router-dom';

const socials = {
    "telegram": "https://t.me/riceDroidNews",
    "twitter": "https://twitter.com/riceDroid/",
    "github": "https://github.com/ricedroidOSS-devices",
}

export default function Home() {
    let navigate = useNavigate();


    const navigateTo =
        (path: string) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                navigate(path);
            };

    return (
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
                                            fontWeight: 800,
                                            color: 'inherit',
                                            letterSpacing: '.1rem',
                                            textDecoration: 'none',
                                        }}
                                    >
                                        Ready for a <span style={{ color: theme.palette.primary.main, }}>Riced</span> Experience?
                                    </Typography>
                                    <Typography
                                        variant='h6'
                                        sx={{
                                            fontWeight: 450,
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
                                        <IconButton
                                            color="secondary"
                                            aria-label="Telegram"
                                            href={socials.telegram}
                                            rel="external"
                                            sx={{ ml: "8px" }}
                                        >
                                            <TelegramIcon />
                                        </IconButton>
                                        <IconButton
                                            color="secondary"
                                            aria-label="Github"
                                            href={socials.github}
                                            rel="external"
                                            sx={{ ml: "8px" }}
                                        >
                                            <GitHubIcon />
                                        </IconButton>


                                        <IconButton
                                            color="secondary"
                                            aria-label="Twitter"
                                            href={socials.twitter}
                                            rel="external"
                                            sx={{ ml: "8px", }}
                                        >
                                            <TwitterIcon sx={{ background: "primary" }} />
                                        </IconButton>

                                    </Box>
                                    <Button
                                        color='secondary'
                                        variant="contained"
                                        size='large'
                                        sx={{ borderRadius: 50, px: 6, }}
                                        onClick={navigateTo("about")}>Learn more
                                    </Button>
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
                                        transform: "translate(120px, 50px)",
                                        maxWidth: "100%",
                                    }} />

                                </Box>
                            </Box>
                        </div>
                    </div>

                </Container>
            </Box >
        </Container >
    )
}