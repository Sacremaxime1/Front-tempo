import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Navbar from "../Navbar";
import Home from "../../pages/Home";
import Cards from "../../pages/Cards";
import Equipments from "../../pages/Equipments";
import Register from "../../pages/Register";
import Login from "../../pages/Login";
import Footer from "../Footer";
import Profil from "../../pages/Profil";

const index = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cartes" exact component={Cards} />
        <Route path="/equipements" exact component={Equipments} />
        <Route path="/inscription" exact component={Register} />
        <Route path="/connexion" exact component={Login} />
        <Route path="/profil" exact component={Profil} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </Router>
  );
};

export default index;
