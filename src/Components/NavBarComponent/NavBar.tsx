import React, { useState } from 'react';
import { Link, NavLink, Route } from "react-router-dom";
import Home from '../../Containers/Home'
import './NavBar.css';


const NavBar = () => {

    return (
        <div className="navbar-stick" >
            <Link to="/about">Smart Cookers</Link>
        </div>


    );
}

export default NavBar;