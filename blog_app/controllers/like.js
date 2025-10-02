import Like from "../models/like.model.js";
import Post from "../models/post.model.js";

export const likeOnPost = async (req, res) => {
  try {
    const { likeOnPost, likedBy } = req.body;

    const savedLike = await Like.create({ likeOnPost, likedBy });

    const updatedPost = await Post.findByIdAndUpdate(
      likeOnPost,
      { $push: { likes: savedLike._id } },
      { new: true }
    )
      .populate("likes")
      .exec();

    res.status(200).json({
      success: true,
      data: updatedPost,
      message: "like added",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: error,
      message: "Internal server error",
    });
  }
};

// unlike


export const unlikeOnPost = async (req, res) => {
  try {
    const { likeOnPost, likeId } = req.body;

    const deletedLike = await Like.findOneAndDelete({
        likeOnPost: likeOnPost,
        _id: likeId,
    });

      console.log(deletedLike);
      
      
    const updatedPost = await Post.findByIdAndUpdate(
      likeOnPost,
      { $pull: { likes: deletedLike._id } },
      { new: true }
    );

    res.status(200).json({
      success: true,
      data: updatedPost,
      message: "unlike successfull",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: error,
      message: "Internal server error",
    });
  }
};
