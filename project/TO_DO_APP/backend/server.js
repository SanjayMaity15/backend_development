import express from "express"
import dotenv from "dotenv"
import { dbConnection } from "./config/db_connection.js"
import authRoute from "./routes/auth-routes.js"
import cookieParser from "cookie-parser"
dotenv.config()

const app = express()


// port

const PORT = process.env.PORT || 4000

// middleware

app.use(express.json())
app.use(cookieParser())


// routes

app.use("/auth", authRoute)

// default routes

app.get("/", (req, res) => {
    res.send("All is well")
})

// listen

app.listen(PORT, () => {
    console.log("Server is running at PORT : " + process.env.PORT);
    dbConnection()
})

