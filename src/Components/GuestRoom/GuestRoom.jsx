import React from 'react'
import './GuestRoom.css'
import GuestDashBoard from '../Guest/GuestDashBoard/GuestDashBoard'
import { Link } from 'react-router-dom'
import GuestInfoTableRow from '../Staff-Receptionist/GuestInfoTableRow/GuestInfoTableRow'
import ReceptioistManageProfile from '../ReceptioistManageProfile/ReceptioistManageProfile'

const GuestRoomDetails = [
  {
  name: 'Peter Patrick F.',
  uniqueNo: 'R1410x',
},
  {
  name: 'Agbo James',
  uniqueNo: 'R0013v',
},
{
  name: 'Fanen Torkura JP',
  uniqueNo: 'R5545c',
},
  {
  name: 'Hamsizan Katrinna',
  uniqueNo: 'P3300j',
},
{
  name: 'Fanen Torkura JP',
  uniqueNo: 'R5545c',
},
  {
  name: 'Hamsizan Katrinna',
  uniqueNo: 'P3300j',
},
{
  name: 'Fanen Torkura JP',
  uniqueNo: 'R5545c',
},
  {
  name: 'Hamsizan Katrinna Malvin',
  uniqueNo: 'P3300j',
},
 
]

const GuestRoom = () => {
  return (
    <div className='guestRoom'>
        <div className='Guest-room-web'>
        <div className='dbrw-guest-section'>
          <ReceptioistManageProfile/>
        </div>
        <div className='dbrw-content-section'>
            <div className='dbrw-content-head'>
              <Link>Back to Homepage</Link>
            </div>
            <div className='dbrw-content-body'>
              <p>Guest Information</p>
              <div>
                <div className='dbrw-content-table-section'>
                  <div className='dbrw-web-table-holder'>
                    <table className='dbrw-web-table'>
                      <div className='thead'>
                        <p>Name</p>
                        <p>Unique No.</p>
                        <p> &nbsp;</p>
                      </div>
                      <div className='tbody'>
                        {GuestRoomDetails.map((details, index)=> (
                          <GuestInfoTableRow names= {details.name} uniqueNo={details.uniqueNo} index={index} />
                        ))}
                        
                        
                        
                      </div>
                    </table>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>


      
    </div>
  )
}

export default GuestRoom
