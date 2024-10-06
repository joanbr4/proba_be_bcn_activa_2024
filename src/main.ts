import express from "express"
import cors from "cors"
import "dotenv/config"
import { userRoutes } from "./routes/userRoutes"
import { errorMiddleware } from "./middleware/errorMiddleware"
import { activitatsRoutes } from "./routes/activitatsRoutes"
import { fileRoutes } from "./routes/fileRoutes"

const port = process.env.PORT || 4000

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use("/api/users", userRoutes)
app.use("/api/activitats", activitatsRoutes)
app.use("/api/file", fileRoutes)

app.use(errorMiddleware)

app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
)
