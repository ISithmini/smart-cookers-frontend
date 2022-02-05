import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProductContext } from "../../Context/ProductContext";
import OneProductDisplay from "../../Components/InventoryComponent/OneProduct/OneProductDisplay";

interface ProductProps {

}

type productporps = {
    product: {
        Pname: string,
        Pdescription: string,
        Price: number,
        qtyAvailable: number,
        id: string,
        img:string
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
            <td>{props.product.Pname}</td>
            <td>{props.product.Pdescription}</td>
            <td>{props.product.Price}</td>
            <td>{props.product.qtyAvailable}</td>
            <td>

                <Link to={`/view-products/id=${props.product.id}`}>
                    
                {/* <button className="btn-dark" onClick={handleClick}>
                    View Product
                </button> */}

                <button className="btn-dark" onClick={() => {
                    <OneProductDisplay />
                    console.log( props.product.id);
                } }>
                    View Product
                </button>
                </Link>

            </td>




        </tr>



    );
}

export default Product;