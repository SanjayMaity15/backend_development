// import File from "../models/File.model.js";
// import {dirname} from "path"

// export const localFileUpload = async (req, res) => {
// 	try {
// 		const file = req.files.file;

// 		console.log(file);

// 		let path =
// 			__dirname + "/files/" + Date.now() + `.${file.name.split(".")[1]}`;

// 		console.log(path);

// 		file.mv(path, (err) => console.log(err));

// 		res.status(200).json({
// 			success: true,
// 			message: "file uploaded successfully",
// 		});
// 	} catch (error) {
// 		console.log(error);
// 		console.log("unable to upload file");
// 	}
// };




import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import File from "../models/File.model.js";

// Recreate __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const localFileUpload = async (req, res) => {
	try {
		// Check if file exists in the request
		if (!req.files || !req.files.file) {
			return res.status(400).json({
				success: false,
				message: "No file uploaded",
			});
		}

		const file = req.files.file;

		console.log("Received file:", file);

		// Get file extension safely
		const fileExtension = path.extname(file.name); // e.g. '.jpg'

		// Create a unique filename
		const fileName = `${Date.now()}${fileExtension}`;

		// Build the path to save the file (e.g., /files/1634567890.jpg)
		const uploadPath = path.join(__dirname, "files", fileName);

		// Move the file (wrapped in a Promise to use await)
		await new Promise((resolve, reject) => {
			file.mv(uploadPath, (err) => {
				if (err) reject(err);
				else resolve();
			});
		});

		// Optional: Save file details in DB using your File model
		// await File.create({ name: fileName, path: uploadPath, size: file.size });

		res.status(200).json({
			success: true,
			message: "File uploaded successfully",
			filePath: uploadPath,
		});
	} catch (error) {
		console.error("Error uploading file:", error);

		res.status(500).json({
			success: false,
			message: "Unable to upload file",
		});
	}
};
