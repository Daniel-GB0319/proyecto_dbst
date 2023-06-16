import { pool } from "../db.js";

// Registrar una nueva alergia
export const insertAlergia = async (req, res) => {
  const { nombre_alergia } = req.body;

  if (!nombre_alergia) {
    return res.status(400).json({ message: "Falta el nombre de la alergia para registrar" });
  }

  try {
    await pool.query(
      "INSERT INTO catalogo_alergia (nombre_alergia) VALUES (?)",
      [nombre_alergia]
    );

    return res.status(200).json({ message: "Alergia registrada con éxito" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Modificar los datos de una alergia
export const updateAlergia = async (req, res) => {
  const { id_alergia, nombre_alergia } = req.body;

  if (!id_alergia || !nombre_alergia) {
    return res.status(400).json({ message: "Faltan campos requeridos para modificar la alergia" });
  }

  try {
    await pool.query(
      "UPDATE catalogo_alergia SET nombre_alergia = ? WHERE id_alergia = ?",
      [nombre_alergia, id_alergia]
    );

    return res.status(200).json({ message: "Alergia modificada con éxito" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Eliminar una alergia
export const deleteAlergia = async (req, res) => {
  const { id_alergia } = req.body;

  if (!id_alergia) {
    return res.status(400).json({ message: "Falta el ID de la alergia a eliminar" });
  }

  try {
    await pool.query("DELETE FROM catalogo_alergia WHERE id_alergia = ?", [id_alergia]);

    return res.status(200).json({ message: "Alergia eliminada con éxito" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
