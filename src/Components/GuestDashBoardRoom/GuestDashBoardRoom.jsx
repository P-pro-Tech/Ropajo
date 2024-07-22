import React from "react";
// import "./GuestDashBoardRoom.css";
import '../../index.css'
import GuestDashBoard from '../GuestDashBoard/GuestDashBoard'
import { Link } from 'react-router-dom'
import DashBoardHeader from '../DashBoardHeader/DashBoardHeader'
import roll_icon from '../../assets/play-icon.svg'
import Table from '../Table/Table'
import GuestTable from "../GuestTable/GuestTable";

const GuestDashBoardRoom = () => {
  return (
    <>
      <div className="dashboardAccount">
        <div className="dashboardAccount-web">
          <div className="dashAccount-guest-section">
            <GuestDashBoard />
          </div>

          <div className="dashAccount-content-section">
            <div className="dashAccount-content-head">
              <Link>Back to Homepage</Link>
            </div>
            <div className="dashAccount-content-body">
              <p>Peter Patrick F. &nbsp;&nbsp;&nbsp;R1410x </p>
              <div>
                <div className="dashAccount-content-table-section">
                  {/* table */}
                  {/* <Table /> */}
                  <GuestTable/>

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
        </div>
      </div>
    </>
  );
};

export default GuestDashBoardRoom;
