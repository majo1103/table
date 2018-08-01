import React from "react";
import { PrivateRoute } from "./PrivateRoute";
import Table from "../containers/table/Table";
import { Login } from "./login/Login";
import { Route, Redirect, Switch } from "react-router-dom";

const NoMatch = ({ location }) => (
  <div>
    <strong>Error!</strong> No route found matching:
    <div>
      <code>{location.pathname}</code>
    </div>
  </div>
);

const App = () => (
  <div>
    <Switch>
      <PrivateRoute path="/table" component={Table} />
      <Route path="/login" component={Login} />
      <Route exact path="/" render={() => <Redirect to="/table" />} />
      <Route component={NoMatch} />
    </Switch>
  </div>
);

export default App;
