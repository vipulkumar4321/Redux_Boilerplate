import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { thunk } from "redux-thunk";
import loggerMiddleware from "./Middleware/loggerMiddleware";
import persistConfig from "./Persist/persistConfig";
import rootReducer from "./Reducers";

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  applyMiddleware(thunk, loggerMiddleware)
);

const persistor = persistStore(store);

export { store, persistor };
