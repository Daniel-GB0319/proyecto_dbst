import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios';

const Appointment = () => {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const [appointmentId, setAppointmentId] = useState(null);
  const [patientData, setPatientData] = useState(null);

  const handleSearch = (data) => {
    // Realizar la búsqueda de la cita utilizando el CURP
    axios.get(`/api/appointments?curp=${data.curp}`)
      .then(response => {
        const appointment = response.data;
        if (appointment) {
          setPatientData(appointment);
          setAppointmentId(appointment.id);

          // Establecer los valores en los campos del formulario
          setValue("patientName", appointment.patientName);
          setValue("date", appointment.date);
          setValue("time", appointment.time);
          setValue("office", appointment.office);
        } else {
          setPatientData(null);
          setAppointmentId(null);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  const onSubmit = (data) => {
    if (patientData) {
      // Comparar los datos modificados con los datos existentes
      const modifiedData = {};
      Object.keys(data).forEach(key => {
        if (data[key] !== patientData[key]) {
          modifiedData[key] = data[key];
        }
      });

      // Verificar si se realizaron modificaciones
      if (Object.keys(modifiedData).length > 0) {
        axios.put(`/api/appointments/${appointmentId}`, modifiedData)
          .then(response => {
            console.log(response.data);
            setPatientData(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      }
    } else {
      // Si no hay una cita existente, crear una nueva cita
      axios.post('/api/appointments', data)
        .then(response => {
          console.log(response.data);
          setPatientData(response.data);
          setAppointmentId(response.data.id);
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  const onCancel = () => {
    if (appointmentId) {
      axios.delete(`/api/appointments/${appointmentId}`)
        .then(response => {
          console.log(response.data);
          setPatientData(null);
          setAppointmentId(null);
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  return (
    <Container fluid >
      {!patientData && (
        <Row className="justify-content-center align-items-center">
          <Col md={6} lg={4}>
            <h2 className="text-center mb-4">Buscar Cita</h2>
            <Form onSubmit={handleSubmit(handleSearch)}>
              <FormGroup>
                <Label for="curp">CURP</Label>
                <Input
                  type="text"
                  id="curp"
                  placeholder="Ingrese su CURP"
                  {...register("curp", { required: "Este campo es requerido" })}
                  onChange={(e) => setValue("curp", e.target.value)}
                />
                {errors.curp && (
                  <span className="error-message">{errors.curp.message}</span>
                )}
              </FormGroup>
              <Button color="primary" block className="custom-button" type="submit">
                Buscar Cita
              </Button>
            </Form>
          </Col>
        </Row>
      )}
      {patientData && (
        <Row className="justify-content-center align-items-center">
          <Col md={6} lg={4}>
            <h2 className="text-center mb-4">Modificar Cita</h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <FormGroup>
                <Label for="patientName">Nombre del Paciente</Label>
                <Input
                  type="text"
                  id="patientName"
                  placeholder="Nombre del Paciente"
                  defaultValue={patientData.patientName}
                  {...register("patientName", { required: "Este campo es requerido" })}
                  onChange={(e) => setValue("patientName", e.target.value)}
                />
                {errors.patientName && (
                  <span className="error-message">{errors.patientName.message}</span>
                )}
              </FormGroup>
              <FormGroup>
                <Label for="date">Fecha</Label>
                <Input
                  type="date"
                  id="date"
                  defaultValue={patientData.date}
                  {...register("date", { required: "Este campo es requerido" })}
                  onChange={(e) => setValue("date", e.target.value)}
                />
                {errors.date && (
                  <span className="error-message">{errors.date.message}</span>
                )}
              </FormGroup>
              <FormGroup>
                <Label for="time">Hora</Label>
                <Input
                  type="time"
                  id="time"
                  defaultValue={patientData.time}
                  {...register("time", { required: "Este campo es requerido" })}
                  onChange={(e) => setValue("time", e.target.value)}
                />
                {errors.time && (
                  <span className="error-message">{errors.time.message}</span>
                )}
              </FormGroup>
              <FormGroup>
                <Label for="office">Consultorio</Label>
                <Input
                  type="text"
                  id="office"
                  placeholder="Consultorio"
                  defaultValue={patientData.office}
                  {...register("office", { required: "Este campo es requerido" })}
                  onChange={(e) => setValue("office", e.target.value)}
                />
                {errors.office && (
                  <span className="error-message">{errors.office.message}</span>
                )}
              </FormGroup>
              <Button color="success" block className="custom-button" type="submit">
                Modificar Cita
              </Button>
              <Button color="danger" block className="custom-button mt-3" onClick={onCancel}>
                Cancelar Cita
              </Button>
            </Form>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Appointment;



