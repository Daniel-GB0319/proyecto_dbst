/* import './App.css' */
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Home from "./Components/Home";
import Prescription from "./Components/Prescription";
import Doctors from "./Components/Doctors";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/receta" element={<Prescription />} />
          <Route path="/doctors" element={<Doctors/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

