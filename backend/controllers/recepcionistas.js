import { pool } from "../db.js";
//Falta el horario
export const insertRecepcionista = async (req, res) => {
  const { nombre, ap_paterno, ap_materno, password, correo } = req.body;

  // Verificar que todos los campos requeridos existan en el JSON
  if (!nombre || !ap_paterno || !ap_materno || !password || !correo) {
    return res.status(400).json({ message: "Faltan campos requeridos para insertar Recepcionista" });
  }

  try {
    // Verificar si el correo ya existe en la tabla db_usuario
    const [existingUsuario] = await pool.query("SELECT id_usuario FROM db_usuario WHERE correo = ?", [correo]);

    console.log("Verifica el correo " [correo]);

    if (existingUsuario.length > 0) {
      return res.status(409).json({ message: "El correo ya está registrado" });
    }

    // Insertar al administrador en la tabla db_usuario
    const tipoUsuarioId = 2; // ID para el tipo de usuario "Recepcionista"

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

    // Insertar recepcionista en la tabla db_recepcionista
    await pool.query(
      "INSERT INTO db_recepcionista (nombre, ap_paterno, ap_materno, usuario_id_usuario) VALUES (?, ?, ?, ?)",
      [nombre, ap_paterno, ap_materno, usuarioIdEntero]
    );

    console.log("Recepcionista agregado");

    return res.status(201).json({ message: "Administrador creado con éxito" });
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
