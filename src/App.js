import React from "react";
import { Switch, Route } from "react-router-dom";
import { Homepage, Checkout } from "./Components";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
