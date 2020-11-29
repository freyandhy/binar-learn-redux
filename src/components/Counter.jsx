import React, { useState } from "react";

const Counter = (props) => {
  const [order, setOrder] = useState(0);

  const counterPlus = () => {
    setOrder(order + 1);
    sendToParent(order + 1);
  };

  const counterMinus = () => {
    setOrder(order - 1);
    sendToParent(order - 1);
  };

  const sendToParent = (data) => {
    props.parentCallback(data);
  };

  return (
    <>
      <button onClick={counterMinus}>-</button>
      <input type="text" value={order} readOnly />
      <button onClick={counterPlus}>+</button>
    </>
  );
};

export default Counter;
