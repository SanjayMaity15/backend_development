import Post from "../models/post.model.js";

export const getPost = async (req, res) => {
  try {
    const result = await Post.find({});

    res.status(200).json({
      success: true,
      data: result,
      message: "All Post fetch successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: error,
      message: "Internal server error",
    });
  }
};

export const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Post.findById({ _id: id });

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }

    res.status(200).json({
      success: true,
      data: result,
      message: "Post get successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: error,
      message: "Internal server error",
    });
  }
};
