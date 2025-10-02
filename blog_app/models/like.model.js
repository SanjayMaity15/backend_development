import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
    likeOnPost: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    },
    likedBy: {
        type: String,
        required: true
    }
}, { timestamps: true })

const Like = mongoose.model("Like", likeSchema)

export default Like