import React from 'react'
import './AssignRoom.css'
import GuestReservationHeader from '../../GuestReservationHeader/GuestReservationHeader'
import { Link } from 'react-router-dom'


const AssignRoom = () => {
return (
    <div className='assignRoom'>
        <div className='assignRoom-hue'>
        <div className='head'>
            <GuestReservationHeader/>
        </div>
        <div className='assignRoom-body'>
            <div className='assignRoom-body-top'>
                <h3>Assign Room</h3>
                <h1>Guest ID</h1>
            </div>
            <div className='assignRoom-body-middle'>
                <p>Supreme Super Executive 1</p>
                <p >Reservation?</p>
                
            </div>
            <div className='assignRoom-body-bottom'>
                <button>Register</button>
            </div>
        </div>
        </div>
    </div>
)
}

export default AssignRoom
