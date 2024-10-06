import express from "express"
import { handlingFunction } from "../middleware/handlingFunction"
import {
  exportController,
  importController,
  upload,
} from "../controller/activitats/filesController"

const fileRoutes = express.Router()

fileRoutes.get("/export", handlingFunction(exportController))

fileRoutes.post(
  "/import",
  upload.single("file"),
  handlingFunction(importController)
)

export { fileRoutes }
