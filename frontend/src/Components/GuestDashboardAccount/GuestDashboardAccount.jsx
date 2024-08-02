/** @format */

import React from "react";
import "./GuestDashboardAccount.css";
import gda_logo from "../../assets/mob-logo.svg";
import { Link } from "react-router-dom";

const GuestDashboardAccount = () => {
  return (
    <div className='guestDashboardAccount'>
      <div className='gda-header'>
        <div className='gda-header-hue'>
          <img src={gda_logo} alt='' />
        </div>
      </div>
      <div className='gda-body'>
        <div className='gda-body-upper'>
          <h3>Welcome to Ropajo</h3>
          <h1>Adojo Peter A.A</h1>
        </div>
        <div className='gda-body-lower'>
          <div className='gda-body-lower-inner'>
            <p> Room No: 003, 012 and 007</p>
            <p>Guest ID: R1410x</p>
            <p>Wifi Username: Ropajo Wifi</p>
            <p>Wifi Password: Dragon234</p>
          </div>
          <span>
            <Link>Back to Homepage</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default GuestDashboardAccount;
