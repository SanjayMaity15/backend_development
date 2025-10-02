import Post from "../models/post.model.js";

export const createPost = async (req, res) => {
    try {
        const { title, description } = req.body;

        const result = await Post.create({ title, description });

        res.status(201).json({
            success: true,
            data: result,
            message: "Post create successfully"
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            data: error,
            message: "Internal server error"
        })
    }
}