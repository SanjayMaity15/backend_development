import express from "express"
import { createTodo, deleteTodo, getTodos, updateTodo } from "../controllers/todo-controller.js"
import { authentication } from "../middleware/auth.js"

const router = express.Router()

router.post("/create", authentication, createTodo)
router.get("/get", authentication, getTodos)
router.delete("/delete/:id", authentication, deleteTodo)
router.put("/update/:id", authentication, updateTodo)

export default router