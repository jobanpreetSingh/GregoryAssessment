import { Card, CardContent, Typography, Grid, Divider } from "@mui/material"

export const LocationCardComponent = ({ data }) => {

    return (
        <Card sx={{ minWidth: '40%' }}>
            <CardContent>
                <Typography color='#FF5858' textAlign='center'><b>Geo Details</b></Typography>
                <Divider />
                <Grid container
                    justifyContent='center'
                    alignContent='center'
                    direction='column'
                    pt='2%'
                >
                    <Grid item>
                        <Typography textAlign='center'><b>{data && data.location.country},{data && data.location.region},{data && data.location.name}</b></Typography>
                    </Grid>
                    <Grid item>
                        <Typography textAlign='center'> <b>Time zone: {data && data.location.timezone_id}</b></Typography>
                    </Grid>
                    <Grid item>
                        <Typography textAlign='center'><b>{data && data.location.localtime}</b></Typography>
                    </Grid>
                </Grid>
                <Divider />
                <Grid container
                    justifyContent='space-between'
                    pt='5%'
                >
                    <Grid item>
                        <Typography><b>Lat:</b> {data && data.location.lat}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography><b>Lon:</b> {data && data.location.lon}</Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export const WeatherCardComponent = ({ data }) => {

    return (
        <Card sx={{ minWidth: '40%' }}>
            <CardContent>
                <Typography color='#FF5858' textAlign='center'><b>Weather Details</b></Typography>
                <Divider />
                <Grid container
                    justifyContent='space-around'
                    direction='row'
                    alignContent='center'
                    spacing={2}
                    pt='2%'
                >
                    <Grid item>
                        <Typography ><b>Cloudcover:</b> {data && data.current.cloudcover}</Typography>
                    </Grid>

                    <Grid item>
                        <Typography ><b>Feelslike: </b>{data && data.current.feelslike}</Typography>
                    </Grid>

                </Grid>

                <Grid container
                    justifyContent='space-around'
                    direction='row'
                    alignContent='center'
                    spacing={2}
                    pt='2%'
                >
                    <Grid item>
                        <Typography ><b>Humidity:</b> {data && data.current.humidity}</Typography>
                    </Grid>

                    <Grid item>
                        <Typography ><b>Is_day:</b> {data && data.current.is_day}</Typography>
                    </Grid>

                </Grid>

                <Grid container
                    justifyContent='space-around'
                    direction='row'
                    alignContent='center'
                    spacing={2}
                    pt='2%'
                >
                    <Grid item>
                        <Typography ><b>Pressure:</b> {data && data.current.pressure}</Typography>
                    </Grid>

                    <Grid item>
                        <Typography ><b>Temperature:</b> {data && data.current.temperature}</Typography>
                    </Grid>

                </Grid>

                <Grid container
                    justifyContent='space-around'
                    direction='row'
                    alignContent='center'
                    spacing={2}
                    pt='2%'
                >
                    <Grid item>
                        <Typography ><b>UV_index:</b> {data && data.current.uv_index}</Typography>
                    </Grid>

                    <Grid item>
                        <Typography ><b>Visibility: <b></b></b>{data && data.current.visibility}</Typography>
                    </Grid>

                </Grid>

                <Grid container
                    justifyContent='space-around'
                    direction='row'
                    alignContent='center'
                    spacing={2}
                    pt='2%'
                >
                    <Grid item>
                        <Typography ><b>Wind_dir:</b> {data && data.current.wind_dir}</Typography>
                    </Grid>

                    <Grid item>
                        <Typography ><b>Wind_speed:</b> {data && data.current.wind_speed}</Typography>
                    </Grid>

                </Grid>


            </CardContent>
        </Card>
    )
}