import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
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
} from "reactstrap";
import "../../assets/index.css";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    const requestBody = {
      correo: email,
      password: password,
    };

    axios
      .post(API_URL + "/loginUsuarios", requestBody)
      .then((response) => {
        Swal.fire({
          icon: "success",
          title: "¡Éxito!",
          text: "La solicitud se completó correctamente.",
          customClass: {
            confirmButton: "custom-confirm-button",
          },
        });
        console.log(response.data);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "¡Error!",
          text: "Correo o contraseña no válidos",
          customClass: {
            confirmButton: "custom-confirm-button",
          },
        });
        console.error(error);
      });
  };

  return (
    <Container fluid className="sign-up-container">
      <Row className="justify-content-center align-items-center">
        <Col md={6} lg={4}>
          <h2 className="text-center mb-4">Iniciar Sesión</h2>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <Label for="email">Correo electrónico</Label>
              <Input
                type="email"
                id="email"
                placeholder="Correo electrónico"
                {...register("email", { required: "Este campo es requerido" })}
                onChange={(e) => setValue("email", e.target.value)}
              />
              {errors.email && (
                <span className="error-message">{errors.email.message}</span>
              )}
            </FormGroup>
            <FormGroup>
              <Label for="password">Contraseña</Label>
              <Input
                type="password"
                id="password"
                placeholder="Contraseña"
                {...register("password", {
                  required: "Este campo es requerido",
                })}
                onChange={(e) => setValue("password", e.target.value)}
              />
              {errors.password && (
                <span className="error-message">{errors.password.message}</span>
              )}
            </FormGroup>
            <Button
              color="success"
              block
              className="custom-button"
              type="submit"
            >
              Aceptar
            </Button>
          </Form>
          <div className="text-center mt-3">
            ¿No tienes cuenta?{" "}
            <Link to="/signup" className="custom-link">
              Crear cuenta
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;
