import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Table, FormGroup, Label, Input, Button } from 'reactstrap';
import { useForm } from 'react-hook-form';

const Doctor = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [citasData, setCitasData] = useState([]);
  const [doctorData, setDoctorData] = useState({});
  const [consultoriosData, setConsultoriosData] = useState([]);
  const [selectedConsultorio, setSelectedConsultorio] = useState('');
  const [selectedCita, setSelectedCita] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchCitasData = async () => {
      try {
        const response = await axios.get('URL_DEL_BACKEND/citas');
        setCitasData(response.data);
      } catch (error) {
        console.error('Error al obtener las citas:', error);
      }
    };

    const fetchDoctorData = async () => {
      try {
        const response = await axios.get('URL_DEL_BACKEND/doctor');
        setDoctorData(response.data);
      } catch (error) {
        console.error('Error al obtener los datos del doctor:', error);
      }
    };

    const fetchConsultoriosData = async () => {
      try {
        const response = await axios.get('URL_DEL_BACKEND/consultorios');
        setConsultoriosData(response.data);
      } catch (error) {
        console.error('Error al obtener los consultorios:', error);
      }
    };

    fetchCitasData();
    fetchDoctorData();
    fetchConsultoriosData();
  }, []);

  const handleAltaDoctor = async (data) => {
    try {
      await axios.post('URL_DEL_BACKEND/doctor', data);
      console.log('Doctor dado de alta exitosamente');
    } catch (error) {
      console.error('Error al dar de alta al doctor:', error);
    }
  };

  const handleBajaDoctor = async () => {
    try {
      await axios.delete('URL_DEL_BACKEND/doctor');
      console.log('Doctor dado de baja exitosamente');
    } catch (error) {
      console.error('Error al dar de baja al doctor:', error);
    }
  };

  const handleEliminarConsultorios = async () => {
    try {
      await axios.delete('URL_DEL_BACKEND/consultorios');
      console.log('Consultorios eliminados exitosamente');
    } catch (error) {
      console.error('Error al eliminar los consultorios:', error);
    }
  };

  const handleModificarCita = async (data) => {
    try {
      await axios.put(`URL_DEL_BACKEND/citas/${selectedCita}`, data);
      console.log('Cita modificada exitosamente');
      setIsEditing(false);
    } catch (error) {
      console.error('Error al modificar la cita:', error);
    }
  };

  const handleSelectCita = (citaId) => {
    setSelectedCita(citaId);
    setIsEditing(true);
  };

  return (
    <Container fluid >
       <Row className="justify-content-center align-items-center">
        <Col md={6} lg={4}>
          <h2 className="text-center mb-4">Doctores</h2>
      <form onSubmit={handleSubmit(handleAltaDoctor)}>
        <FormGroup>
          <Label for="curp">CURP:</Label>
          <Input
            type="text"
            id="curp"
            placeholder="CURP"
            {...register("curp", { required: "Este campo es requerido" })}
            onChange={(e) => setValue("curp", e.target.value)}
          />
          {errors.curp && (
            <span className="error-message">{errors.curp.message}</span>
          )}
        </FormGroup>
        <FormGroup>
          <Label for="nombre">Nombre:</Label>
          <Input
            type="text"
            id="nombre"
            placeholder="Nombre"
            {...register("nombre", { required: "Este campo es requerido" })}
            onChange={(e) => setValue("nombre", e.target.value)}
          />
          {errors.nombre && (
            <span className="error-message">{errors.nombre.message}</span>
          )}
        </FormGroup>
        <FormGroup>
          <Label for="ap_paterno">Apellido Paterno:</Label>
          <Input
            type="text"
            id="ap_paterno"
            placeholder="Apellido Paterno"
            {...register("ap_paterno", { required: "Este campo es requerido" })}
            onChange={(e) => setValue("ap_paterno", e.target.value)}
          />
          {errors.ap_paterno && (
            <span className="error-message">{errors.ap_paterno.message}</span>
          )}
        </FormGroup>
        <FormGroup>
          <Label for="ap_materno">Apellido Materno:</Label>
          <Input
            type="text"
            id="ap_materno"
            placeholder="Apellido Materno"
            {...register("ap_materno", { required: "Este campo es requerido" })}
            onChange={(e) => setValue("ap_materno", e.target.value)}
          />
          {errors.ap_materno && (
            <span className="error-message">{errors.ap_materno.message}</span>
          )}
        </FormGroup>
        <FormGroup>
          <Label for="edad">Edad:</Label>
          <Input
            type="number"
            id="edad"
            placeholder="Edad"
            {...register("edad", { required: "Este campo es requerido" })}
            onChange={(e) => setValue("edad", e.target.value)}
          />
          {errors.edad && (
            <span className="error-message">{errors.edad.message}</span>
          )}
        </FormGroup>
        <FormGroup>
          <Label for="calle">Calle:</Label>
          <Input
            type="text"
            id="calle"
            placeholder="Calle"
            {...register("calle", { required: "Este campo es requerido" })}
            onChange={(e) => setValue("calle", e.target.value)}
          />
          {errors.calle && (
            <span className="error-message">{errors.calle.message}</span>
          )}
        </FormGroup>
        <FormGroup>
          <Label for="num_ext">Número Exterior:</Label>
          <Input
            type="number"
            id="num_ext"
            placeholder="Número Exterior"
            {...register("num_ext")}
            onChange={(e) => setValue("num_ext", e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="num_int">Número Interior:</Label>
          <Input
            type="number"
            id="num_int"
            placeholder="Número Interior"
            {...register("num_int")}
            onChange={(e) => setValue("num_int", e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="colonia">Colonia:</Label>
          <Input
            type="text"
            id="colonia"
            placeholder="Colonia"
            {...register("colonia", { required: "Este campo es requerido" })}
            onChange={(e) => setValue("colonia", e.target.value)}
          />
          {errors.colonia && (
            <span className="error-message">{errors.colonia.message}</span>
          )}
        </FormGroup>
        <FormGroup>
          <Label for="delegacion">Delegación:</Label>
          <Input
            type="text"
            id="delegacion"
            placeholder="Delegación"
            {...register("delegacion", { required: "Este campo es requerido" })}
            onChange={(e) => setValue("delegacion", e.target.value)}
          />
          {errors.delegacion && (
            <span className="error-message">{errors.delegacion.message}</span>
          )}
        </FormGroup>
        <FormGroup>
          <Label for="entidadFederativa">Entidad Federativa:</Label>
          <Input
            type="text"
            id="entidadFederativa"
            placeholder="Entidad Federativa"
            {...register("entidadFederativa", { required: "Este campo es requerido" })}
            onChange={(e) => setValue("entidadFederativa", e.target.value)}
          />
          {errors.entidadFederativa && (
            <span className="error-message">{errors.entidadFederativa.message}</span>
          )}
        </FormGroup>
        <FormGroup>
          <Label for="fecha_nac">Fecha de Nacimiento:</Label>
          <Input
            type="date"
            id="fecha_nac"
            placeholder="Fecha de Nacimiento"
            {...register("fecha_nac", { required: "Este campo es requerido" })}
            onChange={(e) => setValue("fecha_nac", e.target.value)}
          />
          {errors.fecha_nac && (
            <span className="error-message">{errors.fecha_nac.message}</span>
          )}
        </FormGroup>
        <FormGroup>
          <Label for="sexo">Sexo:</Label>
          <Input
            type="select"
            id="sexo"
            {...register("sexo", { required: "Este campo es requerido" })}
            onChange={(e) => setValue("sexo", e.target.value)}
          >
            <option value="">Seleccionar</option>
            <option value="M">Masculino</option>
            <option value="F">Femenino</option>
          </Input>
          {errors.sexo && (
            <span className="error-message">{errors.sexo.message}</span>
          )}
        </FormGroup>
        <FormGroup>
          <Label for="aseguradora">Aseguradora:</Label>
          <Input
            type="text"
            id="aseguradora"
            placeholder="Aseguradora"
            {...register("aseguradora")}
            onChange={(e) => setValue("aseguradora", e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="consultorio_id_consultorio">ID Consultorio:</Label>
          <Input
            type="number"
            id="consultorio_id_consultorio"
            placeholder="ID Consultorio"
            {...register("consultorio_id_consultorio", { required: "Este campo es requerido" })}
            onChange={(e) => setValue("consultorio_id_consultorio", e.target.value)}
          />
          {errors.consultorio_id_consultorio && (
            <span className="error-message">{errors.consultorio_id_consultorio.message}</span>
          )}
        </FormGroup>
        <FormGroup>
          <Label for="horario_id_horario">ID Horario:</Label>
          <Input
            type="number"
            id="horario_id_horario"
            placeholder="ID Horario"
            {...register("horario_id_horario", { required: "Este campo es requerido" })}
            onChange={(e) => setValue("horario_id_horario", e.target.value)}
          />
          {errors.horario_id_horario && (
            <span className="error-message">{errors.horario_id_horario.message}</span>
          )}
        </FormGroup>
        <FormGroup>
          <Label for="especialidad_id_especialidad">ID Especialidad:</Label>
          <Input
            type="number"
            id="especialidad_id_especialidad"
            placeholder="ID Especialidad"
            {...register("especialidad_id_especialidad", { required: "Este campo es requerido" })}
            onChange={(e) => setValue("especialidad_id_especialidad", e.target.value)}
          />
          {errors.especialidad_id_especialidad && (
            <span className="error-message">{errors.especialidad_id_especialidad.message}</span>
          )}
        </FormGroup>

        <Button className="custom-button" type="submit">Dar de Alta</Button>
      </form>

      {/* Baja de Doctor */}
      <h3>Baja de Doctor</h3>
      <Button className="custom-button" onClick={handleBajaDoctor}>Dar de Baja</Button>

      {/* Eliminar Consultorios */}
      <h3>Eliminar Consultorios</h3>
      <Button className="custom-button" onClick={handleEliminarConsultorios}>Eliminar Consultorios</Button>

      {/* Mostrar Citas del Doctor */}
      <h3>Citas del Doctor</h3>
      <Table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Paciente</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {citasData.map((cita) => (
            <tr key={cita.id}>
              <td>{cita.fecha}</td>
              <td>{cita.hora}</td>
              <td>{cita.paciente}</td>
              <td>
                <Button onClick={() => handleSelectCita(cita.id)}>Editar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Edición de Cita */}
      {isEditing && (
        <div>
          <h4>Editar Cita</h4>
          <form onSubmit={handleSubmit(handleModificarCita)}>
            {/* Inputs para editar la cita */}
            <Button type="submit" className="custom-button">Guardar Cambios</Button>
          </form>
        </div>
      )}
       </Col>
      </Row>
    </Container>
  );
};

export default Doctor;

