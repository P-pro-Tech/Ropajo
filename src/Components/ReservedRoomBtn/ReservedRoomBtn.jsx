import React from 'react'
import './ReservedRoomBtn.css'
const ReservedRoomBtn = ({item, index}) => {
  return (
    <button key={index} className="ReservedRoomBtn">{item}</button>
  )
}

export default ReservedRoomBtn