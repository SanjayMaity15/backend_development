import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/connectDB.js";
import router from "./routes/postRoutes.js";
dotenv.config()

const app = express();

app.use(express.json())

const port = process.env.PORT;

app.use("/api/v1", router)

app.use('/', (req, res) => {
    res.send("Server is Running");
})

app.listen(port, () => {
    console.log("Server is running at PORT : " + port);
    connectDB()
});
