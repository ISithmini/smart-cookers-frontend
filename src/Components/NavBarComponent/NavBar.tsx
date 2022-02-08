import React, { useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import './NavBar.css';
import { AuthContext } from '../../Context/AuthContext';
import { logOut } from '../../Services/Api/UserServices/UserApi';


const NavBar = () => {
    const { user, dispatch } = useContext(AuthContext);
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

    const handleLogin = async () => {
        await logOut().then((res) => {
            //console.log(res);
            dispatch({ type: "REMOVE_USER", user: "" });
        });
    };

    const renderLoginButton = () => {
        if (!user) {
            return (
                <li className="menu-item" onClick={closeMobileMenu}>
                    <Link className="nav-menu-link" to="/Login">
                    <button className="button">Log In </button>
                    </Link>
                </li>
            );
        } else {
            return (
                <li className="menu-item" onClick={handleLogin} >
                    <Link className="nav-menu-link" to="/" >
                    <button className="button">Log Out</button>
                    </Link>
                </li>
            );
        }
    };

    const renderProfile = () => {
        if (user) {
            return (
                <li className="menu-item" onClick={closeMobileMenu}>
                    <Link className="nav-menu-link" to="/profile">
                        Profile
                    </Link>
                </li>
            );
        } else {
            return <span></span>;
        }
    };

    const renderInventoryButton = () => {
        if (user) {
            if(user.role=='admin' ||user.role=='inventory'){
                return (
                    <li className="menu-item" onClick={closeMobileMenu}>
                        <Link className="nav-menu-link" to="/inventory">
                            Inventory
                        </Link>
                    </li>
                    
                );
            }
            
        } else {
            return <span></span>;
        }
    };

    const renderSalesButton = () => {
        if (user) {
            if(user.role=='admin'||user.role=='sales' ){
                return (
                    <li className="menu-item" onClick={closeMobileMenu}>
                        <Link className="nav-menu-link" to="/sales">
                            Sales
                        </Link>
                    </li>
                    
                );
            }
            
        } else {
            return <span></span>;
        }
    };


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
                    <div className={click ? 'nav-menu active' : 'nav-menu'}>
                        <ul className="menu-button-section" >
                            {renderProfile()}
                            {renderInventoryButton()}
                            {renderSalesButton()}
                            {renderLoginButton()}           
                        </ul>
                    </div>
                </div>
            </nav>

        </>


    );
}

export default NavBar;