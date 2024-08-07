/** @format */

import "./App.css";

import { HashRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter
import Booking from "./Components/Guest/Booking/Booking";
import { Toaster } from "react-hot-toast";
import LandingPage from "./Components/LandingPage/LandingPage";
import DashboardComponents from "./Components/DashboardComponents/DashboardComponents";
import DashboardRoom from "./Components/DashboardRoom/DashboardRoom";
import Register from "./Components/Register/Register";
import DashboardLaundry from "./Components/DashboardLaundry/DashboardLaundry";
import GuestAccount from "./Components/Guest/GuestAccount/GuestAccount";
import SignIn from "./Components/Staff-Receptionist/SignIn/SignIn";
import GuestDashboardAccount from "./Components/GuestDashboardAccount/GuestDashboardAccount";
import AssignRoom from "./Components/Staff-Receptionist/AssignRoom/AssignRoom";
import RegisterGuests from "./Components/Staff-Receptionist/RegisterGuests/RegisterGuests";
import Reservations from "./Components/Reservations/Reservations";
import GuestRoom from "./Components/GuestRoom/GuestRoom";
import GuestDashBoardRoom from "./Components/Staff-Receptionist/GuestDashBoardRoom/GuestDashBoardRoom";
import GeneralAccount from "./Components/GeneralAccount/GeneralAccount";
import StaffDashboard from "./Components/Staff-Receptionist/StaffDashboard/StaffDashboard";
import GuestAccessPage from "./Components/Guest/GuestAccessPage/GuestAccessPage";
import ReceptionistGuestPayment from "./Components/ReceptionistGuestPayment/ReceptionistGuestPayment";
import UpdateGuestPayment from "./Components/Staff-Receptionist/UpdateGuestPayment/UpdateGuestPayment";
import ReservationInfo from "./Components/Staff-Receptionist/ReservationInfo/ReservationInfo";
import ManageGuest from "./Components/Staff-Receptionist/ManageGuest/ManageGuest";
import ReceptionAccount from "./Components/Staff-Receptionist/ReceptionAccount/ReceptionAccount";
import OnlineBookingList from "./Components/Staff-Receptionist/OnlineBookingList/OnlineBookingList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StoreProvider } from "./Store";
import React from "react";
import CreateStaff from "./Components/Master-Admin/CreateStaff/CreateStaff";
import AdminLogin from "./Components/Master-Admin/AdminLogin/AdminLogin";
import OpenSales from "./Components/Staff-BartenderAndServers/OpenSales/OpenSales";

function App() {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <Router>
      {" "}
      {/* Wrap your entire application inside Router */}
      <div className='App'>
        <div>
          <Toaster
            position='top-right'
            reverseOrder={false}
            gutter={8}
            containerClassName=''
            containerStyle={{}}
            toastOptions={{
              // Define default options
              className: "",
              duration: 5000,
              style: {
                background: "#363636",
                color: "#fff",
              },
            }}
          />
          <StoreProvider>
            <QueryClientProvider client={queryClient}>
              <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/Booking' element={<Booking />} />{" "}
                {/* Define your Booking route */}
                <Route
                  path='/DashboardComponents'
                  element={<DashboardComponents />}
                />
                <Route path='/DashboardRoom' element={<DashboardRoom />} />
                <Route path='/Register' element={<Register />} />
                <Route
                  path='/DashboardLaundry'
                  element={<DashboardLaundry />}
                />
                <Route path='/GuestAccount' element={<GuestAccount />} />
                <Route path='/SignIn' element={<SignIn />} />
                <Route
                  path='/GuestDashboardAccount'
                  element={<GuestDashboardAccount />}
                />
                <Route path='/AssignRoom' element={<AssignRoom />} />
                <Route path='/RegisterGuests' element={<RegisterGuests />} />
                <Route path='/Reservations' element={<Reservations />} />
                <Route path='/GuestRoom' element={<GuestRoom />} />
                <Route
                  path='/GuestDashBoardRoom'
                  element={<GuestDashBoardRoom />}
                />
                <Route path='/GeneralAccount' element={<GeneralAccount />} />
                <Route path='/StaffDashboard' element={<StaffDashboard />} />
                <Route
                  path='/GuestAccessPage'
                  element={<GuestAccessPage />}
                />{" "}
                {/* Define your GuestAccessPage route */}
                <Route
                  path='/ReceptionistGuestPayment'
                  element={<ReceptionistGuestPayment />}
                />
                <Route
                  path='/UpdateGuestPayment'
                  element={<UpdateGuestPayment />}
                />
                <Route path='/ReservationInfo' element={<ReservationInfo />} />
                <Route path='/ManageGuest' element={<ManageGuest />} />
                <Route
                  path='/ReceptionAccount'
                  element={<ReceptionAccount />}
                />
                <Route
                  path='/OnlineBookingList'
                  element={<OnlineBookingList />}
                />
                <Route
                  path='/CreateStaff'
                  element={<CreateStaff/>}
                />
                <Route
                  path='/AdminLogin'
                  element={<AdminLogin/>}
                />
                <Route
                  path='/OpenSales'
                  element={<OpenSales/>}
                />
              </Routes>
            </QueryClientProvider>
          </StoreProvider>
        </div>
      </div>
    </Router>
  );
}

export default App;
