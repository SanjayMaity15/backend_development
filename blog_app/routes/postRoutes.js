import express from "express"
import { createPost } from "../controllers/postCreate.js"
import { getPost, getPostById } from "../controllers/postGet.js"
import { commentOnPost } from "../controllers/comment.js"
import { likeOnPost, unlikeOnPost } from "../controllers/like.js"

const router = express.Router()

router.post("/posts/create", createPost)
router.get("/posts", getPost)
router.get("/posts/:id", getPostById)
router.post("/comments/create", commentOnPost)
router.post("/likes/like", likeOnPost)
router.post("/likes/unlike", unlikeOnPost)


export default router