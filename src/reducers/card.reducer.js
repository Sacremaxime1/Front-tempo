import {
  DELETE_CARD,
  DOWNVOTE_CARD,
  GET_CARDS,
  UNDOWNVOTE_CARD,
  UNUPVOTE_CARD,
  UPVOTE_CARD,
} from "../actions/card.actions";

const initialState = {};

export default function cardReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CARDS:
      return action.payload;

    case DELETE_CARD:
      return state.filter((card) => card._id !== action.payload.cardId);

    case UPVOTE_CARD:
      return state.map((card) => {
        if (card._id === action.payload.cardId) {
          return {
            ...card,
            upvoter: [action.payload.userId, ...card.upvoter],
          };
        }
        return card;
      });

    case UNUPVOTE_CARD:
      return state.map((card) => {
        if (card._id === action.payload.cardId) {
          return {
            ...card,
            upvoter: card.upvoter.filter((id) => id !== action.payload.userId),
          };
        }
        return card;
      });

    case DOWNVOTE_CARD:
      return state.map((card) => {
        if (card._id === action.payload.cardId) {
          return {
            ...card,
            downvoter: [action.payload.userId, ...card.downvoter],
          };
        }
        return card;
      });

    case UNDOWNVOTE_CARD:
      return state.map((card) => {
        if (card._id === action.payload.cardId) {
          return {
            ...card,
            downvoter: card.downvoter.filter(
              (id) => id !== action.payload.userId
            ),
          };
        }
        return card;
      });

    default:
      return state;
  }
}
