import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./config/connectDB.js"
import router from "./routes/empRoutes.js"
import cors from "cors"

dotenv.config()

const app = express()

app.use(express.json())

app.use(cors("http://localhost:5173"))

app.use("/api", router)

app.get("/", (req, res) => {
    res.send("All rights")
} )

app.listen(process.env.PORT, () => {
    console.log("Server is running at PORT : 4000");
    connectDB()
})
