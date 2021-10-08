/* eslint-disable no-lone-blocks */
import {
    Typography, Grid, Table, TableBody,
    TableCell, TableContainer, TableHead, TableRow,
    Paper
}
    from '@mui/material';
import React from 'react';


function ShowRoomDetailsComponent({ rooms }) {
    console.log(rooms)
    return (

        <Grid container
            justifyContent='center'
            pt='20%'
        >
            <Grid container item
                justifyContent='center'
            >
                <Typography variant='h6' color='#FF5858' ><b>Rooms Deatils</b></Typography>
            </Grid>


            <Grid container item
                sx={{ width: '70%' }}
                pt='5%'
                justifyContent='center'
            >
                <TableContainer component={Paper}>

                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align='center'><b>Room Type</b></TableCell>
                                <TableCell align='center'><b>Vacant Room</b></TableCell>
                                <TableCell align='center'><b>Price</b></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rooms && rooms.map((details) => (
                                <TableRow key={details.id}>
                                    <TableCell align='center'>{details && details.room_type}</TableCell>
                                    <TableCell align='center'>{details && details.vacant_rooms}</TableCell>
                                    <TableCell align='center'>{details && details.price}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>

                    </Table>

                </TableContainer>
            </Grid>
        </Grid >
    );
}

export default ShowRoomDetailsComponent;

{ /* CODE TO DEPICT DATA INTO ORDERED LIST  
    <ol key={data.id}>
    <li>{data.room_type}</li>
    <li>{data.vacant_rooms}</li>
    <li>{data.price}</li>
    </ol > */}