import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const noNamed = [
        {name: "FREE Loaner Cars" , link: "/Loaner"},
        {name: "FREE Shuttle Service" , link: "/car-service"},
        {name: "General Auto Repair" , link: "/car-service"},
        
    ]
    const ourAddress = [
        {name: "New York - 101010 Hudson" , link: "//google.com/map"},
        {name: "Yards" , link: "//google.com/map"},
       
    ]
    const specialReq = [
        {name: "Transmission Repair & Replacement" , link: "/car-service"},
        {name: "Fuel System Repair" , link: "/checkup"},
        {name: "Exhaust System Repair" , link: "/car-service"},
        {name: "Engine Cooling System Maintenance" , link: "/car-service"},
        {name: "Electrical Diagnostics" , link: "/car-service"}
    ]
    const services = [
        {name: "Starting and Charging Repair" , link: "/car-service"},
        {name: "Wheel Alignment" , link: "/checkup"},
        {name: "Computer Diagnostic Testing" , link: "/car-service"},
        {name: "Brake Repair and Replacement" , link: "/car-service"},
        {name: "Check Up" , link: "/checkup"}
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"General"} menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="Parts Diagnosis" menuItems={services}/>
                    <FooterCol key={3} menuTitle="Special Services" menuItems={specialReq}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-dark">+25454548966</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;