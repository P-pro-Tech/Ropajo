import './App.css';

import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter
import Booking from './Components/Booking/Booking';
import LandingPage from './Components/LandingPage/LandingPage';
import DashboardComponents from './Components/DashboardComponents/DashboardComponents';
import DashboardRoom from './Components/DashboardRoom/DashboardRoom';
import Register from './Components/Register/Register';

function App() {
  

  return (
    <Router> {/* Wrap your entire application inside Router */}
      <div className="App">
        <div>
          <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/Booking" element={<Booking/>}/> {/* Define your Booking route */}
            <Route path='/DashboardComponents' element={<DashboardComponents/>}/>
            <Route path='/DashboardRoom' element={<DashboardRoom/>}/>
            <Route path='/Register' element={<Register/>}/>
          </Routes>
        </div>
      </div>
    </Router> 
  );
}

export default App;
