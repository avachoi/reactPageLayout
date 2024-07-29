import React from "react";
import Header from "./Header.js";

function EmployeePage() {
	return (
		<div className="employeePage">
			<Header />
			<div className="itemContent profileTop">
				<img className="profileImg" src="face.png" alt="person" />
				<div className="text">
					<h2>Julia taylor</h2>
					<p>VP of Marketing</p>
				</div>
			</div>
			<div className="section">
				<div className="left">
					<h4>Call Office</h4>
					<p>000-000-0000</p>
				</div>
				<div className="right">
					<img src="newFile.png" alt="arrow" className="arrow" />
				</div>
			</div>
			<div className="section">
				<div className="left">
					<h4>Call Mobile</h4>
					<p>000-000-0000</p>
				</div>
				<div className="right">
					<img src="newFile.png" alt="arrow" className="arrow" />
				</div>
			</div>
			<div className="section">
				<div className="left">
					<h4>SMS</h4>
					<p>000-000-0000</p>
				</div>
				<div className="right">
					<img src="newFile.png" alt="arrow" className="arrow" />
				</div>
			</div>
			<div className="section">
				<div className="left">
					<h4>Email</h4>
					<p>julia@email.com</p>
				</div>
				<div className="right">
					<img src="newFile.png" alt="arrow" className="arrow" />
				</div>
			</div>
		</div>
	);
}

export default EmployeePage;
