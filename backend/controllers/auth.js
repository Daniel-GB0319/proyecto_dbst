import { pool } from "../db.js";
import jwt from "jsonwebtoken";


export const login = async (req, res) => {
  try {
    const { correo, password } = req.body;

    // Verificar las credenciales del usuario en la tabla db_usuario
    const [user] = await pool.query(
      "SELECT * FROM db_usuario WHERE correo = ? AND password = ?",
      [correo, password]
    );

    // Comprobar si el usuario existe y si las credenciales son válidas
    if (!user) {
      return res.status(401).json({ message: "Correo electrónico o contraseña incorrectos" });
    }

    // Si las credenciales son válidas

    return res.status(200).json({ message: "Credenciales válidas" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


///EJEMPLO DE INSERTAR EN TABLA
export const crearTipoUsuario = async (req, res) => {
  try {
    const { id_tipoUsuario, nombre_tipoUsuario } = req.body;

    // Insertar el nuevo tipo de usuario en la tabla tipo_usuario
    await pool.query(
      "INSERT INTO tipo_usuario (id_tipoUsuario, nombre_tipoUsuario) VALUES (?, ?)",
      [id_tipoUsuario, nombre_tipoUsuario]
    );

    return res.status(201).json({ message: "Tipo de usuario creado exitosamente" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};





export const createAdminUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  // Verificar si el correo ya está registrado
  try {
    const [existingUser] = await pool.query(
      "SELECT * FROM db_usuario WHERE correo = ?",
      [email]
    );

    if (existingUser.length > 0) {
      return res.status(400).json({ message: "El correo ya está registrado" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  // Verificar campos requeridos
  if (!firstName || !lastName || !email || !password) {
    return res
      .status(400)
      .json({ message: "Faltan campos requeridos para crear el usuario" });
  }

  // Insertar el usuario administrador en la base de datos
  try {
    await pool.query(
      "INSERT INTO db_usuario (id_usuario, tipo_usuario, correo, password) VALUES (?, ?, ?, ?)",
      ["admin_id", "admin", email, password]
    );
    await pool.query(
      "INSERT INTO db_administrador (id_administrador, nombre, ap_paterno, ap_materno, usuario_id_usuario) VALUES (?, ?, ?, ?, ?)",
      ["admin_id", firstName, lastName, "", "admin_id"]
    );

    return res.status(200).json({ message: "Usuario administrador creado exitosamente" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
