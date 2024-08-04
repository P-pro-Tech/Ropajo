import React, { useState } from "react";
import './ReceptionAccount.css'
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
                <div>
                <select name="date" id="date">
                  <option value="date">date</option>
                  <option value="today">today</option>
                  <option value="year">year</option>
                  <option value="month">month</option>
                </select>
                <select name="category" id="category">
                  <option value="category">category</option>
                  <option value="Restaurant">Restaurant</option>
                  <option value="Bar">Bar</option>
                  <option value="pool">pool</option>
                  <option value="Room"Room>Room</option>
                  <option value="Laundry">Laundry</option>
                </select>
                </div> 
            </div>
            <div>
              <div className="ReceptionAccount-content-table-section">
                {/* table */}
                {/* <Table /> */}
                <div className="dashAccount-web-table-holder">
      <table className="dashAccount-web-table">
        <thead>
          <div>
            <span>Date</span>
            <span>Category</span>
            <span>Bill</span>
            <span>Paid</span>
            <span>Balance</span>
          </div>
        </thead>
        <section>
          <div>
            <span>03.02.2023</span>
            <span>Room</span>
            <span>90,000.00</span>
            <span>40,000.00</span>
            <span>50,000.00</span>
          </div>
          <div>
            <span>03.02.2023</span>
            <span>Laundry</span>
            <span>25,200.00</span>
            <span>15,000.00</span>
            <span>10,000.00</span>
          </div>
          <div>
            <span>03.02.2023</span>
            <span>Restaurant</span>
            <span>9,500.00</span>
            <span>9,500.00</span>
            <span>0.00</span>
          </div>
          <div>
            <span>03.02.2023</span>
            <span>Pool</span>
            <span>5,000.00</span>
            <span>15,000.00</span>
            <span>10,000.00</span>
          </div>
          <div>
            <span>03.02.2023</span>
            <span>Room</span>
            <span>30,000.00</span>
            <span>00.00</span>
            <span>30,000.00</span>
          </div>
          <div>
            <span>03.02.2023</span>
            <span>Room</span>
            <span>30,000.00</span>
            <span>00.00</span>
            <span>30,000.00</span>
          </div>
          <div>
            <span>03.02.2023</span>
            <span>Room</span>
            <span>30,000.00</span>
            <span>00.00</span>
            <span>30,000.00</span>
          </div>
        </section>

        {/*  */}
      </table>
    </div>
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
        <div className="ReceptionAccount-mobile-table">
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
