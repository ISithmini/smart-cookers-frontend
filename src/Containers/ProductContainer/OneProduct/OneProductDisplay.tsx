import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getOneProductOutlet } from "../../../Services/Api/ProductService/OutletApi";
import { addOrder } from "../../../Services/Api/ProductService/OrderApi";
import '../OneProduct/OneProductDisplay.css';
import { AuthContext } from "../../../Context/AuthContext";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


interface OneProductDisplayProps {
}

type product = {
    product_name: string,
    description: string,
    price: number,
    qtyAvailable: number,
    product_id: string,
    image: string,
}

type params = {
    outlet_id : string,
    id :string
}

const OneProductDisplay: React.FunctionComponent< OneProductDisplayProps> = () => {

    const { user, dispatch } = useContext(AuthContext);
    const [prod, setProd] = useState<product>([]);
    const [outlet,setoutlet] = useState('');
    const [userRole, setuserRole] = useState(false);
    const [click, setclick] = useState(false);
    const [qunatitiyClick, setqunatitiyClick] = useState(false);
    const [quantity, setquantity] = useState('');
    const [orderCompleted, setorderCompleted] = useState(false);

    const [show, setShow] = useState(false);

  const navigate = useNavigate();


    const  qty: number = +quantity;

    const  price : number = Number(prod.price)

    const totalPrice : number = Number (qty*price)


    const  {outlet_id, id } = useParams<params>();

    useEffect(() => { 
        if (user.role == 'basic') {
            setuserRole(true);
        }

        getOneProductOutlet(id, outlet_id)
            .then((res: any)=> {
                setProd(res.data.data[0].product_id);
               setoutlet(res.data.data[0].outlet_id.outlet_id)

            })
            .catch((err)=> {
                console.log(err);
            });

    }, []);

    const handleOrder=() => {
        setorderCompleted(true);
        
        var data = {
            "product_id" : prod?.product_id,
            'quantity' : quantity,
            "price" : totalPrice,
            "user_Id" : user.id,
            "outlet_id" : outlet,
            "status" : "Not Completed"
        }
        addOrder(data);  
    }


    return (
        <div className="profile">
            <div>
            <h5 className="title text-white">Product Profile</h5> <br/>
                <div className="profile-container">
                    <div className="row">
                        <div className="col-sm-4 text-center">
                            <h6>Product Name </h6>
                        </div>
                        <div className="col-sm-8">
                            <h6 className="text-muted">{prod.product_name}</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 text-center">
                            <h6>Product Description</h6>
                        </div>
                        <div className="col-sm-8 ">
                            <h6 className="text-muted"> {prod.description}</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 text-center">
                            <h6>Price</h6>
                        </div>
                        <div className="col-sm-8 ">
                            <h6 className="text-muted">Rs. {prod?.price}</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 text-center">
                            <h6>Quantity Available</h6>
                        </div>
                        <div className="col-sm-8 ">
                            <h6 className="text-muted">{prod?.qtyAvailable}</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 text-center">
                            <h6>Photo</h6>
                        </div>
                        <div className="col-sm-8 ">
                            <img src={prod?.image} className="w-25 p-3 h-50" alt="image" />
                        </div>
                    </div>

                </div>
                {click &&
                    <div className="row">
                        <div className="col-sm-4 text-center">
                            <h6>Enter the Quantity Want</h6>
                        </div>
                        <div className="col-sm-8 ">
                            <form>
                                <input type="text" className="form-control"
                                    onChange={(e) => {
                                        setquantity((e.target.value));
                                        setqunatitiyClick(true)
                                    }}
                                />
                            </form>
                        </div>
                    </div>
                }
                {qty > prod.qtyAvailable &&
                    <div className="row">
                        <div className="col-sm-4 text-center">
                            <h6></h6>
                        </div>
                        <div className="col-sm-8 ">
                            <h6 className="text-muted"> Please enter an quantity less than the available quantity</h6>
                        </div>
                    </div>

                }
                { qty < prod.qtyAvailable && qunatitiyClick &&
                    <div className="row">
                        <div className="col-sm-4 text-center">
                            <h6>Total Price</h6>
                        </div>
                        <div className="col-sm-8 ">
                            <h6 className="text-muted">Rs. {qty*price}</h6>
                        </div>
                    </div>

                }
                <div className="row">
                    <div className="col-sm-7"></div>
                    <div className="col-sm-2">
                        {qunatitiyClick && 
                         <button className='proceed-cancel' onClick={() => navigate('/') }>Cancel Order</button>
                        }
                    </div>
                    <div className="col-sm-3 ">
                    {!qunatitiyClick && 
                         <button className='proceed' onClick={() => setclick(true)}>Proceed Order</button>
                    }
                    {qunatitiyClick && 
                         <button className='proceed-success' onClick={() => {
                            handleOrder()
                            setShow(true)
                         }}>Place Order</button>
                    }
                       
                    </div>
                </div>
            </div>

            {orderCompleted && 
                <Modal
                animation={false}
                show={show} 
                // onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Body> <div className="text-center"> <h5>Your Order has been recorded successfully.........</h5></div></Modal.Body>
                <Modal.Footer>
                  <Button  variant="secondary" onClick={ ()=> navigate('/')}>Home Page</Button>
                  <Button variant="secondary" onClick={ ()=> navigate('/profile/transaction-history')}>View Transaction History</Button>
                </Modal.Footer>
              </Modal>
                
                }
        </div>
    );
}

export default OneProductDisplay;