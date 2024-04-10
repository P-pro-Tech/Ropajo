import React from 'react'
import './Booking.css'
import { Button, Link } from 'react-scroll';
import book_logo from '../../assets/mob-logo.svg';
import mob_menu from '../../assets/mob-menu.svg' 

const Booking = () => {
  return (
    <div className='booking'>
      <div className='book-hue'>

        <div className="book-nav">
          <div className="book-logo-holder">
            <img src={book_logo} alt="" />
          </div>
          <div className="book-nav-list">
            <ul>
              <li><Link  to="room" smooth={true} offset={0} duration={500}  >Apartment</Link></li>
              <li><Link  to="room" smooth={true} offset={0} duration={500} >Room</Link></li>
              <li><Link  to="pool" smooth={true} offset={0} duration={500} >Pool</Link></li>
              <li><Link  to="laundry" smooth={true} offset={-760} duration={500} >Laundry</Link></li>
              <li><Link  to="gallery" smooth={true} offset={0} duration={500} >Gallery</Link></li>
            </ul>
          </div>
          <img src={mob_menu} alt="" className='dbr-mob-menu' />
        </div>

        <div className="book-body">
          <form  className="book-form">
            <h1>Booking</h1>
            <input type="text" name="" id=""  placeholder='Full Names'/>
            <input type="email" name="" id="" placeholder='Email'/>
            <input type="number" name="" id="" placeholder='Phone Number'/>
            <input type="number" name="" id="" placeholder=' Identity No.'/>
            <input type="file" name=" " id="" placeholder='Upload ID:' hidden/>
            <button type="submit" className='book-submit'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Booking
