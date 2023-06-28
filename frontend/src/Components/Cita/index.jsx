import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
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
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Table,
} from "reactstrap";
import "../../assets/index.css";
import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext.jsx";

const Cita = () => {
  const { updateUserContext } = useContext(UserContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL + "/getAllCitas");
        console.log("Response data:", response.data);

        setData(response.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/crearcitas");
  };

  const handleCancel = async (index) => {
    try {
      const canceledItem = data[index];
      // Realizar la lógica para cancelar la consulta
      // Puedes enviar una solicitud a la API para actualizar el estado de la consulta
      // Por ejemplo:
      await axios.put(API_URL + "/cancelarConsulta/" + canceledItem.id_consulta);
      // Una vez actualizado, puedes actualizar el estado "data" para reflejar el cambio en la tabla
      const updatedData = [...data];
      updatedData.splice(index, 1);
      setData(updatedData);
      Swal.fire("Consulta cancelada", "", "success");
    } catch (error) {
      console.log("Error canceling consultation:", error);
      Swal.fire("Error", "Ocurrió un error al cancelar la consulta", "error");
    }
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
            Crear Citas
          </Button>
          <h2 className="text-center mb-4">Citas</h2>
          <div className="table-responsive">
            <Table className="mt-4 table">
              <thead>
                <tr>
                  <th>Nombre Paciente</th>
                  <th>Fecha Consulta</th>
                  <th>Hora Inicio</th>
                  <th>Hora Fin</th>
                  <th>Consultorio</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.paciente}</td>
                    <td>{item.fecha}</td>
                    <td>{item.horario}</td>
                    <td>{item.fin}</td>
                    <td>{item.consultorio}</td>
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

export default Cita;
