import { useState } from "react";
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
    register: registerRecep,
    handleSubmit: handleSubmitRecep,
    formState: { errors: recepErrors },
    setValue: setRecepValue,
    reset: resetRecep,
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
      resetRecep();
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
              <Form onSubmit={handleSubmitRecep(onSubmitPacientes)}>
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
                        <Label for="horario_id_horario">Horario </Label>
                        <Input
                          type="number"
                          id="horario_id_horario"
                          {...registerRecep("horario_id_horario", {
                            required: "Este campo es requerido",
                          })}
                          onChange={(e) =>
                            setRecepValue("horario_id_horario", e.target.value)
                          }
                        />
                        {recepErrors.horario_id_horario && (
                          <span className="error-message">
                            {recepErrors.horario_id_horario.message}
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
              </Container>
            </TabPane>
          </TabContent>
        </Col>
      </Row>
    </Container>
  );
};

export default Recepcionista;
