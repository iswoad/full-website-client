import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const BookService = () => {
    const { serviceId } = useParams();
    const [selectedService, setSelectedService] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser);

    // selected service fetch

    useEffect(() => {
        fetch(`http://localhost:4200/service/${serviceId}`)
            .then(res => res.json())
            .then(data => setSelectedService(data));
    }, [serviceId])

    const { title, charge, image } = selectedService;

    const handleCheckOut = () =>{
        console.log('booking done');
        const bookingDetails = {...loggedInUser, bookedService: selectedService }


        //send order details and login info to server

        fetch('http://localhost:4200/addBooking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookingDetails)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert('Your service is booked successfully');
            }
        })
    }

    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5no-gutter" style={{ position: "absolute", right: 0, backgroundColor: "#F3F3F3" }}>
                <div>
                    <h2><span className = 'text-success'>Client Name: </span>  {loggedInUser.name}</h2>
                    <h2><span className = 'text-success'>Client's Email: </span>  {loggedInUser.email}</h2>
                    <h2><span className = 'text-success'>Ordered Service: </span> {title}</h2>
                    <h2><span className = 'text-success'>Service Fee </span>  {charge}$</h2>
                </div>
                <div className="col-auto">
                    <button onClick = {handleCheckOut} className= "btn btn-danger">Make Payment</button>
                </div>
            </div>
        </section>
    );
};

export default BookService;