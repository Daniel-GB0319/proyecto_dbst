import React, { useState } from "react";
import { Table, FormGroup, Label, Input, Button, Container, Row, Col } from "reactstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import axios from "axios";
import { API_URL } from "../../../constants.js";
import "bootstrap/dist/css/bootstrap.css";

const Consultorios = () => {
  const [data, setData] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm();

  const handleCancel = (index) => {
    // Realizar la lógica para cancelar la consulta
    // Puedes enviar una solicitud a la API para actualizar el estado de la consulta
    // Una vez actualizado, puedes actualizar el estado "data" para reflejar el cambio en la tabla
  };

  const onSubmitRecep = async (data) => {
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
    }
  };

  return (
    <Container fluid className="sign-up-container">
      <Row className="justify-content-center align-items-center">
        <Col md={6} lg={4}>
          <h2 className="text-center mb-4">Consultorios</h2>
          <div className="table-responsive">
            <Table className="mt-4 table">
              <thead>
                <tr>
                  <th>Consultorio</th>
                  <th>Estado</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.consultorio}</td>
                    <td>{item.estado}</td>
                    <td>{item.accion}</td>
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

          <h2 className="text-center mb-4">Asignar Consultorios</h2>
          <div className="table-responsive">
            <form onSubmit={handleSubmit(onSubmitRecep)}>
              <FormGroup>
                <Label for="firstName">Consultorio</Label>
                <Input
                  type="text"
                  id="firstName"
                  {...register("firstName", {
                    required: "Este campo es requerido",
                  })}
                  onChange={(e) => setValue("firstName", e.target.value)}
                />
                {errors.firstName && (
                  <span className="error-message">
                    {errors.firstName.message}
                  </span>
                )}
              </FormGroup>
              <FormGroup>
                <Label for="lastName">Doctor</Label>
                <Input
                  type="text"
                  id="lastName"
                  {...register("lastName", {
                    required: "Este campo es requerido",
                  })}
                  onChange={(e) => setValue("lastName", e.target.value)}
                />
                {errors.lastName && (
                  <span className="error-message">
                    {errors.lastName.message}
                  </span>
                )}
              </FormGroup>
              <Button
                color="success"
                block
                className="custom-button"
                type="submit"
              >
                Asignar
              </Button>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Consultorios;
