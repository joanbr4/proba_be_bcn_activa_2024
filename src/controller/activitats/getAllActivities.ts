import { Request, Response } from "express"
import { Activitats } from "../../db/db"

const getAllActivitiesController = async (req: Request, res: Response) => {
  const result = await Activitats.find()

  console.log(result)

  res.status(200).send({ data: result })
}

export { getAllActivitiesController }
