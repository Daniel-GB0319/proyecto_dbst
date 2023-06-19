import { pool } from "../db.js";

// Crear una nueva consulta
export const createConsulta = async (req, res) => {
  const { hora, fecha, costo, paciente_id, doctor_id, horario } = req.body;

  // Verificar que la fecha no sea pasada ni exceda los 3 meses
  const currentDate = new Date();
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 3);

  if (new Date(fecha) < currentDate || new Date(fecha) > maxDate) {
    return res.status(400).json({ message: "La fecha de la consulta no es válida" });
  }

  // Verificar que no exista una consulta en la misma fecha y hora
  const existingConsulta = await pool.query(
    "SELECT * FROM db_consulta WHERE fecha = ? AND hora = ?",
    [fecha, hora]
  );

  if (existingConsulta.length > 0) {
    return res.status(400).json({ message: "Ya existe una consulta programada en la misma fecha y hora" });
  }

  try {
    await pool.query(
      "INSERT INTO db_consulta (hora, fecha, costo, paciente_id_paciente, doctor_id_doctor, horario) VALUES (?, ?, ?, ?, ?, ?)",
      [hora, fecha, costo, paciente_id, doctor_id, horario]
    );

    return res.status(200).json({ message: "Consulta creada con éxito" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Modificar los datos de una consulta
export const updateConsulta = async (req, res) => {
  const { id_consulta, hora, fecha, costo, paciente_id, doctor_id, horario } = req.body;

  // Verificar que la fecha no sea pasada ni exceda los 3 meses
  const currentDate = new Date();
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 3);

  if (new Date(fecha) < currentDate || new Date(fecha) > maxDate) {
    return res.status(400).json({ message: "La fecha de la consulta no es válida" });
  }

  // Verificar que no exista otra consulta en la misma fecha y hora
  const existingConsulta = await pool.query(
    "SELECT * FROM db_consulta WHERE fecha = ? AND hora = ? AND id_consulta <> ?",
    [fecha, hora, id_consulta]
  );

  if (existingConsulta.length > 0) {
    return res.status(400).json({ message: "Ya existe otra consulta programada en la misma fecha y hora" });
  }

  try {
    await pool.query(
      "UPDATE db_consulta SET hora = ?, fecha = ?, costo = ?, paciente_id_paciente = ?, doctor_id_doctor = ?, horario = ? WHERE id_consulta = ?",
      [hora, fecha, costo, paciente_id, doctor_id, horario, id_consulta]
    );

    return res.status(200).json({ message: "Consulta modificada con éxito" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Consultar los datos de una consulta
export const queryConsulta = async (req, res) => {
  const { id_consulta } = req.params;

  try {
    const consulta = await pool.query("SELECT * FROM db_consulta WHERE id_consulta = ?", [id_consulta]);

    if (consulta.length > 0) {
      return res.status(200).json(consulta[0]);
    } else {
      return res.status(404).json({ message: "Consulta no encontrada" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Eliminar una consulta
export const deleteConsulta = async (req, res) => {
  const { id_consulta } = req.body;

  try {
    // Obtener la fecha y hora actual
    const currentDateTime = moment();

    // Obtener la fecha y hora de la consulta
    const consulta = await pool.query(
      "SELECT fecha, hora FROM db_consulta WHERE id_consulta = ?",
      [id_consulta]
    );

    if (consulta.length > 0) {
      const { fecha, hora } = consulta[0];

      // Calcular la diferencia de tiempo entre la fecha y hora actual y la fecha y hora de la consulta
      const timeDiff = moment(fecha + ' ' + hora).diff(currentDateTime, 'hours');

      if (timeDiff < 24) {
        return res.status(400).json({ message: "No se puede eliminar la consulta con menos de 24 horas de antelación" });
      }
    } else {
      return res.status(404).json({ message: "Consulta no encontrada" });
    }

    await pool.query("DELETE FROM db_consulta WHERE id_consulta = ?", [id_consulta]);

    return res.status(200).json({ message: "Consulta eliminada con éxito" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Consultar todas las consultas
export const getAllConsultas = async (req, res) => {
  try {
    const consultas = await pool.query("SELECT * FROM db_consulta");

    return res.status(200).json(consultas);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
