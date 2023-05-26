import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import bannerImage from "../../assets/Images/banner.webp";
import doctorImage from "../../assets/Images/medico.jpg";
import nurseImage from "../../assets/Images/enfermera.jpg";
import appointmentImage from "../../assets/Images/citas.jpg";
import "../../assets/index.css";

const Home = () => {
  return (
    <div>
      {/* Banner */}
      <div className="banner">
        <img src={bannerImage} alt="Hospital Banner" className="banner-image" />
        <div className="banner-content">
          <h1>Bienvenido al Hospital XYZ</h1>
          <p>Brindando atención médica de calidad</p>
          {/* <Button color="primary">Saber más</Button> */}
        </div>
      </div>

      {/* Sección de servicios */}
      <section className="section">
        <Container>
          <Row>
            <Col md={4}>
              <img src={doctorImage} alt="Doctor" className="service-image" />
              <h3>Equipo Médico</h3>
              <p>Nuestro equipo de médicos altamente capacitados está aquí para cuidar de ti.</p>
            </Col>
            <Col md={4}>
              <img src={nurseImage} alt="Enfermera" className="service-image" />
              <h3>Enfermería Profesional</h3>
              <p>Nuestro personal de enfermería brinda atención y cuidado compasivo a nuestros pacientes.</p>
            </Col>
            <Col md={4}>
              <img src={appointmentImage} alt="Cita" className="service-image" />
              <h3>Citas Convenientes</h3>
              <p>Ofrecemos opciones de citas flexibles para adaptarse a tus necesidades y horarios.</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Sección de información adicional */}
      <section className="section info-section">
        <Container>
          <Row>
            <Col md={6}>
              <h2>Sobre Nosotros</h2>
              <p>
                El Hospital XYZ se dedica a proporcionar servicios de atención médica de calidad a la comunidad.
                Nuestro equipo médico altamente capacitado y nuestro personal de enfermería brindan atención
                compasiva y profesional a todos nuestros pacientes.
              </p>
              <Button color="success" className="custom-button">Conócenos</Button>
            </Col>
            <Col md={6}>
              <h2>Nuestros Servicios</h2>
              <ul>
                <li>Consultas médicas</li>
                <li>Exámenes médicos</li>
                <li>Procedimientos quirúrgicos</li>
                <li>Atención de emergencias</li>
                <li>Terapia física</li>
              </ul>
              <Button color="success" className="custom-button">Explora Nuestros Servicios</Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
