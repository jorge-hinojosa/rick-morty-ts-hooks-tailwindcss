import React from "react";
import { Route, Switch } from "react-router-dom";

// import App from "./App";
import HomePage from "./HomePage";
import FavPage from "./FavPage";

export default (
  <Switch>
    <Route component={HomePage} exact path="/" />
    <Route component={FavPage} path="/favorites" />
  </Switch>
);
