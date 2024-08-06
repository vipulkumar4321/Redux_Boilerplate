import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import loggerMiddleware from "./Middleware/loggerMiddleware";
import rootReducer from "./Reducers";

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk, loggerMiddleware)
);
