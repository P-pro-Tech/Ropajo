import React from "react";
import "./AvailableRooms.css";
import { Link } from "react-router-dom";
const AvailableRooms = ({ items, index, apartment }) => {
  return (
    // <button key={index} className='availableRooms'>{items}</button>
    <Link to='/AssignRoom'>
      <button key={index} className="reserved-dashboard-button">
        <div>{items}</div> <br />
        <span>{apartment}</span>
      </button>
    </Link>
  );
};

export default AvailableRooms;
