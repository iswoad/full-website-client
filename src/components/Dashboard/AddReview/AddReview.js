import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddReview = () => {
    const [review, setReview] = useState({});
    const handleBlur = e => {
        const newReview = { ...review };
        newReview[e.target.name] = e.target.value;
        setReview(newReview);
    }

  

    const handleSubmit = (e) => {
        const formData = new FormData()
        console.log(review);
 
        formData.append('client', review.clientName);
        formData.append('clientReview', review.clientReview);

        fetch('http://localhost:4200/addAReview', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if(data){
                    alert('Thanks for giving review');
                }
            })
            .catch(error => {
                console.error(error)
            })
    }

    

    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5 no-gutter" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" , height: '100vh' }}>
                <h5 className="text-success">Add a Review</h5>
                <form onSubmit={handleSubmit} >
                    <div className="form-group">
                        <label htmlFor="clientName">Client Name</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="clientName" placeholder="Client's Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Description</label>
                        <input style={{height: '100px'}} onBlur={handleBlur} type="text" className="form-control" name="clientReview" placeholder="Precious Review" />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default AddReview;