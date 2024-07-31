import React from 'react'
import './NavBar.css'
// import nav_img from '../../assets/Ropa1.jpeg'
import mob_logo from '../../assets/mob-logo.svg'
import ropa_logo from '../../assets/ropajo _hat2.svg'
import ropa_text from '../../assets/ropajo_text.svg' 
import mob_menu from '../../assets/mob-menu.svg' 
import { Link } from 'react-scroll';


const NavBar = ({setViewMobileNav}) => {
  return (
    <div className='navBar'>
      <nav className="navbar-col">
        <img src={mob_logo} alt="" className='mob-logo' />
        <ul>
            <li><Link  to="room" smooth={true} offset={0} duration={500} >Apartment</Link></li>
            <li><Link  to="room" smooth={true} offset={0} duration={500} >Room</Link></li>
            <li><Link  to="pool" smooth={true} offset={0} duration={500} >Pool</Link></li>
            <li><Link  to="laundry" smooth={true} offset={-760} duration={500} >Laundry</Link></li>
            <li><Link  to="gallery" smooth={true} offset={0} duration={500} >Gallery</Link></li>
        </ul>
        <img src={mob_menu} alt="" className='mob-menu' onClick={()=> {setViewMobileNav(true)}}/>
        <div className="logo-container">
          <div className='logo-arena'>
            <img src={ropa_logo} alt="" className='logo '/>
            <img src={ropa_text} alt="" className=' two'/>
          </div>
          <button className=''>Book Now</button>
        </div>
      </nav>
      <div className='nav-img-container'>
      
        <div className='nav-contact'>
          <p>+234 803 320 2272</p>
        <p>ROPAJO@GMAIL.COM</p>
        </div>
      
      </div>
    </div>
  )
}

export default NavBar
