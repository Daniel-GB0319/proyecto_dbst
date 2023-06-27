import { pool } from "../db.js";
import jwt from "jsonwebtoken";

// Funcion para consultar todos los datos del paciente
export const queryDatosPersonales = async (req, res) => {
  try {
    const { id_paciente } = req.body;

    // Obtener los datos personales del paciente por su id
    const [paciente] = await pool.query(
      "SELECT * FROM db_paciente WHERE id_paciente = ?",
      [id_paciente]
    );

    // Comprobar si el paciente existe
    if (paciente.length === 0) {
      return res.status(401).json({ message: "No se encontró al paciente" });
    }

    // Mensaje de éxito en la operación
    return res.status(200).json({ message: "Datos personales obtenidos con éxito" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Funcion para actualizar la direccion particular
export const updateDireccion = async (req, res) => {
  const { id_paciente, calle, num_ext, num_int, colonia, delegacion, entidad_federativa } = req.body;

  // Verificar que todos los datos de la dirección existan en el JSON
  if (!id_paciente || !calle || !num_ext || !colonia || !delegacion || !entidad_federativa) {
    return res.status(400).json({ message: "Faltan campos requeridos para actualizar la dirección" });
  }

  // Actualizar la dirección particular
  try {
    await pool.query(
      "UPDATE db_paciente SET calle = ?, num_ext = ?, num_int = ?, colonia = ?, delegacion = ?, entidad_federativa = ? WHERE id_paciente = ?",
      [calle, num_ext, num_int, colonia, delegacion, entidad_federativa, id_paciente]
    );

    return res.status(200).json({ message: "Dirección particular actualizada con éxito" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Funcion para cambiar el estado del seguro social
export const updateSeguro = async (req, res) => {
  const { id_paciente, aseguradora } = req.body;

  // Actualizar estado del seguro
  try {
    await pool.query(
      "UPDATE db_paciente SET aseguradora = ? WHERE id_paciente = ?",
      [aseguradora, id_paciente]
    );

    return res.status(200).json({ message: "Estado del seguro actualizado con éxito" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Funcion para borrar un paciente
export const deletePaciente = async (req, res) => {
  try {
    const { id_paciente } = req.body;

    // Verificar si el paciente existe
    const [paciente] = await pool.query(
      "SELECT * FROM db_paciente WHERE id_paciente = ?",
      [id_paciente]
    );

    // Comprobar si el paciente existe
    if (paciente.length === 0) {
      return res.status(401).json({ message: "No existe el paciente seleccionado para eliminar" });
    }

    // Comprobar si el paciente tiene citas futuras
    const estadoCitas = await pool.query("SELECT ComprobarCitasPaciente(?) AS estado", [paciente[0].CURP]);
    if (estadoCitas[0][0].estado === 1) {
      return res.status(400).json({ message: "El paciente tiene citas futuras, no se puede eliminar" });
    }

    // Eliminar al paciente
    await pool.query("DELETE FROM db_paciente WHERE id_paciente = ?", [id_paciente]);

    return res.status(200).json({ message: "Paciente eliminado con éxito" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Funcion para insertar pacientes
export const insertPaciente = async (req, res) => {
  const {
    CURP,
    nombre,
    ap_paterno,
    ap_materno,
    edad,
    tipo_sangre,
    calle,
    num_ext,
    num_int,
    colonia,
    delegacion,
    entidad_federativa,
    fecha_nac,
    peso,
    altura,
    sexo,
    aseguradora,
    usuario_id_usuario,
  } = req.body;

  // Verificar que todos los campos requeridos existan en el JSON
  if (
    !CURP ||
    !nombre ||
    !ap_paterno ||
    !ap_materno ||
    !edad ||
    !tipo_sangre ||
    !calle ||
    !colonia ||
    !delegacion ||
    !entidad_federativa ||
    !fecha_nac ||
    !peso ||
    !altura ||
    !sexo ||
    !usuario_id_usuario
  ) {
    return res.status(400).json({ message: "Faltan campos requeridos para insertar al paciente" });
  }

  try {
    // Verificar si el paciente ya existe
    const [existingPaciente] = await pool.query("SELECT * FROM db_paciente WHERE CURP = ?", [CURP]);

    // Comprobar si el paciente ya existe
    if (existingPaciente.length > 0) {
      return res.status(409).json({ message: "El paciente ya existe" });
    }

    // Insertar al paciente
    await pool.query(
      "CALL sp_InsertarPaciente(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        CURP,
        nombre,
        ap_paterno,
        ap_materno,
        edad,
        tipo_sangre,
        calle,
        num_ext,
        num_int,
        colonia,
        delegacion,
        entidad_federativa,
        fecha_nac,
        peso,
        altura,
        sexo,
        aseguradora,
        usuario_id_usuario,
      ]
    );

    return res.status(201).json({ message: "Paciente insertado con éxito" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


// Consulta todos los registros de pacientes existentes
export const getAllPacientes = async (req, res) => {
  try {
    // Consultar todos los pacientes
    const pacientes = await pool.query("SELECT * FROM db_paciente");

    return res.status(200).json({ pacientes });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Visualizar historial de citas por parte del paciente
export const queryHistorialCitas = async (req, res) => {
  try {
    const { id_paciente } = req.body;

    const citas = await pool.query("CALL sp_VerHistorialCitasPaciente(?)", [id_paciente]);

    return res.status(200).json({ citas });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Visualizar citas próximas
export const queryCitasProximas = async (req, res) => {
  try {
    const { id_paciente } = req.body;

    const citas = await pool.query("CALL sp_VerCitasProximasPaciente(?)", [id_paciente]);

    return res.status(200).json({ citas });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Visualizar historial médico de paciente
export const queryHistorialMedico = async (req, res) => {
  try {
    const { id_paciente } = req.body;

    const historial = await pool.query("CALL sp_VerHistorialMedicoPaciente(?)", [id_paciente]);

    return res.status(200).json({ historial });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
