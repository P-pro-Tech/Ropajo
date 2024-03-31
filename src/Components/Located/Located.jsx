import React from 'react'
import './Located.css'
import locate_img from '../../assets/Ropa8.jpeg'

const Located = () => {
  return (
    <div className='located'>
      <div className="loc-text-sec">
        <h2> Located right in the City Center of Makurdi</h2>
        <p> Right in the heart of the Food Basket of  Nigeria. Ropajo Hotels perfectly unveil  its touch of luxury and creativity in a space.</p>
      </div>
      <div className="loc-img-sec">
        <img src={locate_img} alt="" />
      </div>
    </div>
  )
}

export default Located
