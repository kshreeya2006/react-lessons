import React from "react";
export default function App4() {
  const greet = () => {
    alert("Hello World");
  };
  const greetUser = (name) => {
    alert("Hello "+name);
  };
  return (
    <div>
      <h1>App4</h1>
      <h2>Event Handling</h2>
      <p>
        <button onClick={greet}>Click Here</button>
        <button onClick={() => greetUser("John")}>Greet</button>
      </p>
    </div>
  );
}