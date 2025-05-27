import React, { useState, useContext } from "react";
import { UserContext } from "./App21";

export default function Login() {
  const { users } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [welcomeMsg, setWelcomeMsg] = useState("");

  const handleLogin = () => {
    const matchedUser = users.find(
      (user) => user.email === email && user.password === password
    );
    if (matchedUser) {
      setWelcomeMsg(`Welcome ${matchedUser.name}`);
    } else {
      setWelcomeMsg("Invalid credentials");
    }
  };

  return (
    <div>
      <h3>Login</h3>
      <p>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </p>
      <p>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </p>
      <button onClick={handleLogin}>Login</button>
      <h4>{welcomeMsg}</h4>
    </div>
  );
}
