import express from "express"
import { localFileUpload } from "../controllers/localFileUpload.js"
import { imageUpload, imageUploadResize, videoUpload } from "../controllers/cloudinary-upload.js"

const router = express.Router()

router.post("/localfileupload", localFileUpload)
router.post("/imageupload", imageUpload)
router.post("/videoupload", videoUpload)
router.post("/imageuploadresize", imageUploadResize)


export default router