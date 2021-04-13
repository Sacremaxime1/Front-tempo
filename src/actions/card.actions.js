import axios from "axios";

export const GET_CARDS = "GET_CARDS";
export const UPVOTE_CARD = "UPVOTE_CARD";
export const UNUPVOTE_CARD = "UNUPVOTE_CARD";
export const DOWNVOTE_CARD = "DOWNVOTE_CARD";
export const UNDOWNVOTE_CARD = "UNDOWNVOTE_CARD";
export const DELETE_CARD = "DELETE_CARD";

export const GET_CARD_ERRORS = "GET_CARD_ERRORS";

export const getCards = () => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}api/card/`)
      .then((res) => {
        dispatch({ type: GET_CARDS, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const upvoteCard = (cardId, userId) => {
  return (dispatch) => {
    return axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}api/card/upvote-card/` + cardId,
      data: { id: userId },
    })
      .then((res) => {
        dispatch({ type: UPVOTE_CARD, payload: { cardId, userId } });
      })
      .catch((err) => console.log(err));
  };
};

export const unupvoteCard = (cardId, userId) => {
  return (dispatch) => {
    return axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}api/card/unupvote-card/` + cardId,
      data: { id: userId },
    })
      .then((res) => {
        dispatch({ type: UNUPVOTE_CARD, payload: { cardId, userId } });
      })
      .catch((err) => console.log(err));
  };
};

export const downvoteCard = (cardId, userId) => {
  return (dispatch) => {
    return axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}api/card/downvote-card/` + cardId,
      data: { id: userId },
    })
      .then((res) => {
        dispatch({ type: DOWNVOTE_CARD, payload: { cardId, userId } });
      })
      .catch((err) => console.log(err));
  };
};

export const undownvoteCard = (cardId, userId) => {
  return (dispatch) => {
    return axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}api/card/undownvote-card/` + cardId,
      data: { id: userId },
    })
      .then((res) => {
        dispatch({ type: UNDOWNVOTE_CARD, payload: { cardId, userId } });
      })
      .catch((err) => console.log(err));
  };
};

export const deleteCard = (cardId) => {
  return (dispatch) => {
    return axios({
      method: "delete",
      url: `${process.env.REACT_APP_API_URL}api/card/${cardId}`,
    })
      .then((res) => {
        dispatch({ type: DELETE_CARD, payload: { cardId } });
      })
      .catch((err) => console.log(err));
  };
};
