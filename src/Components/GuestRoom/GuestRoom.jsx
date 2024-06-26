import React from 'react'
import './GuestRoom.css'
import GuestDashBoard from '../GuestDashBoard/GuestDashBoard'
import { Link } from 'react-router-dom'

const GuestRoom = () => {
  return (
    <div>
        <div className='dashboard-room-web'>
        <div className='dbrw-guest-section'>
          <GuestDashBoard/>
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
                        <div>
                          <p>Peter Patrick F.</p>
                          <p>R1410x</p>
                          <span><button>Checkout</button></span>
                        </div>
                        <div>
                          <p>Agbo James</p>
                          <p>R0013v</p>
                          <span><button>Checkout</button></span>
                        </div>
                        <div>
                          <p>Fanen Torkura JP</p>
                          <p>R5545c</p>
                          <span><button>Checkout</button></span>
                        </div>
                        <div>
                          <p>Hamsizan Katrinna</p>
                          <p>P3300j</p>
                          <span><button>Checkout</button></span>
                        </div>
                        <div>
                          <p>Fanen Torkura JP</p>
                          <p>R5545c</p>
                          <span><button>Checkout</button></span>
                        </div>
                        <div>
                          <p>Hamsizan Katrinna</p>
                          <p>P3300j</p>
                          <span><button>Checkout</button></span>
                        </div>
                        <div>
                          <p>Fanen Torkura JP</p>
                          <p>R5545c</p>
                          <span><button>Checkout</button></span>
                        </div>
                        <div>
                          <p>Hamsizan Katrinna Malvin</p>
                          <p>P3300j</p>
                          <span><button>Checkout</button></span>
                        </div>
                        
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
