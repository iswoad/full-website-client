import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import navLogo from '../../../images/logo.png';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <a className = "navbar-brand" href="/home"><img src={navLogo} alt="" /></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item active">
                        <Link style = {{color: 'white'}} className="nav-link ms-5" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <HashLink style = {{color: 'white'}}  className="nav-link ms-5" smooth to="#whyUs">Why Us</HashLink>
                    </li>
                    <li className="nav-item">
                        <HashLink style = {{color: 'white'}} className="nav-link ms-5" smooth to="#services">Services</HashLink>
                    </li>
                    <li className="nav-item">
                        <Link style = {{color: 'white'}} className="nav-link ms-5" to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <HashLink style = {{color: 'white'}} className="nav-link ms-5" smooth to="#blogs">Blogs</HashLink>
                    </li>
                    <li className="nav-item">
                        <Link style = {{color: 'white'}} className="nav-link ms-5" to="/login">Login</Link>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;