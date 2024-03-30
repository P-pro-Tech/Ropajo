import React from 'react'
import './Coffee.css';
import pouring_coffee from '../../assets/Ropa6.png'
import still_coffee from '../../assets/Ropa7.png'
import upper_vector from '../../assets/Vector 1.svg'
import lower_vector from '../../assets/Vector 2.svg'



const Coffee = () => {
  return (
    <div className='coffee'>
      <div className='img-area'>
        <div   className='img-pouring-coffee'>
        <img src={still_coffee} alt=""  className='img-still-coffee'/>
        </div>
      </div>
      <div className="vector-area">
        <img src={upper_vector} alt="" className="vector-1" />
        <h3>Coffee in a space</h3>
        <p>Right in the heart of the Food Basket of Nigeria Ropajo Hotels perfectly unveil its touch of luxury and
              reativity in a space.</p>
        <img src={lower_vector} alt="" className="vector-2" />
        
      </div>
    </div>
  )
}

export default Coffee
