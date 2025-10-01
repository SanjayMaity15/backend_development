import Todo from "../models/todo.model.js";

export const createTodo = async (req, res) => {
    try {
        const { title, description } = req.body
        const result =await Todo.create({ title, description })
        
        res.status(201).json({
            status: true,
            message: "Data is added to DB",
            data: result.data
        })
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error
        })
        console.log(error);
        
    }
}

