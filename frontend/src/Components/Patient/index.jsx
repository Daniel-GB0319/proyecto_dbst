import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { FormGroup, Label, Input, Button, Row, Col } from 'reactstrap';

const Patient = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = (data) => {
    const { id_paciente, calle, num_ext, num_int, delegacion, colonia, estado, seguro } = data;

    // Lógica para realizar las diferentes llamadas a Axios según el caso
    if (id_paciente && !calle && !num_ext && !num_int && !delegacion && !colonia && !estado && !seguro) {
      // Llamada a queryDatosPersonales
      axios
        .post('/queryPacienteDatos', { id_paciente })
        .then((response) => {
          console.log(response.data);
          // Manejar la respuesta según lo necesario
        })
        .catch((error) => {
          console.error(error);
          // Manejar el error según lo necesario
        });
    } else if (id_paciente && calle && num_ext && num_int && delegacion && colonia && estado && !seguro) {
      // Llamada a updateDireccion
      axios
        .post('/updatePacienteDireccion', { id_paciente, calle, num_ext, num_int, delegacion, colonia, estado })
        .then((response) => {
          console.log(response.data);
          // Manejar la respuesta según lo necesario
        })
        .catch((error) => {
          console.error(error);
          // Manejar el error según lo necesario
        });
    } else if (id_paciente && seguro) {
      // Llamada a updateSeguro
      axios
        .post('/updatePacienteSeguro', { id_paciente, seguro })
        .then((response) => {
          console.log(response.data);
          // Manejar la respuesta según lo necesario
        })
        .catch((error) => {
          console.error(error);
          // Manejar el error según lo necesario
        });
    } else if (id_paciente) {
      // Llamada a deletePaciente
      axios
        .post('/deletePaciente', { id_paciente })
        .then((response) => {
          console.log(response.data);
          // Manejar la respuesta según lo necesario
        })
        .catch((error) => {
          console.error(error);
          // Manejar el error según lo necesario
        });
    }
  };


  return (
    <div className="patient-container">
    <form onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="nombre">Nombre</Label>
            <Input
              type="text"
              id="nombre"
              placeholder="Nombre"
              /* {...register('nombre', { required: 'Este campo es requerido' })} */
              onChange={(e) => setValue('nombre', e.target.value)}
            />
            {errors.nombre && (
              <span className="error-message">{errors.nombre.message}</span>
            )}
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="ap_paterno">Apellido Paterno</Label>
            <Input
              type="text"
              id="ap_paterno"
              placeholder="Apellido Paterno"
              /* {...register('ap_paterno', { required: 'Este campo es requerido' })} */
              onChange={(e) => setValue('ap_paterno', e.target.value)}
            />
            {errors.ap_paterno && (
              <span className="error-message">{errors.ap_paterno.message}</span>
            )}
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="ap_materno">Apellido Materno</Label>
            <Input
              type="text"
              id="ap_materno"
              placeholder="Apellido Materno"
             /*  {...register('ap_materno', { required: 'Este campo es requerido' })} */
              onChange={(e) => setValue('ap_materno', e.target.value)}
            />
            {errors.ap_materno && (
              <span className="error-message">{errors.ap_materno.message}</span>
            )}
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="edad">Edad</Label>
            <Input
              type="number"
              id="edad"
              placeholder="Edad"
              /* {...register('edad', { required: 'Este campo es requerido' })} */
              onChange={(e) => setValue('edad', e.target.value)}
            />
            {errors.edad && (
              <span className="error-message">{errors.edad.message}</span>
            )}
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="tipo_sangre">Tipo de Sangre</Label>
            <Input
              type="text"
              id="tipo_sangre"
              placeholder="Tipo de Sangre"
              /* {...register('tipo_sangre', { required: 'Este campo es requerido' })} */
              onChange={(e) => setValue('tipo_sangre', e.target.value)}
            />
            {errors.tipo_sangre && (
              <span className="error-message">{errors.tipo_sangre.message}</span>
            )}
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="calle">Calle</Label>
            <Input
              type="text"
              id="calle"
              placeholder="Calle"
              /* {...register('calle', { required: 'Este campo es requerido' })} */
              onChange={(e) => setValue('calle', e.target.value)}
            />
            {errors.calle && (
              <span className="error-message">{errors.calle.message}</span>
            )}
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="num_ext">Número Exterior</Label>
            <Input
              type="number"
              id="num_ext"
              placeholder="Número Exterior"
              {...register('num_ext')}
              onChange={(e) => setValue('num_ext', e.target.value)}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="num_int">Número Interior</Label>
            <Input
              type="number"
              id="num_int"
              placeholder="Número Interior"
              {...register('num_int')}
              onChange={(e) => setValue('num_int', e.target.value)}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="colonia">Colonia</Label>
            <Input
              type="text"
              id="colonia"
              placeholder="Colonia"
              /* {...register('colonia', { required: 'Este campo es requerido' })} */
              onChange={(e) => setValue('colonia', e.target.value)}
            />
            {errors.colonia && (
              <span className="error-message">{errors.colonia.message}</span>
            )}
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="delegacion">Delegación</Label>
            <Input
              type="text"
              id="delegacion"
              placeholder="Delegación"
              /* {...register('delegacion', { required: 'Este campo es requerido' })} */
              onChange={(e) => setValue('delegacion', e.target.value)}
            />
            {errors.delegacion && (
              <span className="error-message">{errors.delegacion.message}</span>
            )}
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="entidad_federativa">Entidad Federativa</Label>
            <Input
              type="text"
              id="entidad_federativa"
              placeholder="Entidad Federativa"
              /* {...register('entidad_federativa', { required: 'Este campo es requerido' })} */
              onChange={(e) => setValue('entidad_federativa', e.target.value)}
            />
            {errors.entidad_federativa && (
              <span className="error-message">{errors.entidad_federativa.message}</span>
            )}
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="fecha_nac">Fecha de Nacimiento</Label>
            <Input
              type="date"
              id="fecha_nac"
              placeholder="Fecha de Nacimiento"
              /* {...register('fecha_nac', { required: 'Este campo es requerido' })} */
              onChange={(e) => setValue('fecha_nac', e.target.value)}
            />
            {errors.fecha_nac && (
              <span className="error-message">{errors.fecha_nac.message}</span>
            )}
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="peso">Peso</Label>
            <Input
              type="number"
              id="peso"
              placeholder="Peso"
              step="0.01"
             /*  {...register('peso', { required: 'Este campo es requerido' })} */
              onChange={(e) => setValue('peso', e.target.value)}
            />
            {errors.peso && (
              <span className="error-message">{errors.peso.message}</span>
            )}
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="altura">Altura</Label>
            <Input
              type="number"
              id="altura"
              placeholder="Altura"
              step="0.01"
              /* {...register('altura', { required: 'Este campo es requerido' })} */
              onChange={(e) => setValue('altura', e.target.value)}
            />
            {errors.altura && (
              <span className="error-message">{errors.altura.message}</span>
            )}
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="sexo">Sexo</Label>
            <Input
              type="text"
              id="sexo"
              placeholder="Sexo"
              /* {...register('sexo', { required: 'Este campo es requerido' })} */
              onChange={(e) => setValue('sexo', e.target.value)}
            />
            {errors.sexo && (
              <span className="error-message">{errors.sexo.message}</span>
            )}
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="aseguradora">Aseguradora</Label>
            <Input
              type="text"
              id="aseguradora"
              placeholder="Aseguradora"
              {...register('aseguradora')}
              onChange={(e) => setValue('aseguradora', e.target.value)}
            />
          </FormGroup>
        </Col>
      </Row>
      <Button color="success" block className="custom-button" type="submit">
        Guardar
      </Button>
    </form>
    </div>
  );
};

export default Patient;

