import { useEffect, useState } from 'react';
import { getOrders } from '../../Services/Api/ProductService/ProductApi';
import './SalesTransaction.css';

interface SalesTransactionsProps {
    
}
 
const SalesTransactions: React.FunctionComponent<SalesTransactionsProps> = () => {

    const [outlet, setoutlet] = useState('Colombo');
    const [click, setclick] = useState(false);

    const getOrdersDetails = () => {
        getOrders(outlet). then((res)=> {
            setclick(true)
            console.log(res.data);
        })

    }

    const setoutletName =  (e : any) => {
        const timer = setTimeout(() => {
            setoutlet(e.target.value);
        },2000)
        getOrdersDetails()
        return (

        ) => clearTimeout(timer);
        

    }


    return ( 
        <div className="sales-container">
                <div className="text-center"><h5> <b><u>Sales Records</u></b></h5></div>
                <div className="form-container">
                        <label className="form-label">
                            <b>Select an Outlet</b>
                        </label>
                        <select className="form-select" defaultValue={'DEFAULT'} onChange={(e) => setoutletName(e)}>
                            <option value='DEFAULT' disabled> Choose an outlet</option>
                            <option value='Colombo'>Colombo</option>
                            <option value='Gampaha' >Gampaha</option>
                            <option value='Galle'>Galle</option>
                            <option value='Kalutara'>Kalutara</option>
                        </select>
                </div>
                <hr/>
            </div>
     );
}
 
export default SalesTransactions;