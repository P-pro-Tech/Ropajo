import React from 'react'
import './Gallery.css';
import Ropa5 from '../../assets/Ropa5.png'
import Ropa9 from '../../assets/Ropa9.png'
import Ropa10 from '../../assets/Ropa10.png'
import Ropa11 from '../../assets/Ropa11.png'

const Gallery = () => {
  return (
    <div className='gallery'>
      <div className="text">
        <div className='gallery-text-board'>
        <h2>Local and Intercontinental dishes</h2>
        <p>Right in the heart of the Food Basket of  Nigeria. Ropajo Hotels perfectly unveil its touch of luxury and creativity in a space.</p>
        </div>
      </div>
      <div className="grid-container">
        <div className='inner-gird-container'>
          <div className="left-column">
              <div className="small-box" id='one'></div>
              <div className="small-box" id='two'></div>
              <div className="small-box" id='three'></div>
          </div>
          <div className="right-column">
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
