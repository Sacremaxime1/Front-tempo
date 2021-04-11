import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { UidContext } from "../AppContext";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const uid = useContext(UidContext);

  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route
      {...rest}
      render={(props) =>
        uid && restricted ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
