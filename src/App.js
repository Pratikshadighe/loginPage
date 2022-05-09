import React from "react";
import { useSelector } from "react-redux";

import "./App.css";

import Login from "./Login";

// import Valid from "./Valid";
// import Main from "./main";

function App() {
  const users = useSelector((state) => state.reducer.users);

  return (
    <div>
      <div className="label">
        <label className="div">Email</label>
        <label className="div">Password</label>
      </div>

      {users.map((user) => {
        return (
          <div className="container" key={user.id}>
            <li>{user.login.email}</li>

            <li>{user.login.password}</li>
          </div>
        );
      })}
      <Login />
    </div>
    // <Main />
  );
}

export default App;
