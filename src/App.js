import React,{useState} from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LogSign from "./components/LogSign/LogSign";
import Dashboard from "./components/Dashboard/Dashboard";
import Admin from "./components/LogSign/Admin/Admin";
import ProductGrid from "./components/ProductGrid/ProductGrid";

function App() {
  const [cartItems, setCartItems]=useState([]);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Dashboard cartItems={cartItems} setCartItems={setCartItems} />
          </Route>
          <Route exact path="/logSign">
            <LogSign />
          </Route>
          <Route exact path="/admin">
            <Admin />
          </Route>
          <Route path="/product/:categoryType/:itemType">
            <ProductGrid cartItems={cartItems} setCartItems={setCartItems} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
