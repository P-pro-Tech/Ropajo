import React from "react";
import "./ReceptionAccountTableRow.css";

const ReceptionAccountTableRow = ({ date, category, bill, paid, balance }) => {
  return (
    <div>
      <div className="ReceptionAccountTableRow">
        <span>{date}</span>
        <span>{category}</span>
        <span>{bill}</span>
        <span>{paid}</span>
        <span>{balance}</span>
      </div>
      <figure className="ReceptionAccountTableRow-mob">
        <div className="ReceptionAccountTableRow-mob-header">
          <p>{category}</p>
          <p>Date: {date}</p>
        </div>
        <div className="ReceptionAccountTableRow-mod-body">
          <div className="ReceptionAccountTableRow-mob-cont">
            <p>Bill:</p>
            <p>{bill}</p>
          </div>
          <div className="ReceptionAccountTableRow-mob-cont">
            <p>Paid:</p>
            <p>{paid}</p>
          </div>
          <div className="ReceptionAccountTableRow-mob-cont">
            <p>Balance:</p>
            <p>{balance}</p>
          </div>
        </div>
      </figure>
    </div>
  );
};

export default ReceptionAccountTableRow;
