import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Menu.css";
import { FaBars } from "react-icons/fa";

const Menu = props => {
  console.log(props.isShort);
  return (
    <>
      <FaBars className="bars" onClick={props.toggle} />
      <nav
        className={`mainMenu ${props.isShort ? "shorter" : ""}`}
        style={{
          transform: `translateX(${props.isMenuVisible ? "0%" : "-100%"})`
        }}
      >
        <div className="menu__logo">info</div>
        <ul>
          <NavLink onClick={props.onMenuItemClick} exact to="/">
            Home
          </NavLink>
          <NavLink onClick={props.onMenuItemClick} to="/Search">
            Search
          </NavLink>
          <NavLink onClick={props.onMenuItemClick} to="/Heroes">
            Champions
          </NavLink>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
