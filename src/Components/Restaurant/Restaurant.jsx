import React from 'react'
import './Restaurant.css'
import Ropa5 from '../../assets/Ropa5.png'
import { Link } from 'react-router-dom'

const Restaurant = () => {
return (
    <div className='restaurant'>
    
    <div className="empty"></div>
    <div className="opacity">
        <h2>Restaurant</h2>
        <h3>HIGH CLASS LUXURY</h3>
        <p>Right in the heart of the Food Basket of Nigeria
            Ropajo Hotels perfectly unveil its touch of luxury
            and creativity in a space.
        </p>
            <Link to='./Booking'><button>Book Now</button></Link>
    </div>
    </div>
)
}

export default Restaurant
