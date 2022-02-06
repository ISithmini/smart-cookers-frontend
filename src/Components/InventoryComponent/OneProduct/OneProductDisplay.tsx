import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductContext } from '../../../Context/ProductContext';
import ProductDisplay from "../../../Containers/HomeContainer/ProductDisplay";
import { getOneProduct } from '../../../Services/Api/ProductService/ProductApi'
import '../OneProduct/OneProductDisplay.css';


interface OneProductDisplayProps {
}

type prod = {
    Pname: string,
    Pdescription: string,
    Price: Number,
    qtyAvailable: Number,
    id: string,
    image: string

}

const OneProductDisplay: React.FunctionComponent<OneProductDisplayProps> = () => {
    const [user, setuser] = useState(true);


    const [prod, setProd] = useState<prod | null>(null);

    let { id } = useParams();

    //const product = useContext(ProductContext);

    console.log(id);


    useEffect(() => {
        //getProd('5');
        getOneProduct(id)
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
                            <h6 className="text-muted">{prod?.Pname}</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 text-center">
                            <h6>Product Description</h6>
                        </div>
                        <div className="col-sm-8 ">
                            <h6 className="text-muted"> {prod?.Pdescription}</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 text-center">
                            <h6>Price</h6>
                        </div>
                        <div className="col-sm-8 ">
                            <h6 className="text-muted">{prod?.Price}</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 text-center">
                            <h6>Quantity Available</h6>
                        </div>
                        <div className="col-sm-8 ">
                            <h6 className="text-muted">{prod?.qtyAvailable}</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 text-center">
                            <h6>Photo</h6>
                        </div>
                        <div className="col-sm-8 ">
                            <img src={prod?.image} className="w-25 p-3 h-50" />
                        </div>
                    </div>

                </div>
                {user && <div className="row">
                    <div className="col-sm-8"></div>
                    <div className="col-sm-4 ">
                        <Link to='/order' >
                            <button className='btn-edit'>Proceed Order</button>
                        </Link>


                    </div>
                </div>}

            </div>
        </div>
    );
}

export default OneProductDisplay;