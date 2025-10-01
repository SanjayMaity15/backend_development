import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("DB connection successful");
        
    } catch (error) {
        console.log(error);
        console.log("DB connection failed");
        
        
    }
}