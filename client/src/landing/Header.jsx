import React, { useState, useEffect } from 'react';

import '../App.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './component.css'
import image from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
    const [isMobile, setIsMobile] = useState(false);

    const toggleMobileNav = () => {
        setIsMobile(!isMobile);
    };
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setScreenWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    return (
        <div >
            {/* {Desktop view start here} */}

            <nav className={`navbar navbar-expand-lg navbar-dark bg-white-opal-9 row ${screenWidth >= 1245 ? 'show' : 'hide'}`} style={{ alignItems: 'center' }}>
                <div className="col-md-2">
                    <Link to='/' >
                        <img src={image} alt="" style={{ width: '15%', }} />
                    </Link>
                </div>
                <div className="col-md-7">
                    {/* Apply Bootstrap utility classes to create  horizontal list */}
                    <ul className="list-unstyled d-flex mb-0">
                        <li className="nav-item mx-5 ">
                            <Link style={{ textDecoration: 'none' }} to="/"> <h5> <strong>Home</strong></h5></Link>
                        </li>
                        <li className="nav-item mx-5">
                            <Link style={{ textDecoration: 'none' }} to="/realEstate"><h5><strong>Real Estates</strong> </h5> </Link>
                        </li>
                        <li className="nav-item mx-5">
                            <Link style={{ textDecoration: 'none' }} to="/user"> <h5> <strong> Jobs </strong> </h5> </Link>
                        </li>
                        <li class="nav-item dropdown mx-5">
                            <span class="nav-item dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" style={{ fontSize: 'larger' }}>
                                <strong> Dropdown link </strong>
                            </span>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" style={{ textDecoration: 'none', padding: '10px' }}>
                                <Link class="dropdown-item" to="#" style={{ textDecoration: 'none' }}>Action</Link>
                                <Link class="dropdown-item" to="#" style={{ textDecoration: 'none' }}>Another action</Link>
                                <Link class="dropdown-item" to="#" style={{ textDecoration: 'none' }}>Something else here</Link>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='col-md-2'>
                    <ul className="list-unstyled d-flex mb-0">
                        <li className="nav-item mx-5 ">
                            <Link style={{ textDecoration: 'none' }} to="/login"> <h5> <strong>Login</strong></h5></Link>
                        </li>
                        <li className="nav-item mx-5">
                            <Link style={{ textDecoration: 'none' }} to="/signup"><h5><strong>Signup</strong> </h5> </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            {/* {Desktop view end here} */}

            {/* {Mobile view start here} */}
            <nav className={`navbar navbar-expand-lg navbar-dark bg-white-opal-9 row ${screenWidth <= 1245 ? 'show' : 'hide'}`} style={{ alignItems: 'center' }}>

                <div className="col-md-7">
                    <Link to='/' >
                        <img src={image} alt="" style={{ width: '15%', }} />
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={toggleMobileNav}
                    >
                        <FontAwesomeIcon icon={faBars} beat style={{ color: '#01011e', float: 'right' }} />
                    </button>
                </div>
                <div className={`${isMobile ? ' show' : ' hide'}`}>
                    <div className={`navbar-nav w-100`} style={{ marginTop: '2%' }}>
                        <ul className="list-unstyled mb-0">
                            <li className={`nav-item mx-5${isMobile ? ' mb-2' : ''}`}>
                                <Link style={{ textDecoration: 'none' }} to="/">
                                    <h5><strong>Home</strong></h5>
                                </Link>
                            </li>
                            <li className={`nav-item mx-5${isMobile ? ' mb-2' : ''}`}>
                                <Link style={{ textDecoration: 'none' }} to="/countries">
                                    <h5><strong>Real Estates</strong></h5>
                                </Link>
                            </li>
                            <li className={`nav-item mx-5${isMobile ? ' mb-2' : ''}`}>
                                <Link style={{ textDecoration: 'none' }} to="/user">
                                    <h5><strong>Jobs</strong></h5>
                                </Link>
                            </li>
                            {/* Dropdown link */}
                            <li className={`nav-item dropdown mx-5${isMobile ? ' mb-2' : ''}`}>
                                <span className="nav-item dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" style={{ fontSize: 'larger' }}>
                                    <strong>Dropdown link</strong>
                                </span>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" style={{ textDecoration: 'none', padding: '10px' }}>
                                    <Link className="dropdown-item" to="#" style={{ textDecoration: 'none' }}>Action</Link>
                                    <Link className="dropdown-item" to="#" style={{ textDecoration: 'none' }}>Another action</Link>
                                    <Link className="dropdown-item" to="#" style={{ textDecoration: 'none' }}>Something else here</Link>
                                </div>
                            </li>
                            <li className={`nav-item mx-5${isMobile ? ' mb-2' : ''}`}>
                                <Link style={{ textDecoration: 'none' }} to="/login">
                                    <h5><strong>Login</strong></h5>
                                </Link>
                            </li>
                            <li className={`nav-item mx-5 ${isMobile ? ' mb-2' : ''}`}>
                                <Link style={{ textDecoration: 'none' }} to="/signup">
                                    <h5><strong>Signup</strong></h5>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>
            {/* {Mobile view end here} */}

        </div>
    );
};

export default Header;

