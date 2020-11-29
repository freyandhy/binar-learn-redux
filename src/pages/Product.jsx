import React, { useState } from "react";

const Product = () => {
  const [order, setOrder] = useState(0);
  const [price, setPrice] = useState(0);

  return (
    <>
      <h1>Buy Product</h1>
      <div style={{ textAlign: "center" }}>
        <h3>Order: {order}</h3>
        <h3>Total: {order * price}</h3>
        <input
          onChange={(e) => setPrice(e.target.value)}
          type="text"
          placeholder="Price"
        />
        <br />
        <br />
        <button onClick={(e) => setOrder(order - 1)}>-</button>
        <input type="text" value={order} readOnly />
        <button onClick={(e) => setOrder(order + 1)}>+</button>
      </div>
    </>
  );
};

export default Product;
