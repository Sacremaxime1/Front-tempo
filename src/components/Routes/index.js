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

const index = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cartes" exact component={Cards} />
        <Route path="/equipements" exact component={Equipments} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default index;
