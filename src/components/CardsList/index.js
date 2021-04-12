import React from "react";
import Card from "./Card";
import { Container } from "./CardsListElement";

const CardsList = (props) => {
  return (
    <Container>
      {props.cards.map((item) => (
        <Card card={item} key={item._id}></Card>
      ))}
    </Container>
  );
};

export default CardsList;
