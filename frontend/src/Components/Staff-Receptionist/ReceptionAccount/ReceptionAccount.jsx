import React, { useState } from "react";
import "./ReceptionAccount.css";
import { Link } from "react-router-dom";
import DashBoardHeader from "../../DashBoardHeader/DashBoardHeader";

import DashboardRoomProfile from "../../DashboardRoomProfile/DashboardRoomProfile";
import ReceptionistDashboard from "../ReceptionistDashboard/ReceptionistDashboard";
import ReceptionAccountTableRow from "../ReceptionAccountTableRow/ReceptionAccountTableRow";

const ReceptionAccount = () => {


  const [profileShow, setProfileShow] = useState(false);

  const receptionAccountTableRow = [
    {
      date: "03.02.2023",
      category: "Room",
      Bill: "90,000.00",
      Paid: "40,000.00",
      Balance: "50,000.00",
    },
    {
      date: "03.02.2023",
      category: "Laundry",
      Bill: "90,000.00",
      Paid: "15,000.00",
      Balance: "10,000.00",
    },
    {
      date: "03.02.2023",
      category: "Restaurant",
      Bill: "90,000.00",
      Paid: "9,500.00",
      Balance: "00.00",
    },
    {
      date: "03.02.2023",
      category: "Pool",
      Bill: "90,000.00",
      Paid: "15,000.00",
      Balance: "10,000.00",
    },
    {
      date: "03.02.2023",
      category: "Room",
      Bill: "90,000.00",
      Paid: "00.00",
      Balance: "30,000.00",
    },
    {
      date: "03.02.2023",
      category: "Room",
      Bill: "90,000.00",
      Paid: "40,000.00",
      Balance: "50,000.00",
    },
    {
      date: "03.02.2023",
      category: "Laundry",
      Bill: "80,000.00",
      Paid: "15,000.00",
      Balance: "10,000.00",
    },
    {
      date: "03.02.2023",
      category: "Restaurant",
      Bill: "90,000.00",
      Paid: "9,500.00",
      Balance: "00.00",
    },
    {
      date: "03.02.2023",
      category: "Pool",
      Bill: "90,000.00",
      Paid: "15,000.00",
      Balance: "10,000.00",
    },
    {
      date: "03.02.2023",
      category: "Room",
      Bill: "90,000.00",
      Paid: "00.00",
      Balance: "30,000.00",
    },
  ];

  return (
    <div className="ReceptionAccount">
      {/* websection starts here */}
      <div className="ReceptionAccount-web">
        <div className="ReceptionAccount-guest-section">
          <ReceptionistDashboard />
        </div>

        <div className="ReceptionAccount-content-section">
          <div className="ReceptionAccount-mobile-header">
            <DashboardRoomProfile
              profileShow={profileShow}
              setProfileShow={setProfileShow}
            />
            <DashBoardHeader setProfileShow={setProfileShow} />
          </div>
          <div className="ReceptionAccount-content-head">
            <Link to="/">Back to Homepage</Link>
          </div>
          <div className="ReceptionAccount-content-body">
            <div className="ReceptionAccount-bar-holder">
              <div>
                <p>Account</p>
              </div>
              <div>
                <select name="Date" id="Date">
                  <option value="Date">Date</option>
                  <option value="Last Week">Month</option>
                  <option value="Year">Year</option>
                </select>
                <select name="Categoryate" id="Category">
                  <option value="Category">Category</option>
                  <option value="Room">Room</option>
                  <option value="Laundry">Laundry</option>
                  <option value="Bar">Bar</option>
                  <option value="Pool">Pool</option>
                  <option value="Restaurant">Restaurant</option>
                </select>
              </div>
            </div>

            <div className="ReceptionAccount-content-table-section">
              {/* table */}
              <div className="ReceptionAccount-web-table-holder">
                <table className="ReceptionAccount-web-table">
                  <thead>
                    <div className="header_div">
                      <span>Date</span>
                      <span>Category</span>
                      <span>Bill</span>
                      <span>Paid</span>
                      <span>Balance</span>
                    </div>
                  </thead>
                  <section>
                    {receptionAccountTableRow.map((content) => (
                      <ReceptionAccountTableRow
                        date={content.date}
                        category={content.category}
                        bill={content.Bill}
                        paid={content.Paid}
                        balance={content.Balance}
                      />
                    ))}
                  </section>
                </table>
              </div>
              {/* <Table /> */}
            </div>
          </div>
        </div>
      </div>
      {/* websection ends here */}

 
    </div>
  );
};

export default ReceptionAccount;
