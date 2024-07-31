import React from 'react'
import './GuestDashBoard.css'
import ropa_logo from '../../assets/mob-logo.svg'
import profile_pic from '../../assets/profile_pic.png'
import { Link } from 'react-router-dom'


const GuestDashBoard = () => {
return (
    <div className='guestDashBoard'>
        <div className='guestDashBoard-upper-sec'>
            <div className='guestDashBoard-logo'>
                <img src={ropa_logo} alt="" />
            </div>
            <div className='guestDashBoard-profile'>
                <div className='gdb-profile'><img src={profile_pic} alt="" /></div>
                <h2>Prince Ayo</h2>
                <p>Welcome Chief</p>

            </div>
        </div>
        <div className='guestDashBoard-lower-sec'>
                <ul>
                    <Link to='/DashboardRoom'><li>Rooms/Apartment</li></Link>
                    <Link to='/DashboardLaundry'><li>Laundry</li></Link>
                    <Link><li>Pool</li></Link>
                    <Link><li>Restaurant</li></Link>
                    <Link to='/DashboardAccount'><li>Account</li></Link>
                    <Link><li>Signout</li></Link>
                </ul>
        </div>
    </div>
)
}

export default GuestDashBoard
