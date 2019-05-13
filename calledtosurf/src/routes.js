import React from "react";
import { Switch, Route } from "react-router-dom";
import Shoes from "./components/Shoes/Shoes";
import CreateAcct from "./components/UserAccess/CreateAcct/CreateAcct";
import Login from "./components/UserAccess/Login/Login";
import Accessories from "./components/Accessories/Accessories";
import Clothing from "./components/Clothing/Clothing";
import Home from "./App";
import Account from "./components/UserAccess/Account/Account";
import Details from "./components/Details/Details";


export default (
  <Switch>
    <Route component={Home} exact path="/" />
    <Route component={CreateAcct} exact path="/createaccount" />
    <Route component={Login} exact path="/login" />
    <Route component={Account} exact path="/account" />
    <Route component={Clothing} exact path="/clothing" />
    <Route component={Shoes} path="/shoes" />
    <Route component={Accessories} path="/accessories" />
    <Route component={Details} path="/details" />
  </Switch>
);
