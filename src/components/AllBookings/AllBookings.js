import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import BookingDataTable from '../BookingDataTable/BookingDataTable';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const AllBookings = () => {

    const [ bookings, setBookings ] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4200/allBookings')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])
    console.log(bookings)
    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5no-gutter" style={{ position: "absolute", right: 0, backgroundColor: "#F3F3F3" }}>
            <h5 className="text-success">All Bookings</h5>
                <BookingDataTable bookings={bookings} />
            </div>
        </section>
    );
};

export default AllBookings;