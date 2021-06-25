import React from 'react';

const BookingDataTable = ({bookings}) => {
    console.log(bookings);
    // const { name, email, bookedService} = bookings;
    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary text-left" scope="col">Sr No</th>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Email</th>
                <th className="text-secondary" scope="col">Service Name</th>
                <th className="text-secondary" scope="col">Service Charge</th>
                <th className="text-secondary" scope="col">Booking Status</th>
                
                
                </tr>
            </thead>
            <tbody>
                {
                  bookings.map((booking, index) => 
                        
                    <tr>
                        <td>{index + 1}</td>
                        <td>{booking.name}</td>
                        <td>{booking.email}</td>
                        <td>{booking.bookedService.title}</td>
                        <td>{booking.bookedService.charge}$</td>
                        {/* <td>{booking.status}</td> */}
                        
                        
                    </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default BookingDataTable;