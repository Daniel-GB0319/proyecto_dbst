import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import "../../assets/index.css";

const CreateRecipe = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    // Realiza la solicitud POST utilizando Axios
    axios
      .post("URL", data)
      .then((response) => {
        console.log(response.data);
        // Realiza las acciones necesarias con la respuesta del servidor
        Swal.fire("¡Receta creada!", "La receta se ha creado exitosamente.", "success");
        reset(); // Reinicia los campos del formulario
      })
      .catch((error) => {
        console.error(error);
        // Maneja el error de la solicitud
        Swal.fire("Error", "Hubo un error al crear la receta.", "error");
      });
  };

  return (
    <Container fluid className="sign-up-container">
      <Row className="justify-content-center align-items-center">
        <Col md={6} lg={4}>
          <h2 className="text-center mb-4">Crear Receta</h2>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <Label for="medication">Medicamento</Label>
              <Input
                type="text"
                id="medication"
                className="custom-input"
                {...register("medication", { required: true })}
              />
              {errors.medication && <span className="error-message">Este campo es requerido</span>}
            </FormGroup>
            <FormGroup>
              <Label for="doctorName">Nombre del Doctor</Label>
              <Input
                type="text"
                id="doctorName"
                className="custom-input"
                {...register("doctorName", { required: true })}
              />
              {errors.doctorName && <span className="error-message">Este campo es requerido</span>}
            </FormGroup>
            <FormGroup>
              <Label for="medicationCost">Costo del Medicamento</Label>
              <Input
                type="number"
                id="medicationCost"
                className="custom-input"
                {...register("medicationCost", { required: true })}
              />
              {errors.medicationCost && <span className="error-message">Este campo es requerido</span>}
            </FormGroup>
            <FormGroup>
              <Label for="diagnosis">Diagnóstico</Label>
              <Input
                type="text"
                id="diagnosis"
                className="custom-input"
                {...register("diagnosis", { required: true })}
              />
              {errors.diagnosis && <span className="error-message">Este campo es requerido</span>}
            </FormGroup>
            <FormGroup>
              <Label for="observations">Observaciones</Label>
              <Input
                type="text"
                id="observations"
                className="custom-input"
                {...register("observations", { required: true })}
              />
              {errors.observations && <span className="error-message">Este campo es requerido</span>}
            </FormGroup>
            <FormGroup>
              <Label for="expeditionDate">Fecha de Expedición</Label>
              <Input
                type="date"
                id="expeditionDate"
                className="custom-input"
                {...register("expeditionDate", { required: true })}
              />
              {errors.expeditionDate && <span className="error-message">Este campo es requerido</span>}
            </FormGroup>
            <Button color="success" block className="custom-button" type="submit">Crear Receta</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateRecipe; 