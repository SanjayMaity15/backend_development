import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import axios from "axios";
import { serverUrl } from "../../App";

const Home = () => {
	const { todos, setTodos } = useContext(UserContext);
    
	const getAllTodos = async () => {
		try {
			const response = await axios.get(`${serverUrl}/todo/get`, {
				withCredentials: true,
			});
			// console.log(response.data.todos[0].task);
			// console.log(response);

			setTodos(response.data.todos);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getAllTodos();
	}, []);

	const handleDelete = async (id) => {
		try {
            const result = await axios.delete(`${serverUrl}/todo/delete/${id}`, { withCredentials: true });
            getAllTodos()
			alert("Delete successfully");
		} catch (error) {
			console.log("Error in delete todo");
		}
    };
    
    const handleToggleComplete = async (id, currComplete) => {
        
        try {
            const result = await axios.put(`${serverUrl}/todo/update/${id}`,{complete: !currComplete} ,{ withCredentials: true })
            getAllTodos()
            alert("Todo update successfully")
        } catch (error) {
            console.log("Error in update");
            
        }
    }

	return (
		<ul className="space-y-3">
			{todos &&
				todos.map((item, index) => (
					<li
						key={index}
						className="flex items-center justify-between bg-white rounded shadow p-4"
					>
						<div className="flex items-center space-x-3">
							<input
								type="checkbox"
								checked={item.complete}
								onChange={() => handleToggleComplete(item._id, item.complete)}
								className="w-5 h-5 text-blue-600"
							/>
							<p
								className={`text-lg ${
									item.complete
										? "line-through text-gray-400"
										: ""
								}`}
							>
								{item.task}
							</p>
						</div>
						<button
							onClick={() => handleDelete(item._id)}
							className="text-red-500 hover:text-red-700 transition"
						>
							Delete
						</button>
					</li>
				))}
		</ul>
	);
};

export default Home;
