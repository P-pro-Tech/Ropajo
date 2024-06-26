import './App.css';

import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter
import Booking from './Components/Booking/Booking';
import LandingPage from './Components/LandingPage/LandingPage';
import DashboardComponents from './Components/DashboardComponents/DashboardComponents';
import DashboardRoom from './Components/DashboardRoom/DashboardRoom';
import Register from './Components/Register/Register';
import DashboardLaundry from './Components/DashboardLaundry/DashboardLaundry';
import DashboardAccount from './Components/DashboardAccount/DashboardAccount';
import SignIn from './Components/SignIn/SignIn';
import GuestDashboardAccount from './Components/GuestDashboardAccount/GuestDashboardAccount';
import AssignRoom from './Components/AssignRoom/AssignRoom';
import RegisterGuests from './Components/RegisterGuests/RegisterGuests';
import Reservations from './Components/Reservations/Reservations';
import GuestRoom from './Components/GuestRoom/GuestRoom';

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
            <Route path='/DashboardLaundry' element={<DashboardLaundry/>}/>
            <Route path='/DashboardAccount' element={<DashboardAccount/>}/>
            <Route path='/SignIn' element={<SignIn/>}/>
            <Route path='/GuestDashboardAccount' element={<GuestDashboardAccount/>}/>
            <Route path='/AssignRoom' element={<AssignRoom/>}/>
            <Route path='/RegisterGuests' element={<RegisterGuests/>}/>
            <Route path='/Reservations' element={<Reservations/>}/>
            <Route path='GuestRoom' element={<GuestRoom/>}/>
          </Routes>
        </div>
      </div>
    </Router> 
  );
}

export default App;
