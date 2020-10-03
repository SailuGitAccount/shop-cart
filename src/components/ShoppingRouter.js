import React, { Component } from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Store from "./Store";
import About from "./About";
import Cart from "./Cart";

class ShoppingRouter extends Component {
  //state = {};
  render() {
    return (
      <BrowserRouter>
        <NavBar></NavBar>
        <Switch>
          <Route path="/store">
            <Store></Store>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/cart">
            <Cart></Cart>
          </Route>
          <Route exact path="/">
            <Redirect to="/store" />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default ShoppingRouter;
