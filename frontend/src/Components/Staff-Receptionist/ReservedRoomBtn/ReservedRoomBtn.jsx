import React from 'react'
import './ReservedRoomBtn.css'
import { Link } from 'react-router-dom'
const ReservedRoomBtn = ({item, index, apartment}) => {
  return (
    <Link to='/ReservationInfo'>
    <button key={index} className="ReservedRoomBtn">
      <div>{item}</div> <br />
      <span>{apartment}</span>
    </button>
    </Link>
  )
}

export default ReservedRoomBtn