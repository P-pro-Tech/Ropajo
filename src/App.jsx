import './App.css';
import Coffee from './Components/Coffee/Coffee';
import GuestId from './Components/GuestId/GuestId';
import Located from './Components/Located/Located';
import NavBar from './Components/NavBar/NavBar';
import Restaurant from './Components/Restaurant/Restaurant';
import Pool from './Components/Pool/Pool';  
import Rooms from './Components/Rooms/Rooms';
import Gallery from './Components/Gallery/Gallery';
import Contact from './Components/Contact/Contact';
import MobileNavBar from './Components/MobileNavBar/MobileNavBar';
import { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter
import Booking from './Components/Booking/Booking';

function App() {
  const [viewMobileNav, setViewMobileNav] = useState(false);

  return (
    <Router> {/* Wrap your entire application inside Router */}
      <div className="App">
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
        <div>
          <Routes>
            <Route path="/Booking" element={<Booking/>}/> {/* Define your Booking route */}
            
          </Routes>
        </div>
      </div>
    </Router> 
  );
}

export default App;
