/* import './App.css' */
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";

function App() {
  return (
    <BrowserRouter>

        <Routes>
          <Route path="/" element={<Navigate to="/signin" />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
  
    </BrowserRouter>
  );
}

export default App;

