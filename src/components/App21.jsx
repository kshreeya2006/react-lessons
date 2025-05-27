import React, { useState, createContext } from "react";
import Register from "./Register";
import Login from "./Login";

export const UserContext = createContext();

export default function App21() {
  const [users, setUsers] = useState([]);

  return (
    <div>
      <h1>App21</h1>
      <h2>useContext – Register and Login</h2>
      <UserContext.Provider value={{ users, setUsers }}>
        <Register />
        <hr />
        <Login />
      </UserContext.Provider>
    </div>
  );
}
