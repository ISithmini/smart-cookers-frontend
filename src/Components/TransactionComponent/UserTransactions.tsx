import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { getTransactionHistory } from "../../Services/Api/UserServices/OrderApi";

interface UserTransactionsProps {

}

type transactions = {
    Outlet_Name: string,
    Product_id: string,
    Price: number,
    id: number,
    User_Id: string,
    Product_name : string,
    Status : string
}

const UserTransactions: React.FunctionComponent<UserTransactionsProps> = () => {

    const { user, dispatch } = useContext(AuthContext);
    const [transactions, settransactions] = useState([]);

    useEffect(() => {
        getTransactionHistory(user.id).then((res) => {
            settransactions(res.data);
        });
    }, []);


    return (
        <>
        <div className="text-center"> <h5>Transaction History</h5></div>
            <div className="products-container">
                <table className="table table-striped mt-5">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col"> Transaction Id</th>
                            <th scope="col"> Product Name </th>
                            <th scope="col"> Price</th>
                            <th scope="col"> Outlet Name </th>
                            <th scope="col"> Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((item, index) => {
                            return (
                                <tr key={index}  >
                                    <td>{transactions[index].id}</td>
                                    <td>{transactions[index].Product_name}</td>
                                    <td>{transactions[index].Price}</td>
                                    <td>{transactions[index].Outlet_Name}</td>
                                    <td>{transactions[index].Status}</td>
                                    <td>

                                        <button className="btn-dark" onClick={() => { }}>
                                            View Product
                                        </button>


                                    </td>
                                </tr>

                            )
                        })}
                    </tbody>




                </table>

            </div>

        </>
    );
}

export default UserTransactions;