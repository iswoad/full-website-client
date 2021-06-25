import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import FeaturedService from '../FeatureSection/FeatureSection';
import Header from '../Header/Header';
import Reviews from '../Reviews/Reviews';
import Services from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <FeaturedService></FeaturedService>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;