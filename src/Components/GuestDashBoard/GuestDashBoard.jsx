import React from 'react'
import './GuestDashBoard.css'
import ropa_logo from '../../assets/mob-logo.svg'
import profile_pic from '../../assets/profile_pic.png'
import { Link, NavLink } from 'react-router-dom'


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
                <p>Good afternoon</p>

            </div>
        </div>
        <div className='guestDashBoard-lower-sec'>
                <ul> {/*DashboardRoom*/}
                    <NavLink to="/GuestAccessPage" className={({isActive}) => {
                        return isActive ? 'hover-gdb-btn': '';
                    }}><li>Home</li></NavLink>
                    <NavLink to='/GuestAccount' className={({isActive}) => {
                        return isActive ? 'hover-gdb-btn': '';
                    }}><li>Account</li></NavLink>
                    <NavLink><li>Signout</li></NavLink>
                </ul>
        </div>
    </div>
)
}

export default GuestDashBoard
