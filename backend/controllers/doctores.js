import { pool } from "../db.js";
import jwt from "jsonwebtoken";

export const queryDatosPersonales = async (req, res) => {
  try {
    const { id_doctor } = req.body;

    const [doctor] = await pool.query(
      "SELECT * FROM db_doctor WHERE id_doctor = ?",
      [id_doctor]
    );

    if (!doctor) {
      return res.status(401).json({ message: "No se pudieron cargar los datos correctamente" });
    }

    return res.status(200).json({ message: "Datos personales obtenidos con éxito" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateDireccion = async (req, res) => {
  const { id_doctor, calle, num_ext, num_int, colonia, delegacion, entidad_federativa } = req.body;

  if (!id_doctor || !calle || !colonia || !delegacion || !entidad_federativa) {
    return res
      .status(400)
      .json({ message: "Faltan campos requeridos para actualizar la dirección" });
  }

  try {
    await pool.query(
      "UPDATE db_doctor SET calle = ?, num_ext = ?, num_int = ?, colonia = ?, delegacion = ?, entidad_federativa = ? WHERE id_doctor = ?",
      [calle, num_ext, num_int, colonia, delegacion, entidad_federativa, id_doctor]
    );

    return res.status(200).json({ message: "Dirección actualizada con éxito" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateDatosPersonales = async (req, res) => {
  const { id_doctor, nombre, ap_paterno, ap_materno, edad, fecha_nac, peso, altura, sexo, aseguradora } = req.body;

  if (!id_doctor || !nombre || !ap_paterno || !ap_materno || !edad || !fecha_nac || !peso || !altura || !sexo) {
    return res
      .status(400)
      .json({ message: "Faltan campos requeridos para actualizar los datos personales" });
  }

  try {
    await pool.query(
      "UPDATE db_doctor SET nombre = ?, ap_paterno = ?, ap_materno = ?, edad = ?, fecha_nac = ?, peso = ?, altura = ?, sexo = ?, aseguradora = ? WHERE id_doctor = ?",
      [nombre, ap_paterno, ap_materno, edad, fecha_nac, peso, altura, sexo, aseguradora, id_doctor]
    );

    return res.status(200).json({ message: "Datos personales actualizados con éxito" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteDoctor = async (req, res) => {
  try {
    const { id_doctor } = req.body;

    const [doctor] = await pool.query(
      "SELECT * FROM db_doctor WHERE id_doctor = ?",
      [id_doctor]
    );

    if (!doctor) {
      return res.status(401).json({ message: "No existe el doctor seleccionado para eliminar" });
    } else {
      const [deletedDoctor] = await pool.query(
        "DELETE FROM db_doctor WHERE id_doctor = ?",
        [id_doctor]
      );
    }

    return res.status(200).json({ message: "Doctor eliminado con éxito" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateConsultorioDoctor = async (req, res) => {
  const { id_doctor, consultorio_id_consultorio } = req.body;

  if (!id_doctor || !consultorio_id_consultorio) {
    return res
      .status(400)
      .json({ message: "Faltan campos requeridos para actualizar el consultorio" });
  }

  try {
    await pool.query(
      "UPDATE db_doctor SET consultorio_id_consultorio = ? WHERE id_doctor = ?",
      [consultorio_id_consultorio, id_doctor]
    );

    return res.status(200).json({ message: "Consultorio actualizado con éxito" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateEspecialidadDoctor = async (req, res) => {
  const { id_doctor, especialidad_id_especialidad } = req.body;

  if (!id_doctor || !especialidad_id_especialidad) {
    return res
      .status(400)
      .json({ message: "Faltan campos requeridos para actualizar la especialidad" });
  }

  try {
    await pool.query(
      "UPDATE db_doctor SET especialidad_id_especialidad = ? WHERE id_doctor = ?",
      [especialidad_id_especialidad, id_doctor]
    );

    return res.status(200).json({ message: "Especialidad actualizada con éxito" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const insertDoctor = async (req, res) => {
  const { curp, nombre, ap_paterno, ap_materno, edad, calle, num_ext, num_int, colonia, delegacion, entidad_federativa, fecha_nac, peso, altura, sexo, aseguradora, usuario_id_usuario, consultorio_id_consultorio, horario_id_horario, especialidad_id_especialidad } = req.body;

  if (!curp || !nombre || !ap_paterno || !ap_materno || !edad || !calle || !colonia || !delegacion || !entidad_federativa || !fecha_nac || !peso || !altura || !sexo || !usuario_id_usuario || !consultorio_id_consultorio || !horario_id_horario || !especialidad_id_especialidad) {
    return res.status(400).json({ message: "Faltan campos requeridos para registrar el doctor" });
  }

  try {
    await pool.query(
      "INSERT INTO db_doctor (CURP, nombre, ap_paterno, ap_materno, edad, calle, num_ext, num_int, colonia, delegacion, entidad_federativa, fecha_nac, peso, altura, sexo, aseguradora, usuario_id_usuario, consultorio_id_consultorio, horario_id_horario, especialidad_id_especialidad) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [curp, nombre, ap_paterno, ap_materno, edad, calle, num_ext, num_int, colonia, delegacion, entidad_federativa, fecha_nac, peso, altura, sexo, aseguradora, usuario_id_usuario, consultorio_id_consultorio, horario_id_horario, especialidad_id_especialidad]
    );

    return res.status(200).json({ message: "Doctor registrado con éxito" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getAllDoctores = async (req, res) => {
  try {
    const doctores = await pool.query("SELECT * FROM db_doctor");

    return res.status(200).json(doctores);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
