/** @format */

import React, { useContext, useState } from "react";
import "./GuestAccessPage.css";
import GuestDashBoard from "../GuestDashBoard/GuestDashBoard";
import { Link } from "react-router-dom";
import DashBoardHeader from "../../DashBoardHeader/DashBoardHeader";
import DashboardRoomProfile from "../../DashboardRoomProfile/DashboardRoomProfile";
import { Store } from "../../../Store";

const GuestAccessPage = () => {
  const [profileShow, setProfileShow] = useState(false);
  const {
    state: { userInfo },
    dispatch,
  } = useContext(Store);

  return (
    <div>
      <div className='GuestAccessPage-web'>
        <div className='GuestAccessPage-guest-section'>
          <GuestDashBoard />
        </div>

        <div className='GuestAccessPage-content-section'>
          <div className='GuestAccessPage-content-head'>
            <Link>Back to Homepage</Link>
          </div>
          <div className='GuestAccessPage-mobile-header'>
            <DashboardRoomProfile
              profileShow={profileShow}
              setProfileShow={setProfileShow}
            />
            <DashBoardHeader setProfileShow={setProfileShow} />
          </div>
          <div className='GuestAccessPage-content-body'>
            <p>{/*Account*/} </p>
            <div>
              <div className='GuestAccessPage-content-table-section'>
                {/* table */}
                <div className='access-card'>
                  <div className='access-card-box'>
                    <h2>{userInfo.fullName}</h2>
                    <p>Unique Number: {userInfo.userUniqueId}</p>
                  </div>
                  <div className='access-card-box double-box'>
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
                  <div className='access-card-box'>
                    <h2>Emergency</h2>
                    <p>0902213344556</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop screen ends here */}

      {/* mobile deign start here */}
      {/* <div className="mobile-dasboardAccount">
        <div className="mobile-dasboardAccount-head">
          <DashBoardHeader />
        </div>

        <div className="dropdown-shadow">
          <div className="mobile-guestAccount-container">
            <div className="subText-holder">
              <div className="subText">
                <h3>Adojo Peter A.</h3>
                <p>Unique Number: R1410X</p>
              </div>
              <div className="subText">
                <h3>Adojo Peter A.</h3>
                <p>Unique Number: R1410X</p>
              </div>
              <div className="subText">
                <h3>Adojo Peter A.</h3>
                <p>Unique Number: R1410X</p>
              </div>
            </div>

            <div>
              <h3>Emergency</h3>
              <p>0902213344556</p>
            </div>
          </div>

        </div>
      </div> */}
    </div>
  );
};

export default GuestAccessPage;
