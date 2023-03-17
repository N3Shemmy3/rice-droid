

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, Typography } from '@mui/material';
import theme from '../themes/theme';



import banner37 from '/src/assets/images/Group37mainBanner-bg.png';
import banner37Mobile from '/src/assets/images/Group37mainBanner-bg-mobile.png';
import Group22 from '/src/assets/images/Group22.png';
import Twitter from '/src/assets/images/twitter.svg';
import Git from '/src/assets/images/git.svg';
import Chat from '/src/assets/images/vector.svg';
import Updates from '/src/assets/images/updates.svg';



export default function Home() {
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
                                        variant='body2'
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

                                        <img src={Updates} />
                                        <img src={Chat} />
                                        <img src={Git} />
                                        <img src={Twitter} />

                                    </Box>
                                    <Button
                                        color='secondary'
                                        variant="contained"
                                        size='large'
                                        sx={{ borderRadius: 50, px: 6, }}
                                    >Learn more
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
            </Box>
        </Container >
    )
}