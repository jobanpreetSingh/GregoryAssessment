import React, { useEffect, useState } from 'react';
import { Grid, Button, Paper, TextField, Typography, Container, Box } from '@mui/material'
import { InputAdornment } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { makeStyles } from '@mui/styles'

import { LocationCardComponent, WeatherCardComponent } from '../component/Cards';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
const useStyles = makeStyles({
    root: {
        backgroundColor: "whitesmoke",
        marginTop: "5%",
        width: "50%"
    }, // a style rule

});
function Home(props) {
    const [search, setSearch] = useState('toronto');
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState();
    const classes = useStyles()
    useEffect(() => {
        fetchWeather();
    }, [])

    const searchLocation = (val) => {
        const searchValue = val.toLowerCase();
        setSearch(searchValue)
        setLoading(true)

    }

    const searchBtnHandler = () => {
        if (loading === true) {
            fetchWeather();
            setSearch('')
        }
    }
    const fetchWeather = async () => {
        const result = await fetch(`http://api.weatherstack.com/current?access_key=86dd36a34fd4c59d9319c5ecb62ecc55&query=${search}`)
        const data = await result.json()
        setData(data)
    }
    return (

        <Container maxWidth={false}>
            <Navbar color='#43B692' />
            <Grid container
                justifyContent='center'
            >
                <Grid container item
                    justifyContent='space-around'
                    xs={6} md={6} lg={6}
                    alignContent='center'
                    pt='20%'
                >
                    <TextField sx={{ width: "100%" }}
                        label=""
                        id="outlined-size-small"
                        size="small"
                        value={search}
                        placeholder="Search patients"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchOutlinedIcon />
                                </InputAdornment>
                            )
                        }}
                        onChange={(e) => searchLocation(e.target.value)}
                    />
                    <Button onClick={() => searchBtnHandler()}>Search</Button>
                </Grid>

                <Paper sx={{
                    width: '80%',
                    backgroundColor: "whitesmoke",
                    boxShadow: 1,
                    borderRadius: 1,
                    p: 4,
                    marginTop: "2%",
                    maxHeight: '65vh',
                    overflow: "auto"
                }}
                    className={classes.root}
                >
                    <Grid
                        container
                        direction="row"
                        justifyContent='space-around'

                    >
                        <Grid item xs={3} lg={2} md={2}>
                            {data && data.current.weather_icons.map((icons) => (
                                <img alt='#' width='30%' src={icons} />
                            ))}

                        </Grid>

                        <Grid item xs={8} lg={5} md={5} >
                            <Typography sx={{
                                fontSize: 24
                            }}
                                textAlign='center' color='#FF5858'><b>{data && data.location.name}</b></Typography>
                        </Grid>
                        <Grid item
                            xs={12} lg={3} md={2}
                            sx={{
                                fontSize: 20
                            }}
                        >
                            <Typography textAlign='right'>{data && data.location.localtime}</Typography>
                        </Grid>
                    </Grid>

                    <Grid container
                        pt='10%'
                        justifyContent='space-around'
                        alignContent='center'
                        spacing={2}

                    >
                        <Grid item> <LocationCardComponent data={data} /></Grid>
                        <Grid item> <WeatherCardComponent data={data} /></Grid>


                    </Grid>
                </Paper>
            </Grid>
            <Box pt='5%'>
                <Footer />
            </Box>

        </Container>
    );
}

export default Home;