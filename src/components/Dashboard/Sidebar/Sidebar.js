import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faUserPlus, faShoppingCart, faShoppingBasket, faCommentAlt, faShoppingBag, faPlus } from '@fortawesome/free-solid-svg-icons';
// import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://obscure-coast-47733.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])

    return (
        <div className="row no-gutter sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                { !isAdmin ? <div>
                    <li>
                        <Link to="/serviceCheckout" className="text-white">
                            <FontAwesomeIcon icon={faShoppingCart} /> <span>Book Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/bookingList" className="text-white">
                            <FontAwesomeIcon icon={faShoppingBasket} /> <span>Booking List</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/addReview" className="text-white">
                            <FontAwesomeIcon icon={faCommentAlt} /> <span>Add Review</span>
                        </Link>
                    </li>
                </div>
                 :
                    <div>
                        <li>
                            <Link to="/allBookings" className="text-white">
                                <FontAwesomeIcon icon={faShoppingBag} /> <span>All Bookings</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/addServices" className="text-white">
                                <FontAwesomeIcon icon={faPlus} /> <span>Add Services</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/makeAdmin" className="text-white" >
                                <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="text-white" >
                                <FontAwesomeIcon icon={faCog} /> <span>Manage Services</span>
                            </Link>
                        </li>
                    </div>
}
                
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;