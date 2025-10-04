import axios from "axios";
import React, { useState } from "react";

const EmpForm = () => {
	const [emp, setEmp] = useState({
		empName: "",
		empAge: "",
		empDesignation: "",
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setEmp((prev) => ({ ...prev, [name]: value }));
	};

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		try {
			console.log(emp);
			const response = await axios.post(
				"http://localhost:4000/api/create",
				emp
			);

			alert("Data added successfully");

			setEmp({ empName: "", empAge: "", empDesignation: "" });
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="max-w-2xl mx-auto border p-12">
			<h2 className="text-3xl font-semibold text-center my-6">
				Employee details form
			</h2>

			<form
				className="flex flex-col items-start pl-16 gap-4"
				onSubmit={handleFormSubmit}
			>
				<div>
					<label htmlFor="empname">Employee Name : </label>
					<input
						type="text"
						name="empName"
						id="empname"
						className="border-none outline-none focus:border-none focus:outline-none ring-1 ring-indigo-500 focus:ring-1 focus:ring-indigo-500"
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<label htmlFor="empage">Employee Age : </label>
					<input
						type="text"
						name="empAge"
						id="empage"
						className="border-none outline-none focus:border-none focus:outline-none ring-1 ring-indigo-500 focus:ring-1 focus:ring-indigo-500"
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<label htmlFor="empdesignation">
						Employee Designation :{" "}
					</label>
					<input
						type="text"
						name="empDesignation"
						id="empdesignation"
						className="border-none outline-none focus:border-none focus:outline-none ring-1 ring-indigo-500 focus:ring-1 focus:ring-indigo-500"
						onChange={handleInputChange}
					/>
				</div>

				<button
					type="submit"
					className="bg-indigo-500 px-4 py-1 rounded-2xl text-white"
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default EmpForm;
