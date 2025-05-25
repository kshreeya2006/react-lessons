import React from "react";
import { useState } from "react";

export default function App9() {
  const [count, setCount] = useState(10);
  const increment = () => {
    //setCount(count + 1);
    setCount((prevCount) => prevCount + 1);
  };
  const decrement = () => {
    //setCount(count - 1);
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
      <h1>App9</h1>
      <h2>Increment and Decrement</h2>
      <button onClick={decrement}>-</button>
      <h3>{count}</h3>
      <button onClick={increment}>+</button>
    </div>
  );
}