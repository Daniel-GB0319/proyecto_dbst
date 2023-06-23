import { pool } from "../db.js";

// Crear un nuevo usuario
export const insertUsuario = async (req, res) => {
  const { nombre, correo, password } = req.body;

  if (!nombre || !correo || !password) {
    return res.status(400).json({ message: "Faltan campos requeridos para registrar el usuario" });
  }

  try {
    await pool.query(
      "INSERT INTO usuarios (nombre, correo, password, fecha_ultimo_acceso) VALUES (?, ?, ?, NOW())",
      [nombre, correo, password]
    );

    return res.status(200).json({ message: "Usuario registrado con éxito" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Modificar los datos de un usuario
export const updateUsuario = async (req, res) => {
  const { id_usuario, nombre, correo, password } = req.body;

  if (!id_usuario || !nombre || !correo || !password) {
    return res.status(400).json({ message: "Faltan campos requeridos para modificar el usuario" });
  }

  try {
    await pool.query(
      "UPDATE usuarios SET nombre = ?, correo = ?, password = ?, fecha_ultimo_acceso = NOW() WHERE id_usuario = ?",
      [nombre, correo, password, id_usuario]
    );

    return res.status(200).json({ message: "Usuario modificado con éxito" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Eliminar un usuario
export const deleteUsuario = async (req, res) => {
  const { id_usuario } = req.body;

  if (!id_usuario) {
    return res.status(400).json({ message: "Falta el ID del usuario a eliminar" });
  }

  try {
    await pool.query("DELETE FROM usuarios WHERE id_usuario = ?", [id_usuario]);

    return res.status(200).json({ message: "Usuario eliminado con éxito" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Consultar un usuario por ID
export const queryUsuario = async (req, res) => {
  const { id_usuario } = req.params;

  if (!id_usuario) {
    return res.status(400).json({ message: "Falta el ID del usuario a consultar" });
  }

  try {
    const usuario = await pool.query("SELECT * FROM usuarios WHERE id_usuario = ?", [id_usuario]);

    if (usuario.length === 0) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    return res.status(200).json({ usuario });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Consultar todos los usuarios
export const getAllUsuarios = async (req, res) => {
  try {
    const usuarios = await pool.query("SELECT * FROM usuarios");

    return res.status(200).json({ usuarios });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Validar correo y contraseña de un usuario y actualizar la fecha de último acceso
export const loginUsuarios = async (req, res) => {
  const { correo, password } = req.body;

  if (!correo || !password) {
    return res.status(400).json({ message: "Faltan campos requeridos para validar las credenciales" });
  }

  try {
    const usuario = await pool.query("SELECT * FROM db_usuario WHERE correo = ? AND password = ?", [correo, password]);

    if (usuario.length === 0) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }

    // Actualizar la fecha de último acceso
    await pool.query("UPDATE db_usuario SET ultimo_acceso = NOW() WHERE correo = ?", [correo]);

    return res.status(200).json({ message: "Credenciales válidas, fecha de último acceso actualizada" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
