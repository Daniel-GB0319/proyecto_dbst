import { Router } from "express";
import * as authController from "../controllers/auth.js";
import * as pacientesController from "../controllers/pacientes.js";
import * as doctoresController from "../controllers/doctores.js";
import * as medicamentosController from "../controllers/medicamentos.js";
import * as proveedoresController from "../controllers/proveedores.js";
import * as consultoriosController from "../controllers/consultorios.js";
import * as especialidadesController from "../controllers/especialidades.js";
import * as horariosController from "../controllers/horarios.js";
/* import * as consultasController from "../controllers/consultas.js"; */
import * as alergiasController from "../controllers/alergias.js";
import * as usuariosController from "../controllers/usuarios.js"; // Importar controladores de usuarios



const router = Router();

// Rutas para usuarios
router.post("/insertUsuario", usuariosController.insertUsuario);
router.post("/updateUsuario", usuariosController.updateUsuario);
router.post("/deleteUsuario", usuariosController.deleteUsuario);
router.get("/queryUsuario/:id_usuario", usuariosController.queryUsuario);
router.get("/getAllUsuarios", usuariosController.getAllUsuarios);
router.post("/loginUsuarios", usuariosController.loginUsuarios);


// Ruta para el inicio de sesión
// PROBABLEMENTE SE ELIMINE ESTA SECCION YA QUE RUTAS PARA USUARIOS
// PUEDEN SUSTITUIR SU FUNCION
router.post("/login", authController.login);
router.post("/Admin", authController.createAdminUser);
router.post("/crearTipoUsuario", authController.crearTipoUsuario);

// Ruta para pacientes
router.post("/insertPaciente", pacientesController.insertPaciente);
router.post("/queryPacienteDatos", pacientesController.queryDatosPersonales);
router.post("/updatePacienteDireccion", pacientesController.updateDireccion);
router.post("/updatePacienteSeguro", pacientesController.updateSeguro);
router.post("/deletePaciente", pacientesController.deletePaciente);

// Rutas para doctores
router.post("/queryDatosPersonales", doctoresController.queryDatosPersonales);
router.post("/updateDireccion", doctoresController.updateDireccion);
router.post("/updateDatosPersonales", doctoresController.updateDatosPersonales);
router.post("/deleteDoctor", doctoresController.deleteDoctor);
router.post("/updateConsultorioDoctor", doctoresController.updateConsultorioDoctor);
router.post("/updateEspecialidad", doctoresController.updateEspecialidadDoctor);
router.post("/insertDoctor", doctoresController.insertDoctor);

// Rutas para medicamentos
router.post("/queryMedicamento", medicamentosController.queryMedicamentos);
router.post("/insertMedicamento", medicamentosController.insertMedicamento);
router.post("/updateMedicamento", medicamentosController.updateMedicamento);
router.post("/deleteMedicamento", medicamentosController.deleteMedicamento);
router.post("/updateCantidadMedicamento", medicamentosController.updateCantidadMedicamento);
router.post("/updatePrecioMedicamento", medicamentosController.updatePrecioMedicamento);

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

// Rutas para consultas
/* router.post("/createConsulta", consultasController.createConsulta);
router.post("/updateConsulta", consultasController.updateConsulta);
router.get("/queryConsulta/:id_consulta", consultasController.queryConsulta);
router.post("/deleteConsulta", consultasController.deleteConsulta); */

// Ruta para alergias
router.post("/insertAlergia", alergiasController.insertAlergia);
router.post("/updateAlergia", alergiasController.updateAlergia);
router.post("/deleteAlergia", alergiasController.deleteAlergia);

export default router;
