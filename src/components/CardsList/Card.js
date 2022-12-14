import React, { useState } from "react";
import axios from "axios";
import { Name, Picture, CardContainer } from "./CardElement";

const Card = (props) => {
  const [cardPicture, setCardPicture] = useState(null);

  const getPicture = (pathPicture) => {
    if (pathPicture) {
      return axios
        .get(
          `${process.env.REACT_APP_API_URL}static/uploads/cards/${pathPicture}.png`,
          { responseType: "arraybuffer" }
        )
        .then((res) => {
          const base64 = btoa(
            new Uint8Array(res.data).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              ""
            )
          );
          setCardPicture("data:;base64," + base64);
        })
        .catch((err) => console.log(err));
    } else {
      setCardPicture("");
    }
  };

  getPicture(props.card.image);

  return (
    <CardContainer>
      <Picture src={cardPicture} />
      <Name>{props.card.name}</Name>
    </CardContainer>
  );
};

export default Card;
