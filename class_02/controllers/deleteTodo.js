import Todo from "../models/todo.model.js";

export const deleteTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Todo.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      data: result,
      message: "Item deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: error,
      message: "Internal server error",
    });
  }
};
