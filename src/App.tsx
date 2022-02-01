import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from '../src/Containers/Home'
import Home from '../src/Components/HomeComponent/HomeComponent';
import Inevntory from "./Components/InventoryComponent/Inventory";
import RegisterNewProduct from "./Components/InventoryComponent/RegisterNewProduct/RegisterNewProduct";
import ViewProducts from "./Components/InventoryComponent/ViewProducts/ViewProducts";
import Login from "./Components/LoginComponent/login";
import NavBar from "./Components/NavBarComponent/NavBar";

export interface IAppProps { }

const App: React.FunctionComponent<IAppProps> = (props) => {
  //const [count, setCount] = useState(0)

  return (
    <div className="App">

      <BrowserRouter>
        <NavBar />
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/inventory" element={<Inevntory />} />
          <Route path="/inventory/new-product" element={<RegisterNewProduct />} />
          <Route path="/inventory/view-products" element={< ViewProducts />} />
        </Routes>

      </BrowserRouter>

    </div>
  )
}

export default App;
