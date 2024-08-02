import React from 'react'
import './ReceptioistManageProfile.css'
import ropa_logo from '../../assets/mob-logo.svg'
import receptioist_pic from '../../assets/receptionist_1.jpg'
import { Link, NavLink } from 'react-router-dom'


const ReceptioistManageProfile = () => {
  return (
    <div className='guestDashBoard'>
        <div className='guestDashBoard-upper-sec'>
            <div className='guestDashBoard-logo'>
                <img src={ropa_logo} alt="" />
            </div>
            <div className='guestDashBoard-profile'>
                <div className='gdb-profile'><img src={receptioist_pic} alt="" /></div>
                <h2>Prince Ayo</h2>
                <p>Good afternoon</p>

            </div>
        </div>
        <div className='guestDashBoard-lower-sec'>
                <ul> {/*DashboardRoom*/}
                    <NavLink to="/GuestRoom" className={({isActive}) => {
                        return isActive ? 'hover-gdb-btn': '';
                    }}><li>Guest</li></NavLink>
                    <NavLink to='/ReceptionistGuestPayment' className={({isActive}) => {
                        return isActive ? 'hover-gdb-btn': '';
                    }}><li>Payment</li></NavLink>
                    <NavLink to='/' className={({isActive}) => {
                        return isActive ? 'hover-gdb-btn': '';
                    }}><li>History</li></NavLink>

                    <NavLink><li>Signout</li></NavLink>
                </ul>
        </div>
    </div>
  )
}

export default ReceptioistManageProfile