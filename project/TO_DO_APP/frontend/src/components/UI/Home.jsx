import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import axios from "axios";
import { serverUrl } from "../../App";

const Home = () => {
    const { todos, setTodos } = useContext(UserContext);

    const getAllTodos = async () => {
        try {
            const response = await axios.get(`${serverUrl}/todo/get`, { withCredentials: true })
            // console.log(response.data.todos[0].task);
            // console.log(response);
            
            setTodos(response.data.todos);
            
            
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(() => {
        getAllTodos()
    }, [])
    
    // console.log("TOdo",todos);
    
	return (
		<ul>
			{todos && todos.map((item, index) => {
				return (
					<li key={index}>
						<p>{item.task}</p>
					</li>
				);
			})}
		</ul>
	);
};

export default Home;
