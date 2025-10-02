import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("DB connection successfull");
  } catch (error) {
    console.log("DB connection failed");
    console.log(error);
    process.exit(1)
  }
};
