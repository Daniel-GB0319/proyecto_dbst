import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/Home";
import SignIn from "./Components/SignIn";
import Admin from "./Components/Admin";
import AppNavbar from './Components/Navbar/index';
import AppFooter from './Components/Footer';
import Recepcionista from './Components/Recepcionista';
import Paciente from './Components/Paciente';
import Doctor from './Components/Doctor';
import { UserProvider } from "./Contexts/UserContext.jsx";




import Prescription from "./Components/Prescription";
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
              <Route path="/recepcionista" element={<Recepcionista />} />
              <Route path="/paciente" element={<Paciente />} />
              <Route path="/doctor" element={<Doctor />} />

              <Route path="/receta" element={<Prescription />} />
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
