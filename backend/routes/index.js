import { Router } from "express";
import { login } from "../controllers/auth.js";
import { createAdminUser } from "../controllers/auth.js";
import { queryDatosPersonales, updateDireccion, updateSeguro, deletePaciente } from "../controllers/pacientes.js";


const router = Router();

// Ruta para el inicio de sesión
router.post("/login", login);
router.post("/Admin", createAdminUser);


// Ruta para pacientes
router.post("/queryPacienteDatos", queryDatosPersonales);
router.post("/updatePacienteDireccion", updateDireccion);
router.post("/updatePacienteSeguro", updateSeguro);
router.post("/deletePaciente", deletePaciente);


export default router;