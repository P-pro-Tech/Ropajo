import React from 'react'
import './Rooms.css'
import Ropa3 from '../../assets/Ropa3.jpeg'

const Rooms = () => {
  return (
    <div className='room'>
      <div className='room-left'>
         <img src={Ropa3} alt="" />
      </div>

      <div className="room-right">
        <div className="inner">
            <h2>Rooms &<br></br> Apartments</h2>
            <h3>HIGH CLASS LUXURY</h3>
            <p>Right in the heart of the Food Basket of Nigeria<br></br>Ropajo Hotels perfectly unveil its touch of luxury<br></br> and 
               reativity in a space.
             </p>
             <div className="btn"><button>BOOk A ROOM</button></div>
            <p>+234 803 320 2272<br></br>
                 ROPAJO@GMAIL.COM
             </p>
        </div>
      </div>
    </div>
  )
}

export default Rooms
