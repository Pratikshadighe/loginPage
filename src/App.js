import React from "react";
import { useSelector } from "react-redux";

import "./App.css";

import Login from "./Login";

function App() {
  const email = useSelector((state) => state.reducer.email);
  const password = useSelector((state) => state.reducer.password);

  return (
    <div>
      <div className="label">
        <label className="div">Email</label>
        <label className="div">Password</label>
      </div>
      <div className="container">
        <li>{email}</li>
        <li>{password}</li>
      </div>

      {/* {users.map((user) => {
        return (
          <div className="container" key={user.id}>
            <li>{user.email}</li>

            <li>{user.password}</li>
          </div>
        );
      })} */}
      <Login />
    </div>
  );
}

export default App;
