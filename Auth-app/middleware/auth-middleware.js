import jwt from "jsonwebtoken"

export const isAuth = (req, res, next) => {
    try {


        // console.log("Body Token : " + req.body.token);
        // console.log("\n\nCookie Token : "+  req.cookies.token);
        // console.log("\n\nHeader Token : "+ req.header("Authorization").replace("Bearer ", ""));
        

        const token = req.cookies.token || req.body.token || req.header("Authorization").replace("Bearer ", "");

        
        
        if (!token) {
            return res.status(401).json({
                success: false,
                message : "Token Missing"
            })
        }

        try {
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            console.log(decode);

            req.user = decode;
            next()
            
        } catch (error) {
            res.status(401).json({
                success: false,
                message: "Invalid token"
            })
        }

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error while verifying the token"
        })
    }
}



export const isStudent = (req, res, next) => {
    try {
        const { role } = req.user;

        if (role !== "student") {
            return res.status(400).json({
                success: false,
                message: "This is protected route for student"
            })
        }

        next()
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "This is protected route only for student"
        })
    }
}




export const isAdmin = (req, res, next) => {
    try {
        const { role } = req.user;

        if (role !== "admin") {
            return res.status(400).json({
                success: false,
                message: "This is protected route for admin"
            })
        }
        next()
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "This is protected route only for admin"
        })
    }
}
