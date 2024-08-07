/** @format */

import React, { useState } from "react";
import DashBoardHeader from "../DashBoardHeader/DashBoardHeader";
import DashboardRoomProfile from "../DashboardRoomProfile/DashboardRoomProfile";
import "./Register.css";

const Register = () => {
  const [profileShow, setProfileShow] = useState(false);

  return (
    <div className='register'>
      <div className='register-hue'>
        <div>
          <DashboardRoomProfile
            profileShow={profileShow}
            setProfileShow={setProfileShow}
          />
          <DashBoardHeader setProfileShow={setProfileShow} />
        </div>
        <div className='register-body'>
          <form className='register-form'>
            <h1>Register</h1>
            <input type='text' name='' id='' placeholder='Staff Names' />
            <input type='email' name='' id='' placeholder='Email' />
            <input type='number' name='' id='' placeholder='Phone Number' />
            <input type='number' name='' id='' placeholder=' D.O.B' />
            <div>
              <span>Upload ID:</span>
              <input
                type='file'
                name=''
                id='file'
                placeholder='Upload ID:'
                hidden
              />
              <label htmlFor='file' className='register-file-label'>
                upload
              </label>
            </div>
            <button type='submit' className='register-submit'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
