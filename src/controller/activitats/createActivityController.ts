import { Request, Response } from "express"
// import { generateId } from "../../utils/generateId"
import { Activitats } from "../../db/db"

const createACtivityController = async (req: Request, res: Response) => {
  const { nombre, descripcion, duracion, capacidad, instructores } = req.body

  if (Object.keys(req.body).length != 5) throw new Error("Faltan Campos")

  // const id = generateId() // Generate a auto ID mongo
  const data = {
    nombre,
    descripcion,
    duracion,
    capacidad,
    instructores,
  }

  if (Object.values(data).some((item) => item == undefined))
    throw new Error("Datos incompletos")

  const result = await Activitats.create({
    nombre,
    descripcion,
    duracion,
    capacidad,
    inscritos: [],
    instructores,
  })
  console.log(result)
  res
    .status(201)
    .send({ message: "Activity created successfully", data: result })
}

export { createACtivityController }
