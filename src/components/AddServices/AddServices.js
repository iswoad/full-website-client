import React, { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const AddServices = () => {
    const [serviceInfo, setServiceInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newServiceInfo = { ...serviceInfo };
        newServiceInfo[e.target.name] = e.target.value;
        setServiceInfo(newServiceInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (e) => {
        const formData = new FormData()
        console.log(serviceInfo);
        e.preventDefault()
        formData.append('file', file);
        formData.append('title', serviceInfo.title);
        formData.append('description', serviceInfo.description);
        formData.append('charge', serviceInfo.charge);

        fetch('https://obscure-coast-47733.herokuapp.com/addAService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }

    

    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5 no-gutter" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" , height: '100vh'}}>
                <h5 className="text-primary">Add a New Service</h5>
                <form onSubmit={handleSubmit} >
                    <div className="form-group">
                        <label htmlFor="exampleInputServiceTitle">Service Title</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="title" placeholder="Service Title" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputDescription">Description</label>
                        <input style={{height: '100px'}} onBlur={handleBlur} type="text" className="form-control" name="description" placeholder="" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputCharge">Service Charge</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="charge" placeholder="Service Charge" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="serviceImage">Upload a image</label>
                        <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Upload Picture" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default AddServices;