import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faUser,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import classes from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { authenActions } from "../../store";
export default function Header() {
  // State isShowDropdown xử lý hiển thị ẩn/hiện khi click vào tên user đã login
  const [isShowDropdown, setIsShowDropdown] = useState(false);

  const dispatch = useDispatch();

  // biến isAuthen được lấy từ store authen để quản lý login / logout
  const isAuthen = useSelector((state) => state.authen.isAuthenticated);

  // biến currentUser được lấy từ store authen để quản lý user đã đăng nhập và hoạt động
  const currentUser = useSelector((state) => state.authen.currentUser);
  // console.log(currentUser);

  // Hàm xử lý log out
  const logoutHandler = () => {
    dispatch(authenActions.logout());
  };
  return (
    <nav className="container mt-3 w-75">
      <div className={`row ${classes.navbar}`}>
        <div className={`col-lg-4 d-flex ${classes.navbar_left}`}>
          <div className={`col-lg-2 col-md-3  ${classes.navbar_item} `}>
            <NavLink
              to="/"
              className={`({ isActive }) =>
                isActive ? classes.active : undefined
              d-flex`}
              end
            >
              Home
            </NavLink>
          </div>

          <div className={`col-lg-2 col-md-3 ${classes.navbar_item} `}>
            <NavLink
              to="/shop"
              className={`({ isActive }) =>
                isActive ? classes.active : undefined
               d-flex`}
            >
              Shop
            </NavLink>
          </div>
        </div>
        <div
          className={`col-lg-4 d-flex justify-content-center ${classes.navbar_mid}`}
        >
          <h3>BOUTIQUE</h3>
        </div>
        <div className={`col-lg-4 d-flex ${classes.navbar_right}`}>
          <div className={`col-lg-2 col-md-3 ${classes.navbar_item}`}>
            <NavLink
              to="/cart"
              className={`({ isActive }) =>
                isActive ? classes.active : undefined
              d-flex `}
            >
              <FontAwesomeIcon icon={faCartShopping} className="p-1" />
              <span>Cart</span>
            </NavLink>
          </div>
          <div className={`col-lg-2 col-md-3 ${classes.navbar_item}`}>
            {isAuthen ? (
              <NavLink
                // to="/login"
                className={`({ isActive }) =>
                isActive ? classes.active : undefined
              d-flex ${classes.dropdownBtn}`}
                onClick={() => setIsShowDropdown(!isShowDropdown)}
              >
                <FontAwesomeIcon icon={faUser} className="p-1" />
                <span>{currentUser.fullName}</span>
                <FontAwesomeIcon icon={faCaretDown} className="p-1" />
                {isShowDropdown && (
                  <div className={`${classes.dropdownAccount}`}>
                    <Button variant="secondary">action</Button>
                    <Button variant="secondary">action</Button>
                  </div>
                )}
              </NavLink>
            ) : (
              <NavLink
                to="/login"
                className={`({ isActive }) =>
                isActive ? classes.active : undefined
              d-flex `}
              >
                <FontAwesomeIcon icon={faUser} className="p-1" />
                <span>Login</span>
              </NavLink>
            )}
          </div>
          {isAuthen ? (
            <div className={`${classes.navbar_item}`}>
              <NavLink
                onClick={logoutHandler}
                className={`({ isActive }) =>
                isActive ? classes.active : undefined
              d-flex `}
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
