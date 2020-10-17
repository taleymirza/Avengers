import React from "react";
import { Route, Switch } from "react-router-dom";
import AvengerItemDetail from "./AvengerItemDetail/AvengerItemDetail";
import AvengerList from "./AvengerList/AvengerList";

export default (
  <Switch>
    <Route path="/" exact component={AvengerList} />
    <Route path="/avengers" exact component={AvengerList} />
    <Route path="/avengers/:id" component={AvengerItemDetail} />
  </Switch>
);
