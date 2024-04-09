import React from 'react'
import './Rooms.css'
import Ropa3 from '../../assets/Ropa3.jpeg'
import { Link } from 'react-router-dom'

const Rooms = () => {
    return (
        <div className='room'>
            <div className='room-left'>
                <img src={Ropa3} alt="" />
                {/* <p>+234 803 320 2272<br></br>
                            ROPAJO@GMAIL.COM
                        </p> */}
            </div>

            <div className="room-right">
                <div className="inner">
                    <h2>Rooms &<br></br> Apartments</h2>
                    <h3>HIGH CLASS LUXURY</h3>
                    <p>Right in the heart of the Food Basket of Nigeria Ropajo Hotels perfectly unveil its touch of luxury and
                        reativity in a space.
                    </p>
                    <div className='btn-div'>
                    <Link to="/Booking">
                        <div className="btn">
                            <button>BOOK<br></br>A ROOM</button>
                        </div>
                    </Link>
                        <div className="line"></div>
                    </div>
                    <div className='room-con'>
                        <p>+234 803 320 2272<br></br>
                            ROPAJO@GMAIL.COM
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rooms
