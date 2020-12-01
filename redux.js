const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  number: 0,
  age: 25,
};

// Reducer
const rootReducer = (state = initialState, action) => {
  if (action.type === "PLUS_NUMBER") {
    return {
      ...state,
      number: state.number + 1,
    };
  }

  if (action.type === "ADD_NUMBER") {
    return {
      ...state,
      number: state.number + action.count,
    };
  }

  if (action.type === "CHANGE_AGE") {
    return {
      ...state,
      age: action.newAge,
    };
  }
  return state;
  // switch (action.type) {
  //   case "PLUS_NUMBER":
  //     return {
  //       ...state,
  //       number: state.number + 1,
  //     };
  //   case "CHANGE_AGE":
  //     return {
  //       ...state,
  //       age: action.newAge,
  //     };

  //   default:
  //     return state;
  // }
};

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Action
store.dispatch({ type: "PLUS_NUMBER" });
console.log(store.getState());
store.dispatch({ type: "ADD_NUMBER", count: 5 });
console.log(store.getState());
store.dispatch({ type: "CHANGE_AGE", newAge: 35 });
console.log(store.getState());
