import { pool } from "../db.js";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  try {
    const { correo, password } = req.body;

    // Verificar las credenciales del usuario en la tabla db_usuario
    const [user] = await pool.query(
      "SELECT * FROM db_usuario WHERE correo = ?",
      [correo]
    );

    // Comprobar si el usuario existe y si la contraseña es válida
    if (user.length === 0 || user[0].password !== password) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }

    // Generar un token de acceso utilizando JWT
    const token = jwt.sign({ userId: user[0].id_usuario }, "secretKey", {
      expiresIn: "3h",
    });

    // Devolver el token al cliente
    res.json({ token });
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
