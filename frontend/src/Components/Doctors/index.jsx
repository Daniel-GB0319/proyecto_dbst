import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import "../../assets/index.css";

const SearchDoctorSchedules = () => {
  const [doctorName, setDoctorName] = useState("");
  const [schedules, setSchedules] = useState([]);

  const handleSearch = () => {
    axios
      .get(`URL?doctorName=${doctorName}`)
      .then((response) => {
        console.log(response.data);
        setSchedules(response.data);
        Swal.fire("Búsqueda exitosa", "Se encontraron horarios disponibles.", "success");
      })
      .catch((error) => {
        console.error(error);
        Swal.fire("Error", "Hubo un error al realizar la búsqueda.", "error");
      });
  };

  return (
    <Container fluid className="sign-up-container">
      <Row className="justify-content-center align-items-center">
        <Col md={6} lg={4}>
          <h2 className="text-center mb-4">Buscar Horarios de Doctores</h2>
          <Form>
            <FormGroup>
              <Label for="doctorName">Nombre del Doctor</Label>
              <Input
                type="text"
                id="doctorName"
                className="form-control"
                value={doctorName}
                onChange={(e) => setDoctorName(e.target.value)}
              />
            </FormGroup>
            <Button
              color="primary"
              block
              className="custom-button"
              onClick={handleSearch}
            >
              Buscar
            </Button>
          </Form>
          {schedules.length > 0 && (
            <div className="mt-4">
              <h3>Horarios disponibles:</h3>
              <ul>
                {schedules.map((schedule, index) => (
                  <li key={index}>{schedule}</li>
                ))}
              </ul>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default SearchDoctorSchedules;

