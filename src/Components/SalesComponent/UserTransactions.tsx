import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { getTransactionHistory } from "../../Services/Api/ProductService/OrderApi";
import './UserTransactions.css'
import * as moment from 'moment';

interface UserTransactionsProps {

}

type transactions = {
    createdAt: string,
    order_id: string,
    price: number,
    quantity: number,
    stauts: string,
    outlet_id: {
        location: string,
        outlet_id: string,

    },
    product_id: {
        createdAt: string

        description: string
        image: string,
        price: number,
        product_id: number,
        product_name: string,
        qtyAvailable: number,

    }

}[]

const UserTransactions: React.FunctionComponent<UserTransactionsProps> = () => {

    const { user, dispatch } = useContext(AuthContext);
    const [transactions, settransactions] = useState<transactions>([]);

    useEffect(() => {
        getTransactionHistory(user.id).then((res) => {
            settransactions(res.data.data);
            console.log(res.data.data)
        });
    }, []);


    return (
        <div className="transaction">
            <div className="text-center"> <h5>Transaction History</h5></div>
            <hr />
            <div className="products-container">
                <table className="table table-striped mt-5">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col"> Transaction Id</th>
                            <th scope="col"> Date</th>
                            <th scope="col"> Product Name </th>
                            <th scope="col"> Quantity </th>
                            <th scope="col"> Price</th>
                            <th scope="col"> Outlet Name </th>
                            <th scope="col"> Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((item, index) => {
                            return (
                                <tr key={index}  >
                                    <td>{item.order_id}</td>
                                    <td>{moment(item.createdAt).format('DD-MM-YYYY  HH:mm')}</td>
                                    <td>{item.product_id.product_name}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.price}</td>
                                    <td>{item.outlet_id.location}</td>
                                    <td>{item.stauts}</td>
                                </tr>

                            )
                        })}
                    </tbody>




                </table>

            </div>

        </div>
    );
}

export default UserTransactions;