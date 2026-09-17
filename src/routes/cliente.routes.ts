import { Router } from "express";
import {
  cadastrarCliente,
  listarClientes,
  buscarCliente,
} from "../controllers/cliente.controller.js";
import { buscarClienteSchema, criarClienteSchema } from "../schemas/cliente.schema.js";
import { validate } from "../middlewares/validate.js";

const router = Router();

router.get("/", listarClientes);
router.get("/:id", validate(buscarClienteSchema, "params"), buscarCliente);
router.post("/", validate(criarClienteSchema, "body"), cadastrarCliente);

export default router;
