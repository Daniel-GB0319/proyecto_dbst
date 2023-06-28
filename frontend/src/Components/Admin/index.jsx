import React, { useState } from "react";
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
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import "../../assets/index.css";
import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext.jsx";

const Admin = () => {
  const { updateUserContext } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("1");
  const [data, setData] = useState([]);

  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const {
    register: registerAdmin,
    handleSubmit: handleSubmitAdmin,
    formState: { errors: adminErrors },
    setValue: setAdminValue,
    reset: resetAdmin,
  } = useForm();

  const {
    register: registerDoc,
    handleSubmit: handleSubmitDoc,
    formState: { errors: docErrors },
    setValue: setDocValue,
    reset: resetDoc,
  } = useForm();

  const {
    register: registerRecep,
    handleSubmit: handleSubmitRecep,
    formState: { errors: recepErrors },
    setValue: setRecepValue,
    reset: resetRecep,
  } = useForm();

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
    navigate("/consultorio");
  };

  const handleCancel = (index) => {
    // Realizar la lógica para cancelar la consulta
    // Puedes enviar una solicitud a la API para actualizar el estado de la consulta
    // Una vez actualizado, puedes actualizar el estado "data" para reflejar el cambio en la tabla
  };

  const onSubmitAdmin = async (data) => {
    try {
      const response = await axios.post(API_URL + "/insertAdministrador", data);
      console.log(response.data);
      Swal.fire({
        icon: "success",
        title: "¡Cuenta creada!",
        text: "La cuenta administrador fue creada exitosamente.",
        customClass: {
          confirmButton: "custom-confirm-button",
        },
      });
      resetAdmin();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "¡Error!",
        text: "La cuenta administrador no fue creada",
        customClass: {
          confirmButton: "custom-confirm-button",
        },
      });
      console.error(error);
    }
  };

  const onSubmitDoc = async (data) => {
    setIsLoading(true);
    try {
      const response = await axios.post(API_URL + "/insertDoctor", data);
      console.log(response.data);
      Swal.fire({
        icon: "success",
        title: "¡Cuenta creada!",
        text: "La cuenta Doctor fue creada exitosamente.",
        customClass: {
          confirmButton: "custom-confirm-button",
        },
      });
      resetDoc();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "¡Error!",
        text: "La cuenta doctor no fue creada",
        customClass: {
          confirmButton: "custom-confirm-button",
        },
      });
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmitRecep = async (data) => {
    setIsLoading(true);
    setSubmitting(true);
    try {
      const response = await axios.post(API_URL + "/insertRecepcionista", data);
      console.log(response.data);
      Swal.fire({
        icon: "success",
        title: "¡Cuenta creada!",
        text: "La cuenta Recepcionista fue creada exitosamente.",
        customClass: {
          confirmButton: "custom-confirm-button",
        },
      });
      resetRecep();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "¡Error!",
        text: "La cuenta Recepcionista no fue creada",
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

  const onSubmitPacientes = async (data) => {
    setIsLoading(true);
    setSubmitting(true);
    try {
      const response = await axios.post(API_URL + "/Admin", data);
      console.log(response.data);
      Swal.fire({
        icon: "success",
        title: "¡Cuenta creada!",
        text: "Tu cuenta se ha creado exitosamente.",
        customClass: {
          confirmButton: "custom-confirm-button",
        },
      });
      resetPaci();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "¡Error!",
        text: "Correo o contraseña no válidos",
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
            Consultorios
          </Button>
          <h2 className="text-center mb-4">Crear Cuentas</h2>
          <Nav tabs className="nav-link:hover">
            <NavItem>
              <NavLink
                className={activeTab === "1" ? "active" : ""}
                onClick={() => toggleTab("1")}
              >
                Administrador
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={activeTab === "2" ? "active" : ""}
                onClick={() => toggleTab("2")}
              >
                Doctores
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={activeTab === "3" ? "active" : ""}
                onClick={() => toggleTab("3")}
              >
                Recepcionistas
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={activeTab === "4" ? "active" : ""}
                onClick={() => toggleTab("4")}
              >
                Pacientes
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <Container fluid className="sign-up-container">
                <Row className="justify-content-center align-items-center">
                  <Form onSubmit={handleSubmitAdmin(onSubmitAdmin)}>
                    <FormGroup>
                      <Label for="firstName">Nombre(s)</Label>
                      <Input
                        type="text"
                        id="firstNamee"
                        {...registerAdmin("nombre", {
                          required: "Este campo es requerido",
                        })}
                        onChange={(e) =>
                          setAdminValue("nombre", e.target.value)
                        }
                      />
                      {adminErrors.nombre && (
                        <span className="error-message">
                          {adminErrors.nombre.message}
                        </span>
                      )}
                    </FormGroup>
                    <FormGroup>
                      <Label for="lastName">Apellido Paterno</Label>
                      <Input
                        type="text"
                        id="lastNamee"
                        {...registerAdmin("ap_paterno", {
                          required: "Este campo es requerido",
                        })}
                        onChange={(e) =>
                          setAdminValue("ap_paterno", e.target.value)
                        }
                      />
                      {adminErrors.ap_paterno && (
                        <span className="error-message">
                          {adminErrors.ap_paterno.message}
                        </span>
                      )}
                    </FormGroup>
                    <FormGroup>
                      <Label for="middleName">Apellido Materno</Label>
                      <Input
                        type="text"
                        id="middleNamee"
                        {...registerAdmin("ap_materno", {
                          required: "Este campo es requerido",
                        })}
                        onChange={(e) =>
                          setAdminValue("ap_materno", e.target.value)
                        }
                      />
                      {adminErrors.ap_materno && (
                        <span className="error-message">
                          {adminErrors.ap_materno.message}
                        </span>
                      )}
                    </FormGroup>
                    <FormGroup>
                      <Label for="correo">Correo electrónico</Label>
                      <Input
                        type="email"
                        id="correo"
                        {...registerAdmin("correo", {
                          required: "Este campo es requerido",
                        })}
                        onChange={(e) =>
                          setAdminValue("correo", e.target.value)
                        }
                      />
                      {adminErrors.correo && (
                        <span className="error-message">
                          {adminErrors.correo.message}
                        </span>
                      )}
                    </FormGroup>
                    <FormGroup>
                      <Label for="password">Contraseña</Label>
                      <Input
                        type="password"
                        id="passwordd"
                        {...registerAdmin("password", {
                          required: "Este campo es requerido",
                        })}
                        onChange={(e) =>
                          setAdminValue("password", e.target.value)
                        }
                      />
                      {adminErrors.password && (
                        <span className="error-message">
                          {adminErrors.password.message}
                        </span>
                      )}
                    </FormGroup>
                    <Button
                      color="success"
                      block
                      className="custom-button"
                      type="submit"
                    >
                      Crear Cuenta
                    </Button>
                    <div style={{ marginTop: "20px" }}></div>
                  </Form>
                </Row>
              </Container>
            </TabPane>
            <TabPane tabId="2">
              <Container fluid className="sign-up-container">
                <Form onSubmit={handleSubmitDoc(onSubmitDoc)}>
                  <Row form>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="curp">CURP</Label>
                        <Input
                          type="text"
                          id="curp"
                          {...registerDoc("curp", {
                            required: "Este campo es requerido",
                            maxLength: 18,
                          })}
                          onChange={(e) => setDocValue("curp", e.target.value)}
                        />
                        {docErrors.curp && (
                          <span className="error-message">
                            {docErrors.curp.message}
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
                          {...registerDoc("nombre", {
                            required: "Este campo es requerido",
                          })}
                          onChange={(e) =>
                            setDocValue("nombre", e.target.value)
                          }
                        />
                        {docErrors.nombre && (
                          <span className="error-message">
                            {docErrors.nombre.message}
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
                          {...registerDoc("ap_paterno", {
                            required: "Este campo es requerido",
                          })}
                          onChange={(e) =>
                            setDocValue("ap_paterno", e.target.value)
                          }
                        />
                        {docErrors.ap_paterno && (
                          <span className="error-message">
                            {docErrors.ap_paterno.message}
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
                          {...registerDoc("ap_materno", {
                            required: "Este campo es requerido",
                          })}
                          onChange={(e) =>
                            setDocValue("ap_materno", e.target.value)
                          }
                        />
                        {docErrors.ap_materno && (
                          <span className="error-message">
                            {docErrors.ap_materno.message}
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
                          {...registerDoc("edad", {
                            required: "Este campo es requerido",
                          })}
                          onChange={(e) => setDocValue("edad", e.target.value)}
                        />
                        {docErrors.edad && (
                          <span className="error-message">
                            {docErrors.edad.message}
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
                          {...registerDoc("tipo_sangre")}
                          onChange={(e) =>
                            setDocValue("tipo_sangre", e.target.value)
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
                          {...registerDoc("calle", {
                            required: "Este campo es requerido",
                          })}
                          onChange={(e) => setDocValue("calle", e.target.value)}
                        />
                        {docErrors.calle && (
                          <span className="error-message">
                            {docErrors.calle.message}
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
                          {...registerDoc("num_ext")}
                          onChange={(e) =>
                            setDocValue("num_ext", e.target.value)
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
                          {...registerDoc("num_int")}
                          onChange={(e) =>
                            setDocValue("num_int", e.target.value)
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
                          {...registerDoc("colonia", {
                            required: "Este campo es requerido",
                          })}
                          onChange={(e) =>
                            setDocValue("colonia", e.target.value)
                          }
                        />
                        {docErrors.colonia && (
                          <span className="error-message">
                            {docErrors.colonia.message}
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
                          {...registerDoc("delegacion", {
                            required: "Este campo es requerido",
                          })}
                          onChange={(e) =>
                            setDocValue("delegacion", e.target.value)
                          }
                        />
                        {docErrors.delegacion && (
                          <span className="error-message">
                            {docErrors.delegacion.message}
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
                          {...registerDoc("entidad_federativa", {
                            required: "Este campo es requerido",
                          })}
                          onChange={(e) =>
                            setDocValue("entidad_federativa", e.target.value)
                          }
                        />
                        {docErrors.entidad_federativa && (
                          <span className="error-message">
                            {docErrors.entidad_federativa.message}
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
                          {...registerDoc("fecha_nac", {
                            required: "Este campo es requerido",
                          })}
                          onChange={(e) =>
                            setDocValue("fecha_nac", e.target.value)
                          }
                        />
                        {docErrors.fecha_nac && (
                          <span className="error-message">
                            {docErrors.fecha_nac.message}
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
                          {...registerDoc("peso")}
                          onChange={(e) => setDocValue("peso", e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="altura">Altura</Label>
                        <Input
                          type="number"
                          id="altura"
                          {...registerDoc("altura")}
                          onChange={(e) =>
                            setDocValue("altura", e.target.value)
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
                          {...registerDoc("sexo", {
                            required: "Este campo es requerido",
                          })}
                          onChange={(e) => setDocValue("sexo", e.target.value)}
                        >
                          <option value="">Seleccionar</option>
                          <option value="M">Masculino</option>
                          <option value="F">Femenino</option>
                        </Input>
                        {docErrors.sexo && (
                          <span className="error-message">
                            {docErrors.sexo.message}
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
                          {...registerDoc("aseguradora")}
                          onChange={(e) =>
                            setDocValue("aseguradora", e.target.value)
                          }
                        />
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="consultorio_id_consultorio">
                          Consultorio{" "}
                        </Label>
                        <Input
                          type="number"
                          id="consultorio_id_consultorio"
                          {...registerDoc("consultorio_id_consultorio", {
                            required: "Este campo es requerido",
                          })}
                          onChange={(e) =>
                            setDocValue(
                              "consultorio_id_consultorio",
                              e.target.value
                            )
                          }
                        />
                        {docErrors.consultorio_id_consultorio && (
                          <span className="error-message">
                            {docErrors.consultorio_id_consultorio.message}
                          </span>
                        )}
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row form>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="horario_id_horario">Horario </Label>
                        <Input
                          type="number"
                          id="horario_id_horario"
                          {...registerDoc("horario_id_horario", {
                            required: "Este campo es requerido",
                          })}
                          onChange={(e) =>
                            setDocValue("horario_id_horario", e.target.value)
                          }
                        />
                        {docErrors.horario_id_horario && (
                          <span className="error-message">
                            {docErrors.horario_id_horario.message}
                          </span>
                        )}
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="especialidad_id_especialidad">
                          Especialidad{" "}
                        </Label>
                        <Input
                          type="number"
                          id="especialidad_id_especialidad"
                          {...registerDoc("especialidad_id_especialidad", {
                            required: "Este campo es requerido",
                          })}
                          onChange={(e) =>
                            setDocValue(
                              "especialidad_id_especialidad",
                              e.target.value
                            )
                          }
                        />
                        {docErrors.especialidad_id_especialidad && (
                          <span className="error-message">
                            {docErrors.especialidad_id_especialidad.message}
                          </span>
                        )}
                      </FormGroup>
                    </Col>
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
            <TabPane tabId="3">
              <Container fluid className="sign-up-container">
                <Row className="justify-content-center align-items-center">
                  <Form onSubmit={handleSubmitRecep(onSubmitRecep)}>
                    <FormGroup>
                      <Label for="firstName">Nombre(s)</Label>
                      <Input
                        type="text"
                        id="firstName"
                        {...registerRecep("nombre", {
                          required: "Este campo es requerido",
                        })}
                        onChange={(e) =>
                          setRecepValue("nombre", e.target.value)
                        }
                      />
                      {recepErrors.nombre && (
                        <span className="error-message">
                          {recepErrors.nombre.message}
                        </span>
                      )}
                    </FormGroup>
                    <FormGroup>
                      <Label for="lastName">Apellido Paterno</Label>
                      <Input
                        type="text"
                        id="lastName"
                        {...registerRecep("ap_paterno", {
                          required: "Este campo es requerido",
                        })}
                        onChange={(e) =>
                          setRecepValue("ap_paterno", e.target.value)
                        }
                      />
                      {recepErrors.ap_paterno && (
                        <span className="error-message">
                          {recepErrors.ap_paterno.message}
                        </span>
                      )}
                    </FormGroup>
                    <FormGroup>
                      <Label for="middleName">Apellido Materno</Label>
                      <Input
                        type="text"
                        id="middleName"
                        {...registerRecep("ap_materno", {
                          required: "Este campo es requerido",
                        })}
                        onChange={(e) =>
                          setRecepValue("ap_materno", e.target.value)
                        }
                      />
                      {recepErrors.ap_materno && (
                        <span className="error-message">
                          {recepErrors.ap_materno.message}
                        </span>
                      )}
                    </FormGroup>
                    <FormGroup>
                      <Label for="email">Correo electrónico</Label>
                      <Input
                        type="email"
                        id="email"
                        {...registerRecep("correo", {
                          required: "Este campo es requerido",
                        })}
                        onChange={(e) =>
                          setRecepValue("correo", e.target.value)
                        }
                      />
                      {recepErrors.correo && (
                        <span className="error-message">
                          {recepErrors.correo.message}
                        </span>
                      )}
                    </FormGroup>
                    <FormGroup>
                      <Label for="password">Contraseña</Label>
                      <Input
                        type="password"
                        id="password"
                        {...registerRecep("password", {
                          required: "Este campo es requerido",
                        })}
                        onChange={(e) =>
                          setRecepValue("password", e.target.value)
                        }
                      />
                      {recepErrors.password && (
                        <span className="error-message">
                          {recepErrors.password.message}
                        </span>
                      )}
                    </FormGroup>
                    <Button
                      color="success"
                      block
                      className="custom-button"
                      type="submit"
                      disabled={submitting}
                    >
                      {submitting ? "Creando cuenta..." : "Crear cuenta"}
                    </Button>
                  </Form>
                </Row>
              </Container>
            </TabPane>
            <TabPane tabId="4">
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

export default Admin;
