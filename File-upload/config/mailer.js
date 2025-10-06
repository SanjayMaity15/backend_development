// config/mailer.js
import nodemailer from "nodemailer";
import dotenv from "dotenv"
dotenv.config()

// Create the transporter
const transporter = nodemailer.createTransport({
	host: process.env.SMTP_HOST, // ✅ FIXED typo: SMPT → SMTP
	port: process.env.SMTP_PORT || 587, // ✅ recommended to include
	secure: false, // Set to true if using port 465
	auth: {
		user: process.env.SMTP_USER,
		pass: process.env.SMTP_PASS,
	},
});

export default transporter;
