import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneProduct } from "../../../Services/Api/ProductService/ProductApi";

interface DetailedViewProps {
    
}

type productprops = {
        createdAt: string,
description: string,
image: string
price: number
product_id: number
product_name: string
qtyAvailable: number
}
 
const DetailedView: React.FunctionComponent<DetailedViewProps> = () => {

    const {id}= useParams();
    const [product, setproduct] = useState<productprops| null>(null)


    useEffect(() => {
        getOneProduct(id).then((res) => {
            setproduct(res.data.data[0])
        })

    }, [])

    

    return ( 
        <div className="profile">
            <div>
            <h5 className="title text-white">Product Profile</h5> <br/>
                <div className="profile-container">
                    <div className="row">
                        <div className="col-sm-4 text-center">
                            <h6>Product Name </h6>
                        </div>
                        <div className="col-sm-8">
                            <h6 className="text-muted">{product?.product_name}</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 text-center">
                            <h6>Product Description</h6>
                        </div>
                        <div className="col-sm-8 ">
                            <h6 className="text-muted">{product?.description}</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 text-center">
                            <h6>Price</h6>
                        </div>
                        <div className="col-sm-8 ">
                            <h6 className="text-muted">Rs.{product?.price}</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 text-center">
                            <h6>Quantity Available</h6>
                        </div>
                        <div className="col-sm-8 ">
                            <h6 className="text-muted">{product?.qtyAvailable}</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 text-center">
                            <h6>Photo</h6>
                        </div>
                        <div className="col-sm-8 ">
                            <img src={product?.image} className="w-25 p-3 h-50" alt="image" />
                        </div>
                    </div>
    
                </div>
            </div>
        </div>
     );
}
 
export default DetailedView;