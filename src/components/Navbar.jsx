import React from "react";
import { routes } from "../utils/routes";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to={routes.home}>
        <h4>Home</h4>
      </Link>
      <Link to={routes.contact}>
        <h4>Contact</h4>
      </Link>
    </nav>
  );
};

export default Navbar;
