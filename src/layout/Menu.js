import React from "react";
import { Link } from "react-router-dom";
import "../styles/Menu.css";

const Menu = () => {
  return (
    <nav className="nav">
      <div className="strip" />
      <ul>
        <Link to="/">Home</Link>
        <Link to="/Search">Search a summoner</Link>
        <Link to="/Heroes">Champions</Link>
      </ul>
    </nav>
  );
};

export default Menu;
