import Todo from "../models/todo.model.js";

export const updateTodo = async (req, res) => {
    try {
        const id = req.params.id;
        const {title, description} = req.body
        const result = await Todo.findByIdAndUpdate({ _id: id }, { title, description })
        
        res.status(200).json({
            success: true,
            data: result,
            message: "updated successfully"
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            data: error,
            message: "Update failed"
        })
    }
}