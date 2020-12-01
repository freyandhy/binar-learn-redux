import React from "react";
import actionType from "../redux/actionType";
import { connect } from "react-redux";

const Counter = (props) => {
  return (
    <>
      <button onClick={props.counterMinusFunction}>-</button>
      <input type="text" value={props.order} readOnly />
      <button onClick={props.counterPlusFunction}>+</button>
    </>
  );
};

const stateToProps = (globalState) => {
  return {
    order: globalState.order,
  };
};

const dispatchToProps = (dispatch) => {
  return {
    counterPlusFunction: () => dispatch({ type: actionType.PLUS_ORDER }),
    counterMinusFunction: () => dispatch({ type: actionType.MINUS_ORDER }),
  };
};

export default connect(stateToProps, dispatchToProps)(Counter);
