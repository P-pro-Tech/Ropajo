import React, { useState } from "react";
import "./ReservationInfo.css";
import { Link } from "react-router-dom";
import RIDashboard from "./RIDashboard/RIDashboard";
import DashboardRoomProfile from "../../DashboardRoomProfile/DashboardRoomProfile";
import DashBoardHeader from "../../DashBoardHeader/DashBoardHeader";

const ReservationInfo = () => {
  const [profileShow, setProfileShow] = useState(false);
  return (
    <div className="ReservationInfo">
      <div className="ReservationInfo-web">
        <div className="ReservationInfo-guest-section">
          {/* <ReceptionistDashboard /> */}
          <RIDashboard />
        </div>

        <div className="ReservationInfo-content-section">
          <div className="ReservationInfo-mobile-header">
            <DashboardRoomProfile
              profileShow={profileShow}
              setProfileShow={setProfileShow}
            />
            <DashBoardHeader setProfileShow={setProfileShow} />
          </div>
          <div className="ReservationInfo-content-head">
            <Link to="/StaffDashboard">Back to Homepage</Link>
          </div>
          <div className="ReservationInfo-content-body">
            <p> </p>

            <div className="ReservationInfo-content-table-section">
              <div className="ReservationInfo-web-table-holder">
                <section className="ReservationInfo-section">
                  <div>
                    <h2>Kastina Malu</h2>
                    <p>+99023311876</p>
                    <p>03.02.2023</p>
                  </div>
                  <div>
                    <h2>207</h2>
                    <p>SUPER SUPREME EXECUTIVE 1</p>
                  </div>
                  <div className="ReservationInfo-buttons">
                    <Link to='/GuestDashBoardRoom'><button>CHECK IN</button></Link>
                    <Link to='/StaffDashboard'><button>DELETE</button></Link>
                    
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationInfo;
