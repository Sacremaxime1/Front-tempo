import React from "react";
import { useSelector } from "react-redux";
import CardsList from "../components/CardsList";
import FormCard from "../components/FormCard";

const Cards = () => {
  const cards = useSelector((state) => state.cardReducer);

  return (
  <>
  	<FormCard />
  	<CardsList cards={cards}></CardsList>
  </>
  );
};

export default Cards;
