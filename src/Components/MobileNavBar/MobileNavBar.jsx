import React, { useRef } from 'react'
import './MobileNavBar.css'
import top_icon from '../../assets/top_arrow.svg'
import ropa_logo from '../../assets/ropajo _hat2.svg'
import ropa_text from '../../assets/ropajo_text.svg'
import { Link } from 'react-scroll'

const MobileNavBar = ({viewMobileNav, setViewMobileNav}) => {

  const mobviev = useRef(null);

  const closeNamvBar = (e)=> {
      if(e.target === mobviev.current) {
        setViewMobileNav(false)
      }
  }

  const handleNavClick = () => {
    setViewMobileNav(false);
  };

  return (
    <div className={`mobile-nav-bar ${viewMobileNav? "":"hide"}`}>
      <div className='cont-mob-navbar'>
        <div className="mnb-arrow-up">
          <img src={top_icon} alt="" ref={mobviev} onClick={closeNamvBar}/>
        </div>
        <div className="mnb-logo">
          <img src={ropa_logo} alt="" className='logo logo-child'/>
          <img src={ropa_text} alt="" className='logo-child two'/>
        </div>
        <div className="mnb-nav-list">
          <ul>
          <li><Link onClick={handleNavClick} to="room" smooth={true} offset={0} duration={500}  >Apartment</Link></li>
            <li><Link onClick={handleNavClick} to="room" smooth={true} offset={0} duration={500} >Room</Link></li>
            <li><Link onClick={handleNavClick} to="pool" smooth={true} offset={0} duration={500} >Pool</Link></li>
            <li><Link onClick={handleNavClick} to="laundry" smooth={true} offset={-760} duration={500} >Laundry</Link></li>
            <li><Link onClick={handleNavClick} to="gallery" smooth={true} offset={0} duration={500} >Gallery</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MobileNavBar;
