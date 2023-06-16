import { Router } from "express";
import { login, createAdminUser, crearTipoUsuario } from "../controllers/auth.js";
import {queryDatosPersonales, updateDireccion, updateSeguro, deletePaciente} from "../controllers/pacientes.js";
import {queryDatosPersonales as queryDoctorDatosPersonales, updateDireccion as updateDoctorDireccion, updateDatosPersonales, deleteDoctor,
  updateConsultorio, updateEspecialidad, insertDoctor} from "../controllers/doctores.js";
import {insertMedicamento, updateMedicamento, deleteMedicamento, updateCantidadMedicamento, updatePrecioMedicamento} from "../controllers/medicamentos.js";
import {insertProveedor, updateProveedor, deleteProveedor} from "../controllers/proveedores.js";

const router = Router();

// Ruta para el inicio de sesión
router.post("/login", login);
router.post("/Admin", createAdminUser);
router.post("/crearTipoUsuario", crearTipoUsuario);

// Ruta para pacientes
router.post("/queryPacienteDatos", queryDatosPersonales);
router.post("/updatePacienteDireccion", updateDireccion);
router.post("/updatePacienteSeguro", updateSeguro);
router.post("/deletePaciente", deletePaciente);

// Rutas Doctores
router.post("/queryDatosPersonales", queryDoctorDatosPersonales);
router.post("/updateDireccion", updateDoctorDireccion);
router.post("/updateDatosPersonales", updateDatosPersonales);
router.post("/deleteDoctor", deleteDoctor);
router.post("/updateConsultorio", updateConsultorio);
router.post("/updateEspecialidad", updateEspecialidad);
router.post("/insertDoctor", insertDoctor);

// Rutas para medicamentos
router.post("/insertMedicamento", insertMedicamento);
router.post("/updateMedicamento", updateMedicamento);
router.post("/deleteMedicamento", deleteMedicamento);
router.post("/updateCantidadMedicamento", updateCantidadMedicamento);
router.post("/updatePrecioMedicamento", updatePrecioMedicamento);

// Rutas para proveedores
router.post("/insertProveedor", insertProveedor);
router.post("/updateProveedor", updateProveedor);
router.post("/deleteProveedor", deleteProveedor);

export default router;
