import { Router } from "express";
import { login, createAdminUser, crearTipoUsuario } from "../controllers/auth.js";
import {queryDatosPersonales, updateDireccion, updateSeguro, deletePaciente, insertPaciente} from "../controllers/pacientes.js";
import {queryDatosPersonales as queryDoctorDatosPersonales, updateDireccion as updateDoctorDireccion, updateDatosPersonales, deleteDoctor,
  updateConsultorioDoctor, updateEspecialidadDoctor, insertDoctor} from "../controllers/doctores.js";
import {insertMedicamento, updateMedicamento, deleteMedicamento, updateCantidadMedicamento, updatePrecioMedicamento, queryMedicamentos} from "../controllers/medicamentos.js";
import {insertProveedor, updateProveedor, deleteProveedor} from "../controllers/proveedores.js";
import {createConsultorio, updateConsultorio, deleteConsultorio, queryConsultorio} from "../controllers/consultorios.js";
import {createEspecialidad, queryEspecialidad, updateEspecialidad, deleteEspecialidad} from "../controllers/especialidades.js";  
import {createHorario, queryHorario, updateHorario, deleteHorario} from "../controllers/horarios.js";
import {createConsulta, updateConsulta, queryConsulta, deleteConsulta
} from "../controllers/consultas.js";
import { insertAlergia, updateAlergia, deleteAlergia } from "../controllers/alergias.js";


const router = Router();

// Ruta para el inicio de sesión
router.post("/login", login);
router.post("/Admin", createAdminUser);
router.post("/crearTipoUsuario", crearTipoUsuario);

// Ruta para pacientes
router.post("/insertPaciente", insertPaciente);
router.post("/queryPacienteDatos", queryDatosPersonales);
router.post("/updatePacienteDireccion", updateDireccion);
router.post("/updatePacienteSeguro", updateSeguro);
router.post("/deletePaciente", deletePaciente);

// Rutas Doctores
router.post("/queryDatosPersonales", queryDoctorDatosPersonales);
router.post("/updateDireccion", updateDoctorDireccion);
router.post("/updateDatosPersonales", updateDatosPersonales);
router.post("/deleteDoctor", deleteDoctor);
router.post("/updateConsultorioDoctor", updateConsultorioDoctor);
router.post("/updateEspecialidad", updateEspecialidadDoctor);
router.post("/insertDoctor", insertDoctor);

// Rutas para medicamentos
router.post("/queryMedicamento", queryMedicamentos);
router.post("/insertMedicamento", insertMedicamento);
router.post("/updateMedicamento", updateMedicamento);
router.post("/deleteMedicamento", deleteMedicamento);
router.post("/updateCantidadMedicamento", updateCantidadMedicamento);
router.post("/updatePrecioMedicamento", updatePrecioMedicamento);

// Rutas para proveedores
router.post("/insertProveedor", insertProveedor);
router.post("/updateProveedor", updateProveedor);
router.post("/deleteProveedor", deleteProveedor);

// Rutas para consultorios
router.post("/createConsultorio", createConsultorio);
router.post("/updateConsultorio", updateConsultorio);
router.post("/deleteConsultorio", deleteConsultorio);
router.post("/queryConsultorio", queryConsultorio);

// Rutas para especialidades
router.post("/createEspecialidad", createEspecialidad);
router.post("/queryEspecialidad", queryEspecialidad);
router.post("/updateEspecialidad", updateEspecialidad);
router.post("/deleteEspecialidad", deleteEspecialidad);

// Rutas para horarios
router.post("/createHorario", createHorario);
router.post("/queryHorario", queryHorario);
router.post("/updateHorario", updateHorario);
router.post("/deleteHorario", deleteHorario);

// Rutas para consultas
router.post("/createConsulta", createConsulta);
router.post("/updateConsulta", updateConsulta);
router.get("/queryConsulta/:id_consulta", queryConsulta);
router.post("/deleteConsulta", deleteConsulta);

// Ruta para alergias
router.post("/insertAlergia", insertAlergia);
router.post("/updateAlergia", updateAlergia);
router.post("/deleteAlergia", deleteAlergia);

export default router;
