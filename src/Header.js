import React from "react";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import "./img/Pizza.jpg";
import "./App.css";

function SliceHeader() {
  return (
    <Router>
      <div className="nav-links">
        <div className="navBar">
          <div className="link1">
            <h1>The Last Slice</h1>
            <Link to="/">Home</Link>
          </div>

          <div className="link2">
            <Link to="/Form">Order Now Online</Link>
            <img src={Logo} alt="pizza" />
            <Route path="/Form">
              <PizzaForm />
            </Route>
          </div>
        </div>
      </div>
    </Router>
  );
}
export default SliceHeader;
