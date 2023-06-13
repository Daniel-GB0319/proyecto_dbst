import { pool } from "../db.js";
import jwt from "jsonwebtoken";

export const queryDatosPersonales = async (req, res) => {
  try {
    const { id_paciente } = req.body;

    // Obtiene los datos personales del paciente por su id
    const [user] = await pool.query(
      "SELECT * FROM db_paciente WHERE id_paciente = ?",
      [id_paciente]
    );

    // Comprobar si el usuario existe
    if (!user) {
      return res.status(401).json({ message: "No se pudieron cargar los datos correctamente" });
    }

    // Mensaje de éxito en la operación

    return res.status(200).json({ message: "Datos personales obtenidos con éxito" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


export const updateDireccion = async (req, res) => {
  const {id_paciente, calle, num_ext, num_int, delegacion, colonia, estado } = req.body;

  // Verifica que todos los datos de la direccion existan en el json 
  if (!id_paciente || !calle || !num_ext || !num_int || !delegacion || !colonia || !estado) {
    return res
      .status(400)
      .json({ message: "Faltan campos requeridos para crear el usuario" });
  }

  // Actualiza la direción particular
  try {
    await pool.query(
      "UPDATE db_paciente SET calle = ?, num_ext = ?, num_int = ?, colonia = ?, delegacion = ?, entidad_federativa = ? WHERE id_paciente = ?",
      [calle, num_ext, num_int, colonia, delegacion, estado, id_paciente]
    );

    return res.status(200).json({ message: "Dirección particular actualizada con éxito" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};



export const updateSeguro = async (req, res) => {
  const {id_paciente, seguro } = req.body;

  // Actualiza estado del seguro
  try {
    await pool.query(
      "UPDATE db_paciente SET aseguradora = ? WHERE id_paciente = ?",
      [seguro, id_paciente]
    );

    return res.status(200).json({ message: "Estado del seguro actualizado con éxito" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deletePaciente = async (req, res) => {
  try {
    const { id_paciente } = req.body;

    // Obtiene los datos personales del paciente por su id
    const [user] = await pool.query(
      "SELECT * FROM db_paciente WHERE id_paciente = ?",
      [id_paciente]
    );

    // Comprobar si el usuario existe
    if (!user) {
      return res.status(401).json({ message: "No existe el paciente seleccionado para eliminar" });
    } else {
      const [user] = await pool.query(
        "DELETE FROM db_paciente WHERE id_paciente = ?",
        [id_paciente]
      );
    }

    // Mensaje de éxito en la operación
    return res.status(200).json({ message: "Paciente eliminado con éxito" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
