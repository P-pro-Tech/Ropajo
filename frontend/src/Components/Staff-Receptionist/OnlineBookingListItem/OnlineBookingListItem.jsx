import React from 'react';
import './OnlineBookingListItem.css';

const OnlineBookingListItem = ({names, phone, index, address}) => {
  return (
    <div className='OnlineBookingListItem'>
        <p>Peter Patrick F.</p>
        <p>Abuja</p>
        <p>+2345667940</p>
    </div>
  )
}

export default OnlineBookingListItem