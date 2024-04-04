import React from 'react'
import './Contact.css'
import ropa_logo from '../../assets/ropajo _hat2.svg'
import ropa_text from '../../assets/ropajo_text.svg'


const Contact = () => {
  return (
    <div className='contact'>
      <div className="logo">
      <img src={ropa_logo} alt="" className='logo-img logo-child'/>
        <img src={ropa_text} alt="" className='logo-child logo-text'/>
        <p>Hotels and Apartments</p>
      </div>
      <div className="list">
        <ul>
          <li>Home</li>
          <li>FAQ</li>
          <li>Privacy POlicy</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="list">
      <ul>
          <li>Home</li>
          <li>FAQ</li>
          <li>Privacy POlicy</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className='address'>
        <div className='contact-details'>
          <h4>Have questions and suggestions?</h4>
          <p>hotels.ropajo@gmail.com</p>
        </div>
        <div className='contact-details'>
          <h4>Need assistance? Give us a call</h4>
          <p>+234 803 320 2272</p>
        </div>
        <div className='contact-details'>
          <h4>Our Location</h4>
          <p>Lobi Quarters, beside EFCC Office, Makurdi</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
