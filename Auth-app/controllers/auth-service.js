import User from "../models/user.model.js";
import bcrypt from "bcrypt";

// signup controller

export const signUp = async (req, res) => {
	try {
		const { username, email, password, role } = req.body;

		const existingUser = await User.findOne({ email });

		if (existingUser) {
			return res.status(400).json({
				success: false,
				message: "Already exists",
			});
		}

		let hashedPassword;

		try {
			hashedPassword = await bcrypt.hash(password, 10);
		} catch (error) {
			return res.status(400).json({
				success: false,
				message: "Password hasing error",
			});
		}

		const result = await User.create({
			username,
			email,
			password: hashedPassword,
			role,
		});

		return res.status(200).json({
			success: true,
			data: result,
			message: "Signup successfully",
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			data: error,
			message: "server error",
		});
	}
};
