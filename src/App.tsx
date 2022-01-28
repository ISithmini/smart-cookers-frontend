import React from 'react';
import Home from './Containers/Home';
import { BrowserRouter, BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './Components/NavBarComponent/NavBar';
import NavBarComponet from './Components/NavBarComponent/NavBarComponent';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Router>
          <NavBar />
          <Route path="/" element={<Home />} />
        </Router>
      </BrowserRouter>

    </div>
  );
}

export default App;
