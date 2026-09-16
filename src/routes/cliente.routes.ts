import { Router } from "express";
import { cadastrarCliente, listarClientes } from "../controllers/cliente.controller.js";


const router = Router();

router.get("/", listarClientes);

router.post("/", cadastrarCliente);

export default router;
