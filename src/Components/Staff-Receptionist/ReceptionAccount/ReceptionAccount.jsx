import React, { useState } from "react";
import './ReceptionAccount.css'
import GuestDashBoard from "../../Guest/GuestDashBoard/GuestDashBoard";
import { Link } from "react-router-dom";
import DashBoardHeader from "../../DashBoardHeader/DashBoardHeader";
import roll_icon from "../../../assets/play-icon.svg";
import play_icon from "../../../assets/play-icon.svg";
import Table from "../../Table/Table";
import DashboardRoomProfile from "../../DashboardRoomProfile/DashboardRoomProfile";
import ReceptionistDashboard from "../ReceptionistDashboard/ReceptionistDashboard";


const ReceptionAccount = () => {
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);

  const [profileShow, setProfileShow] = useState(false);
  return (
    <div className="ReceptionAccount">
      {/* websection starts here */}
      <div className="ReceptionAccount-web">
        <div className="ReceptionAccount-guest-section">
          <ReceptionistDashboard />
        </div>

        <div className="ReceptionAccount-content-section">
          <div className="ReceptionAccount-content-head">
            <Link>Back to Homepage</Link>
          </div>
          <div className="ReceptionAccount-content-body">
            <div className="ReceptionAccount-bar-holder">
              <p>Account</p>
              <span>Edit</span>
            </div>
            <div>
              <div className="ReceptionAccount-content-table-section">
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
          <DashboardRoomProfile
            profileShow={profileShow}
            setProfileShow={setProfileShow}
          />
          <DashBoardHeader setProfileShow={setProfileShow} />
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

export default ReceptionAccount;
