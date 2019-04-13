import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Menu.css";

const Menu = () => {
  return (
    <nav className="mainMenu">
      <div className="strip" />
      <ul>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/Search">Search a summoner</NavLink>
        <NavLink to="/Heroes">Champions</NavLink>
      </ul>
    </nav>
  );
};

export default Menu;
