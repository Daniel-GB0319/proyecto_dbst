import { pool } from "../db.js";

// Crear un nuevo consultorio
export const createConsultorio = async (req, res) => {
  const { id_consultorio, numero, estado, descripcion } = req.body;

  if (!id_consultorio || !numero || !estado) {
    return res.status(400).json({ message: "Faltan campos requeridos para crear el consultorio" });
  }

  try {
    await pool.query(
      "INSERT INTO db_consultorio (id_consultorio, numero, estado, descripcion) VALUES (?, ?, ?, ?)",
      [id_consultorio, numero, estado, descripcion]
    );

    return res.status(200).json({ message: "Consultorio creado con éxito" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Modificar los datos de un consultorio
export const updateConsultorio = async (req, res) => {
  const { id_consultorio, numero, estado, descripcion } = req.body;

  if (!id_consultorio || !numero || !estado) {
    return res.status(400).json({ message: "Faltan campos requeridos para modificar el consultorio" });
  }

  try {
    await pool.query(
      "UPDATE db_consultorio SET numero = ?, estado = ?, descripcion = ? WHERE id_consultorio = ?",
      [numero, estado, descripcion, id_consultorio]
    );

    return res.status(200).json({ message: "Consultorio modificado con éxito" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Eliminar un consultorio
export const deleteConsultorio = async (req, res) => {
  const { id_consultorio } = req.body;

  if (!id_consultorio) {
    return res.status(400).json({ message: "Falta el ID del consultorio a eliminar" });
  }

  try {
    await pool.query("DELETE FROM db_consultorio WHERE id_consultorio = ?", [id_consultorio]);

    return res.status(200).json({ message: "Consultorio eliminado con éxito" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
