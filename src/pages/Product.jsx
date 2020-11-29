import React, { useState } from "react";

const Product = () => {
  const [order, setOrder] = useState(0);

  return (
    <>
      <h1>Buy Product</h1>
      <div style={{ textAlign: "center" }}>
        <p>Rp 50.000</p>
        <p>Order: {order}</p>
        <h3>Total: {order * 50000}</h3>
        <br />
        <button onClick={(e) => setOrder(order - 1)}>-</button>
        <input type="text" value={order} readOnly />
        <button onClick={(e) => setOrder(order + 1)}>+</button>
      </div>
    </>
  );
};

export default Product;
