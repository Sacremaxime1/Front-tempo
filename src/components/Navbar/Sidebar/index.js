import React, { useContext } from "react";
import { UidContext } from "../../AppContext";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
  SidebarRouteLogout,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle, logout }) => {
  const uid = useContext(UidContext);

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon></CloseIcon>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/" onClick={toggle}>
            Accueil
          </SidebarLink>
          <SidebarLink to="/cartes" onClick={toggle}>
            Cartes
          </SidebarLink>
          <SidebarLink to="/equipements" onClick={toggle}>
            Équipements
          </SidebarLink>
          {!uid && (
            <SidebarLink to="/inscription" onClick={toggle}>
              S'inscrire
            </SidebarLink>
          )}
          {uid && (
            <SidebarLink to="/profil" onClick={toggle}>
              Profil
            </SidebarLink>
          )}
        </SidebarMenu>
        <SideBtnWrap>
          {!uid && (
            <SidebarRoute to="/connexion" onClick={toggle}>
              Connexion
            </SidebarRoute>
          )}
          {uid && (
            <SidebarRouteLogout to="/" onClick={logout}>
              Déconnexion
            </SidebarRouteLogout>
          )}
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
