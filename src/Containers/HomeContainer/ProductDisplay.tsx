import blender from '../../Assets/images/blender.jpg';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';
import './ProductDisplay.css';
import OneProductDisplay from '../../Components/InventoryComponent/OneProduct/OneProductDisplay';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';

interface ProductCardProps {

}

type productporps = {
    product: {
        product_name: string,
        Pdescription: string,
        price: number,
        qtyAvailable: number,
        id: string
        image: string

    }
};

const ProductCard: React.FunctionComponent<productporps> = (props) => {

    const {user} = useContext(AuthContext);
    const navigate = useNavigate();


    return (
        <div className="product-card col-md-3">
            <Card style={{ width: '16rem' }} className="card">
                <Card.Img variant="top" src={props.product.image} className="img"/>
                <Card.Body className= "card-body">
                    <Card.Title> {props.product.product_name}</Card.Title>
                    <Card.Text>
                        <div className='text-danger'>
                            Rs. {props.product.price}
                        </div><br />

                        {user && 
                        <Link to={`/view-products/id=${props.product.id}`}>
                        <button className="buy-button" onClick={() => {
                            <OneProductDisplay/>
                        }}>
                            Buy Now
                        </button>
                    </Link>
                        
                        }
                        {!user && 

                        <button className="buy-button" onClick={() => navigate('/login') }>
                            Buy Now
                        </button>
                        
                        }
                        
                    </Card.Text>
                    
                </Card.Body>
            </Card>

        </div>


    );
}

export default ProductCard;