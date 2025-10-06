import mongoose from "mongoose";

export const dbConnection = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URL);
		console.log("DB connected successfully");
	} catch (error) {
		console.log("DB connection Error");
		console.log(error.message);
	}
};
