/** @format */

import React from "react";
import ReceptionistDashboard from "../ReceptionistDashboard/ReceptionistDashboard";
import { Link } from "react-router-dom";
import "./StaffDashboard.css";
import AvailableRooms from "../AvailableRooms/AvailableRooms";
import ReservedRoomBtn from "../ReservedRoomBtn/ReservedRoomBtn";
import AvailableApartmentsBtns from "../AvailableApartmentsBtns/AvailableApartmentsBtns";
import { guestRoomCount } from "../OnlineBookingList/OnlineBookingList";
import { useGetBookingsQuery } from "../../../hooks/book";

const AvailableRoomsInfo = [305, 112, "004", "007"];

const reservedroomsbtn = [
  {
    amount: "N35,000",
    apartment: "ROPAJO DELUXE",
  },
  {
    amount: "N45,000",
    apartment: "ROPAJO EXECUTIVE",
  },
];

const AvailableAppartmentInfo = [
  {
    amount: "N35,000",
    apartment: "ROPAJO DELUXE",
  },
  {
    amount: "N45,000",
    apartment: "ROPAJO EXECUTIVE",
  },
  {
    amount: "N48,000",
    apartment: "ROPAJO SUPER EXECUTIVE",
  },
  {
    amount: "N65,000",
    apartment: "SEMINI (premium executive)",
  },
  {
    amount: "N65,000",
    apartment: "SCORPIO (premium executive)",
  },
  {
    amount: "N35,000",
    apartment: "ROPAJO DELUXE",
  },
  {
    amount: "N35,000",
    apartment: "ROPAJO DELUXE",
  },
];

const StaffDashboard = () => {
  // fetch all bookings
  const { data: bookings, isPending } = useGetBookingsQuery();

  return (
    <>
      <div className='dashboardAccount'>
        <div className='dashboardAccount-web'>
          <div className='dashAccount-guest-section'>
            <ReceptionistDashboard />
          </div>

          <div className='dashAccount-content-section'>
            <div className='dashAccount-content-head'>
              <Link>Back to Homepage</Link>
            </div>
            <div className='dashAccount-content-body'>
              <p>Available Rooms </p>
              <div>
                <div className='Staff-content-table-section'>
                  <div className='staff-room-btn-section'>
                    {AvailableAppartmentInfo.map((items, index) => (
                      <AvailableRooms
                        items={items.amount}
                        apartment={items.apartment}
                        index={index}
                      />
                    ))}
                  </div>

                  <div className='staff-apartments'>
                    <p>Reserved Room </p>
                    <div className='staff-apartment-btn-section-reserved'>
                      {reservedroomsbtn.map((reservednum, index) => (
                        <ReservedRoomBtn
                          item={reservednum.amount}
                          apartment={reservednum.apartment}
                          index={index}
                        />
                      ))}
                    </div>
                  </div>

                  <div className='Bookings-notification'>
                    <Link to='/OnlineBookingList' class='button-StaffDashboard'>
                      <span class='button-text'>Bookings</span>
                      <span class='notification'>
                        {bookings && bookings.length}
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className='staff-option-btn-section'>
              <Link to='/RegisterGuests' className='staff-dashboard-button'>
                Register Guest
              </Link>
              <Link to='/ManageGuest' className='staff-dashboard-button'>
                Manage Guests
              </Link>
              {/* <Link to="/Reservations" className="staff-dashboard-button">
                Reservations
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StaffDashboard;
