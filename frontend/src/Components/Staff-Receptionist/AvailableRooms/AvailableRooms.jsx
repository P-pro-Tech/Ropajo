/** @format */

import React from "react";
import "./AvailableRooms.css";
import { Link } from "react-router-dom";
const AvailableRooms = ({ amount, index, room }) => {
  return (
    // <button key={index} className='availableRooms'>{items}</button>
    <Link
      to={{
        pathname: `/AssignRoom`,
        search: `?amount=${amount}&room=${room}`,
      }}
    >
      <button key={index} className='reserved-dashboard-button'>
        <div>{amount}</div> <br />
        <span>{room}</span>
      </button>
    </Link>
  );
};

export default AvailableRooms;
