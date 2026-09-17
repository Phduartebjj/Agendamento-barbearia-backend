import { Router } from "express";
import {
  cadastrarCliente,
  listarClientes,
} from "../controllers/cliente.controller.js";
import { criarClienteSchema } from "../schemas/cliente.schema.js";
import { validate } from "../middlewares/validate.js";

const router = Router();

router.get("/", listarClientes);

router.post("/", validate(criarClienteSchema), cadastrarCliente);

export default router;
