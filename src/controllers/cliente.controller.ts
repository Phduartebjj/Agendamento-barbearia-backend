import type { Request, Response, NextFunction } from "express";
import {
  buscarClientePorId,
  buscarClientes,
  criarCliente,
} from "../services/cliente.service.js";
import type { CriarClienteDTO } from "../schemas/cliente.schema.js";

export async function listarClientes(req: Request, res: Response) {
  const clientes = await buscarClientes();

  res.json(clientes);
}

export async function cadastrarCliente(
  req: Request<{}, {}, CriarClienteDTO>,
  res: Response,
  next: NextFunction,
) {
  try {
    const dados = req.body;

    const cliente = await criarCliente(dados);

    res.status(201).json(cliente);
  } catch (error) {
    next(error);
  }
}

export async function buscarCliente(
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction,
) {
  try {
    const { id } = req.params;
    const cliente = await buscarClientePorId(id);
    if (!cliente) {
      return res.status(404).json({ message: "Cliente não encontrado" });
    }

    res.status(200).json(cliente);
  } catch (error) {
    next(error);
  }
}
