import mongoose from "mongoose";

export const dbConnection = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URI);
		console.log("DB coonection successfull");
	} catch (error) {
		console.log("DB connection Error");
		console.log(error);
	}
};



