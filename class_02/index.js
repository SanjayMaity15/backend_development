import express from "express"

import dotenv from "dotenv"
dotenv.config()


import { connectDB } from "./config/connectDB.js";
import router from "./routes/todoRoutes.js";

const PORT = process.env.PORT;
const app = express()

app.use(express.json())

app.use("/api/todo", router)

app.get('/', (req, res) => {
    res.send("Server is start")
})

app.listen(PORT, () => {
    console.log(`Server is running at PORT : ${PORT}`);
})

connectDB()