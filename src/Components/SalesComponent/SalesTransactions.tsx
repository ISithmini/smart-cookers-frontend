interface SalesTransactionsProps {
    
}
 
const SalesTransactions: React.FunctionComponent<SalesTransactionsProps> = () => {
    return ( 
        <div className="sales-container">
                <div className="text-center"><h2> Sales Records</h2></div>
                <div className="form-container">
                        <label className="form-label">
                            <b>Select an Outlet</b>
                        </label>
                        <select className="form-select" defaultValue={'DEFAULT'} onChange={(e) => {
                            // setoutlet(e.target.value);
                            // console.log(outlet)
                            // handleOutlet();
                        }}>
                            <option value='DEFAULT' disabled> Choose an outlet</option>
                            <option value='Colombo'>Colombo</option>
                            <option value='Gampaha' >Gampaha</option>
                            <option value='Galle'>Galle</option>
                            <option value='Kalutara'>Kalutara</option>
                        </select>
                </div>

            </div>
     );
}
 
export default SalesTransactions;