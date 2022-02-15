import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addOrder, getOneProductOutlet } from '../../../Services/Api/ProductService/ProductApi'
import '../OneProduct/OneProductDisplay.css';
import { AuthContext } from "../../../Context/AuthContext";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


interface OneProductDisplayProps {
}

type prod = {
    Pname: string,
    Pdescription: string,
    Price: Number,
    QtyAvailable: Number,
    id: string,
    image: string,
    outletName : string

}

const OneProductDisplay: React.FunctionComponent<OneProductDisplayProps> = (props) => {

    const { user, dispatch } = useContext(AuthContext);
    const [prod, setProd] = useState<prod | null>(null);
    const [userRole, setuserRole] = useState(false);
    const [click, setclick] = useState(false);
    const [qunatitiyClick, setqunatitiyClick] = useState(false);
    const [quantity, setquantity] = useState('');
    const [orderCompleted, setorderCompleted] = useState(false);

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


    const  qty: number = +quantity;

    const  price : number = Number(prod?.Price)

    const totalPrice : number = Number (qty*price)

    const navigate = useNavigate();

    let { id } = useParams();


    useEffect(() => {
        if (user.role == 'basic') {
            setuserRole(true);
        }

        getOneProductOutlet(id)
            .then((res: any) => {
                setProd(res.data[0]);

            })
            .catch(err => {
                console.log(err);
            });

    }, []);

    const handleOrder=() => {
        setorderCompleted(true);
        
        var data = {
            "Product_id" : prod?.id,
            "Product_name" : prod?.Pname,
            "Price" : totalPrice,
            "User_Id" : user.id,
            "Outlet_Name" : prod?.outletName,
            "Status" : "Not Completed"
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
                            <h6 className="text-muted">{prod?.Pname}</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 text-center">
                            <h6>Product Description</h6>
                        </div>
                        <div className="col-sm-8 ">
                            <h6 className="text-muted"> {prod?.Pdescription}</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 text-center">
                            <h6>Price</h6>
                        </div>
                        <div className="col-sm-8 ">
                            <h6 className="text-muted">Rs. {prod?.Price}</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 text-center">
                            <h6>Quantity Available</h6>
                        </div>
                        <div className="col-sm-8 ">
                            <h6 className="text-muted">{prod?.QtyAvailable}</h6>
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
                {qunatitiyClick &&
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