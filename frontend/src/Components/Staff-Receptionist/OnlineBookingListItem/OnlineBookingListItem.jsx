/** @format */

import React from "react";
import "./OnlineBookingListItem.css";

const OnlineBookingListItem = ({ names, phone, index, email }) => {
  return (
    <div className='OnlineBookingListItem'>
      <p>{names}</p>
      <p>{email}</p>
      <p>+234{phone}</p>
    </div>
  );
};

export default OnlineBookingListItem;
