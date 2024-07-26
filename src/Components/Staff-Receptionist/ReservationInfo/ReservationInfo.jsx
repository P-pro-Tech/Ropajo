import React from "react";
import "./ReservationInfo.css";
import { Link } from "react-router-dom";
import ReceptionistDashboard from "../ReceptionistDashboard/ReceptionistDashboard";
import GuestDashBoard from "../../GuestDashBoard/GuestDashBoard";
import RIDashboard from "./RIDashboard/RIDashboard";

const ReservationInfo = () => {
  return (
    <>
      <div className="dashboardAccount">
        <div className="dashboardAccount-web">
          <div className="dashAccount-guest-section">
            {/* <ReceptionistDashboard /> */}
            <RIDashboard/>
          </div>

          <div className="dashAccount-content-section">
            <div className="dashAccount-content-head">
              <Link>Back to Homepage</Link>
            </div>
            <div className="dashAccount-content-body">
              <p> </p>
              <div>
                <div className="Staff-content-table-section">
                  <div className="dashAccount-web-table-holder">
                    <section className="ReservationInfo-section">
                        <div>
                            <h2>Kastina Malu</h2>
                            <p>+99023311876</p>
                        </div>
                        <div>
                            <h2>207</h2>
                            <p>SUPER SUPREME EXECUTIVE  1</p>
                        </div>
                        <div className="ReservationInfo-buttons" >
                            <button>CHECK IN</button>
                            <button>DELETE</button>
                        </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* mobile deign start here */}
        {/* <div className='mobile-dasboardAccount'>
        <div className='mobile-dasboardAccount-head'>
            <DashBoardHeader/>
        </div>
        
    </div> */}
      </div>
    </>
  );
};

export default ReservationInfo;
