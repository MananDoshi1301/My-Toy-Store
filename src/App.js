import React from "react";
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LogSign from "./components/LogSign/LogSign";
import Dashboard from "./components/Dashboard/Dashboard";

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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
