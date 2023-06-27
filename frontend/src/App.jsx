import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/Home";
import SignIn from "./Components/SignIn";
import Admin from "./Components/Admin";
import AppNavbar from './Components/Navbar/index';
import AppFooter from './Components/Footer';
import { UserProvider } from "./Contexts/UserContext.jsx";



import SignUp from "./Components/SignUp";
import Prescription from "./Components/Prescription";
import Doctors from "./Components/Doctors";
import Patient from "./Components/Patient";
import Appointment from "./Components/Appointment";



function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <AppNavbar />
        <div className="app-container">
          <div className="app-content">
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/receta" element={<Prescription />} />
              <Route path="/doctors" element={<Doctors/>} />
              <Route path="/patient" element={<Patient/>} />
              <Route path="/Appointment" element={<Appointment/>} />
            </Routes>
          </div>
          <AppFooter />
        </div>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
