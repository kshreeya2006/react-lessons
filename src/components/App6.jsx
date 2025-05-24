import React from 'react';
import Fruit from "./Fruit";

export default function App6() {
  return (
    <div>
        <h1>Calling Fruit Components</h1>
        <Fruit name="Apple" />
        <Fruit name="Mango" />
        <Fruit name="Orange" />
        <Fruit name="Banana" />
    </div>
  )
}
