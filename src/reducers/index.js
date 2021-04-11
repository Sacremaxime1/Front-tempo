import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import usersReducer from "./users.reducer";
import errorReducer from "./error.reducer";
import cardReducer from "./card.reducer";

export default combineReducers({
  userReducer,
  usersReducer,
  errorReducer,
  cardReducer,
});
