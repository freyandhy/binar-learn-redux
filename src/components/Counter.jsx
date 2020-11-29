import React from "react";

const Counter = (props) => {
  return (
    <>
      <button onClick={props.counterMinusFunction}>-</button>
      <input type="text" value={props.orderValue} readOnly />
      <button onClick={props.counterPlusFunction}>+</button>
    </>
  );
};

export default Counter;
