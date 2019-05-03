import React from "react";
import { Switch, Route } from "react-router-dom";
import Shoes from "./components/Shoes/Shoes";
import CreateAcct from "./components/UserAccess/CreateAcct/CreateAcct";
import Login from "./components/UserAccess/Login/Login";
export default (
  <Switch>
    <Route component={CreateAcct} exact path="/createaccount" />
    <Route component={Login} exact path="/login" />

    <Route component={Shoes} path="/shoes" />
  </Switch>
);
