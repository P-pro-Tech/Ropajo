import React from 'react'
import './GuestId.css'
import guest_img from '../../assets/Ropa2.jpeg'

const GuestId = () => {
  return (
    <div className='guest-id'>
      <div className="guest-img-holder">
        <img src={guest_img} alt="" />
      </div>
      <div className="guest-des-holder">
        <form className='guest-form'>
            <fieldset>
                <legend>Enter your unique Guest ID</legend>
                <input type="text" name="" id="" placeholder='#R1410X'/>
            </fieldset>
            <button type="submit">Enter Guest ID</button>
        </form>
      </div>
    </div>
  )
}

export default GuestId
