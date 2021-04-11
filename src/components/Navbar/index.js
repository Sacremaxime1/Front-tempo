import React, { useState, useContext } from "react";
import axios from "axios";
import { UidContext } from "../AppContext";
import cookie from "js-cookie";
import { FaBars } from "react-icons/fa";
import Sidebar from "./Sidebar";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  NavBtnLinkLogout,
} from "./NavbarElements";

const Navbar = () => {
  const uid = useContext(UidContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  //Logout
  const removeCookie = (key) => {
    if (window !== "undefined") {
      cookie.remove(key, { expires: 1 });
    }
  };

  const logout = async () => {
    await axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}api/user/logout`,
      withCredentials: true,
    })
      .then(() => removeCookie("jwt"))
      .catch((err) => console.log(err));

    window.location = "/";
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} logout={logout} />
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Tempo V</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks exact to="/">
                Accueil
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/cartes">Cartes</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/equipements">Équipements</NavLinks>
            </NavItem>
            <NavItem>
              {!uid && <NavLinks to="/inscription">S'inscrire</NavLinks>}
              {uid && <NavLinks to="/profil">Profil</NavLinks>}
            </NavItem>
          </NavMenu>
          <NavBtn>
            {!uid && <NavBtnLink to="/connexion">Connexion</NavBtnLink>}
            {uid && (
              <NavBtnLinkLogout to="/" onClick={logout}>
                Déconnexion
              </NavBtnLinkLogout>
            )}
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
