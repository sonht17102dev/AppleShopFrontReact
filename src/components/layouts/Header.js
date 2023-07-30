import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import classes from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { authenActions } from "../../store";
export default function Header() {
  const dispatch = useDispatch();
  const isAuthen = useSelector((state) => state.authen.isAuthenticated);
  // console.log(isAuthen);
  const currentUser = useSelector((state) => state.authen.currentUser);
  console.log(currentUser);
  const logoutHandler = () => {
    dispatch(authenActions.logout());
  };
  return (
    <nav className="container mt-3">
      <div className={`row ${classes.navbar}`}>
        <div className={`col-lg-4 d-flex ${classes.navbar_left}`}>
          <div className={`col-lg-2 col-md-3  ${classes.navbar_item}`}>
            <NavLink
              to="/"
              className={`({ isActive }) =>
                isActive ? classes.active : undefined
              d-flex gx-4`}
              end
            >
              Home
            </NavLink>
          </div>

          <div className={`col-lg-2 col-md-3 ${classes.navbar_item}`}>
            <NavLink
              to="/shop"
              className={`({ isActive }) =>
                isActive ? classes.active : undefined
               d-flex gx-4`}
            >
              Shop
            </NavLink>
          </div>
        </div>
        <div
          className={`col-lg-4 d-flex justify-content-center ${classes.navbar_mid}`}
          id="avatar"
        >
          <h3>BOUTIQUE</h3>
        </div>
        <div className={`col-lg-4 d-flex ${classes.navbar_right}`}>
          <div className={`col-lg-2 col-md-3 ${classes.navbar_item}`}>
            <NavLink
              to="/cart"
              className={`({ isActive }) =>
                isActive ? classes.active : undefined
              d-flex gx-4`}
            >
              <FontAwesomeIcon icon={faCartShopping} className="p-2" />
              <span>Cart</span>
            </NavLink>
          </div>
          <div className={`col-lg-2 col-md-3 ${classes.navbar_item}`}>
            <NavLink
              to="/login"
              className={`({ isActive }) =>
                isActive ? classes.active : undefined
              d-flex gx-4`}
            >
              <FontAwesomeIcon icon={faUser} className="p-2" />
              <span>{isAuthen ? currentUser.fullName : "Login"}</span>
            </NavLink>
          </div>
          {isAuthen ? (
            <div className={`${classes.navbar_item}`}>
              <NavLink
                onClick={logoutHandler}
                className={`({ isActive }) =>
                isActive ? classes.active : undefined
              d-flex gx-4`}
              >
                <span>(Log out)</span>
              </NavLink>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </nav>
  );
}
