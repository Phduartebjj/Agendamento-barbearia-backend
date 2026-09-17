import type { Request, Response, NextFunction } from "express";
import { buscarClientes, criarCliente } from "../services/cliente.service.js";
import type { CriarClienteDTO } from "../schemas/cliente.schema.js";

export async function listarClientes(req: Request, res: Response) {
  const clientes = await buscarClientes();

  res.json(clientes);
}

export async function cadastrarCliente(
  req: Request<{}, {}, CriarClienteDTO>,
  res: Response, next: NextFunction
) {
  try {
    const dados = req.body;

    const cliente = await criarCliente(dados);

    res.status(201).json(cliente);
  } catch (error) {
    next(error);
  }
}
