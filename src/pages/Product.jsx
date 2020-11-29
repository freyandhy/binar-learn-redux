import React, { useState } from "react";
import Counter from "../components/Counter";

const Product = () => {
  const [order, setOrder] = useState(0);

  const counterPlus = () => setOrder(order + 1);
  const counterMinus = () => setOrder(order - 1);

  return (
    <>
      <h1>Buy Product</h1>
      <div style={{ textAlign: "center" }}>
        <p>Rp 50.000</p>
        <p>Order: {order}</p>
        <h3>Total: {order * 50000}</h3>
        <br />
        <Counter
          orderValue={order}
          counterPlusFunction={counterPlus}
          counterMinusFunction={counterMinus}
        />
      </div>
    </>
  );
};

export default Product;
