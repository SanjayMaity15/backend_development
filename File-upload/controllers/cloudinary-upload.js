import File from "../models/File.model.js";
import { v2 as cloudinary } from "cloudinary";
import path from "path";

// check file format support or not

const checkFileFormat = (supportFormat, currFileType) => {
	return supportFormat.includes(currFileType);
};

// upload file to cloudinary

const uploadFileToCloudinary = async (file, folder, quality) => {
    const options = { folder };
    if (quality) {
        options.quality = quality
    }
    options.resource_type = "auto"
	return await cloudinary.uploader.upload(file.tempFilePath, options);
};

export const imageUpload = async (req, res) => {
	try {
		const { name, email, tags } = req.body;

		const file = req.files.imgFile;

		const supportedFileFormat = ["jpg", "jpeg", "png"];

		const fileType = path.extname(file.name);

		const fileTypeFinal = fileType.replace(".", "").trim();

		// check support format or not
		if (!checkFileFormat(supportedFileFormat, fileTypeFinal)) {
			return res.status(400).json({
				success: false,
				message: "File format not supported",
			});
		}

		// upload to cloudinary

		const response = await uploadFileToCloudinary(file, "myFolder");

		const result = await File.create({
			name,
			email,
			tags,
			imageUrl: response.secure_url,
		});

		return res.status(200).json({
			succcess: true,
			data: result,
			message: "File uploaded successfully",
		});
	} catch (error) {
		return res.status(500).json({
			succcess: false,
			message: "Something went wrong",
			error: error.message,
		});
	}
};

export const imageUploadResize = async (req, res) => {
	try {
		const { name, email, tags } = req.body;

		const file = req.files.imgFile;

		const supportedFileFormat = ["jpg", "jpeg", "png"];

		const fileType = path.extname(file.name);

		const fileTypeFinal = fileType.replace(".", "").trim();

		// check support format or not
		if (!checkFileFormat(supportedFileFormat, fileTypeFinal)) {
			return res.status(400).json({
				success: false,
				message: "File format not supported",
			});
		}

		// upload to cloudinary

		const response = await uploadFileToCloudinary(file, "myFolder", 50);

		const result = await File.create({
			name,
			email,
			tags,
			imageUrl: response.secure_url,
		});

		return res.status(200).json({
			succcess: true,
			data: result,
			message: "File uploaded successfully",
		});
	} catch (error) {
		return res.status(500).json({
			succcess: false,
			message: "Something went wrong",
			error: error.message,
		});
	}
};

export const videoUpload = async (req, res) => {
	try {
		const { name, email, tags } = req.body;

		const file = req.files.videoFile;

		const supportedFileFormat = ["mp4", "mov", "ogg"];

		const fileType = path.extname(file.name);

		const fileTypeFinal = fileType.replace(".", "").trim();

		// check support format or not
		if (!checkFileFormat(supportedFileFormat, fileTypeFinal)) {
			return res.status(400).json({
				success: false,
				message: "File format not supported",
			});
		}

		// upload to cloudinary

		const response = await uploadFileToCloudinary(file, "myFolder");

		const result = await File.create({
			name,
			email,
			tags,
			imageUrl: response.secure_url,
		});

		return res.status(200).json({
			succcess: true,
			data: result,
			message: "video File uploaded successfully",
		});
	} catch (error) {
		return res.status(500).json({
			succcess: false,
			message: "Something went wrong",
			error: error.message,
		});
	}
};
