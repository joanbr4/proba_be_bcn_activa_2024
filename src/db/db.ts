import mongoose, { Schema } from "mongoose"

const uri = process.env.URI as string

mongoose
  .connect(uri, {
    dbName: "bcnActivaHack",
  })
  .then(() => console.log("Connected db!!", uri))
  .catch((err) => {
    console.log("Sth was failed to connect")
    console.log(err)
    throw err
  })

const userSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellidos: { type: String, required: true },
  edad: { type: Number, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  activitats: [{ type: Schema.Types.ObjectId, ref: "Activitats" }],
})

const activitatsSchemma = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  duracion: { type: Number, required: true },
  capacidad: { type: Number, required: true },
  inscritos: [{ type: Schema.Types.ObjectId, ref: "Users" }],
  instructores: [String],
})

const Users = mongoose.model("User", userSchema)
const Activitats = mongoose.model("Activitats", activitatsSchemma)

export { Users, Activitats }
