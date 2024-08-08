/** @format */

import React, { useContext } from "react";
import GuestReservationHeader from "../../GuestReservationHeader/GuestReservationHeader";
import "./UpdateGuestPayment.css";
import { Link, useLocation } from "react-router-dom";
import { useGetGuestDetailsQuery } from "../../../hooks/guest";
import { useGetPaymentDetailQuery } from "../../../hooks/payment";
import { Store } from "../../../Store";

const UpdateGuestPayment = () => {
  const location = useLocation();

  const { state: userInfo } = useContext(Store);

  const queryParams = new URLSearchParams(location.search);

  const userUniqueId = queryParams.get("userUniqueId");

  const { data } = useGetGuestDetailsQuery(userUniqueId);

  const { data: paymentData } = useGetPaymentDetailQuery(userUniqueId);
  return (
    <div className='UpdateGuestPayment'>
      <div className='UpdateGuestPayment-hue'>
        <div className='UpdateGuestPayment-head'>
          <GuestReservationHeader />
        </div>
        <div className='UpdateGuestPayment-body'>
          <div className='UpdateGuestPayment-header-details'>
            <p className='UpdateGuestPayment-title'>Update Payments</p>
            <h1>Adejo Peter</h1>
            <p className='UpdateGuestPayment-staff'>
              Collected by: Martha Albert
            </p>
            <select name='Category' id='paymentCategory'>
              <option value='Category'>Category</option>
              <option value='Room'>Room</option>
              <option value='Laundry'>Laundry</option>
              <option value='Pool'>Pool</option>
              <option value='Restaurant'>Restaurant</option>
              <option value='Bar'>Bar</option>
            </select>
          </div>

          <form action='' className='UpdateGuestPayment-form'>
            <textarea
              name=''
              id=''
              rows={5}
              cols={50}
              placeholder='Comments'
            ></textarea>
            <label>
              Bill:
              <input type='text' placeholder='' />
            </label>
            <label>
              Paid:
              <input type='text' placeholder='' />
            </label>
            <Link to='/GuestDashBoardRoom'>
              <button type='submit'>Update</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateGuestPayment;
