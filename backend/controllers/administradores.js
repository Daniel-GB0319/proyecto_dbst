import { pool } from "../db.js";
import jwt from "jsonwebtoken";

// Función para consultar todos los datos del administrador
export const queryDatos = async (req, res) => {
  try {
    const { id_administrador } = req.body;

    // Obtener los datos del administrador por su ID
    const [administrador] = await pool.query(
      "SELECT * FROM db_administrador WHERE id_administrador = ?",
      [id_administrador]
    );

    // Comprobar si el administrador existe
    if (administrador.length === 0) {
      return res.status(401).json({ message: "No se encontró al administrador" });
    }

    // Mensaje de éxito en la operación
    return res.status(200).json({ message: "Datos del administrador obtenidos con éxito" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Función para actualizar los datos del administrador
export const updateDatos = async (req, res) => {
  const { id_administrador, nombre, ap_paterno, ap_materno } = req.body;

  // Verificar que todos los datos del administrador existan en el JSON
  if (!id_administrador || !nombre || !ap_paterno || !ap_materno) {
    return res.status(400).json({ message: "Faltan campos requeridos para actualizar los datos del administrador" });
  }

  // Actualizar los datos del administrador
  try {
    await pool.query(
      "UPDATE db_administrador SET nombre = ?, ap_paterno = ?, ap_materno = ? WHERE id_administrador = ?",
      [nombre, ap_paterno, ap_materno, id_administrador]
    );

    return res.status(200).json({ message: "Datos del administrador actualizados con éxito" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Función para eliminar un administrador
export const deleteAdministrador = async (req, res) => {
  try {
    const { id_administrador } = req.body;

    // Verificar si el administrador existe
    const [administrador] = await pool.query(
      "SELECT * FROM db_administrador WHERE id_administrador = ?",
      [id_administrador]
    );

    // Comprobar si el administrador existe
    if (administrador.length === 0) {
      return res.status(401).json({ message: "No existe el administrador seleccionado para eliminar" });
    }

    // Eliminar al administrador
    await pool.query("DELETE FROM db_administrador WHERE id_administrador = ?", [id_administrador]);

    return res.status(200).json({ message: "Administrador eliminado con éxito" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Funcion para insertar administrador 

export const insertAdministrador = async (req, res) => {
  const { nombre, ap_paterno, ap_materno, password, correo } = req.body;

  // Verificar que todos los campos requeridos existan en el JSON
  if (!nombre || !ap_paterno || !ap_materno || !password || !correo) {
    return res.status(400).json({ message: "Faltan campos requeridos para insertar al administrador" });
  }

  try {
    // Verificar si el correo ya existe en la tabla db_usuario
    const [existingUsuario] = await pool.query("SELECT id_usuario FROM db_usuario WHERE correo = ?", [correo]);

    console.log("Verifica el correo " [correo]);

    if (existingUsuario.length > 0) {
      return res.status(409).json({ message: "El correo ya está registrado" });
    }

    // Insertar al administrador en la tabla db_usuario
    const tipoUsuarioId = 1; // ID para el tipo de usuario "Administrador"

    console.log("Insertando el usuario en db_usuario");

    const { insertId: usuarioId } = await pool.query(
      "INSERT INTO db_usuario (tipo_usuario, correo, password) VALUES (?, ?, ?)",
      [tipoUsuarioId, correo, password]
    );
    

    const [usuarioIdCheck] = await pool.query("SELECT id_usuario FROM db_usuario WHERE correo = ?", [correo]);

    console.log("Checa que el usuario exista", usuarioIdCheck);

    const usuarioIdExtract = usuarioIdCheck[0].id_usuario;
    const usuarioIdEntero = parseInt(usuarioIdExtract);

    console.log("Id usuario entero", usuarioIdExtract);

    // Insertar al administrador en la tabla db_administrador
    await pool.query(
      "INSERT INTO db_administrador (nombre, ap_paterno, ap_materno, usuario_id_usuario) VALUES (?, ?, ?, ?)",
      [nombre, ap_paterno, ap_materno, usuarioIdEntero]
    );

    console.log("Administrador agregado");

    return res.status(201).json({ message: "Administrador creado con éxito" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};








// Consulta todos los registros de administradores existentes
export const getAllAdministradores = async (req, res) => {
  try {
    // Consultar todos los administradores
    const administradores = await pool.query("SELECT * FROM db_administrador");

    return res.status(200).json({ administradores });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
