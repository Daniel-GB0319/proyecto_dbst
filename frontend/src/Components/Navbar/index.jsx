import React, { useContext, useState } from "react";
import { Navbar, Nav, NavItem, NavLink, NavbarBrand, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Button, Col } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Contexts/UserContext.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const AppNavbar = () => {
  const { tipoUsuario, nombreTipoUsuario, updateUserContext } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nombre, setNombre] = useState("");
  const [apPaterno, setApPaterno] = useState("");
  const [apMaterno, setApMaterno] = useState("");
  const [horarioIdHorario, setHorarioIdHorario] = useState("");
  const navigate = useNavigate();

  const handleLogout = async () => {
    setIsLoading(true);

    try {
      updateUserContext("", "");
      navigate("/home");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado");
  };

  return (
    <Navbar className="app-navbar" expand="md">
      <NavbarBrand tag={Link} to="/" className="navbar-brand">
        Hospital XYZ
      </NavbarBrand>
      <Nav className="mr-auto" navbar>
        <NavItem>
          <NavLink tag={Link} to="/" className="linkk">
            Inicio
          </NavLink>
        </NavItem>
        {!(tipoUsuario && nombreTipoUsuario) && (
          <>
            <NavItem>
              <NavLink tag={Link} to="/home" className="linkk">
                Servicios
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/home" className="linkk">
                Contacto
              </NavLink>
            </NavItem>
          </>
        )}
        {tipoUsuario && nombreTipoUsuario && (
          <>
            <NavLink onClick={toggleModal} className="linkk">
              <FontAwesomeIcon icon={faUser} className="icon" />
              Perfil
            </NavLink>
            <NavLink onClick={handleLogout} className="nav-link" href="#">
              Cerrar Sesión
            </NavLink>
            {isLoading && ( // Mostrar el spinner cuando isLoading es true
              <div className="overlay">
                <div className="spinner-container">
                  <div className="spinner"></div>
                </div>
              </div>
            )}
          </>
        )}
        {!tipoUsuario && !nombreTipoUsuario && (
          <NavLink tag={Link} to="/signin" className="linkk">
            Iniciar Sesión
          </NavLink>
        )}
      </Nav>
      {/* Modal */}
      
<Modal isOpen={isModalOpen} toggle={toggleModal} centered>
        <ModalHeader toggle={toggleModal}>Perfil</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            {/* <FormGroup row>
              <Label for="nombre" sm={2} className="text-right" >Nombre</Label>
              <Col sm={10}>
                <Input type="text" name="nombre" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
              </Col>
              <Col sm={{ size: 10, offset: 9 }}>
              <Button type="submit"  className="custom-button">Consultar</Button>
              </Col>
            </FormGroup> */}
            <FormGroup row>
              <Label for="nombre" sm={2} className="text-right" >Nombre</Label>
              <Col sm={10}>
                <Input type="text" name="nombre" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="apPaterno" sm={2} className="text-right">Apellido Paterno</Label>
              <Col sm={10}>
                <Input type="text" name="apPaterno" id="apPaterno" value={apPaterno} onChange={(e) => setApPaterno(e.target.value)} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="apMaterno" sm={2} className="text-right">Apellido Materno</Label>
              <Col sm={10}>
                <Input type="text" name="apMaterno" id="apMaterno" value={apMaterno} onChange={(e) => setApMaterno(e.target.value)} />
              </Col>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter >
          <Button  className="custom-button" onClick={toggleModal}>Cerrar</Button>
        </ModalFooter>
      </Modal>
    </Navbar>
  );
};


export default AppNavbar;

