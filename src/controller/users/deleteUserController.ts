import { Request, Response } from "express"
import { Users } from "../../db/db"

export const deleteUserController = async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await Users.deleteOne({ _id: id })

  if (result.deletedCount === 0)
    throw new Error("No existe este usuario para borrar")

  res.status(200).send("El usuario se ha eliminado correctamente")
}
