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
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
          >
            <FontAwesomeIcon icon={faHouse} className="p-2" />
            <span>Home</span>
          </NavLink>
        </div>
        <div className={`col-lg-2 col-md-3 col-12 ${classes.navbar_item}`}>
          <NavLink to="/shop">
            <FontAwesomeIcon icon={faBagShopping} className="p-2" />
            <span>Shop</span>
          </NavLink>
        </div>
        <div className="col-lg-2" id="avatar">
          <h1>BOUTIQUE</h1>
        </div>
        <div className={`col-lg-2 col-md-3 col-12 ${classes.navbar_item}`}>
          <NavLink to="/cart">
            <FontAwesomeIcon icon={faCartShopping} className="p-2" />
            <span>Cart</span>
          </NavLink>
        </div>
        <div className={`col-lg-2 col-md-3 col-12 ${classes.navbar_item}`}>
          <NavLink to="/login">
            <FontAwesomeIcon icon={faUser} className="p-2" />
            <span>Login</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
