import { Router } from "express";
import clienteRoutes from "./cliente.routes.js";
const router = Router();

router.use("/clientes", clienteRoutes);

export default router;
