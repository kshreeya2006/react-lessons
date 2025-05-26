import React from "react";
import { useRef, useState } from "react";

export default function App15() {
  const nameRef = useRef();
  const num1 = useRef();
  const num2 = useRef();
  const colorRef = useRef();

  const [sum, setSum] = useState(null);
  const [textColor, setTextColor] = useState("black");

  const handleSubmit = () => {
    alert(nameRef.current.value);
    nameRef.current.style.color = "blue";
  };

  const handleAdd = () => {
    const a = parseFloat(num1.current.value);
    const b = parseFloat(num2.current.value);
    setSum(a + b);
  };

  const handleChange = () => {
    const color = colorRef.current.value;
    setTextColor(color);
  };

  return (
    <div>
      <h1>App15</h1>
      <h2>useRef hook - to create uncontrolled component</h2>

      <p>
        <input type="text" ref={nameRef} placeholder="Enter name" />
      </p>
      <button onClick={handleSubmit}>Submit</button>

      <hr />

      <p>
        <input type="number" ref={num1} placeholder="Enter number 1" />
      </p>
      <p>
        <input type="number" ref={num2} placeholder="Enter number 2" />
      </p>
      <button onClick={handleAdd}>Add</button>
      {sum !== null && <h3>Result: {sum}</h3>}

      <hr />

      <p>
        <input type="text" ref={colorRef} placeholder="Enter color (e.g., red)" />
      </p>
      <button onClick={handleChange}>Change color</button>
      <h3 style={{ color: textColor }}>Hello World!!</h3>
    </div>
  );
}