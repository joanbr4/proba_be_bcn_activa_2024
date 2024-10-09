import express from "express"
import { getAllActivitiesController } from "../controller/activitats/getAllActivities"
import { createACtivityController } from "../controller/activitats/createActivityController"
import { joinActivityController } from "../controller/activitats/joinActivityController"
import { handlingFunction } from "../middleware/handlingFunction"
import { getActivitiesController } from "../controller/activitats/getActivityController"

const activitatsRoutes = express.Router()

activitatsRoutes.get("/:id", handlingFunction(getActivitiesController))
activitatsRoutes.get("", handlingFunction(getAllActivitiesController))
activitatsRoutes.post("", handlingFunction(createACtivityController))
activitatsRoutes.post("/:idA/:idU", handlingFunction(joinActivityController))

export { activitatsRoutes }
