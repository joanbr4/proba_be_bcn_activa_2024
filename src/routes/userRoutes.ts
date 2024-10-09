import express from "express"
import { getUserController } from "../controller/users/getUserController"
import { updateUserController } from "../controller/users/updateUserController"
import { postUserController } from "../controller/users/postUserController"
import { deleteUserController } from "../controller/users/deleteUserController"
import { handlingFunction } from "../middleware/handlingFunction"
import { getAllUserController } from "../controller/users/getAllUserController"

const userRoutes = express.Router()

userRoutes.get("/:id", handlingFunction(getUserController))
userRoutes.get("", handlingFunction(getAllUserController))

userRoutes.post("", handlingFunction(postUserController))

userRoutes.put("/:id", handlingFunction(updateUserController))

userRoutes.delete("/:id", handlingFunction(deleteUserController))

export { userRoutes }
