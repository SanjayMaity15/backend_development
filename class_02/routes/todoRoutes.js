import express from "express"
import { createTodo } from "../controllers/createTodo.js"
import { getElemByID, getTodo } from "../controllers/getTodo.js"
import { deleteTodo } from "../controllers/deleteTodo.js"
import { updateTodo } from "../controllers/updateTodo.js"

const router = express.Router()

router.post("/create", createTodo)
router.get("/get", getTodo)
router.get("/get/:id", getElemByID)
router.delete("/delete/:id", deleteTodo)
router.put("/update/:id", updateTodo)


export default router