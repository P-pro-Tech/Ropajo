import React, { useEffect, useRef } from 'react'
import './Rooms.css'
import Ropa3 from '../../assets/Ropa3.jpeg'
import { Link } from 'react-router-dom'
import '../../index.css'
// import '../../slide.js'
const Rooms = () => {

    

    useEffect(() => {
        const observer = new IntersectionObserver((entries)=> {
        entries.forEach((entry)=>{
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }else {
            entry.target.classList.remove('show');
        }
        });
    });

    const navElement = document.querySelectorAll('.hidden');
    const navElement_left = document.querySelectorAll('.hidden-left');
    const hidden_down = document.querySelectorAll('.hidden-down');
    const hidden_up = document.querySelectorAll('.hidden-up');
    navElement.forEach((el) => {
        observer.observe(el);
    });
    
    navElement_left.forEach((el) => {
        observer.observe(el);
    });

    hidden_down.forEach((el) => {
        observer.observe(el);
    });
    hidden_up.forEach((el) => {
        observer.observe(el);
    });

      }, []);


    return (
        <div className='room'>
            <div className='room-left'>
                <img src={Ropa3} alt="" />
                
            </div>

            <div className="room-right">
                <div className="inner-top hidden">
                    <h1>Rooms &<br/> Apartments</h1>
                    <div className='room-right-text-board'>
                        <h3>HIGH CLASS LUXURY</h3>
                        <p>Right in the heart of the Food Basket of Nigeria Ropajo Hotels perfectly unveil its touch of luxury and
                            reativity in a space.
                        </p>
                    </div>
                    </div>
                    <div className='inner-button hidden'>
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
