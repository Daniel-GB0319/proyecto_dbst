import React, { useState, useEffect } from "react";
import {
  Table,
  FormGroup,
  Label,
  Input,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";
import { API_URL } from "../../../constants.js";
import "bootstrap/dist/css/bootstrap.css";

const Consultorios = () => {
  const [data, setData] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm();

  const handleCancel = (index) => {
    // Realizar la lógica para cancelar la consulta
    // Puedes enviar una solicitud a la API para actualizar el estado de la consulta
    // Una vez actualizado, puedes actualizar el estado "data" para reflejar el cambio en la tabla
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL + "/getAllConsultorios");
        console.log("Response data:", response.data);

        setData(response.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const onSubmitRecep = async (data) => {
    try {
      const response = await axios.post(API_URL + "/Admin", data);
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
      Swal.fire({
        icon: "error",
        title: "¡Error!",
        text: "Correo o contraseña no válidos",
        customClass: {
          confirmButton: "custom-confirm-button",
        },
      });
      console.error(error);
    }
  };

  return (
    <Container fluid className="sign-up-container">
      <Row className="justify-content-center align-items-center">
        <Col md={6} lg={4}>
          <h2 className="text-center mb-4">Consultorios</h2>
          <div className="table-responsive">
            <Table className="mt-4 table">
              <thead>
                <tr>
                  <th>Número Consultorio</th>
                  <th>Estado</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data[0] &&
                  data[0].map((consultorio, index) => (
                    <tr key={index}>
                      <td>{consultorio.numero}</td>
                      <td>{consultorio.estado}</td>
                      <td>
                        <Button
                          color="danger"
                          onClick={() => handleCancel(index)}
                        >
                          Cancelar
                        </Button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Consultorios;
