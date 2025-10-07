import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
	{
		task: {
			type: String,
			required: true,
		},
		userId: {
			// ✅ clear and correct
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		complete: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);


const Todo = mongoose.model("Todo", todoSchema);
export default Todo