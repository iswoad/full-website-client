import React from 'react';

const Review = (props) => {
    const {quote,name,from ,img} = props.Rev;
    return (
        <div className="card shadow-sm mx-3">
            <div className="card-body">
                <p className="card-text text-center">{quote}</p>
            </div>
            <div className="card-footer d-flex  align-items-center">
                <img className="mx-3" src={img} alt="" width="60"/>
                <div>
                    <h6 style = {{color: "#FFC513"}}>{name}</h6>
                    <p className="m-0">{from}</p>
                </div>
            </div>
       </div>
    );
};

export default Review;