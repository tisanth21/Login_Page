import { combineReducers } from "redux";
import validUser from "./loginDetailsReducer";
import data from "./dashBoardReducer";

const rootreducer = combineReducers({
  validUser: validUser,
  dashBoardData:data
});

export default rootreducer;
