import { pool } from "../db.js";

// Crear una nueva especialidad
export const createEspecialidad = async (req, res) => {
  const {nombre, descripcion } = req.body;

  if (!nombre) {
    return res.status(400).json({ message: "Faltan campos requeridos para crear la especialidad" });
  }

  try {
    await pool.query(
      "INSERT INTO db_especialidad (nombre, descripcion) VALUES (?, ?)",
      [nombre, descripcion]
    );

    return res.status(200).json({ message: "Especialidad creada con éxito" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Consultar los datos de una especialidad
export const queryEspecialidad = async (req, res) => {
  const { id_especialidad } = req.body;

  if (!id_especialidad) {
    return res.status(400).json({ message: "Falta el ID de la especialidad a consultar" });
  }

  try {
    const result = await pool.query("SELECT * FROM db_especialidad WHERE id_especialidad = ?", [id_especialidad]);
    const especialidad = result[0];

    if (!especialidad) {
      return res.status(404).json({ message: "No se encontró la especialidad" });
    }

    return res.status(200).json(especialidad);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Modificar los datos de una especialidad
export const updateEspecialidad = async (req, res) => {
  const { id_especialidad, nombre, descripcion } = req.body;

  if (!id_especialidad || !nombre) {
    return res.status(400).json({ message: "Faltan campos requeridos para modificar la especialidad" });
  }

  try {
    await pool.query(
      "UPDATE db_especialidad SET nombre = ?, descripcion = ? WHERE id_especialidad = ?",
      [nombre, descripcion, id_especialidad]
    );

    return res.status(200).json({ message: "Especialidad modificada con éxito" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Eliminar una especialidad
export const deleteEspecialidad = async (req, res) => {
  const { id_especialidad } = req.body;

  if (!id_especialidad) {
    return res.status(400).json({ message: "Falta el ID de la especialidad a eliminar" });
  }

  try {
    await pool.query("DELETE FROM db_especialidad WHERE id_especialidad = ?", [id_especialidad]);

    return res.status(200).json({ message: "Especialidad eliminada con éxito" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
