import { Grid } from '@mui/material';
import React from 'react';
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';
import ShowRoomDetailsComponent from '../component/ShowRoomDetailsComponent';


function Rooms(props) {
    const rooms = [
        { room_type: "Queen", vacant_rooms: 5, price: 100 },
        { room_type: "Double", vacant_rooms: 3, price: 75 },
        { room_type: "Twin", vacant_rooms: 8, price: 60 }
    ];
    return (
        <Grid>
            <Navbar color='#FF5858' />
            <ShowRoomDetailsComponent rooms={rooms} />
            <Footer />
        </Grid>
    );
}

export default Rooms;