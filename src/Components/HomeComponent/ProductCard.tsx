import blender from '../../Assets/images/blender.jpg';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './ProductDisplay.css';

interface ProductCardProps {

}

type productporps = {
    product: {
        Pname: string,
        Pdescription: string,
        Price: number,
        qtyAvailable: number,

    }


};

const ProductCard: React.FunctionComponent<productporps> = (props) => {
    return (
        <div className="col-md-3">
            <Card>
                <Card.Img variant="top" src={blender} className='img' />
                <Card.Body>
                    <Card.Title> {props.product.Pname}</Card.Title>
                    <Card.Text>
                        {props.product.Pdescription} <br />
                        <Link to={`/view-products/id=${props.product.id}`}>
                            <button className="buy-btn">Buy Now </button>
                        </Link>
                    </Card.Text>
                </Card.Body>
            </Card>

        </div>


    );
}

export default ProductCard;