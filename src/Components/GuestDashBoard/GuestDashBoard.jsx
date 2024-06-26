import React from 'react'
import './GuestDashBoard.css'
import ropa_logo from '../../assets/mob-logo.svg'
import receptionist_pic from '../../assets/rec_1.png'
import { Link, NavLink } from 'react-router-dom'


const GuestDashBoard = () => {
return (
    <div className='guestDashBoard'>
        <div className='guestDashBoard-upper-sec'>
            <div className='guestDashBoard-logo'>
                <img src={ropa_logo} alt="" />
            </div>
            <div className='guestDashBoard-profile'>
                <div className='gdb-profile'><img src={receptionist_pic} alt="" /></div>
                <h2>Receptionist I</h2>
                <p>Check in: 08:34am</p>

            </div>
        </div>
        <div className='guestDashBoard-lower-sec'>
                <ul> {/*DashboardRoom*/}
                    <NavLink to="/GuestRoom" className={({isActive}) => {
                        return isActive ? 'hover-gdb-btn': '';
                    }}><li>Guest</li></NavLink>
                    <NavLink to='/DashboardAccount' className={({isActive}) => {
                        return isActive ? 'hover-gdb-btn': '';
                    }}><li>Account</li></NavLink>
                    <NavLink><li>Signout</li></NavLink>
                </ul>
        </div>
    </div>
)
}

export default GuestDashBoard
