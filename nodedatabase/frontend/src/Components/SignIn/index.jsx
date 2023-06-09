import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
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
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data; // Extraer el email y la contraseña del objeto data
    const requestBody = {
      email: email,
      password: password
    };
  
    axios
      .post("URL", requestBody)
      .then((response) => {
        // Mostrar mensaje de éxito con SweetAlert
        Swal.fire({
          icon: "success",
          title: "¡Éxito!",
          text: "La solicitud se completó correctamente."
        });
        console.log(response.data);
        // Realizar las acciones necesarias con la respuesta
      })
      .catch((error) => {
        // Mostrar mensaje de error con SweetAlert
        Swal.fire({
          icon: "error",
          title: "¡Error!",
          text: "Hubo un problema al realizar la solicitud."
        });
        console.error(error);
        // Manejar el error de la solicitud
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
              />
              {errors.email && <span>{errors.email.message}</span>}
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
              />
              {errors.password && <span>{errors.password.message}</span>}
            </FormGroup>
            <Button
              color="success"
              block
              className="custom-button"
              onClick={handleSubmit(onSubmit)}
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
