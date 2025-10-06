import transpoter from "../config/mailer.js";
import dotenv from "dotenv"
dotenv.config()
export const sendMailToUser = async (to, name, subject, url) => {
	try {
		let info = await transpoter.sendMail({
			from: process.env.USER,
			to: to,
			subject: subject,
			html: `
                    <h3>Hello,${name}</h3>
                    <p>File uploaded successfully view : <a href="${url}">${url}</a></p>
                `,
		});
	} catch (error) {console.log(error);
    }
};

