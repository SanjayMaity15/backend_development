import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth.routes.js"
import { dbConnection } from "./config/db_connection.js";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser())

app.use("/api", authRouter)

app.get("/", (req, res) => {
    res.send("Server is fine")
})

app.listen(process.env.PORT, () => {
    console.log("Server is running at PORT : " + process.env.PORT);
    dbConnection()
});
