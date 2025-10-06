import express from "express";
import dotenv from "dotenv";
import fileUpload from "express-fileupload";
import { dbConnection } from "./config/db_connection.js";
import { connectCloudinary } from "./config/cloudinary.js";
import fileRouter from "./routes/file-routes.js";
dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(
	fileUpload({
		useTempFiles: true,
		tempFileDir: "/tmp/",
	})
);

// cloudinary setup
connectCloudinary();

app.use("/api", fileRouter);

app.get("/", (req, res) => {
	res.send("All rights");
});

app.listen(port, () => {
	console.log("Server is running successfully");
	dbConnection();
});
