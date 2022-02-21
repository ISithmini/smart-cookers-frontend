import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import DetailedView from "../../Components/InventoryComponent/ViewProducts/DetailedView";
import { ProductContext } from "../../Context/ProductContext";

interface ProductProps {

}

type productporps = {
    product: {
        product_name: string,
        description: string,
        price: number,
        qtyAvailable: number,
        product_id: number,
        image: string

    }
};

const Product: React.FunctionComponent<productporps> = (props) => {

    const {product} = useContext(ProductContext);
    const navigate = useNavigate();

    

    return (

        <tr >
            <td>{props.product.product_name}</td>
            <td>{props.product.description}</td>
            <td>{props.product.price}</td>
            <td>{props.product.qtyAvailable}</td>
            <td>

                <Link to={`/view-products/id=${props.product.product_id}`}>
                    
                {/* <button className="btn-dark" onClick={handleClick}>
                    View Product
                </button> */}

                <button className="btn-dark" onClick={() => {
                    <DetailedView/>
                } }>
                    View Product
                </button>
                </Link>

            </td>




        </tr>



    );
}

export default Product;