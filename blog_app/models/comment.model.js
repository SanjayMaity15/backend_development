import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: true
    },
    commentOnPost: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }
}, { timestamps: true })

const Comment = mongoose.model("Comment", commentSchema)
export default Comment