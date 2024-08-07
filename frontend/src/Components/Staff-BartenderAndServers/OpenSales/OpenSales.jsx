import React from "react";
import GuestReservationHeader from "../../GuestReservationHeader/GuestReservationHeader";
import "./OpenSales.css";
import { Link } from "react-router-dom";


const OpenSales = () => {
  return (
    <div className="OpenSales">
      <div className="OpenSales-hue">
        <div className="OpenSales-head">
          <GuestReservationHeader />
        </div>
        <div className="OpenSales-body">
          <div className="OpenSales-header-details">
            <p className="OpenSales-title">Open Sales</p>
            <h1></h1>
            <p className="OpenSales-staff">
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

          <form action="" className="OpenSales-form">

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

export default OpenSales;
