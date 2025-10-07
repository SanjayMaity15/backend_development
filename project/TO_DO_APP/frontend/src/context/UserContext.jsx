import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
	const [user, setUser] = useState(null);
    const [todos, setTodos] = useState([])
	return (
		<UserContext.Provider value={{ user, setUser, todos, setTodos }}>
			{children}
		</UserContext.Provider>
	);
};
