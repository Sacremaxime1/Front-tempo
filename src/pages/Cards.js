import React from "react";
import { useSelector } from "react-redux";
import CardsList from "../components/CardsList";

const Cards = () => {
  const cards = useSelector((state) => state.cardReducer);

  return <CardsList cards={cards}></CardsList>;
};

export default Cards;
