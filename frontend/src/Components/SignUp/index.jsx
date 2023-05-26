import React from "react";
import { useForm } from "react-hook-form";
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
          <h2 className="text-center mb-4">Crear cuenta</h2>
          <Form>
            <FormGroup>
              <Label for="name">Nombre</Label>
              <Input type="text" id="name" placeholder="Nombre" />
            </FormGroup>
            <FormGroup>
              <Label for="email">Correo electrónico</Label>
              <Input type="email" id="email" placeholder="Correo electrónico" />
            </FormGroup>
            <FormGroup>
              <Label for="password">Contraseña</Label>
              <Input type="password" id="password" placeholder="Contraseña" />
            </FormGroup>
            <FormGroup>
              <Label for="confirmPassword">Confirmar contraseña</Label>
              <Input
                type="password"
                id="confirmPassword"
                placeholder="Confirmar contraseña"
              />
            </FormGroup>
            <Button
              color="success"
              block
              className="custom-button"
              onClick={handleSubmit(onSubmit)}
            >
              Crear cuenta
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;