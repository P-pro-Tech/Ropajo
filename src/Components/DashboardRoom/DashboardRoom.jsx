import React from 'react'
import './DashboardRoom.css'
import{Link} from 'react-scroll'
import book_logo from '../../assets/mob-logo.svg';
import mob_menu from '../../assets/mob-menu.svg'
import play_icon from '../../assets/play-icon.svg';

const DashboardRoom = ({setProfileShow}) => {
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
          <img src={mob_menu} alt="" className='dbr-mob-menu' onClick={()=> {setProfileShow(true)}}/>
        </div>


        <div className='drp-header'>
          <h2>Room/Apartment</h2>
        </div>


        <div className='drp-table'>
          <div className="drp">
            <table>
              <thead>
                <tr>
                  <th><img src={play_icon} alt="" />Room No:</th>
                  <th>256</th>
                </tr>
                <tr>
                  <td>Date:</td>
                  <td>13.04.2024</td>
                </tr>
                <tr>
                  <td>Check-in:</td>
                  <td>06:47pm</td>
                </tr>
                <tr>
                  <td>Check-out:</td>
                  <td>
                    <p>13.04.2024</p>
                    <p>12:00pm</p>
                  </td>
                </tr>
                <tr>
                    <td>Amount:</td>
                    <td>30,000.00</td>
                  </tr>
              </thead>
            </table>
          </div>
          <div className="drp">
          <table>
              <thead>
                <tr>
                  <th><img src={play_icon} alt="" />Room No:</th>
                  <th>256</th>
                </tr>
                <tr>
                  <td>Date:</td>
                  <td>13.04.2024</td>
                </tr>
                <tr>
                  <td>Check-in:</td>
                  <td>06:47pm</td>
                </tr>
                <tr>
                  <td>Check-out:</td>
                  <td>
                    <p>13.04.2024</p>
                    <p>12:00pm</p>
                  </td>
                </tr>
                <tr>
                    <td>Amount:</td>
                    <td>30,000.00</td>
                  </tr>
              </thead>
            </table>
          </div>
          <div className="drp">
          <table>
              <thead>
                <tr>
                  <th><img src={play_icon} alt="" />Room No:</th>
                  <th>256</th>
                </tr>
                <tr>
                  <td>Date:</td>
                  <td>13.04.2024</td>
                </tr>
                <tr>
                  <td>Check-in:</td>
                  <td>06:47pm</td>
                </tr>
                <tr>
                  <td>Check-out:</td>
                  <td>
                    <p>13.04.2024</p>
                    <p>12:00pm</p>
                  </td>
                </tr>
                <tr>
                    <td>Amount:</td>
                    <td>30,000.00</td>
                  </tr>
              </thead>
            </table>
          </div>

        </div>


    </div>
  )
}

export default DashboardRoom
