import React from 'react'
import './Booking.css'
import { Button, Link } from 'react-scroll';
import book_logo from '../../assets/mob-logo.svg';
import mob_menu from '../../assets/mob-menu.svg' 
import DashBoardHeader from '../DashBoardHeader/DashBoardHeader';
import DashboardRoomProfile from '../DashboardRoomProfile/DashboardRoomProfile';
import { useState } from 'react';

const Booking = () => {
  const [profileShow, setProfileShow] = useState(false);
  return (
    <div className='booking'>
      <div className='book-hue'>
          <DashboardRoomProfile profileShow={profileShow} setProfileShow={setProfileShow}/>
          <DashBoardHeader setProfileShow={setProfileShow}/>
            
        <div className="book-body">
          <form  className="book-form">
            <h1>Booking</h1>
            <input type="text" name="" id=""  placeholder='Full Names'/>
            <input type="email" name="" id="" placeholder='Email'/>
            <input type="number" name="" id="" placeholder='Phone Number'/>
            <input type="number" name="" id="" placeholder=' Identity No.'/>
            <div>
              <span>Upload ID:</span>
              <input type="file" name="" id="file" placeholder='Upload ID:' hidden />
              <label htmlFor="file" className='book-file-label'>upload</label>
            </div>
            <button type="submit" className='book-submit'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Booking
