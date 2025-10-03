import Emp from "../model/emp.model.js";

export const createEmp = async (req, res) => {
    try {
        const { empName, empAge, empDesignation } = req.body;
        const result = await Emp.create({ empName, empAge, empDesignation })
        
        res.status(201).json({
            success: true,
            data: result,
            message: "Entry created successfully"
        })

    } catch (error) {
        res.status(500).json({
            "success": false,
            data: error,
            message: "Internal server error"

        })
    }
}



export const getEmp = async (req, res) => {
    try {
        const result = await Emp.find({})

        res.status(200).json({
            success: true,
            data: result,
            message : "Data fetch successfull"
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            data: error,
            message: "Data fetch error"
        })
    }
}