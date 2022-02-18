import './HomeComponent.css';
import React, { useState, useEffect, useContext } from 'react';
import ProductDisplay from '../../Containers/HomeContainer/ProductDisplay';
import { Link } from 'react-router-dom';
import { getAllOutlets, getProductsInOutlet } from '../../Services/Api/ProductService/ProductApi';
import { getProducts } from '../../Services/Api/ProductService/ProductApi'
import { AuthContext } from '../../Context/AuthContext';
import { CardGroup } from 'react-bootstrap';


interface HomeComponentProps { }

type outlet = {
    location: string,
    outlet_id: string
}[]

const HomeComponent: React.FunctionComponent<outlet> = () => {


    //const [click, setClick] = useState(false);
    const [outletlocation, setoutletlocation] = useState("");
    const [products, setproducts] = useState([]);
    const [outletproducts, setoutletproducts] = useState([]);
    const [outletsList, setoutletsList] = useState<outlet>([]);
    const [click, setclick] = useState(false);

    const { user, dispatch } = useContext(AuthContext);

    //let sortedList = outletsList.sort(outletsList.location);


    const handleOutlet = (selectedOutlet: string) => {
        //console.log(selectedOutlet);
        getProductsInOutlet(selectedOutlet).then((res) => {
            setoutletproducts(res.data.data)
            setclick(true);
        })
    }

    useEffect(() => {
        getAllOutlets().then((res) => {
            setoutletsList(res.data.data);
        })
        getProducts().then((res: any) => {
            setproducts(res.data.data);
            //console.log(res.data.data)


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
                        <select className="form-select" onChange={(e) => {
                            handleOutlet(e.target.value);
                        }}>
                            {outletsList.map(outlet => {
                                return <option value={outlet.outlet_id}> {outlet.location}
                                </option>
                            })}
                        </select>
                    </div>
                    <div className="product-display row xs-1 md-2 g-4">
                        {!click && products.map((item, index) => {
                            return (
                                <ProductDisplay product_id={item} key={index} />
                            )
                        })}
                        {click && outletproducts.map((item, index) => {
                            return (
                                <ProductDisplay product_id={item} key={index} />
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