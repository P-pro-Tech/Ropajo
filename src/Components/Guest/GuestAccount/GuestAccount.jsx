import React, { useState } from "react";
import "./GuestAccount.css";
import { Link } from "react-router-dom";
import DashBoardHeader from "../../DashBoardHeader/DashBoardHeader";
import play_icon from "../../../assets/play-icon.svg";

import Table from "../../Table/Table";
import DashboardRoomProfile from "../../DashboardRoomProfile/DashboardRoomProfile";
import ReceptionistDashboard from "../../Staff-Receptionist/ReceptionistDashboard/ReceptionistDashboard";

const GuestAccount = () => {
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);

  const [profileShow, setProfileShow] = useState(false);
  return (
    <div className="GuestAccount">
       {/* websection starts here */}
      <div className="GuestAccount-web">
        <div className="dashAccount-guest-section">
          <ReceptionistDashboard/>
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
      {/* websection ends here */}


      {/* mobile deign start here */}
      <div className="mobile-dasboardAccount">
        <div className="mobile-dasboardAccount-head">
          <DashboardRoomProfile profileShow={profileShow} setProfileShow={setProfileShow}/>
          <DashBoardHeader setProfileShow={setProfileShow}/>
        </div>
        <div className="head-container">
            <h4>Accounts</h4>
        </div>
        <div className="dropdown-mobile-table">
          <div className="dropdown">
            <div className="dropdown-btn">
              <div className="dropdown-item-left">
                <img
                  src={play_icon}
                  alt=""
                  className={
                    isActive1 ? "dropdown-icon rotate-icon" : "dropdown-icon"
                  }
                  onClick={() => setIsActive1(!isActive1)}
                />
               <p>Room:</p>
              </div>
            </div>
            {isActive1 && (
              <div className="dropdown-content">
                <div className="dropdown-item">
                  <div className="dropdown-item-left">Date:</div>
                  <div className="dropdown-item-right">03.02.2024</div>
                </div>

                <div className="dropdown-item">
                  <div className="dropdown-item-left">Bill:</div>
                  <div className="dropdown-item-right">90,000.00</div>
                </div>

                <div className="dropdown-item">
                  <div className="dropdown-item-left">Paid:</div>
                  <div className="dropdown-item-right">40,000.00</div>
                </div>

                <div className="dropdown-item">
                  <div className="dropdown-item-left">Balance:</div>
                  <div className="dropdown-item-right">50,000.00</div>
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
                <p>Laundry:</p>
              </div>
            </div>
            {isActive2 && (
              <div className="dropdown-content">
                <div className="dropdown-item">
                  <div className="dropdown-item-left">Date:</div>
                  <div className="dropdown-item-right">03.02.2024</div>
                </div>

                <div className="dropdown-item">
                  <div className="dropdown-item-left">Bill</div>
                  <div className="dropdown-item-right">90,000.00</div>
                </div>

                <div className="dropdown-item">
                  <div className="dropdown-item-left">Paid:</div>
                  <div className="dropdown-item-right">40,000.00</div>
                </div>

                <div className="dropdown-item">
                  <div className="dropdown-item-left">Balance:</div>
                  <div className="dropdown-item-right">50,000.00</div>
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
                <p>Restaurant:</p>
              </div>
            </div>
            {isActive3 && (
              <div className="dropdown-content">
                <div className="dropdown-item">
                  <div className="dropdown-item-left">Date:</div>
                  <div className="dropdown-item-right">03.02.2024</div>
                </div>

                <div className="dropdown-item">
                  <div className="dropdown-item-left">Bill:</div>
                  <div className="dropdown-item-right">90,000.00</div>
                </div>

                <div className="dropdown-item">
                  <div className="dropdown-item-left">Paid:</div>
                  <div className="dropdown-item-right">40,000.00</div>
                </div>

                <div className="dropdown-item">
                  <div className="dropdown-item-left">Balance:</div>
                  <div className="dropdown-item-right">50,000.00</div>
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
                    isActive4 ? "dropdown-icon rotate-icon" : "dropdown-icon"
                  }
                  onClick={() => setIsActive4(!isActive4)}
                />
                <p>Pool:</p>
              </div>
            </div>
            {isActive4 && (
              <div className="dropdown-content">
                <div className="dropdown-item">
                  <div className="dropdown-item-left">Date:</div>
                  <div className="dropdown-item-right">03.02.2024</div>
                </div>

                <div className="dropdown-item">
                  <div className="dropdown-item-left">Bill:</div>
                  <div className="dropdown-item-right">90,000.00</div>
                </div>

                <div className="dropdown-item">
                  <div className="dropdown-item-left">Paid:</div>
                  <div className="dropdown-item-right">40,000.00</div>
                </div>

                <div className="dropdown-item">
                  <div className="dropdown-item-left">Balance:</div>
                  <div className="dropdown-item-right">50,000.00</div>
                </div>
              </div>
            )}
          </div>



        </div>

        {/* Bottom Total Below */}

        
      </div>
    </div>
  );
};

export default GuestAccount;
