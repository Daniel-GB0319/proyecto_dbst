import { useState, useEffect, useContext } from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import axios from "axios";
import { API_URL } from "../../../constants.js";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
  Table,
} from "reactstrap";
import "../../assets/index.css";
import { UserContext } from "../../Contexts/UserContext.jsx";

const Doctor = () => {
  const { updateUserContext } = useContext(UserContext);
  const [data, setData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL + "/queryDoctorCitasProx");
        console.log("Response data:", response.data);

        setData(response.data); // Asegúrate de que response.data sea un array
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  const handleCancel = (index) => {
    // Realizar la lógica para cancelar la consulta
    // Puedes enviar una solicitud a la API para actualizar el estado de la consulta
    // Una vez actualizado, puedes actualizar el estado "data" para reflejar el cambio en la tabla
  };

  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/receta");
  };

  return (
    <Container fluid className="sign-up-container">
      <Row className="justify-content-center align-items-center">
        <Col md={12} lg={10}>
          <Button
            type="submit"
            className="custom-button float-left"
            onClick={handleButtonClick}
          >
            Recetas
          </Button>
          <h2 className="text-center mb-4">Historial de citas</h2>
          <div className="table-responsive">
            <Table className="mt-4 table">
              <thead>
                <tr>
                  <th>Nombre Doctor</th>
                  <th>Fecha Consulta</th>
                  <th>Hora Inicio</th>
                  <th>Hora Fin</th>
                  <th>Costo Consulta</th>
                  <th>Consultorio</th>
                  <th>Estatus</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
              {Array.isArray(data) && data.map((item, index) => (
    <tr key={index}>
      <td>{item.nombreDoctor}</td>
      <td>{item.fechaConsulta}</td>
      <td>{item.horaInicio}</td>
      <td>{item.horaFin}</td>
      <td>{item.costoConsulta}</td>
      <td>{item.consultorio}</td>
      <td>{item.estatus}</td>
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

export default Doctor;


