import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/index.css';
import AppNavbar from './Components/Navbar/index';
import AppFooter from './Components/Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppNavbar />
    <App />
    <AppFooter />
  </React.StrictMode>
);
