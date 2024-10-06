import { NextFunction, Request, RequestHandler, Response } from "express"

const handlingFunction =
  (func: RequestHandler) =>
  (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(func(req, res, next)).catch(next)
  }

export { handlingFunction }
