import type { Request, Response } from "express";
import { buscarClientes, criarCliente } from "../services/cliente.service.js";

export async function listarClientes(req: Request, res: Response) {
  const clientes = await buscarClientes();

  res.json(clientes);
}

export async function cadastrarCliente(req: Request, res: Response) {
    const dados = req.body;

    const cliente = await criarCliente(dados);

    res.status(201).json(cliente);
}
