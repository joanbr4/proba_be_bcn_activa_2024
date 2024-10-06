import { NextFunction, Request, Response } from "express"

const errorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errorMessage = err.message
  console.error(errorMessage)
  res.send({ message: errorMessage })
}

export { errorMiddleware }
