import React from "react";
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

const SignIn = () => {
  return (
    <Container fluid className="sign-up-container">
      <Row className="justify-content-center align-items-center">
        <Col md={6} lg={4}>
          <h2 className="text-center mb-4">Iniciar Sesión</h2>
          <Form>
            <FormGroup>
              <Label for="email">Correo electrónico</Label>
              <Input type="email" id="email" placeholder="Correo electrónico" />
            </FormGroup>
            <FormGroup>
              <Label for="password">Contraseña</Label>
              <Input type="password" id="password" placeholder="Contraseña" />
            </FormGroup>
            <Button color="success" block>
              Aceptar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;
