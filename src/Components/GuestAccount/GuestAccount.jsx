import React, { useState } from "react";
import "./GuestAccount.css";
import GuestDashBoard from "../GuestDashBoard/GuestDashBoard";
import { Link } from "react-router-dom";
import DashBoardHeader from "../DashBoardHeader/DashBoardHeader";
import roll_icon from "../../assets/play-icon.svg";
import play_icon from "../../assets/play-icon.svg";

import Table from "../Table/Table";

const GuestAccount = () => {
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);

  const [profileShow, setProfileShow] = useState(false);
  return (
    <div className="GuestAccount">
      <div className="GuestAccount-web">
        <div className="dashAccount-guest-section">
          <GuestDashBoard />
        </div>

        <div className="dashAccount-content-section">
          <div className="dashAccount-content-head">
            <Link>Back to Homepage</Link>
          </div>
          <div className="dashAccount-content-body">
            <p>Account </p>
            <div>
              <div className="dashAccount-content-table-section">
                {/* table */}
                <Table />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile deign start here */}
      <div className="mobile-dasboardAccount">
        <div className="mobile-dasboardAccount-head">
          <DashBoardHeader />
        </div>
        <div className="head-container">
            <h4>Accounts</h4>
        </div>
        <div className="dropdown-mobile-table">
          <div className="dropdown">
            <div className="dropdown-btn">
              <div className="dropdown-item-head">
                <img
                  src={play_icon}
                  alt=""
                  className={
                    isActive1 ? "dropdown-icon rotate-icon" : "dropdown-icon"
                  }
                  onClick={() => setIsActive1(!isActive1)}
                />
                {/* <img src={play_icon} alt="" onClick={(e) =>
              setIsActive1(!isActive1)} /> */}
                Room
              </div>
            </div>
            {isActive1 && (
              <div className="dropdown-content">
                <div className="dropdown-item">
                  <div className="dropdown-item-left">Date:</div>
                  <div className="dropdown-item-right">13.04.2024</div>
                </div>

                <div className="dropdown-item">
                  <div className="dropdown-item-left">Bill:</div>
                  <div className="dropdown-item-right">06:47pm</div>
                </div>

                <div className="dropdown-item">
                  <div className="dropdown-item-left">Paid:</div>
                  <div className="dropdown-item-right">
                    <p>13.04.2024</p>
                    <p>12:00pm</p>
                  </div>
                </div>

                <div className="dropdown-item">
                  <div className="dropdown-item-left">Balance:</div>
                  <div className="dropdown-item-right">30,000.00</div>
                </div>
              </div>
            )}
          </div>

          <div className="dropdown">
            <div className="dropdown-btn">
              <div className="dropdown-item-left">
                <img
                  src={play_icon}
                  alt=""
                  className={
                    isActive2 ? "dropdown-icon rotate-icon" : "dropdown-icon"
                  }
                  onClick={() => setIsActive2(!isActive2)}
                />
                {/* <img src={play_icon} alt="" onClick={(e) =>
          setIsActive2(!isActive2)}/> */}
                Room No:
              </div>
              <div className="dropdown-item-right">256</div>
            </div>
            {isActive2 && (
              <div className="dropdown-content">
                <div className="dropdown-item">
                  <div className="dropdown-item-left">Date:</div>
                  <div className="dropdown-item-right">13.04.2024</div>
                </div>

                <div className="dropdown-item">
                  <div className="dropdown-item-left">Check-in:</div>
                  <div className="dropdown-item-right">06:47pm</div>
                </div>

                <div className="dropdown-item">
                  <div className="dropdown-item-left">Check-out:</div>
                  <div className="dropdown-item-right">
                    <p>13.04.2024</p>
                    <p>12:00pm</p>
                  </div>
                </div>

                <div className="dropdown-item">
                  <div className="dropdown-item-left">Amount:</div>
                  <div className="dropdown-item-right">30,000.00</div>
                </div>
              </div>
            )}
          </div>

          <div className="dropdown">
            <div className="dropdown-btn">
              <div className="dropdown-item-left">
                <img
                  src={play_icon}
                  alt=""
                  className={
                    isActive3 ? "dropdown-icon rotate-icon" : "dropdown-icon"
                  }
                  onClick={() => setIsActive3(!isActive3)}
                />
                {/* <img src={play_icon} alt="" onClick={(e) =>
          setIsActive3(!isActive3)}/> */}
                Room No:
              </div>
              <div className="dropdown-item-right">256</div>
            </div>
            {isActive3 && (
              <div className="dropdown-content">
                <div className="dropdown-item">
                  <div className="dropdown-item-left">Date:</div>
                  <div className="dropdown-item-right">13.04.2024</div>
                </div>

                <div className="dropdown-item">
                  <div className="dropdown-item-left">Check-in:</div>
                  <div className="dropdown-item-right">06:47pm</div>
                </div>

                <div className="dropdown-item">
                  <div className="dropdown-item-left">Check-out:</div>
                  <div className="dropdown-item-right">
                    <p>13.04.2024</p>
                    <p>12:00pm</p>
                  </div>
                </div>

                <div className="dropdown-item">
                  <div className="dropdown-item-left">Amount:</div>
                  <div className="dropdown-item-right">30,000.00</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestAccount;
