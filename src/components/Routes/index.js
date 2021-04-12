import React from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import Navbar from "../Navbar";
import Home from "../../pages/Home";
import Cards from "../../pages/Cards";
import Equipments from "../../pages/Equipments";
import Register from "../../pages/Register";
import Login from "../../pages/Login";
import Footer from "../Footer";
import Profile from "../../pages/Profile";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const index = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <PublicRoute restricted={false} path="/" exact component={Home} />
        <PrivateRoute path="/cartes" exact component={Cards} />
        <PrivateRoute path="/equipements" exact component={Equipments} />
        <PublicRoute
          restricted={true}
          path="/inscription"
          exact
          component={Register}
        />
        <PublicRoute
          restricted={true}
          path="/connexion"
          exact
          component={Login}
        />
        <PrivateRoute path="/profil" exact component={Profile} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </Router>
  );
};

export default index;
