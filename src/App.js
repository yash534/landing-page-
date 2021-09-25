import React from "react";
import { Switch, Route} from "react-router-dom";
import { Homepage, Checkout, Navbar  } from "./Components";
import "./App.css";

const App = () => {



    return(
        <div className="App">
        <div className="navbar-container">
            <Navbar />
        </div>
            <Switch>
                <Route exact path="/" ><Homepage /></Route>
                <Route exact path="/checkout" ><Checkout /></Route>
            </Switch>
        </div>
    )
}

export default App;