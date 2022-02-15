import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProductContext } from "../../Context/ProductContext";
import OneProductDisplay from "../../Components/InventoryComponent/OneProduct/OneProductDisplay";

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

    //let ppid = props.product.id;
    const navigate = useNavigate();

    // const handleClick = () => {
    //     <OneProductDisplay />
    // }

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
                    <OneProductDisplay />
                } }>
                    View Product
                </button>
                </Link>

            </td>




        </tr>



    );
}

export default Product;