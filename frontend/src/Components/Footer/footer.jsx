import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import "../../assets/index.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="footer-section">
              <h3 className="footer-heading">Contacto</h3>
              <ul className="footer-contact-list">
                <li>
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="footer-icon" />
                  Dirección del Hospital
                </li>
                <li>
                  <FontAwesomeIcon icon={faPhone} className="footer-icon" />
                  Teléfono: +1234567890
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} className="footer-icon" />
                  Email: info@hospital.com
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} Hospital. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;

