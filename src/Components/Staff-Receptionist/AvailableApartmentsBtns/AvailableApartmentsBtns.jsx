import React from "react";
import "./AvailableApartmentsBtns.css";

const AvailableApartmentsBtns = ({items, index, apartment}) => {
  return (
    <button key={index} className="reserved-dashboard-button">
      <div>{items}</div> <br />
      <span>{apartment}</span>
    </button>
  );
};

export default AvailableApartmentsBtns;
