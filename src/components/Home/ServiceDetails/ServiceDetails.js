import React from 'react';
import { useHistory } from 'react-router-dom';
import './ServiceDetails.css'

const ServiceDetails = (props) => {
    const { image, title, description, _id } = props.service;
    console.log(props);
    const history = useHistory()

    const handleServiceSelect = (id) =>{
        history.push(`/serviceCheckout/${id}`)
    }


    return (
        <div className = "col-md-4 text-center sDetails">
            <img style={{height: '200px'}} src={`data:image/png;base64,${image.img}`} alt = "services"/>
            <h5 className = "mt-3 mb-3">{title}</h5>
            <hr style = {{border: '5px solid yellow', width: '30%', margin: '5px auto'}} />
            <p className = "text-secondary">{description}</p>
            <button onClick = {() => handleServiceSelect(_id)} className="btn btn-dark">Book Service</button>
        </div>
    );
};

export default ServiceDetails;