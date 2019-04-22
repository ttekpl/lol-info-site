import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Menu.css";

const Menu = () => {
  return (
    <nav className="mainMenu">
      <div className="menu__logo">lol info</div>
      <ul>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/Search">Search</NavLink>
        <NavLink to="/Heroes">Champions</NavLink>
      </ul>
    </nav>
  );
};

export default Menu;
