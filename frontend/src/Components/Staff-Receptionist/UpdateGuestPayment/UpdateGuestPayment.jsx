import React from "react";
import GuestReservationHeader from "../../GuestReservationHeader/GuestReservationHeader";
import "./UpdateGuestPayment.css";
import { Link } from "react-router-dom";


const UpdateGuestPayment = () => {
  return (
    <div className="UpdateGuestPayment">
      <div className="UpdateGuestPayment-hue">
        <div className="UpdateGuestPayment-head">
          <GuestReservationHeader />
        </div>
        <div className="UpdateGuestPayment-body">
          <div className="UpdateGuestPayment-header-details">
            <p className="UpdateGuestPayment-title">Update Payments</p>
            <h1>Adejo Peter</h1>
            <p className="UpdateGuestPayment-staff">
              Collected by: Martha Albert
            </p>
            <select name="Category" id="paymentCategory">
              <option value="Category">Category</option>
              <option value="Room">Room</option>
              <option value="Laundry">Laundry</option>
              <option value="Pool">Pool</option>
              <option value="Restaurant">Restaurant</option>
              <option value="Bar">Bar</option>
            </select>
          </div>

          <form action="" className="UpdateGuestPayment-form">

            <textarea name="" id="" rows={5} cols={50} placeholder="Comments"></textarea>
            <label>Bill:<input type="text" placeholder="" /></label>
            <label>Paid:<input type="text" placeholder="" /></label>
            <Link to='/GuestDashBoardRoom'><button  type="submit">Update</button></Link>
            
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateGuestPayment;
