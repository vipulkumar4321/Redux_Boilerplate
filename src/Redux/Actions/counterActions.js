export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const incrementAsync = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({ type: "INCREMENT" });
    }, 1000);
  };
};
