import React from 'react'
import './DashboardRoom.css'
import{Link} from 'react-scroll'
import book_logo from '../../assets/mob-logo.svg';
import mob_menu from '../../assets/mob-menu.svg'

const DashboardRoom = () => {
  return (
    <div className='dashboard-room'>

      <div className="dbr-nav">
          <div className="dbr-logo-holder">
            <img src={book_logo} alt="" />
          </div>
          <div className="dbr-nav-list">
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


        <div className='dbr-header'>
          <h3>Room/Apartment</h3>
        </div>


        <div className='dbr-table'>

        </div>


    </div>
  )
}

export default DashboardRoom
