import React from "react";
import "./AdminLogin.css";
import DashBoardHeader from "../../DashBoardHeader/DashBoardHeader";
import DashboardRoomProfile from "../../DashboardRoomProfile/DashboardRoomProfile";
import { useState } from "react";
import { Link } from "react-router-dom";

const AdminLogin = () => {
  const [profileShow, setProfileShow] = useState(false);
  return (
    <div className="AdminLogin">
      <div className="AdminLogin-hue">
        <div>
          <DashboardRoomProfile
            profileShow={profileShow}
            setProfileShow={setProfileShow}
          />
          <DashBoardHeader setProfileShow={setProfileShow} />
        </div>
        <div className="AdminLogin-body">
          <form className="AdminLogin-form">
            <h1>Sign in</h1>
            <div className="AdminLogin-hide-box"></div>
            <input type="text" name="" id="" placeholder="Admin Unique ID" />
            <Link to='/StaffDashboard'>
              
              <button type="submit" className="AdminLogin-submit">
                Submit
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
