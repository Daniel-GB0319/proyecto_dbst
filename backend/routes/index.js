import { Router } from "express";
import { login } from "../controllers/auth.js";
import { createAdminUser } from "../controllers/auth.js";

const router = Router();

// Ruta para el inicio de sesión
router.post("/login", login);
router.post("/Admin", createAdminUser);

export default router;