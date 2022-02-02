import { Link, Route } from "react-router-dom";
import OneProductDisplay from '../OneProduct/OneProductDisplay';

interface ProductProps {

}

type productporps = {
    product: {
        Pname: string,
        Pdescription: string,
        Price: number,
        qtyAvailable: number,
        id: String
    }


};

const Product: React.FunctionComponent<productporps> = (props) => {

    return (

        <tr >

            <td>{props.product.Pname}</td>
            <td>{props.product.Pdescription}</td>
            <td>{props.product.Price}</td>
            <td>{props.product.qtyAvailable}</td>
            <td>
                <Route path={`/view-products/id=${props.product.id}`} element={<OneProductDisplay children={props.product.id} />}>
                    <button className="btn-dark">View Product</button>
                </Route>
            </td>




        </tr>


    );
}

export default Product;