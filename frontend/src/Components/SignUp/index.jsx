import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { API_URL } from '../../../constants.js';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import '../../assets/index.css';

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm();

  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setSubmitting(true);
    try {
      const response = await axios.post(API_URL + '/Admin', data);
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
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "¡Error!",
        text: "Hubo un error al crear la cuenta",
        customClass: {
          confirmButton: "custom-confirm-button",
        },
      });
    } finally {
      setSubmitting(false);
    }
  };

  const password = watch('password');
  const confirmPassword = watch('confirmPassword');

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
                {...register('firstName', { required: 'Este campo es requerido' })}
                onChange={(e) => setValue('firstName', e.target.value)}
              />
              {errors.firstName && (
                <span className="error-message">{errors.firstName.message}</span>
              )}
            </FormGroup>
            <FormGroup>
              <Label for="lastName">Apellido Paterno</Label>
              <Input
                type="text"
                id="lastName"
                placeholder="Apellido Paterno"
                {...register('lastName', { required: 'Este campo es requerido' })}
                onChange={(e) => setValue('lastName', e.target.value)}
              />
              {errors.lastName && (
                <span className="error-message">{errors.lastName.message}</span>
              )}
            </FormGroup>
            <FormGroup>
              <Label for="middleName">Apellido Materno</Label>
              <Input
                type="text"
                id="middleName"
                placeholder="Apellido Materno"
                {...register('middleName', { required: 'Este campo es requerido' })}
                onChange={(e) => setValue('middleName', e.target.value)}
              />
              {errors.middleName && (
                <span className="error-message">{errors.middleName.message}</span>
              )}
            </FormGroup>
            <FormGroup>
              <Label for="email">Correo electrónico</Label>
              <Input
                type="email"
                id="email"
                placeholder="Correo electrónico"
                {...register('email', { required: 'Este campo es requerido' })}
                onChange={(e) => setValue('email', e.target.value)}
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
                {...register('password', { required: 'Este campo es requerido' })}
                onChange={(e) => setValue('password', e.target.value)}
              />
              {errors.password && (
                <span className="error-message">{errors.password.message}</span>
              )}
            </FormGroup>
            <FormGroup>
              <Label for="confirmPassword">Repetir contraseña</Label>
              <Input
                type="password"
                id="confirmPassword"
                placeholder="Repetir contraseña"
                {...register('confirmPassword', {
                  required: 'Este campo es requerido',
                  validate: (value) => value === password || 'Las contraseñas no coinciden',
                })}
                onChange={(e) => setValue('confirmPassword', e.target.value)}
              />
              {errors.confirmPassword && (
                <span className="error-message">{errors.confirmPassword.message}</span>
              )}
              {confirmPassword !== password && !errors.confirmPassword && (
                <span className="error-message">Las contraseñas no coinciden</span>
              )}
            </FormGroup>
            <Button
              color="success"
              block
              className="custom-button"
              type="submit"
              disabled={submitting}
            >
              {submitting ? 'Creando cuenta...' : 'Crear cuenta'}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
