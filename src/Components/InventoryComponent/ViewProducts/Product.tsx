interface ProductProps {

}

type productporps = {
    product: {
        Pname: string,
        Pdescription: string,
        Price: number,
        qtyAvailable: number,

    }


};

const Product: React.FunctionComponent<productporps> = (props) => {

    return (
        <tr >
            <td>{props.product.Pname}</td>
            <td>{props.product.Pdescription}</td>
            <td>{props.product.Price}</td>
            <td>{props.product.qtyAvailable}</td>

        </tr>

    );
}

export default Product;