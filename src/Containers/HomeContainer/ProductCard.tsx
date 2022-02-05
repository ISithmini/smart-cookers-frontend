import blender from '../../Assets/images/blender.jpg';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './ProductDisplay.css';
import OneProductDisplay from '../../Components/InventoryComponent/OneProduct/OneProductDisplay';

interface ProductCardProps {

}

type productporps = {
    product: {
        Pname: string,
        Pdescription: string,
        Price: number,
        qtyAvailable: number,
        id: string
        image: string

    }
};

const ProductCard: React.FunctionComponent<productporps> = (props) => {
    return (
        <div className="col-md-3">
            {/* <div className="card">
  <img className="card-img-top w-60 p-2 h-50" src={props.product.image} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{props.product.Pname}</h5>
    <p className="card-text">
    <div className='text-danger'>
                            Rs. {props.product.Price}
                        </div><br />
                        
        
        </p>
        <Link to={`/view-products/id=${props.product.id}`}>
                            <button className="buy-btn" onClick={() => {
                                <OneProductDisplay />
                            }}>
                                Buy Now

                            </button>
                            </Link>
  </div>
</div> */}
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.product.image} className='img w-60 p-2 h-50' />
                <Card.Body>
                    <Card.Title> {props.product.Pname}</Card.Title>
                    <Card.Text>
                        <div className='text-danger'>
                            Rs. {props.product.Price}
                        </div><br />
                        <Link to={`/view-products/id=${props.product.id}`}>
                            <button className="buy-btn" onClick={() => {
                                <OneProductDisplay />
                            }}>
                                Buy Now

                            </button>
                        </Link>
                    </Card.Text>
                    
                </Card.Body>
            </Card>

        </div>


    );
}

export default ProductCard;