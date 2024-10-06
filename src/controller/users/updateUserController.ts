import { Request, Response } from "express"
import { Users } from "../../db/db"

export const updateUserController = async (req: Request, res: Response) => {
  const id = req.params.id

  const userDataToChange = req.body

  const result = await Users.findOneAndUpdate({ _id: id }, userDataToChange)
  console.log(result)

  res.status(200).send("Actualizado correctamente!")
}
