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
import * as administradoresController from "../controllers/administradores.js";
import * as recetasController from "../controllers/recetas.js";

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
router.get("/queryPacienteDatos", pacientesController.queryDatosPersonales);
router.post("/updatePacienteDireccion", pacientesController.updateDireccion);
router.post("/updatePacienteSeguro", pacientesController.updateSeguro);
router.post("/deletePaciente", pacientesController.deletePaciente);
router.get("/getAllPacientes", pacientesController.getAllPacientes);
router.get("/queryPacienteHistCitas", pacientesController.queryHistorialCitas);
router.get("/queryPacienteCitasProx", pacientesController.queryCitasProximas);
router.get("/queryPacienteHistMedico", pacientesController.queryHistorialMedico);

// Rutas para doctores
router.get("/queryDoctorDatos", doctoresController.queryDatosPersonales);
router.post("/updateDoctorDireccion", doctoresController.updateDireccion);
router.post("/updateDoctorDatos", doctoresController.updateDatosPersonales);
router.post("/deleteDoctor", doctoresController.deleteDoctor);
router.post("/updateConsultorioDoctor", doctoresController.updateConsultorioDoctor);
router.post("/updateEspecialidad", doctoresController.updateEspecialidadDoctor);
router.post("/insertDoctor", doctoresController.insertDoctor);
router.get("/getAllDoctores", doctoresController.getAllDoctores);
router.get("/queryDoctorHistCitas", doctoresController.queryHistorialCitas);
router.get("/queryDoctorCitasProx", doctoresController.queryCitasProximas);
router.get("/queryDoctorRecetasEmi", doctoresController.queryRecetasEmitidas);
router.post("/updateDoctorHorario", doctoresController.updateHorario);
router.get("/queryDoctorDispHorario", doctoresController.queryDoctoresDisponibles);

// Rutas para medicamentos
router.get("/queryMedicamento", medicamentosController.queryMedicamentos);
router.post("/insertMedicamento", medicamentosController.insertMedicamento);
router.post("/updateMedicamento", medicamentosController.updateMedicamento);
router.post("/deleteMedicamento", medicamentosController.deleteMedicamento);
router.post("/updateCantidadMedicamento", medicamentosController.updateCantidadMedicamento);
router.post("/updatePrecioMedicamento", medicamentosController.updatePrecioMedicamento);
router.get("/getAllMedicamentos", medicamentosController.getAllMedicamentos);
router.get("/queryMedicamentoXProveedor", medicamentosController.queryMedicamentosPorProveedor);

// Rutas para proveedores
router.post("/insertProveedor", proveedoresController.insertProveedor);
router.post("/updateProveedor", proveedoresController.updateProveedor);
router.post("/deleteProveedor", proveedoresController.deleteProveedor);

// Rutas para consultorios
router.post("/createConsultorio", consultoriosController.createConsultorio);
router.post("/updateConsultorio", consultoriosController.updateConsultorio);
router.post("/deleteConsultorio", consultoriosController.deleteConsultorio);
router.get("/queryConsultorio", consultoriosController.queryConsultorio);

// Rutas para especialidades
router.post("/createEspecialidad", especialidadesController.createEspecialidad);
router.get("/queryEspecialidad", especialidadesController.queryEspecialidad);
router.post("/updateEspecialidad", especialidadesController.updateEspecialidad);
router.post("/deleteEspecialidad", especialidadesController.deleteEspecialidad);

// Rutas para horarios
router.post("/createHorario", horariosController.createHorario);
router.get("/queryHorario", horariosController.queryHorario);
router.post("/updateHorario", horariosController.updateHorario);
router.post("/deleteHorario", horariosController.deleteHorario);

// Ruta para alergias
router.post("/insertAlergia", alergiasController.insertAlergia);
router.post("/updateAlergia", alergiasController.updateAlergia);
router.post("/deleteAlergia", alergiasController.deleteAlergia);

// Rutas para citas
router.post("/insertCita", citasController.createCita);
router.post("/updateCita", citasController.updateCita);
router.get("/queryCita", citasController.queryCita);
router.post("/deleteCita", citasController.deleteCita);
router.get("/getAllCitas", citasController.getAllCitas);

// Rutas para Recepcionistas
router.post("/insertRecepcionista", recepcionistasController.insertRecepcionista);
router.post("/updateRecepcionista", recepcionistasController.updateRecepcionista);
router.post("/deleteRecepcionista", recepcionistasController.deleteRecepcionista);
router.get("/getAllRecepcionistas", recepcionistasController.getAllRecepcionistas);

// Rutas para Administradores 
router.get("/queryAdminDatos", administradoresController.queryDatos);
router.post("/updateAdminDatos", administradoresController.updateDatos);
router.post("/deleteAdmin", administradoresController.deleteAdministrador);
router.post("/insertAdministrador", administradoresController.insertAdministrador);
router.get("/getAllAdmin", administradoresController.getAllAdministradores);

// Rutas para Recetas
router.post("/insertReceta", recetasController.insertReceta);
router.get("/queryReceta", recetasController.queryReceta);

export default router;
