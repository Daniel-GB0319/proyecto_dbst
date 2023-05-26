import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
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
    console.log(data);
    // Realiza la solicitud POST utilizando Axios
    axios
      .post("URL", data)
      .then((response) => {
        console.log(response.data);
        // Realiza las acciones necesarias con la respuesta
      })
      .catch((error) => {
        console.error(error);
        // Maneja el error de la solicitud
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
