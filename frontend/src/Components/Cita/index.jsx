import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import axios from "axios";
import { API_URL } from "../../../constants.js";
import "bootstrap/dist/css/bootstrap.css";
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

  const onSubmit = (formData) => {
    // Realizar la solicitud a la API REST
    axios
      .post(API_URL + "/loginUsuarios", formData)
      .then((response) => {
        // Obtener los datos de la respuesta
        const responseData = response.data;

        // Actualizar los datos en el estado
        setData(responseData);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "¡Error!",
          text: "",
          customClass: {
            confirmButton: "custom-confirm-button",
          },
        });
        console.error(error);
      });
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
          <Form onSubmit={handleSubmit(onSubmit)}>
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
                    <span className="error-message">
                      {errors.dia.message}
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
              Generar Cita
            </Button>
          </Form>

          <h2 className="text-center mb-4">Consultar cita</h2>
          <Form onSubmit={handleSubmit(onSubmit)}>
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
                    <span className="error-message">
                      {errors.dia.message}
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
          </Form>

          <h2 className="text-center mb-4">Citas</h2>
          <div className="table-responsive">
            <Table className="mt-4 table">
              <thead>
                <tr>
                  <th>Nombre Paciente</th>
                  <th>Fecha Consulta</th>
                  <th>Hora Inicio</th>
                  <th>Hora Fin</th>
                  <th>Consultorio</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.paciente}</td>
                    <td>{item.consulta}</td>
                    <td>{item.inicio}</td>
                    <td>{item.fin}</td>
                    <td>{item.consultorio}</td>
                    <td>
                      <Button
                        color="danger"
                        onClick={() => handleCancel(index)}
                      >
                        Cancelar
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Cita;

