import type { Request, Response, NextFunction } from "express";
import type { ZodType } from "zod";

type RequestPart = "body" | "params";

export function validate<T>(
  schema: ZodType<T>,
  part: RequestPart,
) {
  return (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const result = schema.safeParse(req[part]);

    if (!result.success) {
      return res.status(400).json({
        message: "Dados inválidos",
        errors: result.error.issues,
      });
    }

    next();
  };
}