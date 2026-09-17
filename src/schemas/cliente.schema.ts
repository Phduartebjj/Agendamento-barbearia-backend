import { z } from "zod";

export const criarClienteSchema = z.object({
  nome: z
    .string()
    .trim()
    .min(1, "Nome é obrigatório")
    .max(50, "Nome deve ter no máximo 50 caracteres"),

  sobrenome: z
    .string()
    .trim()
    .min(1, "Sobrenome é obrigatório")
    .max(100, "Sobrenome deve ter no máximo 100 caracteres"),

  telefone: z.string().regex(/^\+[1-9]\d{7,14}$/, "Telefone inválido"),

  googleId: z.string().trim().min(1, "Google ID é obrigatório"),
});

export type CriarClienteDTO = z.infer<typeof criarClienteSchema>;

export const buscarClienteSchema = z.object({
  id: z.uuid("ID do cliente inválido"),
});
