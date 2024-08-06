/** @format */

import React, { useContext, useEffect } from "react";
import "./GuestDashBoard.css";
import ropa_logo from "../../../assets/mob-logo.svg";
import profile_pic from "../../../assets/profile_pic.png";
import { Link, NavLink, useNavigate, useRoutes } from "react-router-dom";
import { Store } from "../../../Store";

const GuestDashBoard = () => {
  const navigate = useNavigate();
  const {
    state: { userInfo },
    dispatch,
  } = useContext(Store);

  useEffect(() => {
    if (!userInfo) {
      navigate("/#");
    }
  }, [navigate, userInfo]);

  if (!userInfo) {
    return null; // or a loading spinner/placeholder
  }

  const signoutHandler = () => {
    dispatch({ type: "USER_SIGNOUT" });
    localStorage.removeItem("userInfo");
    window.location.href = "/#";
  };
  return (
    <div className='guestDashBoard'>
      <div className='guestDashBoard-upper-sec'>
        <div className='guestDashBoard-logo'>
          <Link to='/'>
            <img src={ropa_logo} alt='' />
          </Link>
        </div>
        <div className='guestDashBoard-profile'>
          <div className='gdb-profile'>
            <h2>Prince Ayo</h2>
            <p>Good afternoon</p>
          </div>
        </div>
      </div>
      <div className='guestDashBoard-lower-sec'>
        <ul>
          {" "}
          {/*DashboardRoom*/}
          <NavLink
            to='/GuestAccessPage'
            className={({ isActive }) => {
              return isActive ? "hover-gdb-btn" : "";
            }}
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to='/GuestAccount'
            className={({ isActive }) => {
              return isActive ? "hover-gdb-btn" : "";
            }}
          >
            <li>Account</li>
          </NavLink>
          <li>
            <button className='logout-btn' onClick={signoutHandler}>
              Signout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GuestDashBoard;
