import { Request, Response } from "express"
import { Activitats } from "../../db/db"

const getActivitiesController = async (req: Request, res: Response) => {
  const id = req.params.id as string
  const result = await Activitats.findById({ _id: id })

  console.log("hola", result)
  if (!result) throw new Error("No existe esta actividad!")

  res.status(200).send({ data: result })
}

export { getActivitiesController }
