import React from 'react'
import './GuestReservationHeader.css'
import grh_arrow from '../../assets/top_arrow.svg'
import grh_logo from '../../assets/mob-logo.svg'
import { Link, useNavigate } from 'react-router-dom'


const GuestReservationHeader = () => {
    const navigate = useNavigate()
return (
    <div className='guestReservationHeader'>
        <div className='guestReservationHeader-content'>
            <img src={grh_logo} alt="" />
        </div>
        <Link onClick={()=> navigate(-1)}>
            <img src={grh_arrow} alt="" className='grh-arrow-img'/>
        </Link>
    </div>
)
}

export default GuestReservationHeader
