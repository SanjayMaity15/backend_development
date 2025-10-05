import express from "express"
import { login, signUp } from "../controllers/auth-service.js"
import { isAdmin, isAuth, isStudent } from "../middleware/auth-middleware.js"

const router = express.Router()

router.post("/signup", signUp)
router.post("/login", login)

router.get("/student", isAuth, isStudent, (req, res) => {
    res.send("Welcome to protected routes for Student")
})

router.get("/admin", isAuth, isAdmin, (req, res) => {
    res.send("Welcome to protected routes for Admin")
})

export default router