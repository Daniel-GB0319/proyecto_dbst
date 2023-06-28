/* import bcrypt from "bcryptjs"; */
import { pool } from "../db.js";

// Crear un nuevo usuario
export const insertUsuario = async (req, res) => {
  const { nombre, correo, password } = req.body;

  if (!nombre || !correo || !password) {
    return res
      .status(400)
      .json({ message: "Faltan campos requeridos para registrar el usuario" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 12);

    await pool.query(
      "INSERT INTO db_usuario (nombre, correo, password, ultimo_acceso) VALUES (?, ?, ?, NOW())",
      [nombre, correo, hashedPassword]
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
    return res
      .status(400)
      .json({ message: "Faltan campos requeridos para modificar el usuario" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 12);

    await pool.query(
      "UPDATE db_usuario SET nombre = ?, correo = ?, password = ?, ultimo_acceso = NOW() WHERE id_usuario = ?",
      [nombre, correo, hashedPassword, id_usuario]
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
    return res
      .status(400)
      .json({ message: "Falta el ID del usuario a eliminar" });
  }

  try {
    await pool.query("DELETE FROM db_usuario WHERE id_usuario = ?", [
      id_usuario,
    ]);

    return res.status(200).json({ message: "Usuario eliminado con éxito" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Consultar un usuario por ID
export const queryUsuario = async (req, res) => {
  const { id_usuario } = req.params;

  if (!id_usuario) {
    return res
      .status(400)
      .json({ message: "Falta el ID del usuario a consultar" });
  }

  try {
    const usuario = await pool.query(
      "SELECT * FROM db_usuario WHERE id_usuario = ?",
      [id_usuario]
    );

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
    const usuarios = await pool.query("SELECT * FROM db_usuario");

    return res.status(200).json({ usuarios });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Validar correo y contraseña de un usuario y actualizar la fecha de último acceso (CORREGIDA)
/* export const loginUsuarios = async (req, res) => {
  const { correo, password } = req.body;

  if (!correo || !password) {
    return res.status(400).json({ message: 'Faltan campos requeridos para validar las credenciales' });
  }

  try {
    const [rows] = await pool.query('SELECT id_usuario, password FROM db_usuario WHERE correo = ?', [correo]);

    if (rows.length === 0) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    const storedPassword = rows[0].password;
    const isPasswordValid = await bcrypt.compare(password, storedPassword);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    await pool.query('UPDATE db_usuario SET ultimo_acceso = NOW() WHERE correo = ?', [correo]);

    return res.status(200).json({ message: 'Credenciales válidas', userId: rows[0].id_usuario });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}; */

export const loginUsuarios = async (req, res) => {
  const { correo, password } = req.body;

  if (!correo || !password) {
    return res
      .status(400)
      .json({
        message: "Faltan campos requeridos para validar las credenciales",
      });
  }

  try {
    const query = `
    SELECT u.id_usuario, tu.id_tipoUsuario, tu.nombre_tipoUsuario
    FROM db_usuario u
    INNER JOIN tipo_usuario tu ON u.tipo_usuario = tu.id_tipoUsuario
    WHERE u.correo = ? AND u.password = ?
    `;
    const params = [correo, password];
    const [rows] = await pool.query(query, params);

    if (rows.length === 0) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }

    const tipoUsuario = {
      tipoUsuario: rows[0].id_tipoUsuario,
      nombreTipoUsuario: rows[0].nombre_tipoUsuario,
      idUsuario: rows[0].id_usuario,
    };

    // Actualizar la fecha de último acceso
    const updateQuery = `UPDATE db_usuario SET ultimo_acceso = NOW() WHERE correo = ?`;
    await pool.execute(updateQuery, [correo]);

    return res
      .status(200)
      .json({ message: "Credenciales válidas", ...tipoUsuario });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
