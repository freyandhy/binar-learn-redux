import React from "react";
import { connect } from "react-redux";

const Checkout = (props) => {
  return (
    <>
      <h1>Checkout</h1>
      <h3>Total Order: {props.order}</h3>
      <h3>Total: {props.order * props.price}</h3>
    </>
  );
};

const stateToProps = (state) => {
  return {
    order: state.order,
    price: state.price,
  };
};

export default connect(stateToProps)(Checkout);
