import React from 'react';
import { useEffect, useState } from "react";

export default function App13() {
  const [num, setNum] = useState("");
  const [add, setAdd] = useState(null);
  const [sub, setSub] = useState(null);
  const [mul, setMul] = useState(null);
  const [div, setDiv] = useState(null);

  useEffect(() => {
    if (num !== "") {
      const n = parseFloat(num);
      setAdd(100 + n);
      setSub(100 - n);
      setMul(100 * n);
      setDiv(n !== 0 ? 100 / n : "Infinity");
    } else {
      setAdd(null);
      setSub(null);
      setMul(null);
      setDiv(null);
    }
  }, [num]);

  return (
    <div>
    <h1>App13</h1>
     <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
        placeholder="Enter a number"
      />
      <ul>
        <li>
          Addition: 100 + {num || "___"} = {add !== null ? add : "___"}
        </li>
        <li>
          Subtraction: 100 - {num || "___"} = {sub !== null ? sub : "___"}
        </li>
        <li>
          Multiplication: 100 × {num || "___"} = {mul !== null ? mul : "___"}
        </li>
        <li>
          Division: 100 ÷ {num || "___"} = {div !== null ? div : "___"}
        </li>
      </ul>
    </div>
  );
}
