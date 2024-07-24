import React from 'react'
import './ReceptionistDashboard.css'
import ropa_logo from '../../assets/mob-logo.svg'
import receptionist2_pic from '../../assets/receptionist_2.jpg'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const ReceptionistDashboard = () => {
  return (
    <div>
        <div className='guestDashBoard'>
        <div className='guestDashBoard-upper-sec'>
            <div className='guestDashBoard-logo'>
                <img src={ropa_logo} alt="" />
            </div>
            <div className='guestDashBoard-profile'>
                <div className='gdb-profile'><img src={receptionist2_pic} alt="" /></div>
                <h2>Receptionist II</h2>
                <p>Check in: 08:34am</p>

            </div>
        </div>
        <div className='guestDashBoard-lower-sec'>
                <ul>
                    <NavLink to='/StaffDashboard' className={({isActive}) => {
                        return isActive ? 'hover-gdb-btn': '';
                    }}><li>Rooms/Apartment</li></NavLink>
                    <Link to='/DashboardLaundry' className={({isActive}) => {
                        return isActive ? 'hover-gdb-btn': '';
                    }}><li>Laundry</li></Link>
                    <Link><li>Pool</li></Link>
                    <Link><li>Restaurant</li></Link>
                    <Link to='/DashboardAccount' className={({isActive}) => {
                        return isActive ? 'hover-gdb-btn': '';
                    }}><li>Account</li></Link>
                    <Link><li>Signout</li></Link>
                </ul>
        </div>
    </div>
    </div>
  )
}

export default ReceptionistDashboard
