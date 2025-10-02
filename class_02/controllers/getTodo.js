import Todo from "../models/todo.model.js";

export const getTodo = async (req, res) => {
    try {
        const result = await Todo.find({})

        res.status(200).json({
            success: true,
            data: result,
            message: "Get entire todo is successfull"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Getting data unsuccessful"
        })
    }
}


// get single element based on Id

export const getElemByID = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Todo.findById({ _id: id })
        
        if (!result) {
            return res.status(404).json({
                success:false,
                message:"Item not found"
            })
        }

        res.status(200).json({
            success: true,
            data: result,
            message: "Item found successfully"
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            data: error,
            message: "Internal server error"
        })
    }
}