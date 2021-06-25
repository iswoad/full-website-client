import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import BookingCard from '../BookingCard/BookingCard';
import Sidebar from '../Sidebar/Sidebar';

const BookingList = () => {
    const [bookings, setBookings] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    useEffect( () => {
        fetch('https://obscure-coast-47733.herokuapp.com/bookings?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setBookings(data));
    },[])
    console.log(bookings)


    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5 no-gutter" style={{ position: "absolute", right: 0, backgroundColor: "#F3F3F3" }}>
                <h1 className = 'text-success'>My Bookings: {bookings.length}</h1>
                <div className = 'row d-flex justify-content-center'>
                {
                    bookings.map(booking => <BookingCard bk = {booking}></BookingCard>)
                }
                </div>
            </div>
        </section>
    );
};

export default BookingList;