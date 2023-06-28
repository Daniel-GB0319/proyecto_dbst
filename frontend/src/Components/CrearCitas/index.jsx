import { useState, useEffect } from "react";
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
  Table,
} from "reactstrap";
import "../../assets/index.css";
import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext.jsx";

const Cita = () => {
  const { updateUserContext } = useContext(UserContext);
  const [data, setData] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const {
    register: registerGenerar,
    handleSubmit: handleSubmitGenerar,
    formState: { errors: generarErrors },
    setValue: setGenerarValue,
    reset: resetGenerar,
  } = useForm();


  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/consultorio");
  };

  const onSubmitGenerar = async (data) => {
    try {
      const response = await axios.post(API_URL + "/createCita", data);
      console.log(response.data);
      Swal.fire({
        icon: "success",
        title: "¡Cuenta creada!",
        text: "La cita fue creada exitosamente.",
        customClass: {
          confirmButton: "custom-confirm-button",
        },
      });
      resetGenerar();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "¡Error!",
        text: "La cita no fue creada",
        customClass: {
          confirmButton: "custom-confirm-button",
        },
      });
      console.error(error);
    }
  };

  const handleCancel = (index) => {
    // Realizar la lógica para cancelar la consulta
    // Puedes enviar una solicitud a la API para actualizar el estado de la consulta
    // Una vez actualizado, puedes actualizar el estado "data" para reflejar el cambio en la tabla
  };

  useEffect(() => {
    // Aquí puedes realizar una solicitud inicial a la API para obtener los datos y mostrarlos en la tabla al cargar el componente
  }, []);

  return (
    <Container fluid className="sign-up-container">
      <Row className="justify-content-center align-items-center">
        <Col md={12} lg={10}>
          <h2 className="text-center mb-4">Generar cita</h2>
          <Form onSubmit={handleSubmitGenerar(onSubmitGenerar)}>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="curp_doctor">CURP del Doctor</Label>
                  <Input
                    type="text"
                    id="curp_doctor"
                    {...registerGenerar("curp_doctor", {
                      required: "Este campo es requerido",
                    })}
                    onChange={(e) =>
                      setGenerarValue("curp_doctor", e.target.value)
                    }
                  />
                  {generarErrors.curp_doctor && (
                    <span className="error-message">
                      {generarErrors.curp_doctor.message}
                    </span>
                  )}
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="fecha">Fecha</Label>
                  <Input
                    type="date"
                    id="fecha"
                    {...registerGenerar("fecha", {
                      required: "Este campo es requerido",
                    })}
                    onChange={(e) => setGenerarValue("fecha", e.target.value)}
                  />
                  {generarErrors.fecha && (
                    <span className="error-message">
                      {generarErrors.fecha.message}
                    </span>
                  )}
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="costo">Costo</Label>
                  <Input
                    type="number"
                    id="costo"
                    {...registerGenerar("costo", {
                      required: "Este campo es requerido",
                    })}
                    onChange={(e) => setGenerarValue("costo", e.target.value)}
                  />
                  {generarErrors.costo && (
                    <span className="error-message">
                      {generarErrors.costo.message}
                    </span>
                  )}
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="dia">Día</Label>
                  <Input
                    type="text"
                    id="dia"
                    {...registerGenerar("dia", {
                      required: "Este campo es requerido",
                    })}
                    onChange={(e) => setGenerarValue("dia", e.target.value)}
                  />
                  {generarErrors.dia && (
                    <span className="error-message">
                      {generarErrors.dia.message}
                    </span>
                  )}
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="horario">Horario</Label>
                  <Input
                    type="number"
                    id="horario"
                    {...registerGenerar("horario", {
                      required: "Este campo es requerido",
                    })}
                    onChange={(e) => setGenerarValue("horario", e.target.value)}
                  />
                  {generarErrors.horario && (
                    <span className="error-message">
                      {generarErrors.horario.message}
                    </span>
                  )}
                </FormGroup>
              </Col>
            </Row>
            <Button color="primary" type="submit" className="custom-button">
              Generar Cita
            </Button>
          </Form>

          {/* <h2 className="text-center mb-4">Consultar cita</h2>
          <Form onSubmit={handleSubmit(onSubmitGenerar)}>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="curp_doctor">CURP del Doctor</Label>
                  <Input
                    type="text"
                    id="curp_doctor"
                    {...register("curp_doctor", {
                      required: "Este campo es requerido",
                    })}
                  />
                  {errors.curp_doctor && (
                    <span className="error-message">
                      {errors.curp_doctor.message}
                    </span>
                  )}
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="fecha">Fecha</Label>
                  <Input
                    type="date"
                    id="fecha"
                    {...register("fecha", {
                      required: "Este campo es requerido",
                    })}
                  />
                  {errors.fecha && (
                    <span className="error-message">
                      {errors.fecha.message}
                    </span>
                  )}
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="costo">Costo</Label>
                  <Input
                    type="number"
                    id="costo"
                    {...register("costo", {
                      required: "Este campo es requerido",
                    })}
                  />
                  {errors.costo && (
                    <span className="error-message">
                      {errors.costo.message}
                    </span>
                  )}
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="dia">Día</Label>
                  <Input
                    type="text"
                    id="dia"
                    {...register("dia", {
                      required: "Este campo es requerido",
                    })}
                  />
                  {errors.dia && (
                    <span className="error-message">{errors.dia.message}</span>
                  )}
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="horario">Horario</Label>
                  <Input
                    type="number"
                    id="horario"
                    {...register("horario", {
                      required: "Este campo es requerido",
                    })}
                  />
                  {errors.horario && (
                    <span className="error-message">
                      {errors.horario.message}
                    </span>
                  )}
                </FormGroup>
              </Col>
            </Row>
            <Button color="primary" type="submit" className="custom-button">
              Consultar cita
            </Button>
          </Form> */}

        </Col>
      </Row>
    </Container>
  );
};

export default Cita;
