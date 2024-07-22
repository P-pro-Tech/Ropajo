import React from 'react'
import './GuestInfoTableRow.css'
const GuestInfoTableRow = ({index, names, uniqueNo}) => {
    return (
        <div className='GuestInfoTableRow' key={index}>
            <p>{names}</p>
            <p>{uniqueNo}</p>
            <span><button>Checkout</button></span>
        </div>
    )
}

export default GuestInfoTableRow