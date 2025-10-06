import express from "express"
import { localFileUpload } from "../controllers/localFileUpload.js"

const router = express.Router()

router.post("/localfileupload", localFileUpload)


export default router