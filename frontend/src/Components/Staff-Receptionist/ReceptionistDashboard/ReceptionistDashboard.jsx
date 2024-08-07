/** @format */

import React, { useContext, useEffect } from "react";
import "./ReceptionistDashboard.css";
import ropa_logo from "../../../assets/mob-logo.svg";
import receptionist2_pic from "../../../assets/receptionist_2.jpg";
import { Link } from "react-router-dom";
import { Store } from "../../../Store";
import { NavLink } from "react-router-dom";

const ReceptionistDashboard = () => {
  const {
    state: { userInfo },
    dispatch,
  } = useContext(Store);

  useEffect(() => {
    if (!userInfo) {
      window.location.replace("/SignIn");
    }
  }, [userInfo]);
  const signoutHandler = () => {
    dispatch({ type: "USER_SIGNOUT" });
    localStorage.removeItem("userInfo");
    window.location.href = "/#/SignIn";
  };
  return (
    <div>
      <div className='ReceptionistDashboard'>
        <div className='ReceptionistDashboard-upper-sec'>
          <div className='ReceptionistDashboard-logo'>
            <Link to='/'>
              {" "}
              <img src={ropa_logo} alt='' />
            </Link>
          </div>
          <div className='ReceptionistDashboard-profile'>
            <div className='rdb-profile'>
              <img src={receptionist2_pic} alt='' />
            </div>
            <h2>Receptionist II</h2>
            <p>{userInfo.fullName.toUpperCase()}</p>
          </div>
        </div>
        <div className='ReceptionistDashboard-lower-sec'>
          <ul>
            <NavLink
              to='/StaffDashboard'
              className={({ isActive }) => {
                return isActive ? "hover-rdb-btn" : "";
              }}
            >
              <li>Home</li>
            </NavLink>

            <NavLink
              to='/ReceptionAccount'
              className={({ isActive }) => {
                return isActive ? "hover-rdb-btn" : "";
              }}
            >
              <li>Payments</li>
            </NavLink>

            <NavLink
              to='/History'
              className={({ isActive }) => {
                return isActive ? "hover-rdb-btn" : "";
              }}
            >
              <li>History</li>
            </NavLink>
            <li>
              <button className='logout-btn' onClick={signoutHandler}>
                Signout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ReceptionistDashboard;
