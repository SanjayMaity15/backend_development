import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    tags: {
        type: String
    },
    imageUrl: {
        type: String
    }

}, { timestamps: true })


const File = mongoose.model("File", fileSchema)

export default File