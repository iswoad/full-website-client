import React from 'react';
import featured from '../../../images/qa section.jpg'
import stats from '../../../images/stats.JPG'
const FeaturedService = () => {
    return (
        <section className="features-service pb-0 pb-md-5 my-5 py-5" id="whyUs">
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-5 mb-4 m-md-0">
                        <img style = {{height: '520px'}}className="img-fluid" src={featured} alt=""/>
                    </div>
                    <div className="col-md-7 align-self-center">
                        <p style = {{fontSize: '2em'}}><strong>Quality Service and Customer <br /><span style = {{color: "#FFC513"}}>Satisfaction</span></strong></p>
                        <p className="text-secondary">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nisi explicabo odio quisquam, quibusdam deserunt, corporis facilis suscipit laudantium vitae facere porro debitis earum. Totam, ipsa tempora? Facere labore soluta, libero deleniti tempora nobis, repellendus totam cumque eum odio possimus consequatur minus quisquam fugiat explicabo sit consequuntur laborum blanditiis architecto.
                            <img src={stats} alt="" />
                        </p>
                        <button className="btn btn-dark">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;