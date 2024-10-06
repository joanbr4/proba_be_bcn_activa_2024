import { Request, Response } from "express"
import { Activitats } from "../../db/db"
import multer from "multer"
import fs from "node:fs/promises"

const upload = multer({ dest: "uploads/" })

type TActivitats = {
  nombre: string
  descripcion: string
  duracion: number
  capacidad: number
  inscritos: Number
  instructores: [string]
}

const exportController = async (req: Request, res: Response) => {
  const result: TActivitats[] = await Activitats.find()

  res.status(200).json(result)
}

const importController = async (req: Request, res: Response) => {
  const file = req.file

  if (!file) throw new Error("No existe ningún archivo")
  console.log(file)

  const stringFile = await fs.readFile(file.path, "utf-8")
  const jsonFile = JSON.parse(stringFile) as TActivitats[]

  const result = await Activitats.insertMany(jsonFile)

  console.log(result)

  res.status(200).send("S'ha importat correctament les activitats!")
}

export { exportController, importController, upload }
