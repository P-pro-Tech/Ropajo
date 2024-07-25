import React from 'react'
import './ReservedRoomBtn.css'
const ReservedRoomBtn = ({item, index, apartment}) => {
  return (
    <button key={index} className="reserved-dashboard-button">
      <div>{item}</div> <br />
      <span>{apartment}</span>
    </button>
  )
}

export default ReservedRoomBtn