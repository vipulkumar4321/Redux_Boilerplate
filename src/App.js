import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./Redux/store";
import CounterComponent from "./Components/CounterComponent";
import FlagComponent from "./Components/FlagComponent";

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <CounterComponent />
      <FlagComponent />
    </PersistGate>
  </Provider>
);
export default App;
