import React from "react";
import ReceptionistDashboard from "../ReceptionistDashboard/ReceptionistDashboard";
import { Link } from "react-router-dom";
import "./StaffDashboard.css";
import AvailableRooms from "../AvailableRooms/AvailableRooms";
import ReservedRoomBtn from "../ReservedRoomBtn/ReservedRoomBtn";
import AvailableApartmentsBtns from "../AvailableApartmentsBtns/AvailableApartmentsBtns";

const AvailableRoomsInfo = [305, 112, "004", "007"];

const reservedroomsbtn = ["004", "007", "009"];

const AvailableAppartmentInfo = ["007", "009", "005", "006", "007", "009"];

const StaffDashboard = () => {
  return (
    <>
      <div className="dashboardAccount">
        <div className="dashboardAccount-web">
          <div className="dashAccount-guest-section">
            <ReceptionistDashboard />
          </div>

          <div className="dashAccount-content-section">
            <div className="dashAccount-content-head">
              <Link>Back to Homepage</Link>
            </div>
            <div className="dashAccount-content-body">
              <p>Available Rooms </p>
              <div>
                <div className="Staff-content-table-section">
                  <div className="staff-room-btn-section">
                    {AvailableRoomsInfo.map((items, index) => (
                      <AvailableRooms items={items} index={index} />
                    ))}
                  </div>

                  <div className="staff-apartments">
                    <p>Available Appartments </p>
                    <div className="staff-apartment-btn-section">

                        {AvailableAppartmentInfo.map((appartmentnum, index) => (
                          <AvailableApartmentsBtns items={appartmentnum} index={index} />
                        ))}
                      </div>
                  </div>


                  <div className="staff-apartments">
                    <p>Reserved Room </p>
                    <div className="staff-apartment-btn-section-reserved">
                      {reservedroomsbtn.map((reservednum, index) => (
                        <ReservedRoomBtn item={reservednum} index={index} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="staff-option-btn-section">
              <Link to="/RegisterGuests" className="staff-dashboard-button">
                Register Guest
              </Link>
              <Link to="" className="staff-dashboard-button">
                Manage Guests
              </Link>
              <Link to="/Reservations" className="staff-dashboard-button">
                Reservations
              </Link>
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

export default StaffDashboard;
