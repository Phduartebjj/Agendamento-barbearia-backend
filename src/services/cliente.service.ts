import prisma from "../lib/prisma.js";
import type { CriarClienteDTO } from "../types/cliente.js";

export async function buscarClientes() {
  const clientes = await prisma.cliente.findMany();

  return clientes;
}

export async function criarCliente(dados: CriarClienteDTO) {
  const cliente = await prisma.cliente.create({
    data: dados,
  });

  return cliente;
}
