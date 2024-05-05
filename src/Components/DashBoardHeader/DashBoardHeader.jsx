// import React, { useState } from 'react'
import './DashBoardHeader.css'
import{Link} from 'react-scroll'
// import { Link } from 'react-router-dom';
import book_logo from '../../assets/mob-logo.svg';
import mob_menu from '../../assets/mob-menu.svg'


const DashBoardHeader = ({setProfileShow}) => {

return (
    <div className='dashboard-header'>
        <div className="dbr-nav">
            <div className="dbr-logo-holder">
        {/* <Link to='/Register'> */}
            <img src={book_logo} alt="" />
        {/* </Link> */}
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
            <img src={mob_menu} alt="" className='dbr-mob-menu' onClick={()=>{setProfileShow(true)}}/>
        </div>
    </div>
)
}

export default DashBoardHeader
