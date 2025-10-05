import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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

// login controller

export const login = async (req, res) => {
	try {
		const { email, password } = req.body;

		if (!email || !password) {
			return res.status(400).json({
				success: false,
				message: "All filed must be filled",
			});
		}

		let user = await User.findOne({ email });

		if (!user) {
			return res.status(400).json({
				success: false,
				message: "User not found",
			});
		}

		const payload = {
			id: user._id,
			email: user.email,
			role: user.role,
		};

		if (await bcrypt.compare(password, user.password)) {
			let token = jwt.sign(payload, process.env.JWT_SECRET, {
				expiresIn: "2h",
			});

            user = user.toObject()
			user.token = token;
            delete user.password
            
            const options = {
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly : true
            }

            res.cookie("token", token, options).status(200).json({
                success: true,
                token: token,
                user,
                message: "Logged in successfully"
			});
			
			

		} else {
			return res.status(400).json({
				success: false,
				message: "Incorrect password",
			});
		}
    } catch (error) {
        res.status(500).json({
            success: false,
            data: error,
            message: "Server error"
        })
    }
};
