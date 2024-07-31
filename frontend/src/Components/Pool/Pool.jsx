import React from 'react'
import './Pool.css'
import img_pool from '../../assets/Ropa4.png'
import { Link } from 'react-router-dom'

const Pool = () => {
  return (
    <div className='pool'>
      <div className="pool-content-left">
        <div className="content-left-div">
            <h1>Pool & Party</h1>
              <div className='pool-bold-text'>
                <h3>HIGH CLASS LUXUARY</h3>
                <p>Right in the heart of the Food Basket of Nigeria Ropajo Hotels perfectly unveil its touch of luxury and
                  reativity in a space.</p>
              </div>
            <Link to='./Booking'><button>Book Now</button></Link>
        </div>
      </div>
      <div className="pool-content-right">
        <img src={img_pool} alt="" />
      </div>
      
    </div>
    
  )
}

export default Pool
