import React, { useEffect, useState } from 'react';
import { changeOrderStatus, getOrders } from '../../Services/Api/UserServices/OrderApi';
import './SalesTransaction.css';

interface SalesTransactionsProps { }

const options = [
    { value: 'Colombo', label: 'Colombo' },
    { value: 'Gampaha', label: 'Gampaha' },
    { value: 'Galle', label: 'Galle' },
    { value: 'Kalutara', label: 'Kalutara' }
];

const SalesTransactions: React.FunctionComponent<SalesTransactionsProps> = () => {

    const [outlet, setoutlet] = useState('Colombo');
    const [click, setclick] = useState(false);
    const [data, setdata] = useState([]);
    const [complete, setcomplete] = useState(false);
    const [productID, setproductID] = useState(0);

    var state = {
        selectedOption: null,
    };


    const getOrdersDetails = () => {
        getOrders(outlet).then((res) => {
            setclick(true)
            setdata(res.data)
        })

    }

    let status : string;

    useEffect(() => {
        if(complete==true){
            console.log(productID)
            changeOrderStatus(productID);
            status = 'Completed'
        }
        if(complete==false){
            status = 'Not Completed'

        }

    });
    

    return (
        <div className="transaction">
            <div className="text-center"><h5> <b><u>Sales Records</u></b></h5></div>
            <div className="form-container">
                <label className="form-label">
                    <b>Select an Outlet</b>
                </label>
                <select className="form-select" defaultValue={'DEFAULT'} onChange={(e) => {
                             setoutlet(e.target.value)
                             getOrdersDetails()

                        } }>
                            <option value='DEFAULT' disabled> Choose an outlet</option>
                            <option value='Gampaha'>Colombo</option>
                            <option value='Kalutara' >Gampaha</option>
                            <option value='Galle'>Galle</option>
                            <option value='Kalutara'>Kalutara</option>
                        </select>
            </div>
            <hr />

            <div className='sales-container'>
            <table className="table table-striped mt-5">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col"> Order Id</th>
                            <th scope="col">User Id</th>
                            <th scope="col"> Product Id</th>
                            <th scope="col">Product Name</th>
                            <th scope="col"> Price</th>
                            <th scope="col"> Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {data.map((item, index) => {
                            return (
                                <tr key={index}  >
                                    <td>{data[index].id}</td>
                                    <td>{data[index].User_Id}</td>
                                    <td>{data[index].Product_id}</td>
                                    <td>{data[index].Product_name}</td>
                                    <td>{data[index].Price}</td>
                                    <td>{status}</td>
                                    <td> <button className='proceed-success' onClick={()=> {
                                        setcomplete(true)
                                        setproductID(data[index].id)
                                        status = 'Completed';

                                    }  }>Complete Order</button></td>
                                </tr>

                            )
                        })}
                    </tbody>

                    
                </table>

            </div>
        </div>
    );
}

export default SalesTransactions;