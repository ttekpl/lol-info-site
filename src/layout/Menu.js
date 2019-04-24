import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Menu.css";
import { FaBars } from "react-icons/fa";

const Menu = props => {
  return (
    <>
      <FaBars className="bars" onClick={props.toggle} />
      <nav
        className="mainMenu"
        style={{
          transform: `translateX(${props.isMenuVisible ? "0%" : "-100%"})`
        }}
      >
        <div className="menu__logo">lol info</div>
        <ul>
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/Search">Search</NavLink>
          <NavLink to="/Heroes">Champions</NavLink>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
