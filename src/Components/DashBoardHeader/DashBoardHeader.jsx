import React, { useState } from 'react'
import './DashBoardHeader.css'
// import{Link} from 'react-scroll'
// import { Link } from 'react-router-dom' ;
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import book_logo from '../../assets/mob-logo.svg';
import mob_menu from '../../assets/mob-menu.svg'


const DashBoardHeader = ({setProfileShow}) => {

return (
    <div className='dashboard-header'>
        <div className="dbr-nav">
            <div className="dbr-logo-holder">
        <RouterLink to='/Register'>
            <img src={book_logo} alt="" />
        </RouterLink>
            </div>
            <div className="dbr-nav-list">
            <ul>
                <li><ScrollLink  to="room" smooth={true} offset={0} duration={500}  >Apartment</ScrollLink></li>
                <li><ScrollLink  to="room" smooth={true} offset={0} duration={500} >Room</ScrollLink></li>
                <li><ScrollLink  to="pool" smooth={true} offset={0} duration={500} >Pool</ScrollLink></li>
                <li><ScrollLink  to="laundry" smooth={true} offset={-760} duration={500} >Laundry</ScrollLink></li>
                <li><ScrollLink  to="gallery" smooth={true} offset={0} duration={500} >Gallery</ScrollLink></li>
            </ul>
            </div>
            <img src={mob_menu} alt="" className='dbr-mob-menu' onClick={()=>{setProfileShow(true)}}/>
        </div>
    </div>
)
}

export default DashBoardHeader
