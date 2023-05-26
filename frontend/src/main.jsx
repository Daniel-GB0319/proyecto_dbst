import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/index.css';
import AppNavbar from './Components/Navbar/index';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppNavbar />
    <App />
  </React.StrictMode>
);
