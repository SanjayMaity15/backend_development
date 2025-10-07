import jwt from "jsonwebtoken"

export const authentication = async (req, res, next) => {
	try {
        const { token } = req.cookies;
        

		if (!token) {
			return res.status(404).json({
				success: false,
				message: "Token Missing",
			});
		}

		try {
			const decode = jwt.verify(token, process.env.JWT_SECRET);
			console.log(decode);

			req.user = decode;
			next();
		} catch (error) {
			res.status(401).json({
				success: false,
				message: "Invalid token",
			});
		}
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Authentication failed"
        })
    }
};
