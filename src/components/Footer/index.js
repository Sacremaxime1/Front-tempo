import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  BoxH1,
} from "./FooterElements";

const Footer = () => {
  return (
    <Box>
      <BoxH1>Tempo V : Site d'entraide communautaire de joueurs de Dofus</BoxH1>
      <Container>
        <Row>
          <Column>
            <Heading>A propos</Heading>
            <FooterLink href="#">L'équipe</FooterLink>
          </Column>
          <Column>
            <Heading>Pages</Heading>
            <FooterLink href="/">Accueil</FooterLink>
            <FooterLink href="/cartes">Cartes</FooterLink>
            <FooterLink href="/equipements">Équipements</FooterLink>
          </Column>
          <Column>
            <Heading>Contact</Heading>
            <FooterLink href="#">Support</FooterLink>
          </Column>
          <Column>
            <Heading>Réseau social</Heading>
            <FooterLink href="#">Twitter</FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};

export default Footer;
