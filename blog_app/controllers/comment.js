import Comment from "../models/comment.model.js";
import Post from "../models/post.model.js";

export const commentOnPost = async (req, res) => {
  try {
    const { comment, commentOnPost, commentBy } = req.body;

    const createComment = await Comment.create({
      comment,
      commentOnPost,
      commentBy,
    });

    // update the post

    const updatedPost = await Post.findByIdAndUpdate(
      commentOnPost,
      { $push: { comments: createComment._id } },
      { new: true }
    )
      .populate("comments")
      .exec();

    res.status(200).json({
      success: true,
      data: updatedPost,
      message: "Comment created successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: error,
      message: "Internal server error",
    });
  }
};
