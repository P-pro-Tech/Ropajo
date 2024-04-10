import React from 'react'
import './DashboardRoomProfile.css'
import { Link } from 'react-scroll'
import top_icon from '../../assets/top_arrow.svg'
import ropa_logo from '../../assets/mob-logo.svg'
import profile_pic from '../../assets/profile_pic.png';




const DashboardRoomProfile = () => {

//   const mobviev = useRef(null);

//   const closeNamvBar = (e)=> {
//       if(e.target === mobviev.current) {
//         setViewMobileNav(false)
//       }
//   }


  return (
    <div className='dashboard-room-profile'>
      <div className='dbp-navbar'>
        <div className="dbp-arrow-up">
          <img src={top_icon} alt="" />   
        </div>
        <div className="dbp-logo">
          <img src={ropa_logo} alt="" />
        </div>
        <div className='profile-cont'>
          <div>
            <img src={profile_pic} alt="" />
          </div>
          <h4>Prince Ayo</h4>
          <p>Welcome Chief</p>
        </div>
        <div className="dbp-nav-list">
          <ul>
          <li><Link  to="room" smooth={true} offset={0} duration={500}  >Room/Apartment</Link></li>
            <li><Link  to="room" smooth={true} offset={0} duration={500} >Laundry</Link></li>
            <li><Link  to="pool" smooth={true} offset={0} duration={500} >Pool</Link></li>
            <li><Link  to="laundry" smooth={true} offset={-760} duration={500} >Restaurant</Link></li>
            <li><Link  to="gallery" smooth={true} offset={0} duration={500} >Account</Link></li>
            <li><Link  to="gallery" smooth={true} offset={0} duration={500} >Signout</Link></li>
          </ul>
        </div>
        
      </div>
    </div>
  )
}

export default DashboardRoomProfile
