import React from "react";
import "./GuestInfoTableRow.css";
import copy from "../../../assets/Copy.svg";
import { Link } from "react-router-dom";
const GuestInfoTableRow = ({ index, names, uniqueNo, phone }) => {
  return (
    <Link to='/GuestDashBoardRoom   '>
      <div className="GuestInfoTableRow" key={index}>
        <p className="GuestInfoTableRow-name">{names}</p>
        <div className="GuestInfoTableRow-id-sec">
          <p>{uniqueNo}</p>
          <span>
            <img src={copy} alt="" />
          </span>
        </div>
        <p>{phone}</p>
      </div>
    </Link>
  );
};

export default GuestInfoTableRow;
