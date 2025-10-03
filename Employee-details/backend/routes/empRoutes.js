import express from "express"
import { createEmp, getEmp } from "../controllers/emp.js"

const router = express.Router()

router.post("/create", createEmp)
router.get("/get", getEmp)

export default router