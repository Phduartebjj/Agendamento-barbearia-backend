import type { Request, Response, NextFunction } from "express";

export function errorHandler(
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  console.error(error);

  if (error instanceof Error) {
    if (error.message === "Google ID já cadastrado") {
      return res.status(409).json({
        message: error.message,
      });
    }
  }

  return res.status(500).json({
    message: "Erro interno do servidor",
  });
}
