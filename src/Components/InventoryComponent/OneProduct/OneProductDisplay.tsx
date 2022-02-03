import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {ProductContext} from '../../../Context/ProductContext';
import ProductDisplay from "../../HomeComponent/ProductDisplay";
import { getProd } from "../../../Services/Api/MockApi";;



interface OneProductDisplayProps {
    

}

// type prod = {
//         Pname: String,
//         Pdescription: String,
//         Price: Number,
//         qtyAvailable: Number,
//         id: String
    
// }

const OneProductDisplay: React.FunctionComponent<OneProductDisplayProps> = () => {
    const [user, setuser] = useState(false);


    const [prod, setProd] = useState([]);

    let {id} = useParams();
    
    //const product = useContext(ProductContext);

    console.log(id);
    

    useEffect(() => {
        //getProd('5');
        getProd(id)
        .then((res: any) => {
            setProd(res.data);
            console.log(res.data);
        })
            .catch(err => {
                console.log(err);
            });

    }, []);

    


    //console.log(prod.id);
    

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
                            <h6 className="text-muted">{prod.Pname}</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 text-center">
                            <h6>Product Description</h6>
                        </div>
                        <div className="col-sm-8 ">
                            <h6 className="text-muted"> {prod.Pdescription}</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 text-center">
                            <h6>Price</h6>
                        </div>
                        <div className="col-sm-8 ">
                            <h6 className="text-muted">{prod.Price}</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 text-center">
                            <h6>Quantity Available</h6>
                        </div>
                        <div className="col-sm-8 ">
                            <h6 className="text-muted">{prod.qtyAvailable}</h6>
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