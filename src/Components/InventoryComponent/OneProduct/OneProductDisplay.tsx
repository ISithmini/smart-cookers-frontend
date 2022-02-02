import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {ProductContext} from '../../../Context/ProductContext';
import ProductDisplay from "../../HomeComponent/ProductDisplay";
import { getProd } from "../../../Services/Api/MockApi";

interface OneProductDisplayProps {

}


const OneProductDisplay: React.FunctionComponent<OneProductDisplayProps> = (id) => {
    const [user, setuser] = useState(false);
    const [prod, setProd] = useState([]);
    
    const product = useContext(ProductContext);

    useEffect(() => {
        getProd(id).then((res: any) => {
            setProd(res.data);
            console.log(prod);
        })
            .catch(err => {
                console.log(err);
            });

    }, []);

    


    console.log(product);
    

    return (
        <div className="profile">
            <div>
                <h6 className="title text-white mb-4">Product Profile</h6>
                <div className="profile-container">
                    <div className="row ">
                        <div className="col-sm-4 text-center">
                            <h6>Product Name</h6>
                        </div>
                        <div className="col-sm-8">
                            <h6 className="text-muted">{product.product.Pname}</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 text-center">
                            <h6>Product Description</h6>
                        </div>
                        <div className="col-sm-8 ">
                            <h6 className="text-muted"> {product.product.Pdescription}</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 text-center">
                            <h6>Price</h6>
                        </div>
                        <div className="col-sm-8 ">
                            <h6 className="text-muted">{product.product.Price}</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 text-center">
                            <h6>Quantity Available</h6>
                        </div>
                        <div className="col-sm-8 ">
                            <h6 className="text-muted">{product.product.qtyAvailable}</h6>
                        </div>
                    </div>

                </div>
                {user && <div className="row">
                    <div className="col-sm-8"></div>
                    <div className="col-sm-4 ">
                        <Link to='/order' className='btn-edit'>
                            <button className="btn">Proceed Order</button>
                        </Link>


                    </div>
                </div>}

            </div>
        </div>
    );
}

export default OneProductDisplay;