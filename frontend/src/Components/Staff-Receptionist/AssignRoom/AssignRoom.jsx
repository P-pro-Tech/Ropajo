import React from "react";
import "./AssignRoom.css";
import GuestReservationHeader from "../../GuestReservationHeader/GuestReservationHeader";
import { Link } from "react-router-dom";

const AssignRoom = () => {
  return (
    <div className="assignRoom">
      <div className="assignRoom-hue">
        <div className="head">
          <GuestReservationHeader />
        </div>
        <form className="assignRoom-body">
          <div className="assignRoom-body-top">
            <h3>Assign Room</h3>
            <input type="text" name="guest_id" id="" placeholder="Guest ID" />
            {/* <h1>Guest ID</h1> */}
          </div>
          <div className="assignRoom-body-middle">
            <p>Supreme Super Executive 1</p>
            <div className="assignRoom-middle-checkbox">
              <label htmlFor="">
                <input type="checkbox" name="Check in" id="Check in" />
                Check in
              </label>
              <label htmlFor="">
                <input type="checkbox" name="Reservation" id="Reservation" />
                Reservation
              </label>
            </div>
            <div class="assign-date-container" >
              <input
                type="date"
                name="assign_date"
                id="assign_date"
                className="assign_date"
              />
            </div>
          </div>
          <div className="assignRoom-body-bottom">
            <Link to='/GuestDashBoardRoom'><button type="submit">Register</button></Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AssignRoom;
