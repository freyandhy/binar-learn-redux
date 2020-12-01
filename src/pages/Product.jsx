import React from "react";
import { connect } from "react-redux";
import Counter from "../components/Counter";

const Product = (props) => {
  return (
    <>
      <h1>Buy Product</h1>
      <div style={{ textAlign: "center" }}>
        <p>Rp {props.price}</p>
        <p>Order: {props.order}</p>
        <h3>Total: {props.order * props.price}</h3>
        <br />
        <Counter />
      </div>
    </>
  );
};

const mapStateToProps = (globalState) => {
  return {
    order: globalState.order,
    price: globalState.price,
  };
};

export default connect(mapStateToProps)(Product);
