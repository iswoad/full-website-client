import React from 'react';

const Review = (props) => {
    const {clientN, clientsReview} = props.Rev;
    return (
        <div className="card shadow-sm mx-3">
            <div className="card-body">
                <p className="card-text text-center">{clientsReview}</p>
            </div>
            <div className="card-footer d-flex  align-items-center">
                {/* <img className="mx-3" src={img} alt="" width="60"/> */}
                <div>
                    <h6 style = {{color: "#FFC513"}}>{clientN}</h6>
                    <p className="m-0">NY USA </p>
                </div>
            </div>
       </div>
    );
};

export default Review;