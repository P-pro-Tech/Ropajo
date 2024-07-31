import React from 'react'
import './Restaurant.css'
import Ropa5 from '../../assets/Ropa5.png'
import { Link } from 'react-router-dom'

const Restaurant = () => {
return (
    <div className='restaurant'>
        <div className="empty">
        </div>
        <div className="opacity">
            <div className='opacity-content'>
                <h1>Restaurant</h1>
                <div className='opacity-text'>
                    <h3>HIGH CLASS LUXURY</h3>
                    <p>Right in the heart of the Food Basket of Nigeria
                        Ropajo Hotels perfectly unveil its touch of luxury
                        and creativity in a space.</p>
                </div>
                <Link to='./Booking'>
                    <button>Book Now</button>
                </Link>
            </div>
        </div>
    </div>
)
}

export default Restaurant
