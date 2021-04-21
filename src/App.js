import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LogSign from "./components/LogSign/LogSign";
import Dashboard from "./components/Dashboard/Dashboard";
import Admin from "./components/LogSign/Admin/Admin";
import ProductGrid from "./components/ProductGrid/ProductGrid";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route exact path="/logSign">
            <LogSign />
          </Route>
          <Route exact path="/admin">
            <Admin />
          </Route>
          <Route path="/product/:categoryType/:itemType">
            <ProductGrid />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
