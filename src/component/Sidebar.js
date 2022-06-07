import React from "react";
import "./Sidebar.css";
import logo from "../img/logo.png";
import { AiFillHome } from "react-icons/ai";
import { CgClipboard } from "react-icons/cg";
const Sidebar = () => {
  return (
    <div className="Sidebars">
      <div className="logo">
        <img src={logo} alt="" />
        <span>
          Sh<span>o</span>ps
        </span>
      </div>
      <div className="menu">
        <div className="menuItem">
          <div>
            <AiFillHome />
          </div>
          <span>Dashboard</span>
          <div>
            <CgClipboard />
          </div>
          <span>Orders</span>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
