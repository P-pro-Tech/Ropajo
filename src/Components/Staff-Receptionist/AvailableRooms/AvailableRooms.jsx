import React from 'react'
import './AvailableRooms.css'
const AvailableRooms = ({items, index, apartment}) => {
  return (
    // <button key={index} className='availableRooms'>{items}</button>
    <button key={index} className="reserved-dashboard-button">
      <div>{items}</div> <br />
      <span>{apartment}</span>
    </button>
  )
}

export default AvailableRooms