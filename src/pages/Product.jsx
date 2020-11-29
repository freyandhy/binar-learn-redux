import React, { useState } from "react";
import Counter from "../components/Counter";

const Product = () => {
  const [order, setOrder] = useState(0);
  const parentCallbackFunction = (dataFromChild) => setOrder(dataFromChild);

  return (
    <>
      <h1>Buy Product</h1>
      <div style={{ textAlign: "center" }}>
        <p>Rp 50.000</p>
        <p>Order: {order}</p>
        <h3>Total: {order * 50000}</h3>
        <br />
        <Counter parentCallback={parentCallbackFunction} />
      </div>
    </>
  );
};

export default Product;
