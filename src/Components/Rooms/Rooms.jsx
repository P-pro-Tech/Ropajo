import React from 'react'
import './Rooms.css'
import Ropa3 from '../../assets/Ropa3.jpeg'
import { Link } from 'react-router-dom'
const Rooms = () => {
    return (
        <div className='room'>
            <div className='room-left'>
                <img src={Ropa3} alt="" />
                
            </div>

            <div className="room-right">
                <div className="inner-top">
                    <h1>Rooms &<br/> Apartments</h1>
                    <div className='room-right-text-board'>
                        <h3>HIGH CLASS LUXURY</h3>
                        <p>Right in the heart of the Food Basket of Nigeria Ropajo Hotels perfectly unveil its touch of luxury and
                            reativity in a space.
                        </p>
                    </div>
                    </div>
                    <div className='inner-button'>
                    <div className='btn-div'>
                    <Link to="/Booking">
                    <button className='circular-button'>BOOK<br/>A ROOM</button>
                    </Link>
                        <div className="line"></div>
                    </div>
                    <div className='room-con'>
                        <p>+234 803 320 2272<br></br>
                            ROPAJO@GMAIL.COM
                        </p>
                        </div>
                        
                    </div>
                {/* </div> no*/}
            </div>
        </div>
    )
}
export default Rooms
