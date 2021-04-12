import React, { useState, useCallback } from "react";
import { useSelector } from "react-redux";
import CardsList from "../components/CardsList";
import FormCard from "../components/FormCard";
import { FormInput } from "../components/FormCard/FormCardElements";

const Cards = () => {
  const cards = useSelector((state) => state.cardReducer);
  const [searchTerm, setSearchTerm] = useState("");
  const updateSearchTerm = useCallback((event) => {
    setSearchTerm(event.target.value);
  }, []);

  return (
    <>
      <FormCard />
      <FormInput type="text" onChange={updateSearchTerm}></FormInput>
      <CardsList
        cards={cards.filter((card) =>
          card.name.toLowerCase().includes(searchTerm.toLowerCase())
        )}
      ></CardsList>
    </>
  );
};

export default Cards;
