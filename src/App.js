import { Route, Link } from "react-router-dom";
import Pizza from "./Pizza";
import React from "react";
import Home from "./Home";
import "./App.css";

const App = () => {
  return (
    <div>
      <nav className="navbar">
        <Link to="/">
          <button name="homebutton">Home</button>
        </Link>
        <br />
        <Link to="/src/Pizza.js">
          <button name="orderbutton">Place Online Order!</button>
        </Link>
      </nav>

      <Route exact path="/" component={Home} />
      <Route path="/src/Pizza.js" component={Pizza} />
    </div>
  );
};
export default App;
