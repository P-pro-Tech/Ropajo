import React, { useRef } from 'react'
import './DashboardRoomProfile.css'
import { Link } from 'react-scroll'
import { NavLink } from 'react-router-dom'
import top_icon from '../../assets/top_arrow.svg'
import ropa_logo from '../../assets/mob-logo.svg'
import profile_pic from '../../assets/profile_pic.png';




const DashboardRoomProfile = ({setProfileShow, profileShow}) => {

  const profile = useRef(null);

  const closeProfile =(e) => {
    if (e.target === profile.current) {
          setProfileShow(false);
    }
  }
  const handleNavProfile = () => {
    setProfileShow(false);
  };

  return (
    <div className={`dashboard-room-profile ${profileShow?'':'hide'}`}>
      <div className='dbp-navbar'>
        <div className="dbp-arrow-up">
          <img src={top_icon} alt="" ref={profile} onClick={closeProfile} />   
        </div>
        <div className="dbp-logo">
          <img src={ropa_logo} alt="" />
        </div>
        <div className='profile-cont'>
          <div>
            <img src={profile_pic} alt="" />
          </div>
          <h4>PRINCE Ayo</h4>
          <p>Check in: 08:34am</p>
        </div>
        <div className="dbp-nav-list">
          <ul>
          <li><Link onClick={handleNavProfile} to="room" smooth={true} offset={0} duration={500}  >Room/Apartment</Link></li>
            <li><Link onClick={handleNavProfile} to="room" smooth={true} offset={0} duration={500} >Laundry</Link></li>
            <li><Link onClick={handleNavProfile} to="pool" smooth={true} offset={0} duration={500} >Pool</Link></li>
            <li><Link onClick={handleNavProfile} to="laundry" smooth={true} offset={-760} duration={500} >Restaurant</Link></li>
            <li><Link onClick={handleNavProfile} to="gallery" smooth={true} offset={0} duration={500} >Account</Link></li>
            <li><Link onClick={handleNavProfile} to="gallery" smooth={true} offset={0} duration={500} >Signout</Link></li>
          </ul>
        </div>
        
      </div>
    </div>
  )
}

export default DashboardRoomProfile
