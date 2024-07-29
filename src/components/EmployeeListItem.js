import React from "react";

function EmployeeListItem({ employee }) {
	console.log("employee", employee);
	return (
		<div className="employListItem">
			{employee ? (
				<div className="itemContent">
					<img className="listImg" src={employee.img} alt="person" />
					<div className="text">
						<h3>{employee.name}</h3>
						<p>{employee.title}</p>
					</div>
				</div>
			) : (
				<p>Loading</p>
			)}
		</div>
	);
}

export default EmployeeListItem;
