import blender from '../../Assets/images/blender.jpg';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';
import './ProductDisplay.css';
import OneProductDisplay from '../../Components/InventoryComponent/OneProduct/OneProductDisplay';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import Modal from 'react-bootstrap/Modal';



interface ProductCardProps {

}

type productporps = {
    product_id:{
        product_id : {
            product_name: string,
        Pdescription: string,
        price: number,
        qtyAvailable: number,
        product_id: string,
        image: string,

        }
        outlet_id : {
            outlet_id: string,
            location : string
        }

    }
        
};

const ProductCard: React.FunctionComponent<productporps> = (props) => {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    //console.log(props.product_id)


    return (
        <div className="product-card col-md-3">
            <Card style={{ width: '16rem' }} className="card">
                <Card.Img variant="top" src={props.product_id.product_id.image} className="img" />
                <Card.Body className="card-body">
                    <Card.Title> {props.product_id.product_id.product_name}</Card.Title>
                    <Card.Text>
                        <div className='text-danger'>
                            Rs. {props.product_id.product_id.price}
                        </div><br />

                        {user && 
                            <Link to={`/view-products/id=${props.product_id.product_id.product_id}`}>
                                <button className="buy-button" onClick={() => {
                                    <OneProductDisplay />
                                }}>
                                    Buy Now
                                </button>
                            </Link>
                        }
                        {!user &&

                            <button className="buy-button" onClick={() => navigate('/login')}>
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