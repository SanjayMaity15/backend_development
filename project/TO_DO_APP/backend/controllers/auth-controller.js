import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// signup

export const signUp = async (req, res) => {
	try {
		const { username, email, password } = req.body;

		if (!username || !email || !password) {
			return res.status(400).json({
				success: false,
				message: "All field must be filled",
			});
		}

		const existingUser = await User.findOne({ email });

		if (existingUser) {
			return res.status(400).json({
				success: false,
				message: "User already registered",
			});
		}

		let hashPassword = await bcrypt.hash(password, 10);

		const newUser = new User({
			username,
			email,
			password: hashPassword,
		});

		const result = await newUser.save();

		return res.status(200).json({
			success: true,
			result,
			message: "Signup successful",
		});
	} catch (error) {
		res.status(500).json({
			error: error,
			message: "Signup error",
		});
	}
};

// login

export const login = async (req, res) => {
	try {
		const { email, password } = req.body;

		if (!email || !password) {
			return res.status(400).json({
				success: false,
				message: "All field must be filled",
			});
		}

		let user = await User.findOne({ email });

		if (!user) {
			return res.status(404).json({
				success: false,
				message: "User not found",
			});
		}

		console.log(user);

		const checkPassMatch = await bcrypt.compare(password, user.password);
		console.log(checkPassMatch);

		if (!checkPassMatch) {
			return res.status(400).json({
				success: false,
				message: "Incorrect password",
			});
		}

		const payload = {
			id: user._id,
		};

		let token = jwt.sign(payload, process.env.JWT_SECRET, {
			expiresIn: "7d",
		});

		console.log(token);
		user = user.toObject();
		user.token = token;
		user.password = undefined;

		res.cookie("token", token, {
			httpOnly: true,
			expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
		});

		return res.status(200).json({
			success: true,
			user,
			message: "Login successfully",
		});
	} catch (error) {
		console.log(error);
		console.log(error.message);

		res.status(500).json({
			success: false,
			error: error,
			message: "Login failed",
		});
	}
};

// logout

export const logout = async (req, res) => {
	try {
		res.clearCookie("token", {
			httpOnly: true,
		});

		return res.status(200).json({
			success: true,
			message: "Logout successfully",
		});
	} catch (error) {}
};
