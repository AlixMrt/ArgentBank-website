import React from "react";
import { NavLink } from "react-router-dom";

import bankLogo from "../assets/argentBankLogo.png";

export default function Navbar() {
  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" href="/">
        <img
          className="main-nav-logo-image"
          src={bankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        <NavLink className="main-nav-item" to="/sign-in">
          <i className="fa-solid fa-circle-user"></i>
          Sign In
        </NavLink>
      </div>
    </nav>
  );
}
