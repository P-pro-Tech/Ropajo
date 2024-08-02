/** @format */

import React from "react";
import "./GuestInfoTableRow.css";
import copy from "../../../assets/Copy.svg";
import { Link } from "react-router-dom";
const GuestInfoTableRow = ({ index, names, uniqueNo, phone }) => {
  const [copySuccess, setCopySuccess] = React.useState("");
  const handleCopyClick = async () => {
    try {
      // Use the Clipboard API to copy text to the clipboard
      await navigator.clipboard.writeText(uniqueNo);
      setCopySuccess("Copied!");

      // Optionally, clear the success message after a short delay
      setTimeout(() => setCopySuccess(""), 2000);
    } catch (error) {
      console.error("Failed to copy text:", error);
      setCopySuccess("Failed to copy");
    }
  };
  return (
    <>
      <div className='GuestInfoTableRow' key={index}>
        <p className='GuestInfoTableRow-name'>{names}</p>
        <div className='GuestInfoTableRow-id-sec'>
          <p>{uniqueNo}</p>
          <span style={{ display: "flex" }}>
            <button className='copy-btn' onClick={handleCopyClick}>
              <img src={copy} alt='' />
            </button>
            {copySuccess && (
              <span
                style={{ color: "green", marginLeft: "10px" }}
                className='copy-success'
              >
                {copySuccess}
              </span>
            )}
          </span>
        </div>
        <p>{phone}</p>
      </div>
    </>
  );
};

export default GuestInfoTableRow;
