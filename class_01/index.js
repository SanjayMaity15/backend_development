import express from "express";
import mongoose from "mongoose";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`<h1>This is my server</h1>`);
});

app.post("/api/cars", (req, res) => {
  const { name, brand } = req.body;
  console.log("Car name : ", name);
  console.log("Car brand : ", brand);
  res.send("Data send successfully");
});

app.listen(5000, () => {
  console.log("Server is running at PORT : 5000");
});

mongoose
  .connect("mongodb://localhost:27017/carShowroom")
  .then(() => {
    console.log("DB connection successfull");
  })
  .catch((error) => {
    console.log("DB connection failed");
  });
