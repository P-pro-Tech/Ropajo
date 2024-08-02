import React from "react";
import './RIDashboard.css'
import ropa_logo from '../../../../assets/mob-logo.svg'
import profile_pic from '../../../../assets/receptionist_1.jpg'
import { Link, NavLink } from 'react-router-dom'

const RIDashboard = () => {
  return (
    <div className="RIDashboard">
      <div className="RIDashboard-upper-sec">
        <div className="RIDashboard-logo">
          <Link to='/'><img src={ropa_logo} alt="" /></Link>
        </div>
        <div className="RIDashboard-profile">
          <div className="RID-profile">
            <img src={profile_pic} alt="" />
          </div>
          <h2>Martha Albert</h2>
          <p>RECEPTIONIST</p>
        </div>
      </div>
      <div className="RIDashboard-lower-sec">
        <ul>
          {" "}
          {/*DashboardRoom*/}
          <NavLink
            to="/GuestAccessPage"
            className={({ isActive }) => {
              return isActive ? "hover-RID-btn" : "";
            }}
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to="/GuestAccount"
            className={({ isActive }) => {
              return isActive ? "hover-RID-btn" : "";
            }}
          >
            <li>Account</li>
          </NavLink>
          <NavLink>
            <li>Signout</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default RIDashboard;
