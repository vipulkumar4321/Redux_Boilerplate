import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleFlag } from "../Redux/Actions/flagActions";

const FlagComponent = () => {
  const flag = useSelector((state) => state.flag);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Flag: {flag ? "True" : "False"}</h1>
      <button onClick={() => dispatch(toggleFlag())}>Toggle Flag</button>
    </div>
  );
};
export default FlagComponent;
