import React from 'react'
import './NavBar.css'
// import nav_img from '../../assets/Ropa1.jpeg'
import mob_logo from '../../assets/mob-logo.svg'
import ropa_logo from '../../assets/ropajo _hat2.svg'
import ropa_text from '../../assets/ropajo_text.svg' 
import mob_menu from '../../assets/mob-menu.svg' 


const NavBar = () => {
  return (
    <div className='navBar'>
      <nav className="navbar-col">
        <img src={mob_logo} alt="" className='mob-logo' />
        <ul>
            <li>Apartment</li>
            <li>Room</li>
            <li>Pool</li>
            <li>Laundry</li>
            <li>Gallery</li>
        </ul>
        <img src={mob_menu} alt="" className='mob-menu' />
        <div className="logo-container">
        <img src={ropa_logo} alt="" className='logo logo-child'/>
        <img src={ropa_text} alt="" className='logo-child two'/>
        <button className='logo-child'>Book Now</button>
        </div>
      </nav>
      <div className='nav-img-container'>
      <div  className='img-gal'>+234 803 320 2272
ROPAJO@GMAIL.COM</div>
      </div>
    </div>
  )
}

export default NavBar
