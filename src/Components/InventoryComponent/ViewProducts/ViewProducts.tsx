import { useContext, useEffect, useState } from "react";
import { getProducts } from '../../../Services/Api/MockApi';
import './ViewProducts.css';
import Product from '../ViewProducts/Product';
import { ProductContext } from "../../../Context/ProductContext";

interface ViewProductsProps {
}



const ViewProducts: React.FunctionComponent<ViewProductsProps> = () => {

    // type obj = {
    //     Pname: string,
    //     Pdescription: string,
    //     Price: number,
    //     qtyAvailable: number,

    // };

    const [products, setProducts] = useState([]);

    const product = useContext(ProductContext);


    useEffect(() => {
        getProducts().then((res: any) => {
            setProducts(res.data);
            console.log(products);
        })
            .catch(err => {
                console.log(err);
            });

    }, []);



    return (
        <>
            <div className="products-container">
                <table className="table table-striped mt-5">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">Product Name</th>
                            <th scope="col"> Description</th>
                            <th scope="col">Price (per 1 Qty)</th>
                            <th scope="col"> Quantity Available</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((item, index) => {
                            return (
                                <Product product={item} key={index} />
                            )
                        })}
                    </tbody>




                </table>

            </div>

        </>
    );
}

export default ViewProducts;