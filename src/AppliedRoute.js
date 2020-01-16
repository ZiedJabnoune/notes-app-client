import React from "react";
import { Route } from "react-router-dom";

const AppliedRoute = ({ addProps, component, ...rest }) => {
  let Comp = component;
  return (
    <Route
      {...rest}
      render={props => <Comp {...addProps} {...props}></Comp>}
    ></Route>
  );
};

export default AppliedRoute;
