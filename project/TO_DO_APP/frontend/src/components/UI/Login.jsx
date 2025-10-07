

import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link for navigation
import { serverUrl } from "../../App";
import { UserContext } from "../../context/UserContext";

const Login = () => {
    const {setUser} = useContext(UserContext)
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const handleChange = (e) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};


    const navigate = useNavigate()

	const handleSubmit = async (e) => {
		e.preventDefault();
		
        try {
            const response = await axios.post(`${serverUrl}/auth/login`, formData, { withCredentials: true })
            
            
            setUser(response.data.user)
            alert("Login successfully")
            setFormData({
                email: '',
                password: ''
            })
            navigate('/')
            
        } catch (error) {
            console.log(error);
            
        }

		
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-purple-100 px-4">
			<div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
				<h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">
					Login
				</h2>

				<form onSubmit={handleSubmit} className="space-y-5">
					{/* Email */}
					<div>
						<label className="block mb-1 text-sm font-medium text-gray-700">
							Email
						</label>
						<input
							type="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							placeholder="you@example.com"
							className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
							required
						/>
					</div>

					{/* Password */}
					<div>
						<label className="block mb-1 text-sm font-medium text-gray-700">
							Password
						</label>
						<input
							type="password"
							name="password"
							value={formData.password}
							onChange={handleChange}
							placeholder="••••••••"
							className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
							required
						/>
					</div>

					{/* Submit Button */}
					<button
						type="submit"
						className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md transition"
					>
						Login
					</button>
				</form>

	

				{/* Don't have an account? */}
				<p className="mt-6 text-center text-sm text-gray-600">
					Don't have an account?{" "}
					<Link
						to="/signup"
						className="text-purple-600 hover:underline font-medium"
					>
						Create one
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Login;
