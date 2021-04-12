import React from "react";
import { Name, Picture, CardContainer } from "./CardElement";

const Card = (props) => {
  return (
    <CardContainer>
      <Picture src={props.card.picture} />
      <Name>{props.card.name}</Name>
    </CardContainer>
  );
};

export default Card;
