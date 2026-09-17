import prisma from "../lib/prisma.js";
import type { CriarClienteDTO } from "../schemas/cliente.schema.js";
import { Prisma } from "../generated/prisma/client.js";

export async function buscarClientes() {
  return await prisma.cliente.findMany();
}

export async function criarCliente(dados: CriarClienteDTO) {
  try {
    return await prisma.cliente.create({
      data: dados,
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        throw new Error("Google ID já cadastrado");
      }
    }

    throw error;
  }
}
