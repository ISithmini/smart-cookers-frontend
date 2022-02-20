import React, { useEffect, useState } from 'react';
import { getAllOutlets } from '../../Services/Api/ProductService/ProductApi';
import { changeOrderStatus, getOutletOrders } from '../../Services/Api/ProductService/OrderApi';
import './SalesTransaction.css';

interface SalesTransactionsProps { }

type dataprops = {
    createdAt: string
    order_id: string
    price: number
    quantity: number
    stauts: string
    updatedAt: string
    product_id: {
        createdAt: string
        deletedAt: null
        description: string
        image: string
        price: number
        product_id: number
        product_name: string
        qtyAvailable: number
        updatedAt: string

    }
    id : {
        firstName : string
        lastName : string
    }
}[];

type outlet = {
    outlet_id : string
    location : string
}[]

const SalesTransactions: React.FunctionComponent<SalesTransactionsProps> = () => {

    const [outlet, setoutlet] = useState('Colombo');
    const [click, setclick] = useState(false);
    const [data, setdata] = useState<dataprops>([]);
    const [complete, setcomplete] = useState(false);
    const [productID, setproductID] = useState('');
    const [outletsList, setoutletsList] = useState<outlet>([]);

    var state = {
        selectedOption: null,
    };


    const getOrdersDetails = (outlet_id: string) => {
        getOutletOrders(outlet_id).then((res) => {
            setdata(res.data.data)
            //console.log(res.data.data)
        })
    }

    let status: string;

    useEffect(() => {
        getAllOutlets().then((res) => {
            setoutletsList(res.data.data);
        })

        if (complete == true) {
            console.log(productID)
            changeOrderStatus(productID);
            status = 'Completed'
        }
        if (complete == false) {
            status = 'Not Completed'

        }
    }, []);


    return (
        <div className="transaction">
            <div className="text-center"><h5> <b><u>Sales Records</u></b></h5></div>
            <div className="form-container">
                <label className="form-label">
                    <b>Select an Outlet</b>
                </label>
                <select className="form-select" defaultValue={'DEFAULT'} onChange={(e) => {
                    //setoutlet(e.target.value)
                    getOrdersDetails(e.target.value)
                }}>
                    {outletsList.map((outlet, index) => {
                        return <option value={outlet.outlet_id} key={index}> {outlet.location}
                        </option>
                    })}
                </select>
            </div>
            <hr />

            <div className='sales-container'>
                <table className="table table-striped mt-5">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col"> Order Id</th>
                            <th scope="col">User Name</th>
                            <th scope="col"> Product Id</th>
                            <th scope="col">Product Name</th>
                            <th scope="col"> Quantity</th>
                            <th scope="col"> Price</th>
                            <th scope="col"> Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => {
                            console.log(item.id)
                            return (
                                <tr key={index}>
                                    <td>{item.order_id}</td>
                                    <td>{item.id.firstName}  {item.id.lastName}</td>
                                    <td>{item.product_id.product_id}</td>
                                    <td>{item.product_id.product_name}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.price}</td>
                                    <td>{status}</td>
                                    <td> <button className='proceed-success' onClick={() => {
                                        setcomplete(true)
                                        setproductID(item.order_id)
                                        status = 'Completed';

                                    }}>Complete Order</button></td>
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