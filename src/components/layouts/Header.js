import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faUser,
  faHouse,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import classes from "./Header.module.css";
export default function Header() {
  return (
    <nav className="container">
      <div
        className={`row justify-content-between align-items-center ${classes.navbar}`}
      >
        <div className={`col-lg-2 col-md-3 col-12 ${classes.navbar_item}`}>
          <FontAwesomeIcon icon={faHouse} />
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
          >
            Home
          </NavLink>
        </div>
        <div className={`col-lg-2 col-md-3 col-12 ${classes.navbar_item}`}>
          <FontAwesomeIcon icon={faBagShopping} />
          <NavLink to="/shop">Shop</NavLink>
        </div>
        <div className="col-lg-2" id="avatar">
          <h1>BOUTIQUE</h1>
        </div>
        <div className={`col-lg-2 col-md-3 col-12 ${classes.navbar_item}`}>
          <FontAwesomeIcon icon={faCartShopping} />
          <NavLink to="/cart">Cart</NavLink>
        </div>
        <div className={`col-lg-2 col-md-3 col-12 ${classes.navbar_item}`}>
          <FontAwesomeIcon icon={faUser} />
          <NavLink to="/login">Login</NavLink>
        </div>
      </div>
    </nav>
  );
}
