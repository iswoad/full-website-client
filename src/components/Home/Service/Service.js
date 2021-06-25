import React, { useEffect, useState } from 'react';
// import commonRepair from '../../../images/most common repairs.jpg';
// import brakeService from '../../../images/brake service.jpg';
// import maintenance from '../../../images/preventative maintenance.jpg';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
// const serviceData = [
//     {
//         name: 'Common Repair',
//         img: commonRepair
//     },
//     {
//         name: 'Brake Repair & Services',
//         img: brakeService
//     },
//     {
//         name: 'Preventative Maintenance',
//         img: maintenance
//     }
// ]

const Services = () => {
    const [services, setServices] = useState([])
    useEffect( () => {
        fetch('http://localhost:4200/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return (
        <section>
            <div className ="text-center mt-5">
                <h1 style = {{color: '#3A3A3A'}}><strong>WHAT WE DO</strong></h1>
                <h3 className = 'text-secondary mt-5'>We offer full service auto repair and maintenance</h3>
            </div>
            <div className="d-flex justify-content-center" >
                <div className = "row w-75 mt-5 pt-5">
                    {
                        services.map(service => <ServiceDetails service ={service}></ServiceDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;