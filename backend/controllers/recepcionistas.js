import { pool } from "../db.js";

// Registrar un nuevo recepcionista
export const insertRecepcionista = async (req, res) => {
  const { nombre, ap_paterno, ap_materno, usuario_id_usuario, horario_id_horario } = req.body;

  if (!nombre || !ap_paterno || !ap_materno || !usuario_id_usuario || !horario_id_horario) {
    return res.status(400).json({ message: "Faltan campos requeridos para registrar el recepcionista" });
  }

  try {
    // Llamada al procedimiento almacenado
    await pool.query("CALL sp_InsertarRecepcionista(?, ?, ?, ?, ?)", [
      nombre,
      ap_paterno,
      ap_materno,
      usuario_id_usuario,
      horario_id_horario
    ]);

    return res.status(200).json({ message: "Recepcionista registrado con éxito" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Modificar los datos de un recepcionista
export const updateRecepcionista = async (req, res) => {
  const { id_recepcionista, nombre, ap_paterno, ap_materno, usuario_id_usuario, horario_id_horario } = req.body;

  if (!id_recepcionista || !nombre || !ap_paterno || !ap_materno || !usuario_id_usuario || !horario_id_horario) {
    return res.status(400).json({ message: "Faltan campos requeridos para modificar el recepcionista" });
  }

  try {
    await pool.query(
      "UPDATE db_recepcionista SET nombre = ?, ap_paterno = ?, ap_materno = ?, usuario_id_usuario = ?, horario_id_horario = ? WHERE id_recepcionista = ?",
      [nombre, ap_paterno, ap_materno, usuario_id_usuario, horario_id_horario, id_recepcionista]
    );

    return res.status(200).json({ message: "Recepcionista modificado con éxito" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Eliminar un recepcionista
export const deleteRecepcionista = async (req, res) => {
  const { id_recepcionista } = req.body;

  if (!id_recepcionista) {
    return res.status(400).json({ message: "Falta el ID del recepcionista a eliminar" });
  }

  try {
    await pool.query("DELETE FROM db_recepcionista WHERE id_recepcionista = ?", [id_recepcionista]);

    return res.status(200).json({ message: "Recepcionista eliminado con éxito" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Consulta todos los registros existentes de recepcionistas
export const getAllRecepcionistas = async (req, res) => {
  try {
    // Consultar todos los recepcionistas
    const recepcionistas = await pool.query("SELECT * FROM db_recepcionista");

    return res.status(200).json({ recepcionistas });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
