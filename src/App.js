import React from "react";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import CounterComponent from "./Components/CounterComponent";
import FlagComponent from "./Components/FlagComponent";

const App = () => (
  <Provider store={store}>
    <CounterComponent />
    <FlagComponent />
  </Provider>
);
export default App;
