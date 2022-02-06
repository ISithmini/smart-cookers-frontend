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
import { ProductContext, ProductContextProvider } from "./Context/ProductContext";
import { useContext } from "react";

export interface IAppProps { }



const App: React.FunctionComponent<IAppProps> = () => {
  //const [count, setCount] = useState(0)
  //const product = useContext(ProductContext);

  return (
    <div className="App">

      <BrowserRouter>
          <NavBar />
          <Routes >
            <Route path="/"  element={<Home />} />
            <Route path="/about-us" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/inventory" element={<Inevntory />} />
            <Route path="/inventory/new-product" element={<RegisterNewProduct />} />
            <Route path="/inventory/view-products" element={< ViewProducts />} />
            <Route path="/profile" element={< Profile />} />
            <Route path='/view-products/id=:id' element={<OneProductDisplay/>} />
          </Routes>

      </BrowserRouter>

    </div>
  )
}

export default App;
