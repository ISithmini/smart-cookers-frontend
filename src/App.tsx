import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from '../src/Containers/Home'
import Home from '../src/Components/HomeComponent/HomeComponent';
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
        </Routes>

      </BrowserRouter>

    </div>
  )
}

export default App;
