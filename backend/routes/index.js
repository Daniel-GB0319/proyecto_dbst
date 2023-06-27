import { Router } from "express";

import * as pacientesController from "../controllers/pacientes.js";
import * as doctoresController from "../controllers/doctores.js";
import * as medicamentosController from "../controllers/medicamentos.js";
import * as proveedoresController from "../controllers/proveedores.js";
import * as consultoriosController from "../controllers/consultorios.js";
import * as especialidadesController from "../controllers/especialidades.js";
import * as horariosController from "../controllers/horarios.js";
import * as citasController from "../controllers/citas.js"; 
import * as alergiasController from "../controllers/alergias.js";
import * as usuariosController from "../controllers/usuarios.js"; 
import * as recepcionistasController from "../controllers/recepcionistas.js";

const router = Router();

// Rutas para usuarios
router.post("/insertUsuario", usuariosController.insertUsuario);
router.post("/updateUsuario", usuariosController.updateUsuario);
router.post("/deleteUsuario", usuariosController.deleteUsuario);
router.get("/queryUsuario/:id_usuario", usuariosController.queryUsuario);
router.get("/getAllUsuarios", usuariosController.getAllUsuarios);
router.post("/loginUsuarios", usuariosController.loginUsuarios);

// Ruta para pacientes
router.post("/insertPaciente", pacientesController.insertPaciente);
router.post("/queryPacienteDatos", pacientesController.queryDatosPersonales);
router.post("/updatePacienteDireccion", pacientesController.updateDireccion);
router.post("/updatePacienteSeguro", pacientesController.updateSeguro);
router.post("/deletePaciente", pacientesController.deletePaciente);
router.post("/getAllPacientes", pacientesController.getAllPacientes);
router.post("/queryPacienteHistCitas", pacientesController.queryHistorialCitas);
router.post("/queryPacienteCitasProx", pacientesController.queryCitasProximas);
router.post("/queryPacienteHistMedico", pacientesController.queryHistorialMedico);

// Rutas para doctores
router.post("/queryDoctorDatos", doctoresController.queryDatosPersonales);
router.post("/updateDoctorDireccion", doctoresController.updateDireccion);
router.post("/updateDoctorDatos", doctoresController.updateDatosPersonales);
router.post("/deleteDoctor", doctoresController.deleteDoctor);
router.post("/updateConsultorioDoctor", doctoresController.updateConsultorioDoctor);
router.post("/updateEspecialidad", doctoresController.updateEspecialidadDoctor);
router.post("/insertDoctor", doctoresController.insertDoctor);
router.post("/getAllDoctores", doctoresController.getAllDoctores);
router.post("/queryDoctorHistCitas", doctoresController.queryHistorialCitas);
router.post("/queryDoctorCitasProx", doctoresController.queryCitasProximas);
router.post("/queryDoctorRecetasEmi", doctoresController.queryRecetasEmitidas);
router.post("/updateDoctorHorario", doctoresController.updateHorario);
router.post("/queryDoctorDispHorario", doctoresController.queryDoctoresDisponibles);

// Rutas para medicamentos
router.post("/queryMedicamento", medicamentosController.queryMedicamentos);
router.post("/insertMedicamento", medicamentosController.insertMedicamento);
router.post("/updateMedicamento", medicamentosController.updateMedicamento);
router.post("/deleteMedicamento", medicamentosController.deleteMedicamento);
router.post("/updateCantidadMedicamento", medicamentosController.updateCantidadMedicamento);
router.post("/updatePrecioMedicamento", medicamentosController.updatePrecioMedicamento);
router.post("/getAllMedicamentos", medicamentosController.getAllMedicamentos);
router.post("/queryMedicamentoXProveedor", medicamentosController.queryMedicamentosPorProveedor);

// Rutas para proveedores
router.post("/insertProveedor", proveedoresController.insertProveedor);
router.post("/updateProveedor", proveedoresController.updateProveedor);
router.post("/deleteProveedor", proveedoresController.deleteProveedor);

// Rutas para consultorios
router.post("/createConsultorio", consultoriosController.createConsultorio);
router.post("/updateConsultorio", consultoriosController.updateConsultorio);
router.post("/deleteConsultorio", consultoriosController.deleteConsultorio);
router.post("/queryConsultorio", consultoriosController.queryConsultorio);

// Rutas para especialidades
router.post("/createEspecialidad", especialidadesController.createEspecialidad);
router.post("/queryEspecialidad", especialidadesController.queryEspecialidad);
router.post("/updateEspecialidad", especialidadesController.updateEspecialidad);
router.post("/deleteEspecialidad", especialidadesController.deleteEspecialidad);

// Rutas para horarios
router.post("/createHorario", horariosController.createHorario);
router.post("/queryHorario", horariosController.queryHorario);
router.post("/updateHorario", horariosController.updateHorario);
router.post("/deleteHorario", horariosController.deleteHorario);

// Ruta para alergias
router.post("/insertAlergia", alergiasController.insertAlergia);
router.post("/updateAlergia", alergiasController.updateAlergia);
router.post("/deleteAlergia", alergiasController.deleteAlergia);

// Rutas para citas
router.post("/insertCita", citasController.createCita);
router.post("/updateCita", citasController.updateCita);
router.post("/queryCita", citasController.queryCita);
router.get("/deleteCita", citasController.deleteCita);
router.get("/getAllCitas", citasController.getAllCitas);

// Rutas para Recepcionistas
router.get("/insertRecepcionista", recepcionistasController.insertRecepcionista);
router.get("/updateRecepcionista", recepcionistasController.updateRecepcionista);
router.get("/deleteRecepcionista", recepcionistasController.deleteRecepcionista);
router.get("/getAllRecepcionistas", recepcionistasController.getAllRecepcionistas);

export default router;
