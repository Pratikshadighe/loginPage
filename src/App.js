import React from "react";
// import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Register from "./Register";
import Dashboard from "./Dashboard";
import Login from "./Login";
import { useSelector } from "react-redux";

function App() {
  // const email = useSelector((state) => state.reducer.email);
  // const password = useSelector((state) => state.reducer.password);
  const users = useSelector((state) => state.reducer.users);
  console.log("wdwsd", users);

  return (
    // <div>
    //   /* <div className="label">
    //     <label className="div">Email</label>
    //     <label className="div">Password</label>
    //   </div>
    //   <div className="container">
    //     <li>{email}</li>
    //     <li>{password}</li>
    //   </div> */
    <>
      {users &&
        users.map((user) => {
          return (
            <div className="container" key={user.id}>
              <li>{user.Register.name}</li>
              <li>{user.Register.email}</li>
              <li>{user.Register.password}</li>
            </div>
          );
        })}

      <Router>
        <Routes>
          <Route path="/" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/Dashboard" element={<Dashboard />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
