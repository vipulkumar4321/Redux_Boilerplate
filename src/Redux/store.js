import { legacy_createStore as createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import persistConfig from "./Persist/persistConfig";
import rootReducer from "./Reducers";

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);

const persistor = persistStore(store);

export { store, persistor };
