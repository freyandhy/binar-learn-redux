import types from "../actions/types";

// Initial State
const globalState = {
  keyword: null,
  movies: null,
  isLoading: false,
  isError: false,
};

// Reducer
const rootReducer = (state = globalState, action) => {
  if (action.type === types.SEARCH_KEYWORD) {
    return {
      ...state,
      keyword: action.payload,
    };
  }
  if (action.type === types.SEARCH_MOVIES_REQUEST) {
    return {
      ...state,
      isLoading: true,
      isError: false,
    };
  }

  if (action.type === types.SEARCH_MOVIES_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      isError: false,
      movies: action.movies,
    };
  }

  if (action.type === types.SEARCH_MOVIES_FAILURE) {
    return {
      ...state,
      isLoading: false,
      isError: true,
      movies: null,
    };
  }
  return state;
};

export default rootReducer;
