// import React, { useContext, useEffect, useState } from 'react';
// import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';
import Sidebar from '../Sidebar/Sidebar';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import { UserContext } from '../../../App';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    border: '1px solid red'
}

const Dashboard = () => {
    // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // const [selectedDate, setSelectedDate] = useState(new Date());
    // const [appointments, setAppointments] = useState([]);

    // const handleDateChange = date => {
    //     setSelectedDate(date);
    // }

    // useEffect(() => {
    //     fetch('https://salty-plateau-71286.herokuapp.com/appointmentsByDate', {
    //         method: 'POST',
    //         headers: { 'content-type': 'application/json' },
    //         body: JSON.stringify({ date: selectedDate, email: loggedInUser.email })
    //     })
    //         .then(res => res.json())
    //         .then(data => setAppointments(data))
    // }, [selectedDate])

    return (
        <section>
            <div style={containerStyle} className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 col-sm-12 d-flex justify-content-center">
                    <h1>Welcome to Dashboard</h1>
                </div>
             
            </div>
        </section>
    );
};

export default Dashboard;