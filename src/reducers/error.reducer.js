import { GET_USER_ERRORS } from "../actions/user.actions";
import { GET_CARD_ERRORS } from "../actions/card.actions";

const initialState = { userError: [], cardError: [] };

export default function errorReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_ERRORS:
      return {
        userError: action.payload,
        cardError: [],
      };

    case GET_CARD_ERRORS:
      return {
        cardError: action.payload,
        userError: [],
      };

    default:
      return state;
  }
}
