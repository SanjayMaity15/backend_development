import axios from "axios";
import React, { useContext, useState } from "react";
import { serverUrl } from "../../App";


const AddTask = () => {
    const [task, setTask] = useState("");
    const [complete, setComplete] = useState(false)
    

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
            const response = await axios.post(`${serverUrl}/todo/create`, { task, complete }, { withCredentials: true })
            alert("Task added successfully")
            
            
            
            setTask('')
        } catch (error) {
            console.log(error);
            
        }
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-purple-100 px-4">
			<div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
				<h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">
					Add New Task
				</h2>

				<form onSubmit={handleSubmit} className="flex gap-3">
					<input
						type="text"
						placeholder="Enter your task..."
						value={task}
						onChange={(e) => setTask(e.target.value)}
						className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
					/>
					<button
						type="submit"
						className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition"
					>
						Add
					</button>
				</form>
			</div>
		</div>
	);
};

export default AddTask;
