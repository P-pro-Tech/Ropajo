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
            {/* <h1>Guest ID</h1> */}
            <input type="text" placeholder="Guest ID"/>
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
            <div className="assignRoom-date">
              <input type="date" name="" id="" />
            </div>
          </div>
          <div className="assignRoom-body-bottom">
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AssignRoom;
