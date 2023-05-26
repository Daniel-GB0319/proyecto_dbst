import React from "react";
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import "../../assets/index.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-heading">Contacto</h3>
          <ul className="footer-contact-list">
            <li>
              <faCoffee className="footer-icon" />
              Dirección del Hospital
            </li>
            <li>
              <faCoffee className="footer-icon" />
              Teléfono: +1234567890
            </li>
            <li>
              <faCoffee className="footer-icon" />
              Email: info@hospital.com
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-heading">Enlaces</h3>
          <ul className="footer-links-list">
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/servicios">Servicios</a>
            </li>
            <li>
              <a href="/doctores">Doctores</a>
            </li>
            <li>
              <a href="/contacto">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Hospital. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
