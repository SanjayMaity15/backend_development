import mongoose from "mongoose";

export const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("DB connection successfull");
        
    } catch (error) {
        console.log(error);
        console.log("DB connection failed");
        
    }
}