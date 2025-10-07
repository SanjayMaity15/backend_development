import Todo from "../models/todo.model.js";

// create todo

export const createTodo = async (req, res) => {
	try {
		const { task, complete } = req.body;

		if (!task || !task.trim()) {
			return res.status(400).json({
				success: false,
				message: "Task field cannot be empty",
			});
		}

		// Use userId consistently
		const result = await Todo.create({
			task,
			complete: complete || false,
			userId: req.user.id,
		});

		return res.status(200).json({
			success: true,
			result,
			message: "Task added successfully",
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			error: error.message,
			message: "Todo add error",
		});
	}
};

// fetch all todos
export const getTodos = async (req, res) => {
	try {
		const todos = await Todo.find({ userId: req.user.id });

		res.status(200).json({
			success: true,
			todos,
			message: "Data fetched successfully",
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			error: error.message,
			message: "Data fetch error",
		});
	}
};

export const deleteTodo = async (req, res) => {
	try {
		const todoId = req.params.id;

		// Only allow deleting todo that belongs to the logged-in user
		const todo = await Todo.findOneAndDelete({
			_id: todoId,
			userId: req.user.id, // 🛡️ Ensures user can only delete their own todos
		});

		if (!todo) {
			return res.status(404).json({
				success: false,
				message: "Todo not found or unauthorized",
			});
		}

		return res.status(200).json({
			success: true,
			message: "Todo deleted successfully",
		});
	} catch (error) {
		console.error("Delete error:", error);
		res.status(500).json({
			success: false,
			message: "Failed to delete todo",
		});
	}
};


export const updateTodo = async (req, res) => {
	try {
		const todoId = req.params.id;
		const { complete } = req.body;

		const todo = await Todo.findOneAndUpdate({
			_id: todoId,
			userId: req.user.id, // 🛡️ Ensures user can only delete their own todos
		}, { complete }, { new: true });
		
		res.status(200).json({
			success: true,
			todo,
			message: "Update successfully"
		})


	} catch (error) {
		res.status(500).json({
			success: false,
			error,
			message: "update error"
		})
	}
};
