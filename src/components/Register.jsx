import React, { useState, useContext } from "react";
import { UserContext } from "./App21";

export default function Register() {
  const { users, setUsers } = useContext(UserContext);
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const handleSubmit = () => {
    setUsers([...users, user]);
  };

  return (
    <div>
      <h3>Register</h3>
      <p>
        <input
          type="text"
          placeholder="Enter name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
      </p>
      <p>
        <input
          type="email"
          placeholder="Enter email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </p>
      <p>
        <input
          type="password"
          placeholder="Enter password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </p>
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}
