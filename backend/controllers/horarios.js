import { pool } from "../db.js";

// Crear un nuevo horario
export const createHorario = async (req, res) => {
  const {turno, dia, hora_entrada, hora_salida, hora_ini_receso, hora_fin_receso } = req.body;

  if (!turno || !dia || !hora_entrada || !hora_salida || !hora_ini_receso || !hora_fin_receso) {
    return res.status(400).json({ message: "Faltan campos requeridos para crear el horario" });
  }

  try {
    await pool.query(
      "INSERT INTO db_horario (turno, dia, hora_entrada, hora_salida, hora_ini_receso, hora_fin_receso) VALUES (?, ?, ?, ?, ?, ?)",
      [turno, dia, hora_entrada, hora_salida, hora_ini_receso, hora_fin_receso]
    );

    return res.status(200).json({ message: "Horario creado con éxito" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Consultar los datos de un horario
export const queryHorario = async (req, res) => {
  const { id_horario } = req.body;

  if (!id_horario) {
    return res.status(400).json({ message: "Falta el ID del horario a consultar" });
  }

  try {
    const result = await pool.query("SELECT * FROM db_horario WHERE id_horario = ?", [id_horario]);
    const horario = result[0];

    if (!horario) {
      return res.status(404).json({ message: "No se encontró el horario" });
    }

    return res.status(200).json(horario);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Modificar los datos de un horario
export const updateHorario = async (req, res) => {
  const { id_horario, turno, dia, hora_entrada, hora_salida, hora_ini_receso, hora_fin_receso } = req.body;

  if (!id_horario || !turno || !dia || !hora_entrada || !hora_salida || !hora_ini_receso || !hora_fin_receso) {
    return res.status(400).json({ message: "Faltan campos requeridos para modificar el horario" });
  }

  try {
    await pool.query(
      "UPDATE db_horario SET turno = ?, dia = ?, hora_entrada = ?, hora_salida = ?, hora_ini_receso = ?, hora_fin_receso = ? WHERE id_horario = ?",
      [turno, dia, hora_entrada, hora_salida, hora_ini_receso, hora_fin_receso, id_horario]
    );

    return res.status(200).json({ message: "Horario modificado con éxito" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Eliminar un horario
export const deleteHorario = async (req, res) => {
  const { id_horario } = req.body;

  if (!id_horario) {
    return res.status(400).json({ message: "Falta el ID del horario a eliminar" });
  }

  try {
    await pool.query("DELETE FROM db_horario WHERE id_horario = ?", [id_horario]);

    return res.status(200).json({ message: "Horario eliminado con éxito" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getAllHorarios = async (req, res) => {
  try {
    const horarios = await pool.query("SELECT * FROM db_horario");

    return res.status(200).json(horarios);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
