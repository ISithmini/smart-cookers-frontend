import { Link } from "react-router-dom";
import './Inventory.css';

interface InevntoryProps {

}

const Inevntory: React.FunctionComponent<InevntoryProps> = () => {
    return (
        <>
            <div className="inventory-container">
                <Link to='/inventory/new-product'>
                    <button className="inventory-btn">Register a new Product </button>
                </Link>
                <Link to='/inventory/view-products'>
                    <button className="inventory-btn">View all Products </button>
                </Link>
            </div>
        </>
    );
}

export default Inevntory;