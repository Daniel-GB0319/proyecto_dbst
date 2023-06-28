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

const Doctor = () => {
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

  useEffect(() => {
    // Aquí puedes realizar una solicitud inicial a la API para obtener los datos y mostrarlos en la tabla al cargar el componente
  }, []);

  const handleCancel = (index) => {
    // Realizar la lógica para cancelar la consulta
    // Puedes enviar una solicitud a la API para actualizar el estado de la consulta
    // Una vez actualizado, puedes actualizar el estado "data" para reflejar el cambio en la tabla
  };

  return (
    <Container fluid className="sign-up-container">
      <Row className="justify-content-center align-items-center">
        <Col md={12} lg={10}>
          <h2 className="text-center mb-4">Historial de citas</h2>
          <Form onSubmit={handleSubmit(onSubmit)}>
            {/* Formulario de inicio de sesión */}
          </Form>
          <div className="table-responsive">
            <Table className="mt-4 table">
              <thead>
                <tr>
                  <th>Nombre Doctor</th>
                  <th>Fecha Consulta</th>
                  <th>Hora Inicio</th>
                  <th>Hora Fin</th>
                  <th>Costo Consulta</th>
                  <th>Consultorio</th>
                  <th>Estatus</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.nombreDoctor}</td>
                    <td>{item.fechaConsulta}</td>
                    <td>{item.horaInicio}</td>
                    <td>{item.horaFin}</td>
                    <td>{item.costoConsulta}</td>
                    <td>{item.consultorio}</td>
                    <td>{item.estatus}</td>
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
          <h2 className="text-center mb-4">Generar recetas</h2>
          <Form>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="fecha_expedicion">Fecha de Expedición</Label>
                  <Input
                    type="datetime-local"
                    id="fecha_expedicion"
                    {...register("fecha_expedicion", {
                      required: "Este campo es requerido",
                    })}
                  />
                  {errors.fecha_expedicion && (
                    <span className="error-message">
                      {errors.fecha_expedicion.message}
                    </span>
                  )}
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="observaciones">Observaciones</Label>
                  <Input
                    type="text"
                    id="observaciones"
                    {...register("observaciones")}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="diagnostico">Diagnóstico</Label>
                  <Input
                    type="text"
                    id="diagnostico"
                    {...register("diagnostico", {
                      required: "Este campo es requerido",
                    })}
                  />
                  {errors.diagnostico && (
                    <span className="error-message">
                      {errors.diagnostico.message}
                    </span>
                  )}
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="costo_total">Costo Total</Label>
                  <Input
                    type="number"
                    id="costo_total"
                    {...register("costo_total", {
                      required: "Este campo es requerido",
                    })}
                  />
                  {errors.costo_total && (
                    <span className="error-message">
                      {errors.costo_total.message}
                    </span>
                  )}
                </FormGroup>
              </Col>
            </Row>
            <Button color="primary" type="submit" className="custom-button">
              Generar Receta
            </Button>
          </Form>
          <h2 className="text-center mb-4">Consultar recetas</h2>
          <Form>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="fecha_expedicion">Fecha de Expedición</Label>
                  <Input
                    type="datetime-local"
                    id="fecha_expedicion"
                    {...register("fecha_expedicion", {
                      required: "Este campo es requerido",
                    })}
                  />
                  {errors.fecha_expedicion && (
                    <span className="error-message">
                      {errors.fecha_expedicion.message}
                    </span>
                  )}
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="observaciones">Observaciones</Label>
                  <Input
                    type="text"
                    id="observaciones"
                    {...register("observaciones")}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="diagnostico">Diagnóstico</Label>
                  <Input
                    type="text"
                    id="diagnostico"
                    {...register("diagnostico", {
                      required: "Este campo es requerido",
                    })}
                  />
                  {errors.diagnostico && (
                    <span className="error-message">
                      {errors.diagnostico.message}
                    </span>
                  )}
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="costo_total">Costo Total</Label>
                  <Input
                    type="number"
                    id="costo_total"
                    {...register("costo_total", {
                      required: "Este campo es requerido",
                    })}
                  />
                  {errors.costo_total && (
                    <span className="error-message">
                      {errors.costo_total.message}
                    </span>
                  )}
                </FormGroup>
              </Col>
            </Row>
            <Button color="primary" type="submit" className="custom-button">
              Consultar recetas
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Doctor;


