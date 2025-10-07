import React from "react";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/Layout/AppLayout";
import Home from "./components/UI/Home";
import AddTask from "./components/UI/AddTask";
import Login from "./components/UI/Login";
import ErrorPage from "./components/UI/ErrorPage";
import Signup from "./components/UI/SignUp";
export const serverUrl = "http://localhost:5000"

const App = () => {
	return (
		<Routes>
			{/* AppLayout is the layout wrapper for all nested routes */}
			<Route path="/" element={<AppLayout />}>
				{/* index means default route when path is exactly '/' */}
				<Route index element={<Home />} />
				<Route path="/add-task" element={<AddTask />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				{/* Catch-all for 404 errors */}
				<Route path="*" element={<ErrorPage />} />
			</Route>
		</Routes>
	);
};

export default App;
