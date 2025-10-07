import express from "express"
import { createTodo, getTodos } from "../controllers/todo-controller.js"
import { authentication } from "../middleware/auth.js"

const router = express.Router()

router.post("/create", authentication, createTodo)
router.get("/get", authentication, getTodos)

export default router