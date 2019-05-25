import React from "react";
import { Switch, Route } from "react-router-dom";
import Shoes from "./components/Shoes/Shoes";
import CreateAcct from "./components/UserAccess/CreateAcct/CreateAcct";
import Login from "./components/UserAccess/Login/Login";
import Accessories from "./components/Accessories/Accessories";
import Clothing from "./components/Clothing/Clothing";
import Home from "../src/components/Home/Home";
import Account from "./components/UserAccess/Account/Account";
import Details from "./components/Details/Details";
import Boots from "./components/Shoes/Boots/Boots";
import Heels from "./components/Shoes/Heels/Heels";
import Sandals from "./components/Shoes/Sandals/Sandals";
import Sneakers from "./components/Shoes/Sneakers/Sneakers";
import Hats from "./components/Accessories/Hats/Hats";
import Purses from "./components/Accessories/Purses/Purses";
import Jewelry from "./components/Accessories/Jewelry/Jewelry";
import Dresses from "./components/Clothing/Dresses/Dresses";
import Tops from "./components/Clothing/Tops/Tops";
import Bottoms from "./components/Clothing/Bottoms/Bottoms";
import Swim from "./components/Clothing/Swim/Swim";

export default (
  <Switch>
    <Route component={Home} exact path="/" />
    <Route component={CreateAcct} path="/createaccount" />
    <Route component={Login} path="/login" />
    <Route component={Account} path="/account" />
    <Route component={Clothing} path="/clothing" />
    <Route component={Shoes} path="/shoes" />
    <Route component={Accessories} path="/accessories" />
    <Route component={Details} path="/details" />
    <Route component={Boots} path="/boots" />
    <Route component={Heels} path="/heels" />
    <Route component={Sandals} path="/sandals" />
    <Route component={Sneakers} path="/sneakers" />
    <Route component={Hats} path="/hats" />
    <Route component={Purses} path="/purses" />
    <Route component={Jewelry} path="/jewelry" />
    <Route component={Dresses} path="/dresses" />
    <Route component={Tops} path="/tops" />
    <Route component={Bottoms} path="/bottoms" />
    <Route component={Swim} path="/swim" />
  </Switch>
);
