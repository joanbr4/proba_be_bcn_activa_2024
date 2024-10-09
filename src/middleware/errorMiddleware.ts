import { NextFunction, Request, Response } from "express"

const errorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(next) // Para evitar que salten los errores de eslint
  const errorMessage = err.message
  console.error(errorMessage)
  res.send({ message: errorMessage })
}

export { errorMiddleware }
