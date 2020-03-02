import { combineReducers } from "redux";
import apprenantsReducer from "./apprenants";
import commentsReducer from "./comments";

export default combineReducers({ apprenantsReducer, commentsReducer });
