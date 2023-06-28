import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import axios from "axios";
import { API_URL } from "../../../constants.js";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import "../../assets/index.css";

const Recepcionista = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("1");

  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const {
    register: registerPaci,
    handleSubmit: handleSubmitPaci,
    formState: { errors: paciErrors },
    setValue: setPaciValue,
    reset: resetPaci,
  } = useForm();

  const [submitting, setSubmitting] = useState(false);

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/cita");
  };

  const onSubmitPacientes = async (data) => {
    setIsLoading(true);
    setSubmitting(true);
    try {
      const response = await axios.post(API_URL + "/insertPaciente", data);
      console.log(response.data);
      Swal.fire({
        icon: "success",
        title: "¡Cuenta creada!",
        text: "Se ha creado un paciente exitosamente.",
        customClass: {
          confirmButton: "custom-confirm-button",
        },
      });
      resetPaci();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "¡Error!",
        text: "No se creó la cuenta",
        customClass: {
          confirmButton: "custom-confirm-button",
        },
      });
      console.error(error);
    } finally {
      setIsLoading(false);
      setSubmitting(false);
    }
  };


  return (
    <Container fluid className="sign-up-container">
      <Row className="justify-content-center align-items-center ">
        {isLoading && (
          <div className="overlay">
            <div className="spinner-container">
              <div className="spinner"></div>
            </div>
          </div>
        )}
        <Col md={6} lg={8}>
          <Button
            type="submit"
            className="custom-button float-left"
            onClick={handleButtonClick}
          >
            Citas
          </Button>
          <h2 className="text-center mb-4">Crear Cuentas</h2>
          <Nav tabs className="nav-link:hover">
            <NavItem>
              <NavLink
                className={activeTab === "1" ? "active" : ""}
                onClick={() => toggleTab("1")}
              >
                Pacientes
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <Container fluid className="sign-up-container">
              <Form onSubmit={handleSubmitPaci(onSubmitPacientes)}>
                  <Row form>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="curp">CURP</Label>
                        <Input
                          type="text"
                          id="curp"
                          {...registerPaci("curp", {
                            required: "Este campo es requerido",
                          })}
                          onChange={(e) => setPaciValue("curp", e.target.value)}
                        />
                        {paciErrors.curp && (
                          <span className="error-message">
                            {paciErrors.curp.message}
                          </span>
                        )}
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="nombre">Nombre</Label>
                        <Input
                          type="text"
                          id="nombre"
                          {...registerPaci("nombre", {
                            required: "Este campo es requerido",
                          })}
                          onChange={(e) =>
                            setPaciValue("nombre", e.target.value)
                          }
                        />
                        {paciErrors.nombre && (
                          <span className="error-message">
                            {paciErrors.nombre.message}
                          </span>
                        )}
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="ap_paterno">Apellido Paterno</Label>
                        <Input
                          type="text"
                          id="ap_paterno"
                          {...registerPaci("ap_paterno", {
                            required: "Este campo es requerido",
                          })}
                          onChange={(e) =>
                            setPaciValue("ap_paterno", e.target.value)
                          }
                        />
                        {paciErrors.ap_paterno && (
                          <span className="error-message">
                            {paciErrors.ap_paterno.message}
                          </span>
                        )}
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row form>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="ap_materno">Apellido Materno</Label>
                        <Input
                          type="text"
                          id="ap_materno"
                          {...registerPaci("ap_materno", {
                            required: "Este campo es requerido",
                          })}
                          onChange={(e) =>
                            setPaciValue("ap_materno", e.target.value)
                          }
                        />
                        {paciErrors.ap_materno && (
                          <span className="error-message">
                            {paciErrors.ap_materno.message}
                          </span>
                        )}
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="edad">Edad</Label>
                        <Input
                          type="number"
                          id="edad"
                          {...registerPaci("edad", {
                            required: "Este campo es requerido",
                          })}
                          onChange={(e) => setPaciValue("edad", e.target.value)}
                        />
                        {paciErrors.edad && (
                          <span className="error-message">
                            {paciErrors.edad.message}
                          </span>
                        )}
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="tipo_sangre">Tipo de Sangre</Label>
                        <Input
                          type="text"
                          id="tipo_sangre"
                          {...registerPaci("tipo_sangre")}
                          onChange={(e) =>
                            setPaciValue("tipo_sangre", e.target.value)
                          }
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row form>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="calle">Calle</Label>
                        <Input
                          type="text"
                          id="calle"
                          {...registerPaci("calle", {
                            required: "Este campo es requerido",
                          })}
                          onChange={(e) =>
                            setPaciValue("calle", e.target.value)
                          }
                        />
                        {paciErrors.calle && (
                          <span className="error-message">
                            {paciErrors.calle.message}
                          </span>
                        )}
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="num_ext">Número Exterior</Label>
                        <Input
                          type="number"
                          id="num_ext"
                          {...registerPaci("num_ext")}
                          onChange={(e) =>
                            setPaciValue("num_ext", e.target.value)
                          }
                        />
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="num_int">Número Interior</Label>
                        <Input
                          type="number"
                          id="num_int"
                          {...registerPaci("num_int")}
                          onChange={(e) =>
                            setPaciValue("num_int", e.target.value)
                          }
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row form>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="colonia">Colonia</Label>
                        <Input
                          type="text"
                          id="colonia"
                          {...registerPaci("colonia", {
                            required: "Este campo es requerido",
                          })}
                          onChange={(e) =>
                            setPaciValue("colonia", e.target.value)
                          }
                        />
                        {paciErrors.colonia && (
                          <span className="error-message">
                            {paciErrors.colonia.message}
                          </span>
                        )}
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="delegacion">Delegación</Label>
                        <Input
                          type="text"
                          id="delegacion"
                          {...registerPaci("delegacion", {
                            required: "Este campo es requerido",
                          })}
                          onChange={(e) =>
                            setPaciValue("delegacion", e.target.value)
                          }
                        />
                        {paciErrors.delegacion && (
                          <span className="error-message">
                            {paciErrors.delegacion.message}
                          </span>
                        )}
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="entidad_federativa">
                          Entidad Federativa
                        </Label>
                        <Input
                          type="text"
                          id="entidad_federativa"
                          {...registerPaci("entidad_federativa", {
                            required: "Este campo es requerido",
                          })}
                          onChange={(e) =>
                            setPaciValue("entidad_federativa", e.target.value)
                          }
                        />
                        {paciErrors.entidad_federativa && (
                          <span className="error-message">
                            {paciErrors.entidad_federativa.message}
                          </span>
                        )}
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row form>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="fecha_nac">Fecha de Nacimiento</Label>
                        <Input
                          type="date"
                          id="fecha_nac"
                          {...registerPaci("fecha_nac", {
                            required: "Este campo es requerido",
                          })}
                          onChange={(e) =>
                            setPaciValue("fecha_nac", e.target.value)
                          }
                        />
                        {paciErrors.fecha_nac && (
                          <span className="error-message">
                            {paciErrors.fecha_nac.message}
                          </span>
                        )}
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="peso">Peso</Label>
                        <Input
                          type="number"
                          id="peso"
                          {...registerPaci("peso")}
                          onChange={(e) => setPaciValue("peso", e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="altura">Altura</Label>
                        <Input
                          type="number"
                          id="altura"
                          {...registerPaci("altura")}
                          onChange={(e) =>
                            setPaciValue("altura", e.target.value)
                          }
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row form>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="sexo">Sexo</Label>
                        <Input
                          type="select"
                          id="sexo"
                          {...registerPaci("sexo", {
                            required: "Este campo es requerido",
                          })}
                          onChange={(e) => setPaciValue("sexo", e.target.value)}
                        >
                          <option value="">Seleccionar</option>
                          <option value="M">Masculino</option>
                          <option value="F">Femenino</option>
                        </Input>
                        {paciErrors.sexo && (
                          <span className="error-message">
                            {paciErrors.sexo.message}
                          </span>
                        )}
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="aseguradora">Aseguradora</Label>
                        <Input
                          type="text"
                          id="aseguradora"
                          {...registerPaci("aseguradora")}
                          onChange={(e) =>
                            setPaciValue("aseguradora", e.target.value)
                          }
                        />
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="email">Correo electrónico</Label>
                        <Input
                          type="email"
                          id="email"
                          {...registerPaci("email", {
                            required: "Este campo es requerido",
                          })}
                          onChange={(e) =>
                            setPaciValue("email", e.target.value)
                          }
                        />
                        {paciErrors.email && (
                          <span className="error-message">
                            {paciErrors.email.message}
                          </span>
                        )}
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row form>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="password">Contraseña</Label>
                        <Input
                          type="password"
                          id="password"
                          {...registerPaci("password", {
                            required: "Este campo es requerido",
                          })}
                          onChange={(e) =>
                            setPaciValue("password", e.target.value)
                          }
                        />
                        {paciErrors.password && (
                          <span className="error-message">
                            {paciErrors.password.message}
                          </span>
                        )}
                      </FormGroup>
                    </Col>
                    <Col md={4}></Col>
                  </Row>
                  <Button
                    color="success"
                    block
                    className="custom-button"
                    type="submit"
                  >
                    Crear Cuenta
                  </Button>
                </Form>
              </Container>
            </TabPane>
          </TabContent>
        </Col>
      </Row>
    </Container>
  );
};

export default Recepcionista;
