export const flagReducer = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_FLAG":
      return !state;
    default:
      return state;
  }
};
