/* import './App.css' */
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./Components/SignIn";

function App() {
  return (
    <BrowserRouter>

        <Routes>
          <Route path="/" element={<Navigate to="/signin" />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
  
    </BrowserRouter>
  );
}

export default App;

