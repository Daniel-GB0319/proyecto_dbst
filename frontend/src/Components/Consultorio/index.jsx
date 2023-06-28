import  { useState, useEffect } from "react";
import {
  Table,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
import Swal from "sweetalert2";
import axios from "axios";
import { API_URL } from "../../../constants.js";
import "bootstrap/dist/css/bootstrap.css";

const Consultorios = () => {
  const [data, setData] = useState([]);

  const handleCancel = async (idConsultorio) => {
    try {
      const response = await axios.post(API_URL + "/deleteConsultorio");
      console.log(response.data);

      // Realiza cualquier otra lógica necesaria después de eliminar el consultorio

      // Actualiza el estado "data" para reflejar el cambio en la tabla
      setData(prevData => prevData.map(consultorio => {
        if (consultorio.id_consultorio === idConsultorio) {
          // Puedes modificar alguna propiedad del consultorio aquí si es necesario
          return {
            ...consultorio,
            estado: "Cancelado"
          };
        }
        return consultorio;
      }));

      Swal.fire({
        icon: "success",
        title: "Consultorio cancelado",
        text: "El consultorio ha sido cancelado exitosamente.",
        customClass: {
          confirmButton: "custom-confirm-button",
        },
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error al cancelar el consultorio",
        text: "Hubo un error al cancelar el consultorio. Por favor, inténtalo nuevamente.",
        customClass: {
          confirmButton: "custom-confirm-button",
        },
      });
      console.error(error);
    }
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
                          onClick={() => handleCancel(consultorio.id_consultorio)}
                        >
                          Eliminar
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
