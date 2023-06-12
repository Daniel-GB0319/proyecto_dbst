import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import { API_URL } from '../../../constants.js';
import 'bootstrap/dist/css/bootstrap.css';
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

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setSubmitting(true);
    try {
      // Realiza la solicitud POST utilizando Axios
      const response = await axios.post(API_URL + '/Admin', data);
      console.log(response.data);
      // Realiza las acciones necesarias con la respuesta
      Swal.fire("¡Cuenta creada!", "Tu cuenta se ha creado exitosamente.", "success");
      reset();
    } catch (error) {
      console.error(error);
      // Maneja el error de la solicitud
      Swal.fire("Error", "Hubo un error al crear la cuenta.", "error");
    } finally {
      setSubmitting(false);
    }
  };

  const password = watch("password");

  return (
    <Container fluid className="sign-up-container">
      <Row className="justify-content-center align-items-center">
        <Col md={6} lg={4}>
          <h2 className="text-center mb-4">Crear cuenta</h2>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <Label for="firstName">Nombre(s)</Label>
              <Input
                type="text"
                id="firstName"
                placeholder="Nombre(s)"
                {...register("firstName")}
              />
            </FormGroup>
            <FormGroup>
              <Label for="lastName">Apellido Paterno</Label>
              <Input
                type="text"
                id="lastName"
                placeholder="Apellido Paterno"
                {...register("lastName")}
              />
            </FormGroup>
            <FormGroup>
              <Label for="middleName">Apellido Materno</Label>
              <Input
                type="text"
                id="middleName"
                placeholder="Apellido Materno"
                {...register("middleName")}
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Correo electrónico</Label>
              <Input
                type="email"
                id="email"
                placeholder="Correo electrónico"
                {...register("email")}
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Contraseña</Label>
              <Input
                type="password"
                id="password"
                placeholder="Contraseña"
                {...register("password")}
              />
            </FormGroup>
            <FormGroup>
              <Label for="confirmPassword">Repetir contraseña</Label>
              <Input
                type="password"
                id="confirmPassword"
                placeholder="Repetir contraseña"
                {...register("confirmPassword")}
              />
            </FormGroup>
            <Button color="success" block className="custom-button" type="submit" disabled={submitting}>
              {submitting ? "Creando cuenta..." : "Crear cuenta"}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;

