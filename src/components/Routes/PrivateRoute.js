import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { UidContext } from "../AppContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const uid = useContext(UidContext);

  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={(props) =>
        uid ? <Component {...props} /> : <Redirect to="/connexion" />
      }
    />
  );
};

export default PrivateRoute;
