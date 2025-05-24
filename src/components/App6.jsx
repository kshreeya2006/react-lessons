import React from 'react';
import Fruit from "./Fruit";
import "./App6.css";

export default function App6() {
  return (
    <div>
    <h1>Calling Fruit Components</h1>
    <div className="fruit-container">
        <Fruit name="Apple" />
        <Fruit name="Mango" />
        <Fruit name="Orange" />
        <Fruit name="Banana" />
    </div>
    </div>
  )
}
