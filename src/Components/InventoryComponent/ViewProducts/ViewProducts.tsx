import { useEffect, useState } from "react";
import { getProducts } from '../../../Services/Api/MockApi';
import './ViewProducts.css';

interface ViewProductsProps {
    // Pname: string,
    // Pdescription: string,
    // Price: number,
    // qtyAvailable: number,
}



const ViewProducts: React.FunctionComponent<ViewProductsProps> = () => {

    // type obj = {
    //     Pname: string,
    //     Pdescription: string,
    //     Price: number,
    //     qtyAvailable: number,

    // };

    const [products, setProducts] = useState([]);


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
                        </tr>
                    </thead>
                    {/* {products.map((product) => console.log(product))} */}
                    {products.map((product,) => {
                        <tbody key={product.id}>
                            <tr>
                                <td>{product.Pname}</td>
                                <td>{product.Pdescription}</td>
                                <td>{product.Price}</td>
                                <td>{product.qtyAvailable}</td>
                            </tr>

                        </tbody>

                    })}

                </table>

            </div>

        </>
    );
}

export default ViewProducts;