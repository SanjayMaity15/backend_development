import express from "express"
import dotenv from "dotenv"
import { dbConnection } from "./config/db_connection.js"
import authRoute from "./routes/auth-routes.js"
import todoRoute from "./routes/todo-routes.js"
import cookieParser from "cookie-parser"
import cors from "cors"
dotenv.config()

const app = express()


// port

const PORT = process.env.PORT || 4000

// middleware

app.use(express.json())
app.use(cookieParser())


// Allow requests from this origin
app.use(
	cors({
		origin: "http://localhost:5173",
		credentials: true, // if you're using cookies
	})
);


// routes

app.use("/auth", authRoute)
app.use("/todo", todoRoute)

// default routes

app.get("/", (req, res) => {
    res.send("All is well")
})

// listen

app.listen(PORT, () => {
    console.log("Server is running at PORT : " + process.env.PORT);
    dbConnection()
})

