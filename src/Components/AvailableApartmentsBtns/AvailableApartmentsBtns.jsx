import React from "react";
import "./AvailableApartmentsBtns.css";

const AvailableApartmentsBtns = ({items, index}) => {
  return (
    <button key={index} className="reserved-dashboard-button">
      <div>{items}</div> <br />
      <span>Supreme Super Executive 1</span>
    </button>
  );
};

export default AvailableApartmentsBtns;
