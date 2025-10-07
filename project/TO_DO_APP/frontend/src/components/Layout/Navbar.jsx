import axios from "axios";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { serverUrl } from "../../App";
import { UserContext } from "../../context/UserContext";

import { useNavigate } from "react-router-dom";
const Navbar = () => {
    const navigate = useNavigate();
	const handleLogout = async () => {

		try {
			await axios.get(`${serverUrl}/auth/logout`, {
				withCredentials: true,
			});
			alert("Logout successfully");
			navigate("/login"); // ✅ redirect to login page
		} catch (error) {
			console.error("Logout failed:", error);
			alert("Logout failed");
		}
	};

	const { user } = useContext(UserContext);
	console.log(user);

	const profilePic = user?.username.split("")[0];

	return (
		<nav className="bg-purple-700 text-white shadow-md">
			<div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
				{/* Brand */}
				<NavLink
					to="/"
					className="text-2xl font-bold tracking-wide hover:text-purple-200"
				>
					TODO-APP
				</NavLink>

				{/* Navigation Links */}
				<div className="flex gap-6">
					<NavLink
						to="/"
						className={({ isActive }) =>
							`hover:text-purple-300 transition ${
								isActive ? "font-semibold underline" : ""
							}`
						}
					>
						Home
					</NavLink>

					<NavLink
						to="/add-task"
						className={({ isActive }) =>
							`hover:text-purple-300 transition ${
								isActive ? "font-semibold underline" : ""
							}`
						}
					>
						AddTask
					</NavLink>

					<NavLink
						to="/login"
						className={({ isActive }) =>
							`hover:text-purple-300 transition ${
								isActive ? "font-semibold underline" : ""
							}`
						}
					>
						Login
					</NavLink>
					<NavLink
						onClick={handleLogout}
						to="/"
						className={({ isActive }) =>
							`hover:text-purple-300 transition ${
								isActive ? "font-semibold underline" : ""
							}`
						}
					>
						Logout
					</NavLink>
					<button>{profilePic}</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
