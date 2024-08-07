/** @format */

import React from "react";
import "./OnlineBookingList.css";
import ReceptionistDashboard from "../ReceptionistDashboard/ReceptionistDashboard";
import { Link } from "react-router-dom";
import OnlineBookingListItem from "../OnlineBookingListItem/OnlineBookingListItem";
import { useGetBookingsQuery } from "../../../hooks/book";
import { CgSpinner } from "react-icons/cg";

const GuestRoomDetails = [
  {
    name: "Peter Patrick F.",
    address: "Abuja",
    phoneNo: "+2345667940",
  },
  {
    name: "Agbo James",
    address: "14 Hauston Texas",
    phoneNo: "+2345667940",
  },
  {
    name: "Fanen Torkura JP",
    address: "S.A",
    phoneNo: "+2345667940",
  },
];
const OnlineBookingList = () => {
  const { data: bookings, isPending } = useGetBookingsQuery();

  return (
    <>
      <div className='OnlineBookingList'>
        <div className='OnlineBookingList-web'>
          <div className='OnlineBookingList-guest-section'>
            {/* <ReceptionistDashboard /> */}
            <ReceptionistDashboard />
          </div>

          <div className='OnlineBookingList-content-section'>
            <div className='OnlineBookingList-content-head'>
              <Link to='/StaffDashboard'>Dashboard</Link>
            </div>
            <div className='OnlineBookingList-content-body'>
              <div className='OnlineBookingList-bar-holder'>
                <p>Bookings</p>
                {/* <input type="text" placeholder="Search Guests" /> */}
              </div>
              <div className='OnlineBookingList-content-holder'>
                <div className='OnlineBookingList-table-section'>
                  {/* <div className="OnlineBookingList-web-table-holder"> */}
                  <div className='mg-web-table-holder'>
                    <table className='mg-web-table'>
                      <div className='OnlineBookingList-thead'>
                        <p>Name</p>
                        <p>Address</p>
                        <p> Contact</p>
                      </div>
                      <div className='OnlineBookingList-display-plate'>
                        {isPending ? (
                          <CgSpinner
                            className='animate-spin'
                            style={{ margin: "auto" }}
                            size={20}
                          />
                        ) : (
                          bookings.map((details, index) => (
                            <OnlineBookingListItem
                              names={details.fullName}
                              email={details.email}
                              phone={details.phoneNumber}
                              index={index}
                            />
                          ))
                        )}
                      </div>
                    </table>
                  </div>
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnlineBookingList;
export const guestRoomCount = GuestRoomDetails.length;
