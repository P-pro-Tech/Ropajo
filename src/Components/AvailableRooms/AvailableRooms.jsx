import React from 'react'
import './AvailableRooms.css'
const AvailableRooms = ({items, index}) => {
  return (
    <button key={index} className='availableRooms'>{items}</button>
  )
}

export default AvailableRooms