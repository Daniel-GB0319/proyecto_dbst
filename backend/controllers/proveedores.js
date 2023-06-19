import { pool } from "../db.js";

// Registrar un nuevo proveedor
export const insertProveedor = async (req, res) => {
  const {nombre, telefono, correo } = req.body;

  if (!nombre || !correo) {
    return res.status(400).json({ message: "Faltan campos requeridos para registrar el proveedor" });
  }

  try {
    await pool.query(
      "INSERT INTO db_proveedor (nombre, telefono, correo) VALUES (?, ?, ?)",
      [nombre, telefono, correo]
    );

    return res.status(200).json({ message: "Proveedor registrado con éxito" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Modificar los datos de un proveedor
export const updateProveedor = async (req, res) => {
  const { id_proveedor, nombre, telefono, correo } = req.body;

  if (!id_proveedor || !nombre || !correo) {
    return res.status(400).json({ message: "Faltan campos requeridos para modificar el proveedor" });
  }

  try {
    await pool.query(
      "UPDATE db_proveedor SET nombre = ?, telefono = ?, correo = ? WHERE id_proveedor = ?",
      [nombre, telefono, correo, id_proveedor]
    );

    return res.status(200).json({ message: "Proveedor modificado con éxito" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Eliminar un proveedor
export const deleteProveedor = async (req, res) => {
  const { id_proveedor } = req.body;

  if (!id_proveedor) {
    return res.status(400).json({ message: "Falta el ID del proveedor a eliminar" });
  }

  try {
    await pool.query("DELETE FROM db_proveedor WHERE id_proveedor = ?", [id_proveedor]);

    return res.status(200).json({ message: "Proveedor eliminado con éxito" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getAllProveedores = async (req, res) => {
  try {
    // Consultar todos los proveedores
    const proveedores = await pool.query("SELECT * FROM db_proveedor");

    return res.status(200).json({ proveedores });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
