import { Request, Response } from "express"
import { Users } from "../../db/db"

export const getUserController = async (req: Request, res: Response) => {
  const id = req.params.id
  const userData = await Users.findOne({ _id: id })

  res.status(200).send({ dataUser: userData })
}
