//importa el creador de rutas de express
// /api/usuario
import { Router } from "express";

import * as usuarioCtr from "./usuario.controller.js";

const router = Router(); // uso el metodo Router()de express para crear las rutas
// la ruta tiene dos parametros la ruta en si misma,
// y el metodo que la resuelve
router.get("/usuarios", usuarioCtr.obtenerUsuarios);
router.get("/usuarios/:id", usuarioCtr.obtenerUsuarioId);

export default router;
