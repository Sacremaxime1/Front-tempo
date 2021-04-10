import React, { useState } from "react";
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
} from "./NavbarElements";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
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
              <NavLinks to="/inscription">S'inscrire</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/connexion">Se connecter</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
