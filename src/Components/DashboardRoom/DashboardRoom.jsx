import React, { useState } from 'react'
import './DashboardRoom.css'
import{Link} from 'react-scroll'
import book_logo from '../../assets/mob-logo.svg';
import mob_menu from '../../assets/mob-menu.svg'
import play_icon from '../../assets/play-icon.svg';

const DashboardRoom = () => {
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);

  // const toggleDropdown = (dropdownNumber, setActiveFunction) => {
  //   setActiveFunction((prevState) => !prevState);
  // };
  
  return (
    <div className='dashboard-room'>

      <div className="dbr-nav">
          <div className="dbr-logo-holder">
            <img src={book_logo} alt="" />
          </div>
          <div className="dbr-nav-list">
            <ul>
              <li><Link  to="room" smooth={true} offset={0} duration={500}  >Apartment</Link></li>
              <li><Link  to="room" smooth={true} offset={0} duration={500} >Room</Link></li>
              <li><Link  to="pool" smooth={true} offset={0} duration={500} >Pool</Link></li>
              <li><Link  to="laundry" smooth={true} offset={-760} duration={500} >Laundry</Link></li>
              <li><Link  to="gallery" smooth={true} offset={0} duration={500} >Gallery</Link></li>
            </ul>
          </div>
          <img src={mob_menu} alt="" className='dbr-mob-menu' />
        </div>

        <div className='dropdown-table'>
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
