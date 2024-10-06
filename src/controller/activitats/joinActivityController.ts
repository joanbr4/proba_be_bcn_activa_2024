import { Request, Response } from "express"
import { Activitats, Users } from "../../db/db"

const joinActivityController = async (req: Request, res: Response) => {
  const idActivity = req.params.idA
  const idUser = req.params.idU

  const activitat = await Activitats.findById({ _id: idActivity })
  const user = await Users.findById({ _id: idUser })

  if (!activitat) throw new Error("No existeix aquesta activitat")
  if (!user) throw new Error("No existeix aquest usuari")

  if (!activitat.inscritos.includes(user._id)) {
    activitat.inscritos.push(user._id)
    await activitat.save()
  }
  if (!user.activitats.includes(activitat._id)) {
    user.activitats.push(activitat._id)
    await user.save()
  }

  res.status(200).send("S'ha inscrit correctament l'usuari a l'activitat!")
}

export { joinActivityController }
