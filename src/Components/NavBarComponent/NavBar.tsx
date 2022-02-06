import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import './NavBar.css';


const NavBar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    })

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className="navbar-container">
                    <Link to="/" className="navbar-title" onClick={closeMobileMenu}>
                        SMARTCookers
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/inventory" className="nav-links-mobile" onClick={closeMobileMenu}>
                                Inventory
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-links-mobile" onClick={closeMobileMenu}>
                                Log In
                            </Link>
                        </li>
                    </ul>
                    <Link to="/inventory" className="nav-links">
                        Inventory
                    </Link>
                    <Link to='/login' className="nav-links">
                        {button && <button className="btn">Log In </button>}
                    </Link>
                </div>

            </nav>

        </>


    );
}

export default NavBar;