import actionType from "./actionType";

// Initial State
const globalState = {
  order: 0,
  price: 50000,
};

// Reducer
const rootReducer = (state = globalState, action) => {
  if (action.type === actionType.PLUS_ORDER) {
    return {
      ...state,
      order: state.order + 1,
    };
  }

  if (action.type === actionType.MINUS_ORDER) {
    return {
      ...state,
      order: state.order - 1,
    };
  }
  return state;
};

export default rootReducer;
