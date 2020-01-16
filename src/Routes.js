import React from "react";
import { Route, Switch } from "react-router-dom";

import AppliedRoute from "./AppliedRoute";

import Home from "./containers/home/Home";
import NotFound from "./containers/notFound/NotFound";

import Login from "./containers/login/Login";
import SignUp from "./containers/signup/SignUp";

const Routes = ({ addProps }) => {
  return (
    <Switch>
      <AppliedRoute addProps={addProps} path="/" exact component={Home} />
      <AppliedRoute addProps={addProps} path="/login" exact component={Login} />
      <AppliedRoute
        addProps={addProps}
        path="/signup"
        exact
        component={SignUp}
      />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
