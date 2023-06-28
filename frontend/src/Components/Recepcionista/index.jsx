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
import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext.jsx";

const Recepcionista = () => {
  const { updateUserContext } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("1");

  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
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
      reset();
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

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

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
                <Form onSubmit={handleSubmit(onSubmitPacientes)}>
                  <Row form>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="curp">CURP</Label>
                        <Input
                          type="text"
                          id="curp"
                          {...register("curp", {
                            required: "Este campo es requerido",
                          })}
                        />
                        {errors.curp && (
                          <span className="error-message">
                            {errors.curp.message}
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
                          {...register("nombre", {
                            required: "Este campo es requerido",
                          })}
                        />
                        {errors.nombre && (
                          <span className="error-message">
                            {errors.nombre.message}
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
                          {...register("ap_paterno", {
                            required: "Este campo es requerido",
                          })}
                        />
                        {errors.ap_paterno && (
                          <span className="error-message">
                            {errors.ap_paterno.message}
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
                          {...register("ap_materno", {
                            required: "Este campo es requerido",
                          })}
                        />
                        {errors.ap_materno && (
                          <span className="error-message">
                            {errors.ap_materno.message}
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
                          {...register("edad", {
                            required: "Este campo es requerido",
                          })}
                        />
                        {errors.edad && (
                          <span className="error-message">
                            {errors.edad.message}
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
                          {...register("tipo_sangre")}
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
                          {...register("calle", {
                            required: "Este campo es requerido",
                          })}
                        />
                        {errors.calle && (
                          <span className="error-message">
                            {errors.calle.message}
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
                          {...register("num_ext")}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="num_int">Número Interior</Label>
                        <Input
                          type="number"
                          id="num_int"
                          {...register("num_int")}
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
                          {...register("colonia", {
                            required: "Este campo es requerido",
                          })}
                        />
                        {errors.colonia && (
                          <span className="error-message">
                            {errors.colonia.message}
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
                          {...register("delegacion", {
                            required: "Este campo es requerido",
                          })}
                        />
                        {errors.delegacion && (
                          <span className="error-message">
                            {errors.delegacion.message}
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
                          {...register("entidad_federativa", {
                            required: "Este campo es requerido",
                          })}
                        />
                        {errors.entidad_federativa && (
                          <span className="error-message">
                            {errors.entidad_federativa.message}
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
                          {...register("fecha_nac", {
                            required: "Este campo es requerido",
                          })}
                        />
                        {errors.fecha_nac && (
                          <span className="error-message">
                            {errors.fecha_nac.message}
                          </span>
                        )}
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="peso">Peso</Label>
                        <Input type="number" id="peso" {...register("peso")} />
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="altura">Altura</Label>
                        <Input
                          type="number"
                          id="altura"
                          {...register("altura")}
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
                          {...register("sexo", {
                            required: "Este campo es requerido",
                          })}
                        >
                          <option value="">Seleccionar</option>
                          <option value="M">Masculino</option>
                          <option value="F">Femenino</option>
                        </Input>
                        {errors.sexo && (
                          <span className="error-message">
                            {errors.sexo.message}
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
                          {...register("aseguradora")}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                    <FormGroup>
                      <Label for="email">Correo electrónico</Label>
                      <Input
                        type="email"
                        id="email"
                        {...register("email", {
                          required: "Este campo es requerido",
                        })}
                        onChange={(e) => setValue("email", e.target.value)}
                      />
                      {errors.email && (
                        <span className="error-message">
                          {errors.email.message}
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
                        {...register("password", {
                          required: "Este campo es requerido",
                        })}
                        onChange={(e) => setValue("password", e.target.value)}
                      />
                      {errors.password && (
                        <span className="error-message">
                          {errors.password.message}
                        </span>
                      )}
                    </FormGroup>
                    </Col>
                    <Col md={4}>
                    <FormGroup>
                      <Label for="confirmPassword">Repetir contraseña</Label>
                      <Input
                        type="password"
                        id="confirmPassword"
                        {...register("confirmPassword", {
                          required: "Este campo es requerido",
                          validate: (value) =>
                            value === password ||
                            "Las contraseñas no coinciden",
                        })}
                        onChange={(e) =>
                          setValue("confirmPassword", e.target.value)
                        }
                      />
                      {errors.confirmPassword && (
                        <span className="error-message">
                          {errors.confirmPassword.message}
                        </span>
                      )}
                      {confirmPassword !== password &&
                        !errors.confirmPassword && (
                          <span className="error-message">
                            Las contraseñas no coinciden
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
          </TabContent>
        </Col>
      </Row>
    </Container>
  );
};

export default Recepcionista;
