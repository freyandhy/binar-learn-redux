import React from "react";
import { connect } from "react-redux";
import types from "../redux/actions/types";

const MovieSearch = (props) => {
  return (
    <>
      <h1>Movie Search</h1>
      Title:
      <input
        type="text"
        onChange={(e) => props.setKeyword(e.target.value)}
      ></input>
      <br />
      <br />
      <button onClick={props.handleSearch}>Search</button>
    </>
  );
};

const dispatchToProps = (dispatch) => {
  return {
    setKeyword: (keyword) =>
      dispatch({ type: types.SEARCH_KEYWORD, payload: keyword }),
    handleSearch: () => dispatch({ type: types.SEARCH_MOVIES_REQUEST }),
  };
};

export default connect(null, dispatchToProps)(MovieSearch);
