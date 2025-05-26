import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function App14() {
  const [users, setUsers] = useState([]);
   const [txt, setTxt] = useState("");

  const fetchData = async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const res = await axios(url);
    setUsers(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>App14</h1>
      <h2>useEffect hook to fetch api</h2>
      <p>
        <input type="text" placeholder="Search name" onChange={(e) => setTxt(e.target.value)} />
      </p>
      <hr/>
      <ol>
        {users
          .filter((user) =>
            user.name.toLowerCase().includes(txt.toLowerCase())
          )
          .map((user) => (
            <li key={user.id}>
              {user.name} - {user.email} - {user.phone}
            </li>
          ))}
      </ol>
    </div>
  );
}