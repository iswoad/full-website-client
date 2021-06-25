import React from 'react';
import wilson from '../../../images/willson.png';
import ema from '../../../images/ema.png';
import aliza from '../../../images/aliza.png';
import Review from '../Review/Review';
import './Reviews.css'

const ReviewData = [
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Wilson Harry',
        from : 'California',
        img : wilson
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Ema Gomez',
        from : 'California',
        img : ema
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Aliza Farari',
        from : 'California',
        img : aliza
    }
]
const Reviews = () => {
    return (
       <section className="Reviews my-5 py-5">
           <div className="container">
               <div className="section-header">
                   <h5 style = {{color: "#FFC513"}} className="text-uppercase">Reviews</h5>
                   <h1>What Our Clients <br/> Say </h1>
               </div>
               <div className="card-deck mt-5 d-flex">
                    {
                        ReviewData.map(Rev => <Review Rev={Rev} key={Review.name}></Review>)
                    }
                </div>
           </div>
       </section>
    );
};

export default Reviews;