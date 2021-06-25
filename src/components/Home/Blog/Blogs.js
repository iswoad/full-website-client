import React from 'react';
import BlogPost from '../BlogPost/BlogPost';
import tony from '../../../images/bloger.png';
import './Blogs.css'


const blogData = [
    {
        title : 'Troubleshooting Anti-Lock Brakes',
        description : 'The brakes on your vehicle work hard every time you drive. When you slow down in traffic, stop at a red light, or must maneuver a quick hard stop because of an obstruction in the road your brakes are at work. Over time the use of your brakes causes normal wear and tear, which can […]',
        author:'Mr.Mechanic',
        authorImg : tony,
        date : '23 April 2019'
    },
    {
        title : 'ABS has become pretty much standard equipment on most vehicles',
        description : 'This process repeats many times per second until the vehicle stops or you lift your foot off the brake pedal. The ABS computer does a power-on self test every time you cycle the ignition.',
        author:'Mr.Mechanic',
        authorImg : tony,
        date : '23 April 2019'
    },
    {
        title : 'How to Diagnose Car Problems If You Don’t Know Much About Cars',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Mr.Mechanic',
        authorImg : tony,
        date : '23 April 2019'
    },
]

const Blogs = () => {
    return (
       <section className="blogs my-5" id="blogs">
           <div className="container">
               <div className="section-header text-center">
                    <h5 className="text-primary text-uppercase">our blog</h5>
                    <h1>From Our Blog News</h1>
               </div>
               <div className="card-deck mt-5">
                    {
                        blogData.map(blog => <BlogPost blog={blog} key={blog.title}/>)
                    }
               </div>
           </div>
       </section>
    );
};

export default Blogs;