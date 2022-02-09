import './HomeComponent.css';
import React, { useState, useEffect, useContext } from 'react';
import ProductDisplay from '../../Containers/HomeContainer/ProductDisplay';
import { Link } from 'react-router-dom';
import { getProductsInOutlet } from '../../Services/Api/ProductService/ProductApi';
import { getProducts } from '../../Services/Api/ProductService/ProductApi'
import { AuthContext } from '../../Context/AuthContext';
import { CardGroup } from 'react-bootstrap';


interface HomeComponentProps { }

const HomeComponent: React.FunctionComponent<HomeComponentProps> = () => {


    const [click, setClick] = useState(false);
    const [outlet, setoutlet] = useState("Colombo");
    const [products, setproducts] = useState([]);

    const { user, dispatch } = useContext(AuthContext);


    const handleOutlet = () => {
        getProductsInOutlet(outlet).then((res) => {
            setproducts(res.data)
            console.log(res.data);

        })
    }

    useEffect(() => {
        getProducts().then((res: any) => {
            setproducts(res.data);
        })
            .catch(err => {
                console.log(err);
            });
    }, []);


    return (
        <>
        <div className="home-section">
        <div className="home-container">
                <div className="text-center"><h2>Sri Lanka's Best Kitchen Appliances Provider</h2></div>
                <div className="home-description">
                    <p>Welcome to the largest kitchen applicances provider in Sri Lanka where you can get the best products with best quality!..
                        <br /> Click below to select the outlet nearest to your home and search for products.
                    </p>
                </div>
                <div className="form-container">
                        <label className="form-label">
                            <b>Select an Outlet</b>
                        </label>
                        <select className="form-select" defaultValue={'DEFAULT'} onChange={(e) => {
                            setoutlet(e.target.value);
                            console.log(outlet)
                            handleOutlet();
                        }}>
                            <option value='DEFAULT' disabled> Choose an outlet</option>
                            <option value='Gampaha'>Colombo</option>
                            <option value='Kalutara' >Gampaha</option>
                            <option value='Galle'>Galle</option>
                            <option value='Kalutara'>Kalutara</option>
                        </select>
                </div>

                <div className="product-display row xs-1 md-2 g-4">
                    {products.map((item, index) => {
                        return (
                            <ProductDisplay product={item} key={index} />
                        )
                    })}

                </div>
                <div className='footer-container'>
                    <section className='footer-subscription'>
                        <p className='footer-subscription-heading'>
                            Join with us to get the Best Deals..!
                        </p>
                        <Link to='/login' className="footer-links">
                            {!user &&
                                <button className="btn">Log In </button>
                            }
                        </Link>
                    </section>
                    <div className='footer-qoute'>
                        <p className="text-muted m-0"><small>
                            ©️ SmartCookers . All rights reserved.

                        </small></p>
                    </div>
                </div>



            </div>

        </div>
           
        </>
    );
}

export default HomeComponent;