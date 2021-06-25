// import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faUserPlus, faShoppingCart, faShoppingBasket, faCommentAlt, faShoppingBag, faPlus } from '@fortawesome/free-solid-svg-icons';
// import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
// import { UserContext } from '../../../App';

const Sidebar = () => {
    // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // const [isDoctor, setIsDoctor] = useState(false);

    // useEffect(() => {
    //     fetch('https://salty-plateau-71286.herokuapp.com/isDoctor', {
    //         method: 'POST',
    //         headers: { 'content-type': 'application/json' },
    //         body: JSON.stringify({ email: loggedInUser.email })
    //     })
    //         .then(res => res.json())
    //         .then(data => setIsDoctor(data));
    // }, [])

    return (
        <div className="row no-gutter sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
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
                <div>
                    <li>
                        <Link to="/addReview" className="text-white">
                            <FontAwesomeIcon icon={faCommentAlt} /> <span>Add Review</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#" className="text-white">
                            <FontAwesomeIcon icon={faShoppingBag} /> <span>All Bookings</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addServices" className="text-white">
                            <FontAwesomeIcon icon={faPlus} /> <span>Add Services</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#" className="text-white" >
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#" className="text-white" >
                            <FontAwesomeIcon icon={faCog} /> <span>Manage Services</span>
                        </Link>
                    </li>
                </div>
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;