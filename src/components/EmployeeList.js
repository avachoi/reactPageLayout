import React from "react";
import EmployeeListItem from "./EmployeeListItem.js";

function EmployeeList() {
	let data = [
		{
			img: "login.png",
			name: "james King",
			title: "President",
		},
		{
			img: "login.png",
			name: "Julia Taylor",
			title: "VP",
		},
		{
			img: "login.png",
			name: "Eugene Lee",
			title: "CFO",
		},
		{
			img: "login.png",
			name: "John Williams",
			title: "Engineer",
		},
		{
			img: "login.png",
			name: "Ray Moore",
			title: "VP of Sales",
		},
	];
	console.log("Data array:", data);
	return (
		<div className="employList">
			{data.map((emp) => (
				<EmployeeListItem employee={emp} />
			))}
		</div>
	);
}

export default EmployeeList;
