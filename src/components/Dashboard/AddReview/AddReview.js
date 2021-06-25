import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddReview = () => {
    const [review, setReview] = useState({});
    // const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newReview = { ...review };
        newReview[e.target.name] = e.target.value;
        setReview(newReview);
    }

    // const handleFileChange = (e) => {
    //     const newFile = e.target.files[0];
    //     setFile(newFile);
    // }

    const handleSubmit = (e) => {
        const formData = new FormData()
        console.log(review);
        e.preventDefault()
        // formData.append('file', file);
        formData.append('client', review.clienName);
        formData.append('clientReview', review.clientReview);

        fetch('http://localhost:4200/addAReview', {
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
            <div className="col-md-10 p-4 pr-5 no-gutter" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-success">Add a Review</h5>
                <form onSubmit={handleSubmit} >
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Service Title</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="clienName" placeholder="Client's Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Description</label>
                        <input style={{height: '100px'}} onBlur={handleBlur} type="text" className="form-control" name="clientReview" placeholder="Precious Review" />
                    </div>
                    {/* <div className="form-group">
                        <label htmlFor="service image">Upload a image</label>
                        <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Upload Picture" />
                    </div> */}
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default AddReview;