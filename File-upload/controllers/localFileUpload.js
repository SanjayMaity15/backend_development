import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import File from "../models/File.model.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const localFileUpload = async (req, res) => {
	try {
		const file = req.files.file;
		console.log(file);

		const extensionName = path.extname(file.name);

		const fileName = `img_${Date.now()}${extensionName}`;

		const uploadPath = path.join(__dirname, "files", fileName);

		await file.mv(uploadPath, (err) => {
			console.log(err);
		});

		return res.status(200).json({
			success: true,
			message: "File uploaded successfully",
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: "Fileupload failed",
			error: error.message,
		});
	}
};

