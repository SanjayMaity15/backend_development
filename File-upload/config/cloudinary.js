import { v2 as cloudinary } from "cloudinary";

export const connectCloudinary = async () => {
	try {
		cloudinary.config({
			cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
			api_key: process.env.CLOUDINARY_API_KEY,
			api_secret: process.env.CLOUDINARY_SECRET_KEY,
		});
	} catch (error) {
		console.log("Clodinary congiguration error");
		console.log(error);
	}
};
