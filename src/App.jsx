import './App.css';

import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter
import Booking from './Components/Booking/Booking';

import LandingPage from './Components/LandingPage/LandingPage';

function App() {
  

  return (
    <Router> {/* Wrap your entire application inside Router */}
      <div className="App">
        <div>
          <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/Booking" element={<Booking/>}/> {/* Define your Booking route */}
          </Routes>
        </div>
      </div>
    </Router> 
  );
}

export default App;
