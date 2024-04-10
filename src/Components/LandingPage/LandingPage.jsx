import React from 'react'
import Coffee from '../Coffee/Coffee';

import Located from '../Located/Located';
import NavBar from '../NavBar/NavBar';
import Restaurant from '../Restaurant/Restaurant';
import Pool from '../Pool/Pool';  
import Rooms from '../Rooms/Rooms';
import Gallery from '../Gallery/Gallery';
import Contact from '../Contact/Contact';
import MobileNavBar from '../MobileNavBar/MobileNavBar';
import { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter
import Booking from '../Booking/Booking';

import GuestId from '../GuestId/GuestId';

const LandingPage = () => {
    const [viewMobileNav, setViewMobileNav] = useState(false);
  return (
    <div>
      <NavBar setViewMobileNav={setViewMobileNav}/>
        <GuestId/>
        <Rooms/> 
        <Pool/>
        <Restaurant/>
        <Coffee/>
        <Located/>  
        <Gallery/>
        <Contact/>
        
        <div>
        <MobileNavBar viewMobileNav={viewMobileNav} setViewMobileNav={setViewMobileNav}/>
        </div>
    </div>
  )
}

export default LandingPage
