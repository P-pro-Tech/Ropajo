import React from 'react'
import './GuestInfoTableRow.css'
import copy from '../../../assets/Copy.svg'
const GuestInfoTableRow = ({index, names, uniqueNo, phone}) => {
    return (
        <div className='GuestInfoTableRow' key={index}>
            <p>{names}</p>
            <div className='GuestInfoTableRow-id-sec'><p>{uniqueNo}</p><span><img src={copy} alt="" /></span></div>
            <p>{phone}</p>
        </div>
    )
}

export default GuestInfoTableRow