import React, { useState, useRef } from "react";
import "./GuestTable.css";
import play_btn from "../../assets/play-icon.svg";

const GuestTable = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handlePlayButtonClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      
        <div className="GT-table-optioin">
          <div className="GT-option-Button">
            <div>
              <img src={play_btn} alt="" onClick={handlePlayButtonClick} />
              <p>Room:</p>
              
            </div>
          </div>
          {isVisible && (
            <div className="GT-option-Body">
              <section className="GT-table">
                <div className="GT-Table-row table-row-header">
                  <p>Room No.</p>
                  <p>Date</p>
                  <p>Check in</p>
                  <p>Check Out</p>
                  <p>Amount</p>
                </div>
                <div className="GT-Table-row">
                  <p>256</p>
                  <p>13.02.2023</p>
                  <p>06:47pm</p>
                  <p>14:02:2023</p>
                  <p>30,000.00</p>
                </div>
                <div className="GT-Table-row">
                  <p>256</p>
                  <p>13.02.2023</p>
                  <p>06:47pm</p>
                  <p>14:02:2023</p>
                  <p>30,000.00</p>
                </div>
                <div className="GT-Table-row">
                  <p>256</p>
                  <p>13.02.2023</p>
                  <p>06:47pm</p>
                  <p>14:02:2023</p>
                  <p>30,000.00</p>
                </div>
              </section>
            </div>
          )}
          ;
        </div>
        <div className="GT-table-optioin">
          <div className="GT-option-Button">
            <div>
              <img src={play_btn} alt="" onClick={handlePlayButtonClick} />
              <p>Room:</p>
              
            </div>
          </div>
          {isVisible && (
            <div className="GT-option-Body">
              <section className="GT-table">
                <div className="GT-Table-row table-row-header">
                  <p>Room No.</p>
                  <p>Date</p>
                  <p>Check in</p>
                  <p>Check Out</p>
                  <p>Amount</p>
                </div>
                <div className="GT-Table-row">
                  <p>256</p>
                  <p>13.02.2023</p>
                  <p>06:47pm</p>
                  <p>14:02:2023</p>
                  <p>30,000.00</p>
                </div>
                <div className="GT-Table-row">
                  <p>256</p>
                  <p>13.02.2023</p>
                  <p>06:47pm</p>
                  <p>14:02:2023</p>
                  <p>30,000.00</p>
                </div>
                <div className="GT-Table-row">
                  <p>256</p>
                  <p>13.02.2023</p>
                  <p>06:47pm</p>
                  <p>14:02:2023</p>
                  <p>30,000.00</p>
                </div>
              </section>
            </div>
          )}
          ;
        </div>
      
    </>
  );
};

export default GuestTable;
