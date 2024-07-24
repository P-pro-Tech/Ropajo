import React from "react";
import "./GuestAccessPage.css";
import GuestDashBoard from "../GuestDashBoard/GuestDashBoard";
import { Link } from "react-router-dom";
import DashBoardHeader from "../DashBoardHeader/DashBoardHeader";

const GuestAccessPage = () => {
  return (
    <div>
      <div className="dashboardAccount-web">
        <div className="dashAccount-guest-section">
          <GuestDashBoard />
        </div>

        <div className="dashAccount-content-section">
          <div className="dashAccount-content-head">
            <Link>Back to Homepage</Link>
          </div>
          <div className="dashAccount-content-body">
            <p>{/*Account*/} </p>
            <div>
              <div className="dashAccount-content-table-section">
                {/* table */}
                <div className="access-card">
                  <div className="access-card-box">
                    <h2>Adojo Peter A.A</h2>
                    <p>Unique Number: R1410X</p>
                  </div>
                  <div className="access-card-box double-box">
                    <div>
                      <h2>WIFI</h2>
                      <div>
                        <p>Username: Ropajo</p>
                        <p>Password: Dragon234</p>
                      </div>
                    </div>
                    <div>
                      <h2>Netflix</h2>
                      <div>
                        <p>Username: ropajohotels2@gmail.com</p>
                        <p>Password: Dragonfly</p>
                      </div>
                    </div>
                  </div>
                  <div className="access-card-box">
                    <h2>Emergency</h2>
                    <p>0902213344556</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* mobile deign start here */}
    <div className='mobile-dasboardAccount'>
        <div className='mobile-dasboardAccount-head'>
            <DashBoardHeader/>
            
        </div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et eligendi ullam modi quos ea quia blanditiis est, molestiae officiis eius porro corporis consequatur quae veniam molestias repellat possimus. Porro, nesciunt?</p>
        
    </div>
    </div>
  );
};

export default GuestAccessPage;
