import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <ul>
        <li onClick={() => navigate("/home")}>Home</li>
        <li onClick={() => navigate("/products")}>Products</li>
        <li onClick={() => navigate("/users")}>Users</li>
        <li onClick={() => navigate("/contact")}>Contact</li>
        <button onClick={() => navigate("/")}>Log Out</button>
      </ul>
    </nav>
  );
};

export default Navbar;
