import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { flagReducer } from "./flagReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  flag: flagReducer,
});

export default rootReducer;
