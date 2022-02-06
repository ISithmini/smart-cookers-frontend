import './HomeComponent.css';
import Dropdown from 'react-bootstrap/Dropdown';
import React, { useState, useEffect } from 'react';
import ProductDisplay from '../../Containers/HomeContainer/ProductDisplay';
import { Link } from 'react-router-dom';



interface HomeComponentProps { }

const HomeComponent: React.FunctionComponent<HomeComponentProps> = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(true);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <div className="home-container">
                <h2>Sri Lanka's Best Kitchen Appliances Provider</h2>
                <div className="home-description">
                    <p>Welcome to the largest kitchen applicances provider in Sri Lanka where you can get the best products with best quality!..
                        <br /> Click below to select the outlet nearest to your home and search for products.
                    </p>
                </div>
                <div className="form-group">
                    <label className="form-label">
                        <b>Select an Outlet &nbsp;</b>
                    </label>
                    <select className="form-control" defaultValue={'DEFAULT'}>
                        <option value='DEFAULT' disabled> Choose an outlet</option>
                        <option value='colombo'>Colombo</option>
                        <option value='gampaha' >Gampaha</option>
                        <option  value='galle'>Galle</option>
                        <option value='kalutara'>Kalutara</option>
                    </select>
                </div>
                <ProductDisplay />
                <div className='footer-container'>
                    <section className='footer-subscription'>
                        <p className='footer-subscription-heading'>
                            Join with us to get the Best Deals..!
                        </p>
                        <Link to='/login' className="footer-links">
                            <button className="btn">Log In </button>
                        </Link>
                    </section>
                    <div className='footer-qoute'>
                        <p className="text-muted m-0"><small>
                            ©️ SmartCookers . All rights reserved.

                        </small></p>
                    </div>
                </div>



            </div>
        </>
    );
}

export default HomeComponent;