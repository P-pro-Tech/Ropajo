/** @format */

import React from "react";
import "./ManageGuest.css";
import { Link } from "react-router-dom";
import ReceptionistDashboard from "../ReceptionistDashboard/ReceptionistDashboard";
import GuestInfoTableRow from "../GuestInfoTableRow/GuestInfoTableRow";
import { useGetGuestsQuery } from "../../../hooks/guest";

const ManageGuest = () => {
  const { data: GuestRoomDetails = [] } = useGetGuestsQuery();

  return (
    <>
      <div className='ManageGuest'>
        <div className='ManageGuest-web'>
          <div className='ManageGuest-guest-section'>
            {/* <ReceptionistDashboard /> */}
            <ReceptionistDashboard />
          </div>

          <div className='ManageGuest-content-section'>
            <div className='ManageGuest-content-head'>
              <Link>Back to Homepage</Link>
            </div>
            <div className='ManageGuest-content-body'>
              <div className='ManageGuest-bar-holder'>
                <p>Guest Information</p>
                <input type='text' placeholder='Search Guests' />
              </div>
              <div className='ManageGuest-content-holder'>
                <div className='ManageGuest-table-section'>
                  {/* <div className="ManageGuest-web-table-holder"> */}
                  <div className='mg-web-table-holder'>
                    <table className='mg-web-table'>
                      <div className='ManageGuest-thead'>
                        <p>Name</p>
                        <p>Unique No.</p>
                        <p> Contact</p>
                      </div>
                      <div className='ManageGuest-scroll '>
                        {GuestRoomDetails.map((details, index) => (
                          <GuestInfoTableRow
                            names={details.fullName}
                            uniqueNo={details.userUniqueId}
                            phone={details.phoneNumber}
                            index={index}
                          />
                        ))}
                      </div>
                    </table>
                  </div>
                  {/* </div> */}
                </div>
              </div>
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

export default ManageGuest;
