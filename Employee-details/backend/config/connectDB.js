import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("DB connection successful");
  } catch (error) {
    console.log(error);
    console.log("DB coonection error");
  }
};
