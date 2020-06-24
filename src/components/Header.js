import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "../utils/gene-logo.png";
import Navbar from "react-bootstrap/Navbar";

export default function Header() {
  return (
    <Navbar className="p-0 pl-3">
      <Navbar.Brand>
        <NavLink to="/" exact>
          <img src={Logo} width="175" height="95" alt="Genentech logo" />
        </NavLink>
      </Navbar.Brand>
    </Navbar>
  );
}
