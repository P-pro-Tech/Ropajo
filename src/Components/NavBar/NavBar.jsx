import React from 'react'
import './NavBar.css'
import nav_img from '../../assets/Ropa1.jpeg'
import ropa_logo from '../../assets/ropajo _hat2.svg'
import ropa_text from '../../assets/ropajo_text.svg'    

const NavBar = () => {
  return (
    <div className='navBar'>
      <div className="navbar-col">
        <ul>
            <li>Apartment</li>
            <li>Room</li>
            <li>Pool</li>
            <li>Laundry</li>
            <li>Gallery</li>
        </ul>
        <div className="logo-container">
        <img src={ropa_logo} alt="" className='logo logo-child'/>
        <img src={ropa_text} alt="" className='logo-child two'/>
        <button className='logo-child'>Book Now</button>
        </div>
      </div>
      <div className='nav-img-container'>
      <img src={nav_img} alt="" className='img-gal'/>
      </div>
    </div>
  )
}

export default NavBar
