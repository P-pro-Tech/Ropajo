import React, { useState } from 'react'
import './DashboardRoom.css'
import DashboardRoomProfile from '../DashboardRoomProfile/DashboardRoomProfile';
import play_icon from '../../assets/play-icon.svg';
import DashBoardHeader from '../DashBoardHeader/DashBoardHeader';
import GuestDashBoard from '../GuestDashBoard/GuestDashBoard';
import { Link } from 'react-router-dom'

  
const DashboardRoom = () => {
        const [isActive1, setIsActive1] = useState(false);
        const [isActive2, setIsActive2] = useState(false);
        const [isActive3, setIsActive3] = useState(false);

        const [profileShow, setProfileShow] = useState(false);

  return (
    <div className='dashboard-room'>
      <div className='dashboard-room-mobile-header'>
            <DashboardRoomProfile profileShow={profileShow} setProfileShow={setProfileShow}/>
            <DashBoardHeader setProfileShow={setProfileShow}/>
      </div> 
      <div className='dashboard-room-web'>
        <div className='dbrw-guest-section'>
          <GuestDashBoard/>
        </div>
        <div className='dbrw-content-section'>
            <div className='dbrw-content-head'>
              <Link>Back to Homepage</Link>
            </div>
            <div className='dbrw-content-body'>
              <p>Rooms/Apartment</p>
              <div>
                <div className='dbrw-content-table-section'>
                  <div className='dbrw-web-table-holder'>
                    <table className='dbrw-web-table'>
                      <thead>
                        <tr>
                          <th>Room No.</th>
                          <th>Date</th>
                          <th>Check in</th>
                          <th>Check Out</th>
                          <th>Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>256</td>
                          <td>13.02.2023</td>
                          <td>06:47pm</td>
                          <td>
                            <div>14:02:2023</div>
                            <div>12:00pm</div>
                          </td>
                          <td>30,000.00</td>
                        </tr>
                        <tr>
                          <td>112</td>
                          <td>27.10.2023</td>
                          <td>02:47pm</td>
                          <td>
                            <div>14:02:2023</div>
                            <div>12:00pm</div>
                          </td>
                          <td>80,000.00</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>
                            <div></div>
                            <div></div>
                          </td>
                          <td>&nbsp;</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>
                            <div></div>
                            <div></div>
                          </td>
                          <td>&nbsp;</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
          
        <div className='dropdown-mobile-table'>
          <div className='dropdown'>
          <div className="dropdown-btn">
          <div className="dropdown-item-left">
          <img
                src={play_icon}
                alt=""
                className={isActive1 ? 'dropdown-icon rotate-icon' : 'dropdown-icon'}
                onClick={() => setIsActive1(!isActive1)}
              />
            {/* <img src={play_icon} alt="" onClick={(e) =>
          setIsActive1(!isActive1)} /> */}
          Room No:</div>
              <div className="dropdown-item-right">256</div>
          </div>
          {isActive1 && (
            <div className="dropdown-content">
            
            <div className="dropdown-item">
            <div className="dropdown-item-left">Date:</div>
              <div className="dropdown-item-right">13.04.2024</div>
            </div>

            <div className="dropdown-item">
            <div className="dropdown-item-left">Check-in:</div>
              <div className="dropdown-item-right">06:47pm</div>
            </div>

            <div className="dropdown-item">
              <div className="dropdown-item-left">Check-out:</div>
              <div className="dropdown-item-right">
                    <p>13.04.2024</p>
                    <p>12:00pm</p>
              </div>
            </div>

            <div className="dropdown-item">
            <div className="dropdown-item-left">Amount:</div>
              <div className="dropdown-item-right">30,000.00</div>
            </div>

          </div>
          )}
          </div>


          <div className='dropdown'>
          <div className="dropdown-btn">
          <div className="dropdown-item-left"> 
          <img
                src={play_icon}
                alt=""
                className={isActive2 ? 'dropdown-icon rotate-icon' : 'dropdown-icon'}
                onClick={() => setIsActive2(!isActive2)}
              />

          {/* <img src={play_icon} alt="" onClick={(e) =>
          setIsActive2(!isActive2)}/> */}
          Room No:</div>
              <div className="dropdown-item-right">256</div>
          </div>
          {isActive2 && (
            <div className="dropdown-content">
            
            <div className="dropdown-item">
            <div className="dropdown-item-left">Date:</div>
              <div className="dropdown-item-right">13.04.2024</div>
            </div>

            <div className="dropdown-item">
            <div className="dropdown-item-left">Check-in:</div>
              <div className="dropdown-item-right">06:47pm</div>
            </div>

            <div className="dropdown-item">
              <div className="dropdown-item-left">Check-out:</div>
              <div className="dropdown-item-right">
                    <p>13.04.2024</p>
                    <p>12:00pm</p>
              </div>
            </div>

            <div className="dropdown-item">
            <div className="dropdown-item-left">Amount:</div>
              <div className="dropdown-item-right">30,000.00</div>
            </div>

          </div>
          )}
          </div>



          <div className='dropdown'>
          <div className="dropdown-btn">
          <div className="dropdown-item-left">
          <img
                src={play_icon}
                alt=""
                className={isActive3 ? 'dropdown-icon rotate-icon' : 'dropdown-icon'}
                onClick={() => setIsActive3(!isActive3)}
              />
            
            {/* <img src={play_icon} alt="" onClick={(e) =>
          setIsActive3(!isActive3)}/> */}
          Room No:</div>
              <div className="dropdown-item-right">256</div>
          </div>
          {isActive3 && (
            <div className="dropdown-content">
            
            <div className="dropdown-item">
            <div className="dropdown-item-left">Date:</div>
              <div className="dropdown-item-right">13.04.2024</div>
            </div>

            <div className="dropdown-item">
            <div className="dropdown-item-left">Check-in:</div>
              <div className="dropdown-item-right">06:47pm</div>
            </div>

            <div className="dropdown-item">
              <div className="dropdown-item-left">Check-out:</div>
              <div className="dropdown-item-right">
                    <p>13.04.2024</p>
                    <p>12:00pm</p>
              </div>
            </div>

            <div className="dropdown-item">
            <div className="dropdown-item-left">Amount:</div>
              <div className="dropdown-item-right">30,000.00</div>
            </div>

          </div>
          )}
          </div>




          
          
        </div>
    </div>
  )
}

export default DashboardRoom
