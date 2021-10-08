import React from 'react';
import { AppBar, Toolbar, Typography, Grid, Link } from '@mui/material';
function Navbar({ color }) {
    return (
        <AppBar position='fixed'
            sx={{ backgroundColor: color }}
        >
            <Toolbar>
                <img src='/images/appLogo.png' alt='#' width='5%' />
                <Grid container
                    justifyContent='space-between'
                    pl='2%'
                >
                    <Typography
                        variant="h6"
                        // color="inherit" noWrap
                        sx={{ cursor: "pointer" }}
                    >
                        <Link href='/' sx={{ textDecoration: "none" }}>
                            <Typography color='white'>Weather App</Typography>
                        </Link>
                    </Typography>
                </Grid>
                <Link href='/rooms' sx={{ textDecoration: "none" }}>
                    <Typography align='right' pr='5%' color='white'>Rooms</Typography>
                </Link>
            </Toolbar>
        </AppBar>


    );
}
export default Navbar;