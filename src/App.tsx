import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from '../src/Containers/Home'
import Home from '../src/Components/HomeComponent/HomeComponent';
import Inevntory from "./Components/InventoryComponent/Inventory";
import RegisterNewProduct from "./Containers/ProductContainer/RegisterNewProduct/RegisterNewProduct";
import OneProductDisplay from "./Components/InventoryComponent/OneProduct/OneProductDisplay";
import ViewProducts from "./Components/InventoryComponent/ViewProducts/ViewProducts";
import Login from "./Components/LoginComponent/login";
import NavBar from "./Components/NavBarComponent/NavBar";
import Profile from "./Components/ProfileComponent/Profile";
import AuthContextProvider from "./Context/AuthContext";
import UserTransactions from "./Components/SalesComponent/UserTransactions";
import SalesTransactions from "./Components/SalesComponent/SalesTransactions";
import RouteLock from "./Helpers/RouteLock";

export interface IAppProps { }



const App: React.FunctionComponent<IAppProps> = () => {
  //const [count, setCount] = useState(0)
  //const product = useContext(ProductContext);

  return (
    <div className="App">
      <AuthContextProvider>
      <BrowserRouter>
          <NavBar />
          <Routes >
            <Route path="/"  element={<Home />} />
            <Route path="/login" element={<Login />} />
            {/* <RouteLock path='/inventory' element={<Inevntory/>} redirect='/login' /> */}
            <Route path="/inventory" element={<Inevntory />} />
            <Route path="/inventory/new-product" element={<RegisterNewProduct />} />
            <Route path="/inventory/view-products" element={< ViewProducts />} />
            <Route path="/profile" element={< Profile />} />
            <Route path='/view-products/outlet=:outlet_id&id=:id' element={<OneProductDisplay/>} />
            <Route path='/profile/transaction-history' element={<UserTransactions/>} />
            <Route path='/sales' element={<SalesTransactions/>} />
          </Routes>
      </BrowserRouter>
      </AuthContextProvider>

    </div>
  )
}

export default App;
