import React from 'react';
import Navbar from '../../Shared/NavBar/NavBar';
import HeaderMain from '../HeaderMain/HeaderMain';
import './Header.css';

const Header = () => {
    return (
        <div class = "header-container">
            <Navbar />
            <HeaderMain />
        </div>
    );
};

export default Header;