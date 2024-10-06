import { Request, Response } from "express"
import { Users } from "../../db/db"

export const getAllUserController = async (req: Request, res: Response) => {
  const userData = await Users.find()

  res.status(200).send({ dataUser: userData })
}
